import { useEffect, useRef, useState } from "react"
import { CheckCircle2, Award, Heart, Shield, Users, Star } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Expert Professionals",
    desc: "Our team of certified stylists, barbers, and beauty specialists bring years of premium experience.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    desc: "Every client receives a bespoke experience tailored to their unique needs and preferences.",
  },
  {
    icon: Shield,
    title: "Premium Products",
    desc: "We use only the finest international beauty and wellness products for every service.",
  },
  {
    icon: Users,
    title: "Trusted by Hundreds",
    desc: "Over 2,000 satisfied clients trust Jetana for their beauty and grooming needs.",
  },
  {
    icon: CheckCircle2,
    title: "Pristine Environment",
    desc: "Our lounge is meticulously maintained to the highest standards of cleanliness and luxury.",
  },
  {
    icon: Star,
    title: "5-Star Experience",
    desc: "Consistently rated 5 stars on Google for exceptional service and unforgettable results.",
  },
]

function useIntersection(ref: React.RefObject<Element>, options?: IntersectionObserverInit) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.15, ...options })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [ref, options])
  return visible
}

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null!)
  const visible = useIntersection(sectionRef)

  return (
    <section id="about" ref={sectionRef} className="py-28 lg:py-40 bg-[#111] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A227]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#C9A227]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Left: image stack */}
          <div
            className={`relative transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src="/gallery-spa.webp"
                  alt="Jetana Beauty Lounge interior - spa chairs"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              </div>

              {/* Floating secondary image */}
              <div className="absolute -bottom-8 -right-8 w-48 h-60 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#111] hidden md:block">
                <img
                  src="/gallery-barber.webp"
                  alt="Jetana Beauty Lounge barber station"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
              </div>

              {/* Gold accent line */}
              <div className="absolute -left-4 top-10 bottom-10 w-0.5 bg-gradient-to-b from-transparent via-[#C9A227] to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -left-6 bottom-16 glass-dark border border-[#C9A227]/30 rounded-2xl px-5 py-4 shadow-xl float hidden md:block">
              <div className="text-3xl font-light text-[#C9A227]" style={{ fontFamily: "var(--font-cormorant)" }}>5+</div>
              <div className="text-white/60 text-xs tracking-widest uppercase mt-1" style={{ fontFamily: "var(--font-jost)" }}>Years of Excellence</div>
            </div>
          </div>

          {/* Right: content */}
          <div
            className={`transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#C9A227]" />
              <span className="text-[#C9A227] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}>
                About Jetana
              </span>
            </div>

            <h2
              className="text-4xl lg:text-6xl font-light text-white leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Where Beauty
              <br />
              <em className="italic text-[#C9A227]">Meets</em> Luxury
            </h2>

            <p
              className="text-white/60 leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
            >
              Nestled in the prestigious Wuse district of Abuja, Jetana Beauty Lounge is a sanctuary
              of beauty, wellness, and self-expression. Since our founding, we have been dedicated to
              providing an unparalleled luxury experience that transforms not just your appearance,
              but your entire sense of wellbeing.
            </p>

            <p
              className="text-white/60 leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
            >
              Our lounge combines world-class expertise with a warm, welcoming atmosphere — a place
              where every visit feels like an indulgence. From precision haircuts to rejuvenating
              spa treatments, we bring the finest beauty services to the heart of Nigeria's capital.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Services Offered", value: "15+" },
                { label: "Expert Team Members", value: "10+" },
                { label: "Happy Clients", value: "2,000+" },
                { label: "Google Rating", value: "5.0 ★" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-[#C9A227]/40 pl-4">
                  <div
                    className="text-2xl font-light text-[#C9A227]"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {item.value}
                  </div>
                  <div
                    className="text-white/40 text-xs tracking-wider uppercase mt-1"
                    style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div
          className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C9A227]" />
              <span className="text-[#C9A227] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}>
                Why Choose Us
              </span>
              <div className="w-8 h-px bg-[#C9A227]" />
            </div>
            <h2
              className="text-3xl lg:text-5xl font-light text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              The Jetana Difference
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className={`group p-7 rounded-2xl border border-white/8 hover:border-[#C9A227]/40 bg-white/3 hover:bg-white/6 transition-all duration-500 cursor-default transition-all duration-700`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-[#C9A227]/10 flex items-center justify-center mb-5 group-hover:bg-[#C9A227]/20 transition-colors duration-300">
                  <reason.icon className="w-5 h-5 text-[#C9A227]" />
                </div>
                <h3
                  className="text-xl font-light text-white mb-3"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {reason.title}
                </h3>
                <p
                  className="text-white/50 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                >
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
