import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, ArrowRight, X } from 'lucide-react'
import gsap from 'gsap'
import { useLenis } from './SmoothScroller'
import './Navbar.css'

const NAV_ITEMS = [
  { label: 'Home', to: '/', num: '01' },
  { label: 'About', to: '/about', num: '02' },
  { label: 'Services', to: '/#services', num: '03' },
  { label: 'Contact', to: '/contact', num: '04' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isAnimating = useRef(false)
  const lenisRef = useLenis()

  // Refs
  const menuRef = useRef(null)
  const linkItemsRef = useRef([])
  const linkLinesRef = useRef([])
  const footerRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const line3Ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    if (isOpen) closeMenu()
  }, [location])

  const openMenu = useCallback(() => {
    if (isAnimating.current) return
    isAnimating.current = true
    setIsOpen(true)
    // Stop Lenis scroll while menu is open
    if (lenisRef?.current) lenisRef.current.stop()

    const tl = gsap.timeline({
      onComplete: () => { isAnimating.current = false }
    })

    // Show menu container and animate via clipPath
    gsap.set(menuRef.current, { display: 'flex', clipPath: 'inset(0 0 100% 0)' })

    tl.to(menuRef.current, {
      clipPath: 'inset(0 0 0% 0)', duration: 0.6, ease: 'power4.inOut'
    })

    // Stagger link items with a slide-up + fade
    .fromTo(linkItemsRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' },
      '-=0.3'
    )

    // Animate separator lines
    .fromTo(linkLinesRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.4, stagger: 0.06, ease: 'power2.out', transformOrigin: 'left' },
      '-=0.4'
    )

    // Footer section
    .fromTo(footerRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' },
      '-=0.3'
    )

    // Burger → X
    const iconTl = gsap.timeline()
    iconTl.to(line2Ref.current, { scaleX: 0, duration: 0.15, ease: 'power2.in' })
      .to(line1Ref.current, { y: 6, rotation: 45, transformOrigin: 'center', duration: 0.35, ease: 'back.out(1.7)' }, 0.1)
      .to(line3Ref.current, { y: -6, rotation: -45, transformOrigin: 'center', duration: 0.35, ease: 'back.out(1.7)' }, 0.1)
  }, [])

  const closeMenu = useCallback(() => {
    if (isAnimating.current) return
    isAnimating.current = true

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(menuRef.current, { display: 'none' })
        setIsOpen(false)
        isAnimating.current = false
        // Resume Lenis scroll
        if (lenisRef?.current) lenisRef.current.start()
      }
    })

    // Reverse: fade items out, then clip panel away
    tl.to([...linkItemsRef.current, footerRef.current], {
      y: -40, opacity: 0, duration: 0.3, stagger: 0.04, ease: 'power2.in'
    })
    .to(linkLinesRef.current, { scaleX: 0, duration: 0.2, ease: 'power2.in' }, '-=0.2')
    .to(menuRef.current, {
      clipPath: 'inset(0 0 100% 0)', duration: 0.5, ease: 'power4.inOut'
    }, '-=0.1')

    // X → Burger
    const iconTl = gsap.timeline()
    iconTl.to([line1Ref.current, line3Ref.current], { rotation: 0, y: 0, duration: 0.3, ease: 'power2.inOut' })
      .to(line2Ref.current, { scaleX: 1, duration: 0.2, ease: 'power2.out' }, '-=0.1')
  }, [])

  const toggleMenu = () => {
    if (isOpen) closeMenu()
    else openMenu()
  }

  const setLinkRef = (i) => (el) => {
    if (el) linkItemsRef.current[i] = el
  }
  const setLineRef = (i) => (el) => {
    if (el) linkLinesRef.current[i] = el
  }

  return (
    <>
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} id="main-nav">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo" id="nav-logo">
          <img src="/images/logo.png" alt="Quicq Solution" className="navbar-logo-img" />
          <span className="navbar-logo-text">
            Quicq<span className="logo-accent"> Solution</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="navbar-links-desktop" id="nav-links-desktop">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              {item.to.startsWith('/#') ? (
                <a href={item.to} className={location.pathname === '/' && location.hash === item.to.replace('/', '') ? 'active' : ''}>{item.label}</a>
              ) : (
                <Link to={item.to} className={location.pathname === item.to ? 'active' : ''}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <a href="tel:+918850935796" className="navbar-phone" id="nav-phone">
            <Phone size={18} />
            <span>+91 88509 35796</span>
          </a>
          <Link to="/contact" className="btn btn-primary navbar-cta" id="nav-cta">
            Get a Quote
          </Link>
        </div>

        {/* Burger Button */}
        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          id="nav-toggle"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <line ref={line1Ref} x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line ref={line2Ref} x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line ref={line3Ref} x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </nav>

    {/* Full-Screen Mobile Menu — rendered outside <nav> to avoid clipping */}
    <div className="mobile-menu" ref={menuRef}>
      {/* Close button inside the menu */}
      <button className="mobile-menu-close" onClick={closeMenu} aria-label="Close menu">
        <X size={28} />
      </button>
      <div className="mobile-menu-content">
        <ul className="mobile-menu-links">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.to}>
              <div className="mobile-menu-line" ref={setLineRef(i)} />
              <div className="mobile-menu-link-item" ref={setLinkRef(i)}>
                <span className="mobile-menu-num">{item.num}</span>
                {item.to.startsWith('/#') ? (
                  <a href={item.to} className={`mobile-menu-label ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>
                    {item.label}
                    <ArrowRight className="mobile-menu-arrow" size={24} />
                  </a>
                ) : (
                  <Link to={item.to} className={`mobile-menu-label ${location.pathname === item.to ? 'active' : ''}`} onClick={closeMenu}>
                    {item.label}
                    <ArrowRight className="mobile-menu-arrow" size={24} />
                  </Link>
                )}
              </div>
            </li>
          ))}
          <div className="mobile-menu-line" ref={setLineRef(NAV_ITEMS.length)} />
        </ul>

        <div className="mobile-menu-footer" ref={footerRef}>
          <a href="tel:+918850935796" className="mobile-menu-phone">
            <Phone size={18} />
            <span>+91 88509 35796</span>
          </a>
          <Link to="/contact" className="btn btn-primary mobile-menu-cta" onClick={closeMenu}>
            Get a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}
