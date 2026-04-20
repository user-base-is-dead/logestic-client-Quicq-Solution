import { Link } from 'react-router-dom'
import {
  Target, Eye, Heart, Award, Users, TrendingUp,
  BadgeCheck, Truck, Clock, ChevronRight
} from 'lucide-react'
import './About.css'

export default function About() {
  return (
    <main className="about-page">
      {/* Banner */}
      <section className="page-banner" id="about-banner">
        <img src="/images/hero_bg.png" alt="" className="page-banner-bg" />
        <div className="page-banner-content">
          <h1>About Us</h1>
          <p>Know more about Quicq Solution and our journey in Mumbai</p>
          <div className="page-banner-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={16} />
            <span>About</span>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="about-story section" id="about-story">
        <div className="container about-story-grid">
          <div className="about-story-img-wrap">
            <img src="/images/about_img.png" alt="Our delivery team" className="about-story-img" />
            <div className="about-story-experience animate-float">
              <span className="about-story-exp-num">5+</span>
              <span className="about-story-exp-text">Years in Mumbai</span>
            </div>
          </div>
          <div className="about-story-content">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Moving Mumbai, One Delivery at a Time</h2>
            <p className="about-story-text">
              For over 5 years, Quicq Solution has been the trusted local logistics partner for businesses
              across Mumbai. We started with a handful of carry vans and a simple mission: make local
              delivery fast, affordable, and stress-free. Today, our fleet of trucks and vans moves
              thousands of parcels every month across every zone in the city.
            </p>
            <p className="about-story-text">
              We understand Mumbai's streets, its traffic, and what it takes to get your goods delivered
              on time. Whether it's a stack of parcels from your e-commerce shop or a full truckload
              from your factory, our team handles every shipment with care, GPS tracking, and a
              commitment to on-time delivery.
            </p>
            <div className="about-story-highlights">
              {['GPS-Tracked Fleet', 'Same-Day Delivery', 'Dedicated Support Team', 'All Mumbai Zones Covered'].map((item, i) => (
                <div className="about-highlight" key={i}>
                  <BadgeCheck size={20} className="about-highlight-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="about-mvv section" id="about-mission">
        <div className="container">
          <div className="about-mvv-grid">
            {[
              {
                icon: <Target size={36} />,
                title: 'Our Mission',
                text: 'To provide the fastest, most reliable, and most affordable local delivery and logistics solutions for businesses and individuals across Mumbai using our fleet of trucks and carry vans.',
              },
              {
                icon: <Eye size={36} />,
                title: 'Our Vision',
                text: 'To become Mumbai\'s most trusted last-mile delivery partner — known for on-time performance, transparent pricing, and a dedicated fleet that reaches every corner of the city.',
              },
              {
                icon: <Heart size={36} />,
                title: 'Our Values',
                text: 'Reliability, speed, transparency, and care for every parcel. We treat your shipment like our own and believe in building long-term partnerships through honest, dependable service.',
              },
            ].map((item, i) => (
              <div className="about-mvv-card glass-card" key={i}>
                <div className="about-mvv-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats" id="about-stats">
        <div className="container about-stats-grid">
          {[
            { icon: <Truck size={28} />, value: '50+', label: 'Trucks & Vans' },
            { icon: <Users size={28} />, value: '10,000+', label: 'Deliveries Done' },
            { icon: <Award size={28} />, value: '500+', label: 'Happy Clients' },
            { icon: <Clock size={28} />, value: '98%', label: 'On-Time Rate' },
          ].map((stat, i) => (
            <div className="about-stat" key={i}>
              <div className="about-stat-icon">{stat.icon}</div>
              <span className="about-stat-value">{stat.value}</span>
              <span className="about-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline section" id="about-timeline">
        <div className="container">
          <div className="about-timeline-header">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Milestones That Define Us</h2>
          </div>
          <div className="about-timeline-track">
            {[
              { year: '2021', title: 'Founded in Mumbai', desc: 'Quicq Solution started operations with 5 carry vans in Malad West, Mumbai.' },
              { year: '2022', title: 'Fleet Expansion', desc: 'Grew our fleet to 20+ vehicles — added mini trucks for bulk and heavy deliveries.' },
              { year: '2023', title: 'Tech-Enabled Tracking', desc: 'Launched real-time GPS tracking and automated dispatch for all deliveries.' },
              { year: '2024', title: 'City-Wide Coverage', desc: 'Expanded coverage to all Mumbai zones — Thane, Navi Mumbai, and beyond.' },
              { year: '2025', title: '10K+ Deliveries', desc: 'Crossed 10,000 successful deliveries with a 98% on-time delivery rate.' },
            ].map((item, i) => (
              <div className={`about-timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} key={i}>
                <div className="about-timeline-dot" />
                <div className="about-timeline-card glass-card">
                  <span className="about-timeline-year">{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta" id="about-cta">
        <div className="container about-cta-content">
          <h2>Need Reliable Delivery in Mumbai?</h2>
          <p>Whether it's a single parcel or a full truckload, we'll get it there — fast and safe.</p>
          <Link to="/contact" className="btn btn-primary">
            Get in Touch <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
