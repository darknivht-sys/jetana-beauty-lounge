import { useEffect, useRef, useState } from "react"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Adaeze O.",
    role: "Executive, Abuja",
    review:
      "Jetana Beauty Lounge is in a class of its own. The staff are incredibly professional, the environment is pristine, and my hair turned out absolutely stunning. It truly feels like a luxury experience.",
    rating: 5,
    service: "Hair Styling",
    initials: "AO",
  },
  {
    name: "Emeka T.",
    role: "Business Owner",
    review:
      "I've been to many barbers across Abuja, but the barber at Jetana is exceptional. The precision, the attention to detail, the hot towel shave — absolutely world class. My new regular spot.",
    rating: 5,
    service: "Barbering",
    initials: "ET",
  },
  {
    name: "Chiamaka N.",
    role: "Bride",
    review:
      "I had my pre-wedding pampering at Jetana and it was the most relaxing wellness experience I've ever had. The manicure, pedicure, and facial were all outstanding. I felt like royalty.",
    rating: 5,
    service: "Bridal Package",
    initials: "CN",
  },
  {
    name: "Fatima A.",
    role: "Diplomat",
    review:
      "The manicure service here is one of the best in Abuja, without a doubt. The nail technicians are skilled artists. My friends always ask who did my nails — and I proudly tell them Jetana.",
    rating: 5,
    service: "Nail Art",
    initials: "FA",
  },
  {
    name: "David M.",
    role: "Photographer",
    review:
      "What strikes you immediately about Jetana is the atmosphere — luxurious yet warm. The friendly staff make you feel genuinely cared for. Premium experience, every single time.",
    rating: 5,
    service: "Hair & Beard",
    initials: "DM",
  },
  {
    name: "Ngozi K.",
    role: "Medical Professional",
    review:
      "After a long week, Jetana is my sanctuary. The spa treatments are genuinely therapeutic, and the braiding team are masters of their craft. A relaxing wellness experience from start to finish.",
    rating: 5,
    service: "Spa & Braiding",
    initials: "NK",
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

export function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null!)
  const visible = useIntersection(sectionRef)

  return (
    <section id="testimonials" ref={sectionRef} className="py-28 lg:py-40 bg-[var(--cream)] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#C9A227]/6 blur-3xl pointer-events-none" />

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
              Testimonials
            </span>
            <div className="w-8 h-px bg-[#C9A227]" />
          </div>
          <h2
            className="text-4xl lg:text-6xl font-light text-[#111] leading-[1.1]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            What Our Clients
            <br />
            <em className="italic text-[#C9A227]">Are Saying</em>
          </h2>

          {/* Google rating summary */}
          <div className="mt-8 inline-flex items-center gap-4 bg-white border border-[#E8E2D9] rounded-2xl px-7 py-4 shadow-sm">
            <div>
              <div
                className="text-4xl font-light text-[#111]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                5.0
              </div>
              <div className="flex gap-0.5 mt-1">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="text-[#C9A227]">★</span>
                ))}
              </div>
            </div>
            <div className="w-px h-12 bg-[#E8E2D9]" />
            <div className="text-left">
              <div
                className="text-[#111] font-medium text-sm"
                style={{ fontFamily: "var(--font-jost)" }}
              >
                Google Reviews
              </div>
              <div
                className="text-[#6B6560] text-xs mt-0.5"
                style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
              >
                150+ verified reviews
              </div>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`group bg-white rounded-2xl p-7 border border-[#E8E2D9] hover:border-[#C9A227]/40 hover:shadow-lg transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 80}ms`, transitionDuration: "700ms" }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-[#C9A227] text-sm">★</span>
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="w-6 h-6 text-[#C9A227]/30 mb-3" />

              {/* Review text */}
              <p
                className="text-[#3D3B38] leading-relaxed text-sm mb-6"
                style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
              >
                "{t.review}"
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-[#E8E2D9] mb-5" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span
                    className="text-[#111] text-xs font-bold"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div
                    className="text-[#111] text-sm font-medium"
                    style={{ fontFamily: "var(--font-jost)" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-[#6B6560] text-xs"
                    style={{ fontFamily: "var(--font-jost)", fontWeight: 300 }}
                  >
                    {t.role}
                  </div>
                </div>
                <span
                  className="ml-auto text-[10px] text-[#C9A227] tracking-wider uppercase border border-[#C9A227]/30 px-2 py-0.5 rounded-full"
                  style={{ fontFamily: "var(--font-jost)" }}
                >
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
