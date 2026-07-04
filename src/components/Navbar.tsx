import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-50% 0px -50% 0px" }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass-dark shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shadow-lg">
                <span className="text-[#111] font-bold text-lg" style={{ fontFamily: "var(--font-cormorant)" }}>J</span>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-white font-semibold text-base leading-none tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "0.15em" }}
                >
                  Jetana
                </span>
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A227] leading-none mt-0.5">
                  Beauty Lounge
                </span>
              </div>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-sm tracking-widest uppercase transition-all duration-300 relative group ${
                    activeSection === link.href.slice(1)
                      ? "text-[#C9A227]"
                      : "text-white/80 hover:text-white"
                  }`}
                  style={{ fontFamily: "var(--font-jost)", fontWeight: 300, letterSpacing: "0.12em" }}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#C9A227] transition-all duration-300 ${
                      activeSection === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+2348055552273">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/80 hover:text-white border border-white/20 hover:border-white/40 gap-2 rounded-full px-4"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span className="text-xs tracking-wider">Call Now</span>
                </Button>
              </a>
              <button
                onClick={() => scrollTo("#booking")}
                className="gold-gradient text-[#111] text-xs font-semibold tracking-widest uppercase px-6 py-2.5 rounded-full shadow-lg hover:shadow-[#C9A227]/30 hover:scale-105 transition-all duration-300"
                style={{ letterSpacing: "0.1em" }}
              >
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass-dark border-t border-white/10 px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left text-white/80 hover:text-[#C9A227] text-sm tracking-widest uppercase transition-colors"
                style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a href="tel:+2348055552273" className="w-full">
                <Button variant="outline" className="w-full border-white/20 text-white hover:text-[#C9A227] gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
              <button
                onClick={() => scrollTo("#booking")}
                className="w-full gold-gradient text-[#111] font-semibold tracking-wider py-3 rounded-full"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll progress */}
      <ScrollProgress />
    </>
  )
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress((window.scrollY / docHeight) * 100)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-[60]">
      <div
        className="h-full gold-gradient transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
