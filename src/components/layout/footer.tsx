import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-primary)] text-white pt-20 pb-8 px-8 border-t border-blue-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand & Credentials */}
        <div className="lg:col-span-2">
          <div className="font-heading font-bold text-3xl mb-4 text-[var(--color-accent)]">
            CALIBER
          </div>
          <p className="text-white/80 text-sm leading-relaxed max-w-md mb-6">
            Executing critical electrical infrastructure, substations, and transmission lines for India's growth. Dedicated to precision, quality, and on-time project delivery.
          </p>
          <div className="bg-white/10 p-4 rounded-sm border border-white/20 inline-block">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-2">Registration Details</h4>
            <div className="text-sm font-medium text-white/90 space-y-1">
              <p>TS GSTIN: <span className="font-numbers">36AJBPP0515D1ZR</span></p>
              <p>AP GSTIN: <span className="font-numbers">37AJBPP0515D2ZO</span></p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li><a href="#about" className="hover:text-[var(--color-accent)] transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-[var(--color-accent)] transition-colors">Core Capabilities</a></li>
            <li><a href="#projects" className="hover:text-[var(--color-accent)] transition-colors">Featured Projects</a></li>
            <li><a href="#stats" className="hover:text-[var(--color-accent)] transition-colors">Financial Scale</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-6">Head Quarters</h4>
          <ul className="space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[var(--color-secondary)] shrink-0" />
              <span>
                H.No.1-5-55/1/G1, Sai Darshan Apartments, V.V.Nagar, Street No. 8, Habsiguda, Hyderabad, Telangana, 500007
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[var(--color-secondary)] shrink-0" />
              <span>+91 9959045620<br/>+91 7306314090</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[var(--color-secondary)] shrink-0" />
              <a href="mailto:caliberinfrastructure@gmail.com" className="hover:text-[var(--color-accent)] transition-colors">
                caliberinfrastructure@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
        <p>© {currentYear} Caliber Infrastructure. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}