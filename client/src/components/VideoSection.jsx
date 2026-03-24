import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const points = [
  'Steam interior sanitisation — kills bacteria at the source',
  'Safe hand wash exterior — no brushes, no swirl marks',
  'We come to your home, office, or anywhere in between',
  'Results that speak for themselves, every single time',
]

export default function VideoSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 bg-[#0a1120] border-t border-white/[0.06]">
      <div ref={ref} className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3 block">
              Watch Us Work
            </span>
            <h2 className="section-heading mb-5">
              See the{' '}
              <span className="text-gradient">Results for Yourself</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Every detail matters. Watch how we transform vehicles with
              professional-grade equipment, steam sanitisation, and a
              process built around protecting your paintwork and interior.
            </p>

            <ul className="space-y-3 mb-10">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-white/70 text-sm">
                  <CheckCircle2 size={17} className="text-brand-blue shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>

            <Link to="/contact" className="btn-primary">
              Book Your Detail <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* RIGHT — portrait video */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Glow */}
              <div className="absolute -inset-3 bg-brand-blue/15 rounded-3xl blur-2xl pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                <video
                  src="https://www.combatproclean.co.za/wp-content/uploads/2026/02/2vid.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controlsList="nodownload"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
