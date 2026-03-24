import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'

// ─── EmailJS Configuration ────────────────────────────────────────────────────
// 1. Sign up at https://emailjs.com
// 2. Add Gmail as a service (Service ID below)
// 3. Create an email template (Template ID below)
// 4. Copy your Public Key from Account → API Keys
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'   // e.g. 'aBcDeFgHiJkLmNoP'
// ─────────────────────────────────────────────────────────────────────────────

const MAIN_SERVICES = [
  'Premium Full Service',
  'Full Service (Standard)',
  'Interior Deep Clean',
  'Exterior Wash & Dry',
]

const ADDON_SERVICES = [
  'Engine Bay Wash',
  'Headlight Restoration',
  'Deep Seat Extraction',
  'Ceramic Spray Sealant',
  'Leather Conditioning & Protection',
  'Pet Hair Removal',
  'Ozone Odour Treatment',
  'Interior Fabric Protection',
  'Roof Lining Restoration',
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

const ADDON_PRICES = {
  'Engine Bay Wash': 350,
  'Headlight Restoration': 350,
  'Deep Seat Extraction': 400,
  'Ceramic Spray Sealant': 450,
  'Leather Conditioning & Protection': 300,
  'Pet Hair Removal': 350,
  'Ozone Odour Treatment': 500,
  'Interior Fabric Protection': 300,
  'Roof Lining Restoration': 250,
}

function getPrice(service, vehicle, city) {
  if (!service) return null
  if (ADDON_PRICES[service] !== undefined) return ADDON_PRICES[service]
  if (!vehicle || !city || !PRICING[city]?.[service]) return null
  const vKey = vehicle === 'S.U.V' ? 'suv' : vehicle === 'Bakkie' ? 'bakkie' : 'sedan'
  return PRICING[city][service][vKey]
}

const vehicles = ['Sedan', 'S.U.V', 'Hatchback', 'Bakkie']

const contactInfo = [
  {
    icon: <Phone size={20} />,
    label: 'Call Us',
    lines: ['061 406 0330', '061 024 4139'],
    href: 'tel:+27614060330',
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    lines: ['info@combatproclean.co.za'],
    href: 'mailto:info@combatproclean.co.za',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Address',
    lines: ['19 Pinetree Avenue', 'Claremont'],
    href: null,
  },
  {
    icon: <MessageCircle size={20} />,
    label: 'WhatsApp',
    lines: ['Chat directly on WhatsApp'],
    href: 'https://wa.me/27610244139',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    service: '',
    vehicle: '',
    date: '',
    phone: '',
    address: '',
    notes: '',
    city: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setEmailError(false)

    // Send email via EmailJS (Gmail)
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          service:   form.service,
          vehicle:   form.vehicle,
          date:      form.date,
          phone:     form.phone,
          address:   form.address,
          city:      form.city,
          notes:     form.notes || 'None',
        },
        EMAILJS_PUBLIC_KEY
      )
    } catch (err) {
      console.error('EmailJS error:', err)
      setEmailError(true)
    }

    setSending(false)
    setSubmitted(true)
  }

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
            Get In Touch
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Book Your{' '}
            <span className="text-gradient">Detail Today</span>
          </h1>
          <p className="text-white/60 max-w-md mx-auto">
            Fill in the form below and we'll get back to you — or reach out
            directly via WhatsApp for the fastest response.
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-5 gap-12">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                className="card hover:border-brand-blue/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm mb-1">{item.label}</div>
                    {item.lines.map((line) => (
                      <div key={line}>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-brand-blue text-sm transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          <span className="text-white/60 text-sm">{line}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/27610244139"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              Message Us on WhatsApp
            </a>

            {/* Service areas */}
            <div className="card bg-brand-blue/5 border-brand-blue/20">
              <p className="text-sm text-white/60 font-medium mb-2">Service Areas</p>
              <div className="flex gap-2">
                <span className="bg-brand-blue/20 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full">
                  Cape Town
                </span>
                <span className="bg-brand-blue/20 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full">
                  Johannesburg
                </span>
              </div>
            </div>
          </motion.div>

          {/* Booking form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card text-center py-16"
              >
                <CheckCircle2 size={56} className="text-green-400 mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Booking Received!
                </h3>
                <p className="text-white/60">
                  Your booking request has been emailed to the team.
                  We'll be in touch to confirm your slot.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="card space-y-5">
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  Book a Service
                </h3>

                {/* Name */}
                <div>
                  <label className="block text-sm text-white/70 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-blue transition-colors"
                  />
                </div>

                {/* Service + Vehicle */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/70 mb-1.5">Service *</label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-brand-slate border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-blue transition-colors"
                    >
                      <option value="">Select service</option>
                      <optgroup label="Main Services">
                        {MAIN_SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Elite Add-Ons">
                        {ADDON_SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-1.5">Vehicle Type *</label>
                    <select
                      name="vehicle"
                      required
                      value={form.vehicle}
                      onChange={handleChange}
                      className="w-full bg-brand-slate border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-blue transition-colors"
                    >
                      <option value="">Select type</option>
                      {vehicles.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Price preview */}
                {(() => {
                  const price = getPrice(form.service, form.vehicle, form.city)
                  if (price === null) return null
                  const isAddon = ADDON_PRICES[form.service] !== undefined
                  return (
                    <p className="text-brand-blue text-sm font-semibold -mt-1">
                      Estimated price: R{price}
                      {isAddon && (
                        <span className="text-white/40 font-normal ml-1">
                          (flat rate — all vehicle types)
                        </span>
                      )}
                    </p>
                  )
                })()}

                {/* Date + City */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/70 mb-1.5">Preferred Date *</label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={form.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-blue transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/70 mb-1.5">City *</label>
                    <select
                      name="city"
                      required
                      value={form.city}
                      onChange={handleChange}
                      className="w-full bg-brand-slate border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-brand-blue transition-colors"
                    >
                      <option value="">Select city</option>
                      <option value="Cape Town">Cape Town</option>
                      <option value="Johannesburg">Johannesburg</option>
                    </select>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm text-white/70 mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="e.g. 082 123 4567"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-blue transition-colors"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm text-white/70 mb-1.5">Physical Address *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Where should we come to?"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-blue transition-colors"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm text-white/70 mb-1.5">Notes (Optional)</label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any specific requests or notes?"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-blue transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {sending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                  {sending ? 'Sending...' : 'Send Booking Request'}
                </button>

                {emailError && (
                  <p className="text-xs text-yellow-400/80 text-center">
                    Email delivery failed. Please contact us directly via WhatsApp or phone.
                  </p>
                )}

                <p className="text-xs text-white/40 text-center">
                  Your booking request will be emailed directly to the team.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
