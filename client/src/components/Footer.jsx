import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact Us', to: '/contact' },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/combatproclean',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/combatproclean',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@combatproclean',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.5a8.18 8.18 0 0 0 4.78 1.52V6.56a4.85 4.85 0 0 1-1.01.13z" />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: 'https://www.x.com/combatproclean',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-brand-gray/30 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <img src="/logo.png" alt="Combat Pro Clean" className="h-10 w-auto object-contain" />
              <div className="text-xl font-display font-bold">
                <span className="text-gradient">COMBAT</span>
                <span className="text-white"> PRO CLEAN</span>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs mb-6">
              Premium mobile vehicle detailing at your home or office. Cape Town &
              Johannesburg.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-brand-blue hover:border-brand-blue/40 flex items-center justify-center transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/55 hover:text-brand-blue text-sm transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/27610244139"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/55 hover:text-brand-blue text-sm transition-colors duration-200"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-white/55">
                <Phone size={15} className="text-brand-blue mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+27614060330" className="hover:text-brand-blue transition-colors block">
                    061 406 0330
                  </a>
                  <a href="tel:+27610244139" className="hover:text-brand-blue transition-colors block">
                    061 024 4139
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/55">
                <Mail size={15} className="text-brand-blue mt-0.5 shrink-0" />
                <a
                  href="mailto:info@combatproclean.co.za"
                  className="hover:text-brand-blue transition-colors"
                >
                  info@combatproclean.co.za
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/55">
                <MapPin size={15} className="text-brand-blue mt-0.5 shrink-0" />
                <span>19 Pinetree Avenue, Claremont</span>
              </li>
              <li>
                <a
                  href="https://wa.me/27610244139"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200"
                >
                  <MessageCircle size={15} />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Service areas */}
        <div className="border-t border-white/10 pt-8 mb-6">
          <p className="text-white/40 text-sm text-center">
            <span className="text-white/60 font-medium">Service Areas:</span>{' '}
            Cape Town &amp; Johannesburg, South Africa
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/30">
          <span>© {new Date().getFullYear()} Combat Pro Clean. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <span>@combatproclean</span>
            <span className="text-white/10">·</span>
            <span>
              Built by{' '}
              <a
                href="https://zimatik.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:text-sky-400 transition-colors duration-200"
              >
                Zimatik Digital Systems
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
