import { Link } from 'react-router-dom'
import {
  ArrowRight, Zap, DollarSign, Warehouse, Package, TruckIcon, Shield,
  ClipboardCheck, Handshake, Rocket, Globe, BadgeCheck, TrendingUp,
  BarChart3, Star, ChevronRight, Clock, User, MapPin, ShieldCheck
} from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import './Home.css'

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img src="/images/hero_bg.png" alt="Delivery trucks fleet in Mumbai" />
        <div className="hero-overlay" />
      </div>
      <div className="container hero-content">
        <span className="hero-badge animate-fade-up">🚚 Mumbai's Trusted Logistics Partner</span>
        <h1 className="hero-title animate-fade-up">
          Fast & Reliable<br />
          <span className="hero-title-accent">Delivery Across Mumbai!</span>
        </h1>
        <p className="hero-subtitle animate-fade-up">
          From local pickups to doorstep deliveries, we move your parcels across Mumbai
          with our fleet of trucks and carry vans — quickly, safely, and affordably.
        </p>
        <div className="hero-buttons animate-fade-up">
          <a href="#services" className="btn btn-primary">
            Explore Our Services <ArrowRight size={18} />
          </a>
          <Link to="/contact" className="btn btn-secondary">
            Get a Quote
          </Link>
        </div>
      </div>

      <div className="hero-cards container">
        {[
          { icon: <Zap size={28} />, title: 'Same-Day Delivery', desc: 'Lightning-fast local deliveries across all Mumbai zones with real-time tracking.' },
          { icon: <DollarSign size={28} />, title: 'Affordable Rates', desc: 'Transparent, competitive pricing for truck and van deliveries — no hidden charges.' },
          { icon: <Warehouse size={28} />, title: 'Mini Warehousing', desc: 'Secure storage hubs across Mumbai for short-term and long-term inventory needs.' },
        ].map((card, i) => (
          <div className="hero-card glass-card" key={i} style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
            <div className="hero-card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── About Preview ─── */
function AboutPreview() {
  return (
    <section className="about-preview section" id="about-preview">
      <div className="container about-preview-grid">
        <div className="about-preview-img-wrap animate-fade-left">
          <img src="/images/about_img.png" alt="Loading parcels into delivery van" className="about-preview-img" />
          <div className="about-preview-badge animate-float">
            <span className="about-preview-badge-number">5+</span>
            <span className="about-preview-badge-text">Years in Mumbai</span>
          </div>
        </div>
        <div className="about-preview-content animate-fade-right">
          <span className="section-label">About Us</span>
          <h2 className="section-title">Mumbai's Go-To Partner For Local Logistics</h2>
          <p className="section-subtitle">
            For over 5 years, Quicq Solution has been powering last-mile and intra-city deliveries
            across Mumbai. Whether you need a single parcel picked up or a full truckload moved,
            our dedicated fleet of trucks and carry vans gets it done — on time, every time.
          </p>
          <div className="about-preview-features">
            {['Same-Day Delivery', 'GPS-Tracked Fleet', '24/7 Customer Support', 'All Mumbai Zones Covered'].map((f, i) => (
              <div className="about-preview-feature" key={i}>
                <BadgeCheck size={20} className="about-preview-feature-icon" />
                <span>{f}</span>
              </div>
            ))}
          </div>
          <Link to="/about" className="btn btn-primary">
            Learn More <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Services ─── */
function Services() {
  const services = [
    {
      num: '01',
      img: '/images/service_logistics.png',
      title: 'Truck & Van Delivery',
      desc: 'Full truckload (FTL), part-load, and carry van deliveries for parcels, goods, and bulk orders across every corner of Mumbai.',
    },
    {
      num: '02',
      img: '/images/service_warehouse.png',
      title: 'Warehousing & Distribution',
      desc: 'Mini warehousing hubs across Mumbai for secure storage, sorting, inventory management, and same-day distribution.',
    },
  ]

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services-header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">What We Do Best</h2>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-card-img">
                <img src={s.img} alt={s.title} />
                <div className="service-card-overlay" />
                <span className="service-card-num">{s.num}</span>
              </div>
              <div className="service-card-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a href="#" className="service-card-link">
                  Learn More <ChevronRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Process ─── */
function Process() {
  const steps = [
    { icon: <ClipboardCheck size={30} />, title: 'Book a Pickup', desc: 'Call us or book online — share pickup address, parcel details, and delivery location.' },
    { icon: <TruckIcon size={30} />, title: 'We Collect', desc: 'Our truck or carry van arrives at your doorstep to pick up the goods.' },
    { icon: <Shield size={30} />, title: 'Safe Transit', desc: 'We transport your shipment with GPS tracking and secure handling.' },
    { icon: <Rocket size={30} />, title: 'Delivered!', desc: 'Your parcel reaches the destination — same day or next day, guaranteed.' },
  ]

  return (
    <section className="process section" id="process">
      <div className="container">
        <div className="process-header">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Simple 4-Step Delivery</h2>
          <p className="section-subtitle">From pickup to delivery — here's how we get your goods moving across Mumbai.</p>
        </div>
        <div className="process-steps">
          {steps.map((step, i) => (
            <div className="process-step" key={i}>
              <div className="process-step-icon">{step.icon}</div>
              <div className="process-step-number">0{i + 1}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
              {i < steps.length - 1 && <div className="process-step-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Stats ─── */
function Stats() {
  const stats = [
    { value: 10000, suffix: '+', label: 'Deliveries Completed' },
    { value: 500, suffix: '+', label: 'Happy Clients' },
    { value: 50, suffix: '+', label: 'Trucks & Vans' },
    { value: 5, suffix: '+', label: 'Years in Mumbai' },
  ]

  const [counts, setCounts] = useState(stats.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          stats.forEach((stat, i) => {
            const duration = 2000
            const steps = 60
            const increment = stat.value / steps
            let current = 0
            const timer = setInterval(() => {
              current += increment
              if (current >= stat.value) {
                current = stat.value
                clearInterval(timer)
              }
              setCounts(prev => { const n = [...prev]; n[i] = Math.floor(current); return n })
            }, duration / steps)
          })
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section className="stats" id="stats" ref={ref}>
      <div className="container stats-grid">
        {stats.map((stat, i) => (
          <div className="stat-item" key={i}>
            <span className="stat-value">{counts[i].toLocaleString()}{stat.suffix}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── CTA Banner ─── */
function CtaBanner() {
  return (
    <section className="cta-banner" id="cta-banner">
      <img src="/images/cta_bg.png" alt="" className="cta-banner-bg" />
      <div className="cta-banner-overlay" />
      <div className="container cta-banner-content">
        <h2>Need Something Moved Across Mumbai?</h2>
        <p>From a single parcel to a full truckload — we've got you covered with fast, reliable delivery.</p>
        <Link to="/contact" className="btn btn-primary">
          Contact Now <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}

/* ─── Why Us ─── */
function WhyUs() {
  const benefits = [
    { icon: <MapPin size={32} />, title: 'All Mumbai Covered', desc: 'From Colaba to Virar, Thane to Navi Mumbai — we reach every pin code.' },
    { icon: <ShieldCheck size={32} />, title: 'Secure & Insured', desc: 'Every shipment is handled with care, fully tracked, and insured for your peace of mind.' },
    { icon: <TrendingUp size={32} />, title: 'Same-Day Options', desc: 'Need it there today? Our express truck and van fleet makes same-day delivery possible.' },
    { icon: <BarChart3 size={32} />, title: 'Transparent Pricing', desc: 'Upfront quotes with no hidden fees. Pay only for what you ship.' },
  ]

  return (
    <section className="why-us section" id="why-us">
      <div className="container">
        <div className="why-us-header">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">Your Reliable Delivery Partner In Mumbai</h2>
          <p className="section-subtitle">
            We combine a dedicated fleet of trucks and carry vans with real-time tracking and local expertise.
          </p>
        </div>
        <div className="why-us-grid">
          {benefits.map((b, i) => (
            <div className="why-us-card glass-card" key={i}>
              <div className="why-us-card-icon">{b.icon}</div>
              <h4>{b.title}</h4>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials ─── */
function Testimonials() {
  const reviews = [
    { name: 'Priya Nair', role: 'Shop Owner – Andheri', text: 'Quicq Solution picks up from my shop every day and delivers across Mumbai by evening. Their vans are always on time and my customers are happier than ever!' },
    { name: 'Santosh Yadav', role: 'Online Seller – Malad', text: 'I ship 50+ parcels daily through Quicq. Their carry vans come to my doorstep, and the GPS tracking lets me update my buyers instantly. Best local logistics!' },
    { name: 'Amit Sharma', role: 'Manufacturer – Bhiwandi', text: 'We needed reliable truck delivery from our factory to multiple Mumbai locations. Quicq handles full truckloads with zero damage and always on schedule.' },
    { name: 'Deepika Verma', role: 'E-commerce – Thane', text: 'From Thane to South Mumbai, they cover it all. Same-day delivery, affordable rates, and their support team is always just a call away. Highly recommend!' },
  ]
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActive(prev => (prev + 1) % reviews.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="testimonials-carousel">
          <div className="testimonial-card glass-card">
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="var(--color-orange-500)" color="var(--color-orange-500)" />)}
            </div>
            <p className="testimonial-text">"{reviews[active].text}"</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                <User size={24} />
              </div>
              <div>
                <h5>{reviews[active].name}</h5>
                <span>{reviews[active].role}</span>
              </div>
            </div>
          </div>
          <div className="testimonial-dots">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`testimonial-dot ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Blog ─── */
function Blog() {
  const posts = [
    { img: '/images/blog_thumb.png', date: 'Mar 10, 2026', title: 'How Local Logistics Is Changing E-Commerce in Mumbai', desc: 'Why same-day delivery by truck and van is becoming the new standard for Mumbai-based online sellers.' },
    { img: '/images/service_logistics.png', date: 'Mar 05, 2026', title: 'Truck vs Carry Van: Which Is Right For Your Business?', desc: 'A guide to choosing the right vehicle type for your delivery needs — from small parcels to bulk goods.' },
    { img: '/images/service_warehouse.png', date: 'Feb 28, 2026', title: 'Mini Warehousing: The Future of Urban Distribution', desc: 'How small warehouse hubs across Mumbai are cutting delivery times and costs for local businesses.' },
  ]

  return (
    <section className="blog section" id="blog">
      <div className="container">
        <div className="blog-header">
          <span className="section-label">Blog</span>
          <h2 className="section-title">Our Latest News & Blog</h2>
        </div>
        <div className="blog-grid">
          {posts.map((post, i) => (
            <div className="blog-card glass-card" key={i}>
              <div className="blog-card-img">
                <img src={post.img} alt={post.title} />
                <span className="blog-card-date"><Clock size={14} /> {post.date}</span>
              </div>
              <div className="blog-card-body">
                <h4>{post.title}</h4>
                <p>{post.desc}</p>
                <a href="#" className="blog-card-link">
                  Read More <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Home Page ─── */
export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <Services />
      <Process />
      <Stats />
      <CtaBanner />
      <WhyUs />
      <Testimonials />
      <Blog />
    </main>
  )
}
