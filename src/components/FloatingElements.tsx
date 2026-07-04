import { useEffect, useState } from "react"
import { MessageCircle, ArrowUp, Phone } from "lucide-react"

const WHATSAPP_NUMBER = "2348055552273"
const WHATSAPP_MSG = encodeURIComponent("Hello Jetana Beauty Lounge! I'd like to book an appointment.")

export function FloatingElements() {
  const [showBackTop, setShowBackTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Floating WhatsApp button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          {/* Pulse ring */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          <div className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:scale-110 transition-transform duration-300">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          {/* Tooltip */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 glass-dark border border-white/15 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Book on WhatsApp
          </div>
        </div>
      </a>

      {/* Sticky Book Now button (mobile) */}
      <div className="fixed bottom-6 left-6 z-40 md:hidden">
        <button
          onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
          className="gold-gradient text-[#111] text-xs font-semibold tracking-widest uppercase px-5 py-3 rounded-full shadow-lg"
          style={{ fontFamily: "var(--font-jost)", letterSpacing: "0.08em" }}
        >
          Book Now
        </button>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-24 right-6 z-40 w-10 h-10 rounded-full glass-dark border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] hover:bg-[#C9A227]/20 transition-all duration-300 ${
          showBackTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* Sticky phone CTA (desktop) */}
      <a
        href="tel:+2348055552273"
        className="fixed top-1/2 -translate-y-1/2 -right-12 hover:right-0 z-40 transition-all duration-300 hidden xl:flex items-center gap-2 glass-dark border border-[#C9A227]/30 px-4 py-3 rounded-l-xl group"
        aria-label="Call Jetana Beauty Lounge"
      >
        <Phone className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
        <span className="text-white text-xs tracking-wider whitespace-nowrap" style={{ fontFamily: "var(--font-jost)" }}>
          Call Now
        </span>
      </a>
    </>
  )
}
