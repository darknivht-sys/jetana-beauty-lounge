import { useEffect, useState } from "react"
import { Phone, ChevronDown, Sparkles } from "lucide-react"

export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-exterior.webp"
          alt="Jetana Beauty Lounge exterior"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-32 left-12 w-px h-32 bg-gradient-to-b from-transparent via-[#C9A227]/60 to-transparent float" style={{ animationDelay: "0s" }} />
      <div className="absolute top-48 right-16 w-px h-24 bg-gradient-to-b from-transparent via-[#C9A227]/40 to-transparent float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-40 left-24 w-24 h-px bg-gradient-to-r from-transparent via-[#C9A227]/50 to-transparent float" style={{ animationDelay: "0.8s" }} />

      {/* Floating badge */}
      <div
        className={`absolute top-36 right-10 lg:right-20 glass border border-[#C9A227]/30 rounded-2xl px-5 py-3 float transition-all duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
        style={{ animationDelay: "2s", transitionDelay: "0.8s" }}
      >
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
          <span className="text-white/90 text-xs tracking-widest uppercase" style={{ fontFamily: "var(--font-jost)" }}>
            Open Daily
          </span>
        </div>
        <div className="text-[#C9A227] text-xs mt-1 tracking-wider">Until Midnight</div>
      </div>

      {/* Rating badge */}
      <div
        className={`absolute bottom-40 right-10 lg:right-20 glass border border-[#C9A227]/30 rounded-2xl px-5 py-3 float transition-all duration-1000 hidden md:block ${loaded ? "opacity-100" : "opacity-0"}`}
        style={{ animationDelay: "2.5s", transitionDelay: "1.2s" }}
      >
        <div className="flex items-center gap-1.5">
          {[1,2,3,4,5].map(i => (
            <span key={i} className="text-[#C9A227] text-xs">★</span>
          ))}
        </div>
        <div className="text-white/70 text-xs mt-1 tracking-wider">5.0 Google Rating</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Pre-headline */}
        <div
          className={`inline-flex items-center gap-3 mb-8 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="w-12 h-px bg-[#C9A227]" />
          <span className="text-[#C9A227] text-xs tracking-[0.4em] uppercase" style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}>
            Luxury Beauty Lounge · Abuja
          </span>
          <div className="w-12 h-px bg-[#C9A227]" />
        </div>

        {/* Main headline */}
        <h1
          className={`text-5xl sm:text-6xl lg:text-8xl font-light text-white leading-[1.05] mb-6 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          style={{ fontFamily: "var(--font-cormorant)", transitionDelay: "0.4s" }}
        >
          Luxury Beauty
          <br />
          <em className="italic font-light">Meets</em>{" "}
          <span className="gold-text">Exceptional</span>
          <br />
          Care
        </h1>

        {/* Subheadline */}
        <p
          className={`text-white/70 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ fontFamily: "var(--font-jost)", fontWeight: 300, transitionDelay: "0.6s" }}
        >
          Experience premium hair styling, barbering, nails, spa treatments, and wellness services
          in the heart of Abuja.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "0.8s" }}
        >
          <button
            onClick={() => scrollTo("booking")}
            className="group relative gold-gradient text-[#111] font-semibold tracking-[0.12em] uppercase text-sm px-10 py-4 rounded-full shadow-lg shadow-[#C9A227]/20 hover:shadow-[#C9A227]/40 hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Book Appointment</span>
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <a href="tel:+2348055552273">
            <button className="group flex items-center gap-3 glass border border-white/25 text-white hover:border-[#C9A227]/60 hover:text-[#C9A227] px-10 py-4 rounded-full transition-all duration-300">
              <Phone className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span className="text-sm tracking-wider font-light">Call Now</span>
            </button>
          </a>
        </div>

        {/* Stats row */}
        <div
          className={`mt-20 flex flex-wrap items-center justify-center gap-10 lg:gap-16 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "1s" }}
        >
          {[
            { value: "5+", label: "Years of Excellence" },
            { value: "2K+", label: "Happy Clients" },
            { value: "10+", label: "Expert Stylists" },
            { value: "5.0", label: "Google Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl lg:text-4xl font-light text-[#C9A227] leading-none"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-white/50 text-xs tracking-widest uppercase mt-1"
                style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-[#C9A227] transition-colors duration-300"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-[0.3em] uppercase" style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}>
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  )
}
