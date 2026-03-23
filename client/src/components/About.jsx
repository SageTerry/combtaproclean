import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2 } from 'lucide-react'

const stats = [
  { value: '2',   label: 'Cities Served',    suffix: '' },
  { value: '90',  label: 'Min Full Service',  suffix: 'min' },
  { value: '5',   label: 'Star Rated',        suffix: '★' },
  { value: '100', label: 'Happy Clients',     suffix: '+' },
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
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">

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
              className="space-y-3"
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
          </div>

          {/* Right — photo stacked above clean stats row */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Main photo */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://www.combatproclean.co.za/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-11-at-16.08.04_6257664d-scaled.jpg"
                alt="Combat Pro Clean team at work"
                className="w-full h-80 lg:h-96 object-cover"
              />
              {/* Subtle bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/50 via-transparent to-transparent" />
              {/* Experience badge overlaid bottom-right of photo */}
              <div className="absolute bottom-4 right-4 bg-brand-slate/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2">
                <p className="text-brand-blue text-xs font-semibold uppercase tracking-wider">Mobile Service</p>
                <p className="text-white text-sm font-bold">At Your Door</p>
              </div>
            </div>

            {/* Stats row — full width, all 4 stats */}
            <div className="grid grid-cols-4 gap-3">
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
