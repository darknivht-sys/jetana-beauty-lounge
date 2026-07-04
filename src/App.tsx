import { useEffect, useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Services } from "@/components/Services"
import { Gallery } from "@/components/Gallery"
import { Testimonials } from "@/components/Testimonials"
import { Booking } from "@/components/Booking"
import { FAQ } from "@/components/FAQ"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { FloatingElements } from "@/components/FloatingElements"

function LoadingScreen({ done }: { done: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-[200] bg-[#111] flex flex-col items-center justify-center transition-all duration-700 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo mark */}
        <div className="relative">
          <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center shadow-2xl shadow-[#C9A227]/20">
            <span
              className="text-[#111] text-4xl font-bold"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              J
            </span>
          </div>
          {/* Spinning ring */}
          <div className="absolute inset-0 rounded-full border border-[#C9A227]/30 animate-spin" style={{ borderTopColor: "#C9A227", animationDuration: "1.5s" }} />
        </div>

        <div className="text-center">
          <div
            className="text-white text-xl tracking-[0.4em] uppercase"
            style={{ fontFamily: "var(--font-cormorant)", letterSpacing: "0.3em" }}
          >
            Jetana
          </div>
          <div className="text-[#C9A227] text-[10px] tracking-[0.5em] uppercase mt-1">
            Beauty Lounge
          </div>
        </div>

        {/* Loading bar */}
        <div className="w-32 h-px bg-white/10 rounded-full overflow-hidden">
          <div className="h-full gold-gradient rounded-full animate-[shimmer_1.5s_ease-in-out_infinite]" style={{ width: "60%" }} />
        </div>
      </div>
    </div>
  )
}

export function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen done={loaded} />
      <div className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Gallery />
          <Testimonials />
          <Booking />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <FloatingElements />
      </div>
    </>
  )
}

export default App
