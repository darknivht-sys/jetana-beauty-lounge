import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react"

const MAP_QUERY = encodeURIComponent("Jetana Beauty Lounge, Wuse, Abuja, Nigeria")

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

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null!)
  const visible = useIntersection(sectionRef)

  return (
    <section id="contact" ref={sectionRef} className="py-28 lg:py-36 bg-[#111] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A227]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
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
              Find Us
            </span>
            <div className="w-8 h-px bg-[#C9A227]" />
          </div>
          <h2
            className="text-4xl lg:text-5xl font-light text-white leading-[1.1]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Visit Our
            <br />
            <em className="italic text-[#C9A227]">Luxury Lounge</em>
          </h2>
        </div>

        <div
          className={`grid lg:grid-cols-5 gap-8 transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Info cards */}
          <div className="lg:col-span-2 space-y-5">
            <div className="p-6 rounded-2xl border border-white/10 bg-white/3">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#C9A227]/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4.5 h-4.5 text-[#C9A227]" />
                </div>
                <div>
                  <h3
                    className="text-white font-light mb-2"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}
                  >
                    Our Address
                  </h3>
                  <p
                    className="text-white/50 text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                  >
                    4 Kolda Link Street,<br />
                    Off Adetokunbo Ademola Crescent,<br />
                    Off Nitel Junction, Wuse,<br />
                    Abuja, Nigeria
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${MAP_QUERY}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#C9A227] text-xs mt-3 hover:underline"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    Get Directions
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/3">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#C9A227]/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4.5 h-4.5 text-[#C9A227]" />
                </div>
                <div>
                  <h3
                    className="text-white font-light mb-2"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}
                  >
                    Phone & WhatsApp
                  </h3>
                  <a
                    href="tel:+2348055552273"
                    className="text-white/70 text-sm hover:text-[#C9A227] transition-colors block"
                    style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                  >
                    +234 805 555 2273
                  </a>
                  <a
                    href="https://wa.me/2348055552273"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#25D366] text-xs mt-2 hover:underline"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    Message on WhatsApp
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/3">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#C9A227]/15 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4.5 h-4.5 text-[#C9A227]" />
                </div>
                <div>
                  <h3
                    className="text-white font-light mb-2"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem" }}
                  >
                    Hours
                  </h3>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-white/50 text-sm" style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}>Every Day</span>
                      <span className="text-[#C9A227] text-sm" style={{ fontFamily: "var(--font-jost)" }}>Open</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50 text-sm" style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}>Closes at</span>
                      <span className="text-[#C9A227] text-sm" style={{ fontFamily: "var(--font-jost)" }}>12:00 AM</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                      <span className="text-[#25D366] text-xs" style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}>Open Now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/10 min-h-[400px] relative">
            <iframe
              src={`https://maps.google.com/maps?q=${MAP_QUERY}&output=embed&z=16`}
              width="100%"
              height="100%"
              className="w-full h-full min-h-[400px]"
              loading="lazy"
              title="Jetana Beauty Lounge Location"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ filter: "grayscale(20%) contrast(1.1)" }}
            />
            {/* Map overlay CTA */}
            <a
              href={`https://maps.google.com/?q=${MAP_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 flex items-center gap-2 glass-dark border border-[#C9A227]/30 px-4 py-2.5 rounded-xl hover:border-[#C9A227]/60 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#C9A227]" />
              <span className="text-white text-xs tracking-wider" style={{ fontFamily: "var(--font-jost)" }}>
                Open in Google Maps
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
