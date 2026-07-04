import { useEffect, useRef, useState } from "react"
import { Scissors, Sparkles, Palette, User, Hand, Flower2, Star, Wand2, HeartPulse, Crown } from "lucide-react"

const services = [
  {
    icon: Crown,
    title: "Luxury Hair Styling",
    desc: "From sleek blowouts to intricate updos — our master stylists craft looks that turn heads and boost confidence.",
    tag: "Most Popular",
  },
  {
    icon: Wand2,
    title: "Hair Treatments",
    desc: "Deep conditioning, keratin treatments, and scalp therapies that restore health and luminosity.",
    tag: null,
  },
  {
    icon: Sparkles,
    title: "Braiding & Weaves",
    desc: "Protective styles, knotless braids, Senegalese twists, and custom weave installations.",
    tag: null,
  },
  {
    icon: Palette,
    title: "Hair Coloring",
    desc: "Balayage, highlights, fashion colors, and full transformations using premium color lines.",
    tag: null,
  },
  {
    icon: Scissors,
    title: "Professional Barbering",
    desc: "Precision fades, classic cuts, beard sculpting, and hot towel shaves by expert barbers.",
    tag: "Top Rated",
  },
  {
    icon: Hand,
    title: "Manicure",
    desc: "Gel, acrylic, dip powder, nail art, and classic manicures using premium nail products.",
    tag: "5-Star Reviewed",
  },
  {
    icon: Flower2,
    title: "Pedicure",
    desc: "Luxurious pedicure treatments in our signature massage chairs — pure relaxation.",
    tag: null,
  },
  {
    icon: Star,
    title: "Facials",
    desc: "Customized facial treatments targeting hydration, anti-aging, brightening, and deep cleansing.",
    tag: null,
  },
  {
    icon: HeartPulse,
    title: "Spa Treatments",
    desc: "Full-body massages, body wraps, and therapeutic treatments for complete rejuvenation.",
    tag: "Signature",
  },
  {
    icon: User,
    title: "Makeup",
    desc: "Bridal, glam, and everyday makeup by certified artists using luxury cosmetic brands.",
    tag: null,
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

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null!)
  const visible = useIntersection(sectionRef)

  return (
    <section id="services" ref={sectionRef} className="py-28 lg:py-40 bg-[var(--cream)] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-[#C9A227]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-[#C9A227]/6 blur-3xl pointer-events-none" />

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
              Our Services
            </span>
            <div className="w-8 h-px bg-[#C9A227]" />
          </div>
          <h2
            className="text-4xl lg:text-6xl font-light text-[#111] leading-[1.1] mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Everything You Need
            <br />
            <em className="italic text-[#C9A227]">Under One Roof</em>
          </h2>
          <p
            className="text-[#6B6560] max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
          >
            From head to toe, our comprehensive menu of luxury beauty services ensures
            you leave looking and feeling your absolute best.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-[#E8E2D9] hover:border-[#C9A227]/40 transition-all duration-500 cursor-default ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 60}ms`, transitionDuration: "700ms" }}
            >
              {/* Tag */}
              {service.tag && (
                <div className="absolute -top-2.5 left-5">
                  <span className="gold-gradient text-[#111] text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
                    {service.tag}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[#C9A227]/10 group-hover:bg-[#C9A227]/20 flex items-center justify-center mb-5 transition-colors duration-300">
                <service.icon className="w-5 h-5 text-[#C9A227]" />
              </div>

              <h3
                className="text-xl font-light text-[#111] mb-2 group-hover:text-[#C9A227] transition-colors duration-300"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {service.title}
              </h3>

              <p
                className="text-[#6B6560] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
              >
                {service.desc}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-14 transition-all duration-1000 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <button
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-3 bg-[#111] text-white text-sm tracking-widest uppercase px-10 py-4 rounded-full hover:bg-[#C9A227] hover:text-[#111] transition-all duration-300 shadow-lg"
            style={{ fontFamily: "var(--font-jost)", fontWeight: 500, letterSpacing: "0.1em" }}
          >
            Book a Service
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] group-hover:bg-[#111]" />
          </button>
        </div>
      </div>
    </section>
  )
}
