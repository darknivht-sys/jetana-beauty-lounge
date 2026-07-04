import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, MessageCircle, Phone, Loader2 } from "lucide-react"

const WHATSAPP_NUMBER = "2348055552273"

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  date: z.string().min(1, "Please select a preferred date"),
  time: z.string().min(1, "Please select a preferred time"),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

const services = [
  "Luxury Hair Styling",
  "Hair Treatments",
  "Braiding & Weaves",
  "Hair Coloring",
  "Professional Barbering",
  "Manicure",
  "Pedicure",
  "Facials",
  "Spa Treatments",
  "Makeup",
  "Bridal Package",
  "Other / Consultation",
]

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM",
]

function useIntersection(ref: React.RefObject<Element>, threshold = 0.1) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [ref, threshold])
  return visible
}

export function Booking() {
  const sectionRef = useRef<HTMLDivElement>(null!)
  const visible = useIntersection(sectionRef)
  const [submitted, setSubmitted] = useState(false)
  const [serviceValue, setServiceValue] = useState("")
  const [timeValue, setTimeValue] = useState("")

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, setValue } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 1200))
    // Build WhatsApp message
    const msg = encodeURIComponent(
      `Hello Jetana Beauty Lounge! I'd like to book an appointment.\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email || "N/A"}\nService: ${data.service}\nDate: ${data.date}\nTime: ${data.time}${data.message ? `\nMessage: ${data.message}` : ""}`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank")
    setSubmitted(true)
    reset()
    setServiceValue("")
    setTimeValue("")
  }

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hello Jetana Beauty Lounge! I'd like to book an appointment.")
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank")
  }

  return (
    <section id="booking" ref={sectionRef} className="py-28 lg:py-40 bg-[#111] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <img
          src="/gallery-spa.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#111] via-[#111]/95 to-[#1a1508]" />
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-[#C9A227]/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A227]" />
            <span
              className="text-[#C9A227] text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
            >
              Book Appointment
            </span>
            <div className="w-8 h-px bg-[#C9A227]" />
          </div>
          <h2
            className="text-4xl lg:text-6xl font-light text-white leading-[1.1] mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Reserve Your
            <br />
            <em className="italic text-[#C9A227]">Luxury Experience</em>
          </h2>
          <p
            className="text-white/50 max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
          >
            Complete the form below and we'll confirm your appointment via WhatsApp, or call us directly.
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-5 gap-10 transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Left sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick contact */}
            <div className="p-6 rounded-2xl border border-[#C9A227]/20 bg-white/3">
              <h3
                className="text-xl font-light text-white mb-5"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Quick Contact
              </h3>
              <div className="space-y-4">
                <button
                  onClick={handleWhatsApp}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors text-left group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <div
                      className="text-white text-sm font-medium"
                      style={{ fontFamily: "var(--font-jost)" }}
                    >
                      Book via WhatsApp
                    </div>
                    <div
                      className="text-white/40 text-xs mt-0.5"
                      style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                    >
                      Instant response
                    </div>
                  </div>
                  <span className="ml-auto text-[#25D366] text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>

                <a
                  href="tel:+2348055552273"
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/30 hover:bg-[#C9A227]/20 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#C9A227]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <div
                      className="text-white text-sm font-medium"
                      style={{ fontFamily: "var(--font-jost)" }}
                    >
                      +234 805 555 2273
                    </div>
                    <div
                      className="text-white/40 text-xs mt-0.5"
                      style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                    >
                      Call or WhatsApp
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Opening hours */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/3">
              <h3
                className="text-xl font-light text-white mb-5"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Opening Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-white/8">
                  <span className="text-white/60 text-sm" style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}>Monday – Sunday</span>
                  <span className="text-[#C9A227] text-sm" style={{ fontFamily: "var(--font-jost)" }}>Open Daily</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-white/60 text-sm" style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}>Closing Time</span>
                  <span className="text-[#C9A227] text-sm" style={{ fontFamily: "var(--font-jost)" }}>12:00 AM</span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="text-[#25D366] text-xs tracking-wider" style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}>
                    Open Now
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking form */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl border border-white/10 bg-white/3">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#C9A227]/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#C9A227]" />
                  </div>
                  <h3
                    className="text-3xl font-light text-white mb-3"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    Request Sent!
                  </h3>
                  <p
                    className="text-white/50 text-sm mb-6"
                    style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                  >
                    Your WhatsApp booking has been opened. We look forward to seeing you at Jetana!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[#C9A227] text-sm hover:underline"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    Make another booking
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/60 text-xs tracking-wider uppercase mb-2" style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}>
                        Full Name *
                      </label>
                      <Input
                        {...register("name")}
                        placeholder="Your full name"
                        className="bg-white/5 border-white/15 text-white placeholder:text-white/25 focus:border-[#C9A227] rounded-xl h-12"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs tracking-wider uppercase mb-2" style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}>
                        Phone Number *
                      </label>
                      <Input
                        {...register("phone")}
                        placeholder="+234 ..."
                        className="bg-white/5 border-white/15 text-white placeholder:text-white/25 focus:border-[#C9A227] rounded-xl h-12"
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs tracking-wider uppercase mb-2" style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}>
                      Email Address
                    </label>
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="your@email.com (optional)"
                      className="bg-white/5 border-white/15 text-white placeholder:text-white/25 focus:border-[#C9A227] rounded-xl h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs tracking-wider uppercase mb-2" style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}>
                      Service *
                    </label>
                    <Select
                      value={serviceValue}
                      onValueChange={(v) => {
                        setServiceValue(v)
                        setValue("service", v, { shouldValidate: true })
                      }}
                    >
                      <SelectTrigger className="bg-white/5 border-white/15 text-white rounded-xl h-12 focus:border-[#C9A227]">
                        <SelectValue placeholder="Select a service..." />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/60 text-xs tracking-wider uppercase mb-2" style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}>
                        Preferred Date *
                      </label>
                      <Input
                        {...register("date")}
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        className="bg-white/5 border-white/15 text-white focus:border-[#C9A227] rounded-xl h-12 [color-scheme:dark]"
                      />
                      {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date.message}</p>}
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs tracking-wider uppercase mb-2" style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}>
                        Preferred Time *
                      </label>
                      <Select
                        value={timeValue}
                        onValueChange={(v) => {
                          setTimeValue(v)
                          setValue("time", v, { shouldValidate: true })
                        }}
                      >
                        <SelectTrigger className="bg-white/5 border-white/15 text-white rounded-xl h-12 focus:border-[#C9A227]">
                          <SelectValue placeholder="Select time..." />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((t) => (
                            <SelectItem key={t} value={t}>{t}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.time && <p className="text-red-400 text-xs mt-1">{errors.time.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs tracking-wider uppercase mb-2" style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}>
                      Additional Message
                    </label>
                    <Textarea
                      {...register("message")}
                      placeholder="Any special requests or questions..."
                      rows={3}
                      className="bg-white/5 border-white/15 text-white placeholder:text-white/25 focus:border-[#C9A227] rounded-xl resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gold-gradient text-[#111] font-semibold tracking-widest uppercase py-4 rounded-full shadow-lg hover:shadow-[#C9A227]/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:scale-100 flex items-center justify-center gap-2"
                    style={{ letterSpacing: "0.1em", fontFamily: "var(--font-jost)" }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-4 h-4" />
                        Book via WhatsApp
                      </>
                    )}
                  </button>

                  <p
                    className="text-white/30 text-xs text-center"
                    style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                  >
                    Your details will be sent via WhatsApp for instant confirmation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
