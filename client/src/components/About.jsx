import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
  { value: '2',   label: 'Cities Served',   suffix: '' },
  { value: '90',  label: 'Min Full Service', suffix: 'min' },
  { value: '5',   label: 'Star Rated',       suffix: '★' },
  { value: '100', label: 'Happy Clients',    suffix: '+' },
]

const points = [
  'Steam interior sanitisation — kills bacteria, removes odours',
  'Safe hand wash — no brushes, no swirl marks',
  'We come to you — home or workplace, no queues',
  'Trained professionals who treat every vehicle like their own',
  'Trusted in Cape Town & Johannesburg',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 bg-brand-slate border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4">
        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3 block"
            >
              About Combat Pro
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="section-heading mb-6"
            >
              We Exist Because Most{' '}
              <span className="text-gradient">Car Washes Rush</span> the Job.
              <br />We Don't.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-white/60 leading-relaxed mb-8"
            >
              Whether it's a daily driver or a luxury vehicle, we focus on precision,
              consistency, and results you can see and feel — delivered at your home
              or workplace.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-3 mb-10"
            >
              {points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3 text-white/70"
                >
                  <CheckCircle2 size={18} className="text-brand-blue mt-0.5 shrink-0" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.75 }}
            >
              <Link to="/contact" className="btn-primary">
                Book Your Detail <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>

          {/* Right — video + stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Video card */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-[#0a1120] ring-1 ring-brand-blue/15">
              <video
                src="https://www.combatproclean.co.za/wp-content/uploads/2026/02/2vid.mp4"
                autoPlay
                loop
                muted
                playsInline
                controlsList="nodownload"
                className="w-full h-56 sm:h-72 md:h-[420px] object-cover block"
              />
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="card text-center py-4 hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all duration-300"
                >
                  <div className="text-2xl font-display font-bold text-gradient leading-none mb-1">
                    {stat.value}<span className="text-base">{stat.suffix}</span>
                  </div>
                  <div className="text-white/50 text-xs leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
