import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
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
    title: 'Full Service (Standard)',
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
    title: 'Exterior Wash & Dry',
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

const PRICING = {
  'Cape Town': {
    'Premium Full Service':    { sedan: 750,  suv: 850,  bakkie: 950  },
    'Full Service (Standard)': { sedan: 550,  suv: 680,  bakkie: 780  },
    'Interior Deep Clean':     { sedan: 480,  suv: 550,  bakkie: 650  },
    'Exterior Wash & Dry':     { sedan: 300,  suv: 380,  bakkie: 480  },
  },
  'Johannesburg': {
    'Premium Full Service':    { sedan: 850,  suv: 950,  bakkie: 1050 },
    'Full Service (Standard)': { sedan: 650,  suv: 780,  bakkie: 880  },
    'Interior Deep Clean':     { sedan: 530,  suv: 600,  bakkie: 700  },
    'Exterior Wash & Dry':     { sedan: 350,  suv: 430,  bakkie: 530  },
  },
}

const ADDONS = [
  { name: 'Engine Bay Wash',            desc: 'Professional degreasing and clean',                       price: 350 },
  { name: 'Headlight Restoration',      desc: 'Removes oxidation, improves clarity',                     price: 350 },
  { name: 'Deep Seat Extraction',       desc: 'For stains, spills and heavily soiled seats',             price: 400 },
  { name: 'Ceramic Spray Sealant',      desc: 'Paint protection & high gloss finish (lasts 2–3 months)', price: 450 },
  { name: 'Leather Conditioning',       desc: 'Hydrates, restores and protects leather surfaces',        price: 300 },
  { name: 'Pet Hair Removal',           desc: 'Specialist tools for deeply embedded hair',               price: 350 },
  { name: 'Ozone Odour Treatment',      desc: 'Eliminates smoke, pet & food smells at molecular level',  price: 500 },
  { name: 'Interior Fabric Protection', desc: 'Water & stain resistant coating for seats and carpets',   price: 300 },
  { name: 'Roof Lining Restoration',    desc: 'Restores sagging or stained roof lining',                price: 250 },
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
  const headingRef  = useRef(null)
  const pricingRef  = useRef(null)
  const addonsRef   = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' })
  const pricingInView = useInView(pricingRef, { once: true, margin: '-60px' })
  const addonsInView  = useInView(addonsRef,  { once: true, margin: '-60px' })

  const [activeCity, setActiveCity] = useState('Cape Town')
  const cityPrices = PRICING[activeCity]

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

        {/* Image banner strip — hidden on small phones */}
        <div className="hidden sm:grid sm:grid-cols-4 gap-3 mb-14 rounded-2xl overflow-hidden h-32 sm:h-40">
          {[
            'https://www.combatproclean.co.za/wp-content/uploads/2026/02/ASDF-Copy-Copy.jpeg',
            'https://www.combatproclean.co.za/wp-content/uploads/2026/02/OOO.jpeg',
            'https://www.combatproclean.co.za/wp-content/uploads/2026/02/UYTRE.jpeg',
            'https://www.combatproclean.co.za/wp-content/uploads/2025/11/6.jpg',
          ].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img src={src} alt="Detailing work" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* ── Pricing Table ──────────────────────────────────────────────── */}
        <motion.div
          ref={pricingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={pricingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3 block">
              Transparent Pricing
            </span>
            <h2 className="section-heading mb-4">
              What Does It <span className="text-gradient">Cost?</span>
            </h2>
            <p className="text-white/60 max-w-md mx-auto text-sm">
              All prices are per vehicle. Mobile service — we come to you.
            </p>
          </div>

          {/* City toggle */}
          <div className="flex justify-center gap-2 mb-8">
            {['Cape Town', 'Johannesburg'].map((city) => (
              <button
                key={city}
                onClick={() => setActiveCity(city)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCity === city
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30'
                    : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Table — scrollable on mobile */}
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <div className="min-w-[480px]">
              <div className="grid grid-cols-4 bg-brand-blue/10 border-b border-white/10">
                <div className="px-3 sm:px-6 py-4 text-white/50 text-xs font-semibold uppercase tracking-wide">Service</div>
                {['Sedan / Hatch', 'SUV', 'Bakkie'].map((col) => (
                  <div key={col} className="px-2 sm:px-4 py-4 text-center text-white/50 text-xs font-semibold uppercase tracking-wide">{col}</div>
                ))}
              </div>
              {Object.entries(cityPrices).map(([svc, prices], i) => (
                <div
                  key={svc}
                  className={`grid grid-cols-4 border-b border-white/[0.06] last:border-0 hover:bg-white/[0.02] transition-colors ${i === 0 ? 'bg-brand-blue/5' : ''}`}
                >
                  <div className="px-3 sm:px-6 py-4 flex items-center gap-2">
                    <span className="text-white text-sm font-medium">{svc}</span>
                    {i === 0 && <span className="hidden md:inline text-xs bg-brand-blue text-white px-2 py-0.5 rounded-full font-semibold">Popular</span>}
                  </div>
                  {[prices.sedan, prices.suv, prices.bakkie].map((price, j) => (
                    <div key={j} className="px-2 sm:px-4 py-4 text-center">
                      <span className="text-white font-bold text-sm sm:text-base">R{price}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Elite Add-ons ──────────────────────────────────────────────── */}
        <motion.div
          ref={addonsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={addonsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3 block">
              Upgrade Your Clean
            </span>
            <h2 className="section-heading mb-4">
              Elite <span className="text-gradient">Add-Ons</span>
            </h2>
            <p className="text-white/60 max-w-md mx-auto text-sm">
              Add any of these to your booking. Flat price for all vehicle types and both cities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADDONS.map((addon, i) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                animate={addonsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all duration-300 flex items-start justify-between gap-4"
              >
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-semibold text-sm mb-1">{addon.name}</h4>
                  <p className="text-white/50 text-xs leading-relaxed">{addon.desc}</p>
                </div>
                <span className="shrink-0 bg-brand-blue/15 text-brand-blue text-sm font-bold px-3 py-1 rounded-lg border border-brand-blue/20 whitespace-nowrap">
                  R{addon.price}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
