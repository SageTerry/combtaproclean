import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CalendarCheck, Shield, Bell, Crown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const perks = [
  {
    icon: <CalendarCheck size={20} />,
    title: 'Priority Booking',
    desc: 'Skip the queue — your slot is reserved every month before general availability.',
  },
  {
    icon: <Shield size={20} />,
    title: 'Long-Term Protection',
    desc: 'Regular detailing protects your paintwork and interior from wear and UV damage.',
  },
  {
    icon: <Bell size={20} />,
    title: 'Set & Forget Scheduling',
    desc: 'We handle the scheduling. You just get a reminder before we arrive.',
  },
  {
    icon: <Crown size={20} />,
    title: 'Exclusive Member Rates',
    desc: 'Monthly members get preferential pricing and first access to new services.',
  },
]

const targetGroups = [
  'Busy professionals who value their time',
  'Luxury or high-end vehicle owners',
  'Fleet & business vehicle managers',
  'Anyone who wants a consistently clean car',
]

export default function Maintenance() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="maintenance" className="py-24 bg-[#0f172a] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3 block">
            Maintenance Program
          </span>
          <h2 className="section-heading mb-4">
            Never Rebook Again.{' '}
            <span className="text-gradient">Your Car, Maintained Monthly.</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Designed for clients who value consistency, priority booking, and
            long-term vehicle care.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Perks */}
          <div className="grid sm:grid-cols-2 gap-5">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="card hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                  {perk.icon}
                </div>
                <h3 className="font-display font-semibold text-white mb-1">{perk.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Who it's for */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card border-brand-blue/20 bg-gradient-to-br from-brand-blue/10 to-sky-500/5 mb-6">
              <h3 className="font-display font-bold text-xl text-white mb-4">Who Is It For?</h3>
              <ul className="space-y-3">
                {targetGroups.map((g, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70">
                    <span className="w-2 h-2 rounded-full bg-brand-blue shrink-0" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card bg-brand-blue/5 border-brand-blue/20">
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Join the maintenance program today and lock in your monthly slot.
                We'll take care of everything — you just enjoy a clean car every time.
              </p>
              <Link to="/contact" className="btn-primary w-full justify-center">
                Join the Program <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
