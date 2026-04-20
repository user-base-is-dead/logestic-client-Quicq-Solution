import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react'

const WhatsApp = ({ size = 24, color = "currentColor", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)
import './Footer.css'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/images/logo.png" alt="Quicq Solution" className="footer-logo-img" />
              <span className="footer-logo-text">
                Quicq<span className="logo-accent"> Solution</span>
              </span>
            </Link>
            <p className="footer-desc">
              Mumbai's trusted logistics partner — delivering parcels, goods, and bulk orders across the city with our fleet of trucks and carry vans.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="WhatsApp" className="footer-social-link"><WhatsApp size={18} /></a>
              <a href="#" aria-label="Facebook" className="footer-social-link"><Facebook size={18} /></a>
              <a href="#" aria-label="Twitter" className="footer-social-link"><Twitter size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="footer-social-link"><Linkedin size={18} /></a>
              <a href="#" aria-label="Instagram" className="footer-social-link"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="/#services">Our Services</a></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul>
              <li><a href="#">Truck Delivery</a></li>
              <li><a href="#">Carry Van Service</a></li>
              <li><a href="#">Warehousing</a></li>
              <li><a href="#">Same-Day Delivery</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Get in Touch</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={18} className="footer-contact-icon" />
                <span>305/306, 3rd Floor, Evershine Mall, Chincholi Bunder Road, Malad West, Mumbai – 400064</span>
              </li>
              <li>
                <Phone size={18} className="footer-contact-icon" />
                <a href="tel:+918850935796">+91 88509 35796</a>
              </li>
              <li>
                <Mail size={18} className="footer-contact-icon" />
                <a href="mailto:info@quicqsolution.com">info@quicqsolution.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Quicq Solution. All Rights Reserved.</p>
          <button className="footer-scroll-top" onClick={scrollToTop} aria-label="Scroll to top" id="scroll-top-btn">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}
