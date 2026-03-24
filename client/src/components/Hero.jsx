import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Star } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

const heroImages = [
  {
    src: 'https://www.combatproclean.co.za/wp-content/uploads/2026/02/INT1.jpeg',
    alt: 'Interior detailing',
    className: 'absolute top-0 right-0 w-64 md:w-72 rounded-2xl shadow-2xl shadow-black/60',
    rotate: '3deg',
  },
  {
    src: 'https://www.combatproclean.co.za/wp-content/uploads/2026/02/JHGF-Copy-Copy.jpeg',
    alt: 'Exterior wash',
    className: 'absolute top-44 left-4 w-56 md:w-64 rounded-2xl shadow-2xl shadow-black/60',
    rotate: '-4deg',
  },
  {
    src: 'https://www.combatproclean.co.za/wp-content/uploads/2026/02/INT3.jpeg',
    alt: 'Detail result',
    // Fix 2: raised from bottom-0 to bottom-12 so it doesn't clip against section overflow-hidden
    className: 'absolute bottom-12 right-6 w-52 md:w-60 rounded-2xl shadow-2xl shadow-black/60',
    rotate: '2deg',
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background image — darker overlay so text is always readable */}
      <div className="absolute inset-0">
        <img
          src="https://www.combatproclean.co.za/wp-content/uploads/2026/02/EFG-Copy-Copy.jpeg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Base dark layer — increased to 93% */}
        <div className="absolute inset-0 bg-brand-slate/[0.93]" />
        {/* Left-column reinforcement: extra dark on left half to protect text */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-slate/60 via-brand-slate/20 to-transparent" />
        {/* Subtle blue accent bottom-right */}
        <div className="absolute inset-0 bg-gradient-to-tl from-brand-blue/8 via-transparent to-transparent" />
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-24 md:pt-32 pb-16 md:pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — text */}
          <div>
            {/* Location badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/30 text-brand-blue rounded-full px-4 py-2 text-sm font-medium mb-4"
            >
              <MapPin size={14} />
              Cape Town &amp; Johannesburg
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none tracking-tight mb-6"
            >
              Premium Mobile{' '}
              <span className="text-gradient">Vehicle Detailing</span>{' '}
              <br className="hidden md:block" />
              At Your Door.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed"
            >
              Steam interior sanitisation. Safe hand wash exterior. We come to your home
              or office — no queues, no rushing, just results you can see and feel.
            </motion.p>

            {/* Fix 4: CTAs — "View Our Work" now white-filled for better contrast */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Book Your Clean
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-base px-8 py-4 rounded-lg transition-all duration-200 backdrop-blur-sm"
              >
                View Our Work
              </Link>
            </motion.div>

            {/* Fix 3: Social proof — remove letter avatars, use clean star + count layout */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-5 py-3 w-fit"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="w-px h-6 bg-white/15" />
              <div>
                <span className="text-white font-semibold text-sm">5.0</span>
                <span className="text-white/50 text-sm"> · Google Reviews</span>
              </div>
              <div className="w-px h-6 bg-white/15" />
              <p className="text-white/60 text-sm">Trusted across SA</p>
            </motion.div>
          </div>

          {/* RIGHT — photo mosaic */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative h-[600px] pr-8"
          >
            {heroImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0, rotate: img.rotate }}
                transition={{ duration: 0.7, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={img.className}
                style={{ transform: `rotate(${img.rotate})` }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-48 md:h-56 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              </motion.div>
            ))}

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="absolute bottom-28 left-0 bg-brand-slate/90 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center">
                  <Star size={16} className="fill-brand-blue" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-none mb-0.5">5-Star Service</p>
                  <p className="text-white/50 text-xs">100% client satisfaction</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/40 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-0.5 h-8 bg-gradient-to-b from-brand-blue to-transparent rounded-full"
        />
      </motion.div>
    </section>
  )
}
