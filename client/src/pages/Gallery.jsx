import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

const galleryImages = [
  { src: 'https://www.combatproclean.co.za/wp-content/uploads/2026/02/ASDF-Copy-Copy.jpeg', alt: 'Vehicle detail' },
  { src: 'https://www.combatproclean.co.za/wp-content/uploads/2026/02/EFG-Copy-Copy.jpeg', alt: 'Car cleaning' },
  { src: 'https://www.combatproclean.co.za/wp-content/uploads/2026/02/GGHHJ-Copy-2.jpeg', alt: 'Pro detailing' },
  { src: 'https://www.combatproclean.co.za/wp-content/uploads/2026/02/JHGF-Copy-Copy.jpeg', alt: 'Exterior wash' },
  { src: 'https://www.combatproclean.co.za/wp-content/uploads/2026/02/JJJJ-Copy-Copy.jpeg', alt: 'Full service' },
  { src: 'https://www.combatproclean.co.za/wp-content/uploads/2026/02/OOO.jpeg', alt: 'Interior clean' },
  { src: 'https://www.combatproclean.co.za/wp-content/uploads/2026/02/UYTRE.jpeg', alt: 'Detail result' },
  { src: 'https://www.combatproclean.co.za/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-14-at-06.12.20.jpeg', alt: 'Mobile detailing' },
  { src: 'https://www.combatproclean.co.za/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-11-at-16.08.04_6257664d-scaled.jpg', alt: 'Steam interior' },
  { src: 'https://www.combatproclean.co.za/wp-content/uploads/2025/11/6.jpg', alt: 'Car wash' },
  { src: 'https://www.combatproclean.co.za/wp-content/uploads/2025/11/2.jpg', alt: 'Vehicle clean' },
  { src: 'https://www.combatproclean.co.za/wp-content/uploads/2025/11/3.jpg', alt: 'Detail work' },
  { src: 'https://www.combatproclean.co.za/wp-content/uploads/2025/11/4.jpg', alt: 'Wash finish' },
  { src: 'https://www.combatproclean.co.za/wp-content/uploads/2026/02/INT1.jpeg', alt: 'Interior detail 1' },
  { src: 'https://www.combatproclean.co.za/wp-content/uploads/2026/02/INT2.jpeg', alt: 'Interior detail 2' },
  { src: 'https://www.combatproclean.co.za/wp-content/uploads/2026/02/INT3.jpeg', alt: 'Interior detail 3' },
]

function GalleryImage({ image, index, onClick }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: (index % 8) * 0.07 }}
      className="relative overflow-hidden rounded-xl cursor-pointer group aspect-[4/3] bg-white/5"
      onClick={() => onClick(image)}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
        <ZoomIn
          size={28}
          className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"
        />
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="pt-24 pb-20 min-h-screen bg-brand-slate">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-8"
        >
          <span className="text-brand-blue text-sm font-semibold tracking-widest uppercase mb-3 block">
            Our Work
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Real Cars.{' '}
            <span className="text-gradient">Real Results.</span>
          </h1>
          <p className="text-white/60 max-w-md mx-auto">
            Every vehicle treated with the same care and attention — see the
            Combat Pro Clean difference for yourself.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <GalleryImage
              key={img.src}
              image={img}
              index={i}
              onClick={setLightbox}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-all"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
