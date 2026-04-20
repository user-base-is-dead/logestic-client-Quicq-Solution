import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronRight, Phone, Mail, MapPin, Clock,
  Send, MessageSquare, Facebook, Twitter, Linkedin, Instagram
} from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <main className="contact-page">
      {/* Banner */}
      <section className="page-banner" id="contact-banner">
        <img src="/images/hero_bg.png" alt="" className="page-banner-bg" />
        <div className="page-banner-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Get in touch today!</p>
          <div className="page-banner-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={16} />
            <span>Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-cards section" id="contact-info">
        <div className="container contact-cards-grid">
          {[
            { icon: <Phone size={28} />, title: 'Call Us', lines: ['+91 88509 35796', '+91 99999 88888'], color: 'blue' },
            { icon: <Mail size={28} />, title: 'Email Us', lines: ['info@quicqsolution.com', 'support@quicqsolution.com'], color: 'orange' },
            { icon: <MapPin size={28} />, title: 'Visit Us', lines: ['305/306, 3rd Floor, Evershine Mall,', 'Malad West, Mumbai – 400064'], color: 'green' },
            { icon: <Clock size={28} />, title: 'Working Hours', lines: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sun: Closed'], color: 'purple' },
          ].map((card, i) => (
            <div className={`contact-info-card glass-card contact-info-card-${card.color}`} key={i}>
              <div className={`contact-info-icon contact-info-icon-${card.color}`}>{card.icon}</div>
              <h4>{card.title}</h4>
              {card.lines.map((line, j) => <p key={j}>{line}</p>)}
            </div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="contact-main section" id="contact-form-section">
        <div className="container contact-main-grid">
          {/* Form */}
          <div className="contact-form-wrap">
            <span className="section-label">Send a Message</span>
            <h2 className="section-title">Get in Touch</h2>
            <p className="contact-form-desc">
              Whether you have a question about our services, franchise opportunities, or anything else — our team is ready to answer.
            </p>

            {submitted && (
              <div className="contact-success">
                <MessageSquare size={20} />
                <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
                </div>
                <div className="contact-field">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                </div>
              </div>
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                </div>
                <div className="contact-field">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" required />
                </div>
              </div>
              <div className="contact-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Tell us about your requirements..." required />
              </div>
              <button type="submit" className="btn btn-primary contact-submit" id="contact-submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          {/* Map / Sidebar */}
          <div className="contact-sidebar">
            <div className="contact-map glass-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.7014089774844!2d72.84089337534753!3d19.18692318205189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6ee8b31e7e7%3A0x1691e5d38c023e8a!2sEvershine%20Mall!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Quicq Solution Office Location"
              />
            </div>

            <div className="contact-social-card glass-card">
              <h4>Follow Us</h4>
              <p>Stay connected on social media for updates and offers.</p>
              <div className="contact-socials">
                <a href="#" className="contact-social-link" aria-label="Facebook"><Facebook size={20} /></a>
                <a href="#" className="contact-social-link" aria-label="Twitter"><Twitter size={20} /></a>
                <a href="#" className="contact-social-link" aria-label="LinkedIn"><Linkedin size={20} /></a>
                <a href="#" className="contact-social-link" aria-label="Instagram"><Instagram size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
