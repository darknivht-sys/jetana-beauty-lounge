import { MapPin, Phone, Clock, Heart } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Book Appointment", href: "#booking" },
  { label: "Contact", href: "#contact" },
  { label: "FAQ", href: "#faq" },
]

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
]

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/8">
      {/* Pre-footer CTA */}
      <div className="py-16 lg:py-20 border-b border-white/8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-4xl lg:text-6xl font-light text-white mb-4"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Ready to Experience
            <br />
            <em className="italic text-[#C9A227]">True Luxury?</em>
          </h2>
          <p
            className="text-white/40 mb-8 max-w-md mx-auto"
            style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
          >
            Your transformation begins with a single appointment. Walk in, and walk out a new you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollTo("#booking")}
              className="gold-gradient text-[#111] font-semibold tracking-widest uppercase text-sm px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
              style={{ letterSpacing: "0.1em", fontFamily: "var(--font-jost)" }}
            >
              Book Appointment
            </button>
            <a
              href="https://wa.me/2348055552273?text=Hello%20Jetana%20Beauty%20Lounge!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 text-sm tracking-wider px-8 py-4 rounded-full transition-all duration-300"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full gold-gradient flex items-center justify-center">
                <span
                  className="text-[#111] font-bold text-base"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  J
                </span>
              </div>
              <div>
                <div
                  className="text-white text-sm tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "0.15em" }}
                >
                  Jetana
                </div>
                <div className="text-[#C9A227] text-[9px] tracking-[0.3em] uppercase">
                  Beauty Lounge
                </div>
              </div>
            </div>
            <p
              className="text-white/40 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
            >
              Abuja's premier luxury beauty and wellness destination. Where every visit is an experience.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              <span className="text-white/40 text-xs tracking-wider" style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}>
                Open Daily Until 12 AM
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-white text-xs tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 500 }}
            >
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/40 hover:text-[#C9A227] text-sm transition-colors"
                    style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white text-xs tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 500 }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-white/40 hover:text-[#C9A227] text-sm transition-colors text-left"
                    style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4
              className="text-white text-xs tracking-[0.3em] uppercase mb-5"
              style={{ fontFamily: "var(--font-jost)", fontWeight: 500 }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-0.5" />
                <span
                  className="text-white/40 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                >
                  4 Kolda Link Street, Off Adetokunbo Ademola Crescent, Wuse, Abuja
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
                <a
                  href="tel:+2348055552273"
                  className="text-white/40 hover:text-[#C9A227] text-sm transition-colors"
                  style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                >
                  +234 805 555 2273
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
                <span
                  className="text-white/40 text-sm"
                  style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                >
                  Open Daily · Closes 12:00 AM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-white/25 text-xs"
            style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
          >
            © {new Date().getFullYear()} Jetana Beauty Lounge. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-white/25 text-xs" style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}>
            <span>Made with</span>
            <Heart className="w-3 h-3 text-[#C9A227]" />
            <span>in Abuja</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
