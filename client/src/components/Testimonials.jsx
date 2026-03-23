import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Edward Tatenda Peyisa',
    time: '4 months ago',
    rating: 5,
    text: 'Just got my ride detailed at Combat Pro Clean and I\'m beyond impressed! The team was super professional, efficient, and thorough. My car looks brand new! Highly recommend their services.',
    initials: 'ET',
  },
  {
    name: 'Monalisa Noormohamed',
    time: '4 months ago',
    rating: 5,
    text: 'They cleaned every inch of my car to perfection while using less water. Professional and friendly team!',
    initials: 'MN',
  },
  {
    name: 'Hamza Van der Ross',
    time: '2 months ago',
    rating: 5,
    text: 'I was impressed by their attention to detail! I got a full service which was done in 90 minutes. I would highly recommend them — in particular, the interior of my car was very well cleaned.',
    initials: 'HV',
  },
]

function ReviewCard({ review, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="card hover:border-brand-blue/30 transition-all duration-300 flex flex-col"
    >
      {/* Quote icon */}
      <Quote size={28} className="text-brand-blue/40 mb-4" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>

      {/* Text */}
      <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6">"{review.text}"</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/10">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-sky-400 flex items-center justify-center text-xs font-bold text-white shrink-0">
          {review.initials}
        </div>
        <div>
          <div className="font-semibold text-white text-sm">{review.name}</div>
          <div className="text-white/40 text-xs">{review.time}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' })

  return (
    <section id="testimonials" className="py-24 bg-brand-slate border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3 block">
            Client Reviews
          </span>
          <h2 className="section-heading mb-4">
            Real Cars. Real Clients.{' '}
            <span className="text-gradient">Real Results.</span>
          </h2>
          <p className="text-white/60 max-w-md mx-auto">
            Don't take our word for it — hear from clients who've experienced
            the Combat Pro difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={review.name} review={review} index={i} />
          ))}
        </div>

        {/* Overall rating bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-white font-semibold">5.0 out of 5</span>
          <span className="text-white/40">·</span>
          <span className="text-white/60 text-sm">Based on Google Reviews</span>
        </motion.div>
      </div>
    </section>
  )
}
