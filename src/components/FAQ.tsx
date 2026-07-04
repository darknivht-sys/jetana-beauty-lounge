import { useEffect, useRef, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    q: "Do I need to book an appointment in advance?",
    a: "While walk-ins are always welcome, we strongly recommend booking in advance to secure your preferred date and time, especially for weekends and bridal packages. You can book via WhatsApp, phone, or our online form.",
  },
  {
    q: "What services do you offer for brides?",
    a: "We offer comprehensive bridal packages including hair styling, makeup artistry, manicure, pedicure, facial treatments, and full spa pampering. Our bridal team will work closely with you to create your perfect look for the big day.",
  },
  {
    q: "What brands and products do you use?",
    a: "Jetana Beauty Lounge exclusively uses premium international beauty and grooming products. We partner with leading global brands to ensure the highest quality results and the safest possible care for your hair, skin, and nails.",
  },
  {
    q: "How long do services typically take?",
    a: "Service duration varies: haircuts (30–60 mins), hair coloring (2–4 hrs), braiding (2–6 hrs), manicure/pedicure (45–90 mins), facials (45–75 mins), spa treatments (60–120 mins). Our team will provide a time estimate when you book.",
  },
  {
    q: "Do you offer services for men?",
    a: "Absolutely. Our professional barbering suite offers precision fades, classic cuts, beard sculpting, hot towel shaves, and grooming packages tailored specifically for men. Our barbers are consistently praised as some of the best in Abuja.",
  },
  {
    q: "What are your opening hours?",
    a: "We are open daily — every day of the week, including public holidays — and we close at 12:00 AM midnight. We're here whenever you need us.",
  },
  {
    q: "Where exactly are you located?",
    a: "We are at 4 Kolda Link Street, Off Adetokunbo Ademola Crescent, Off Nitel Junction, Wuse, Abuja. The building has our gold Jetana Beauty Lounge sign clearly visible. Free parking is available.",
  },
  {
    q: "Can I reschedule or cancel my appointment?",
    a: "Yes, we understand that plans change. Please contact us via WhatsApp or phone at least 3 hours before your scheduled appointment to reschedule or cancel. We'll do our best to accommodate you.",
  },
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

export function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null!)
  const visible = useIntersection(sectionRef)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" ref={sectionRef} className="py-28 lg:py-36 bg-[var(--beige)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#C9A227]/6 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A227]" />
            <span
              className="text-[#C9A227] text-xs tracking-[0.4em] uppercase"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
            >
              FAQ
            </span>
            <div className="w-8 h-px bg-[#C9A227]" />
          </div>
          <h2
            className="text-4xl lg:text-5xl font-light text-[#111] leading-[1.1]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Frequently Asked
            <br />
            <em className="italic text-[#C9A227]">Questions</em>
          </h2>
        </div>

        {/* FAQ items */}
        <div
          className={`space-y-3 transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === i ? "border-[#C9A227]/40 shadow-sm" : "border-[#E8E2D9]"
              }`}
            >
              <button
                className="w-full text-left flex items-center justify-between px-7 py-5 gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span
                  className={`text-base font-light transition-colors ${openIndex === i ? "text-[#C9A227]" : "text-[#111]"}`}
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}
                >
                  {faq.q}
                </span>
                <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === i ? "bg-[#C9A227] text-[#111]" : "bg-[#F2EDE4] text-[#6B6560]"}`}>
                  {openIndex === i ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-48" : "max-h-0"}`}
              >
                <p
                  className="px-7 pb-5 text-[#6B6560] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div
          className={`mt-12 text-center transition-all duration-1000 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="text-[#6B6560] mb-4"
            style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
          >
            Still have questions?
          </p>
          <a
            href="https://wa.me/2348055552273?text=Hello%20Jetana%20Beauty%20Lounge!%20I%20have%20a%20question."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#111] text-white text-sm tracking-wider px-8 py-3.5 rounded-full hover:bg-[#C9A227] hover:text-[#111] transition-all duration-300"
            style={{ fontFamily: "var(--font-jost)" }}
          >
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
