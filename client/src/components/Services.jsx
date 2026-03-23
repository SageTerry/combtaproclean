import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Droplets, Wind, Zap, Car, Wrench, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: <Zap size={24} />,
    title: 'Premium Full Service',
    description:
      'Our flagship package. Full exterior hand wash, interior steam sanitisation, tire dressing, window clean, and dashboard detail. Every corner, every surface.',
    tag: 'Most Popular',
  },
  {
    icon: <Car size={24} />,
    title: 'Standard Full Service',
    description:
      'Complete interior vacuum, wipe-down, exterior wash, and window clean. Perfect for regular maintenance of your daily driver.',
    tag: null,
  },
  {
    icon: <Wind size={24} />,
    title: 'Interior Deep Clean',
    description:
      'Steam-powered interior sanitisation targeting seats, carpets, door panels, and vents. Eliminates bacteria and odours at the source.',
    tag: null,
  },
  {
    icon: <Droplets size={24} />,
    title: 'Exterior Wash',
    description:
      'Safe hand wash technique using quality products — no brushes, no scratches. Paint-safe clean with a streak-free finish every time.',
    tag: null,
  },
  {
    icon: <Wrench size={24} />,
    title: 'Engine Bay Wash',
    description:
      'Professional degreasing and clean of your engine bay. Improves appearance and helps spot leaks and wear early.',
    tag: null,
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card group hover:border-brand-blue/40 hover:bg-brand-blue/5 transition-all duration-300 relative"
    >
      {service.tag && (
        <span className="absolute top-4 right-4 bg-brand-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
          {service.tag}
        </span>
      )}
      <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-5 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
        {service.icon}
      </div>
      <h3 className="text-lg font-display font-semibold text-white mb-2">{service.title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
    </motion.div>
  )
}

export default function Services() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' })

  return (
    <section id="services" className="py-24 bg-[#0f172a] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3 block">
            What We Offer
          </span>
          <h2 className="section-heading mb-4">
            More Than a Car Wash.
            <br />
            <span className="text-gradient">A Professional Detail.</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            We specialise in mobile detailing using steam interior techniques and safe
            hand wash methods — no cutting corners.
          </p>
        </motion.div>

        {/* Image banner strip */}
        <div className="grid grid-cols-4 gap-3 mb-14 rounded-2xl overflow-hidden h-40">
          {[
            'https://www.combatproclean.co.za/wp-content/uploads/2026/02/ASDF-Copy-Copy.jpeg',
            'https://www.combatproclean.co.za/wp-content/uploads/2026/02/OOO.jpeg',
            'https://www.combatproclean.co.za/wp-content/uploads/2026/02/UYTRE.jpeg',
            'https://www.combatproclean.co.za/wp-content/uploads/2025/11/6.jpg',
          ].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img
                src={src}
                alt="Detailing work"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Book a Service <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
