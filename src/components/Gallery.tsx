import { useEffect, useRef, useState } from "react"
import { X, ZoomIn } from "lucide-react"

const galleryImages = [
  {
    src: "/gallery-spa.webp",
    alt: "Luxurious spa pedicure chairs at Jetana Beauty Lounge",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/gallery-barber.webp",
    alt: "Professional barber stations at Jetana",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/gallery-reception.webp",
    alt: "Jetana Beauty Lounge reception with premium ambiance",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/nails-art.webp",
    alt: "Stunning nail art by Jetana Beauty Lounge",
    span: "col-span-2 row-span-1",
  },
  {
    src: "/hero-exterior.webp",
    alt: "Jetana Beauty Lounge exterior facade in Abuja",
    span: "col-span-1 row-span-2",
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

export function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null!)
  const visible = useIntersection(sectionRef)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  return (
    <section id="gallery" ref={sectionRef} className="py-28 lg:py-40 bg-[#111] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#C9A227]/60 to-transparent" />

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
              Gallery
            </span>
            <div className="w-8 h-px bg-[#C9A227]" />
          </div>
          <h2
            className="text-4xl lg:text-6xl font-light text-white leading-[1.1]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            A Glimpse of
            <br />
            <em className="italic text-[#C9A227]">Our World</em>
          </h2>
        </div>

        {/* Masonry Grid */}
        <div
          className={`grid grid-cols-3 grid-rows-3 gap-4 h-[600px] lg:h-[700px] transition-all duration-1000 delay-200 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              className={`${img.span} group relative overflow-hidden rounded-2xl cursor-pointer`}
              onClick={() => setLightbox({ src: img.src, alt: img.alt })}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="eager"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full glass border border-white/30 flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
              {/* Gold corner accent */}
              <div className="absolute bottom-3 right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-0.5 bg-[#C9A227]" />
                <div className="w-0.5 h-full bg-[#C9A227]" />
              </div>
            </div>
          ))}
        </div>

        {/* Before & After teaser */}
        <div
          className={`mt-16 p-10 rounded-3xl border border-[#C9A227]/20 bg-white/3 text-center transition-all duration-1000 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h3
            className="text-3xl lg:text-4xl font-light text-white mb-3"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            The <em className="italic text-[#C9A227]">Transformation</em> Speaks
          </h3>
          <p
            className="text-white/50 mb-8 max-w-md mx-auto"
            style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
          >
            Visit us to witness the Jetana difference in person. Every treatment is a masterpiece.
          </p>
          <button
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 gold-gradient text-[#111] text-xs font-semibold tracking-widest uppercase px-8 py-3.5 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
          >
            Book Your Transformation
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:text-[#C9A227] transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm text-center">
            {lightbox.alt}
          </p>
        </div>
      )}
    </section>
  )
}
