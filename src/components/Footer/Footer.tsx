'use client';

import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/14tfsnS3Fo/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M13 7H11.5C10.6716 7 10 7.67157 10 8.5V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 11H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/achieveplus01?igsh=MTJwdjhibmhjajhnbA==',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14.5" cy="5.5" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/achieveplus2025',
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 9V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 13V10.5C10 9.67157 10.6716 9 11.5 9C12.3284 9 13 9.67157 13 10.5V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="7" cy="7" r="0.75" fill="currentColor"/>
      </svg>
    ),
  },
];

const footerLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Our Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.gradientLine} />
      
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Brand Section */}
          <div className={styles.brand}>
            <a href="#home" className={styles.logo}>
              <span className={styles.logoText}>Achieve</span>
              <span className={styles.logoPlus}>+</span>
            </a>
            <p className={styles.tagline}>
              Revolutionizing productivity through gamification. Work hard, get rewarded.
            </p>
            
            {/* Social Links */}
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.links}>
            <h4 className={styles.linkTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className={styles.link}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <h4 className={styles.linkTitle}>Contact</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="mailto:achieveplus01@gmail.com" className={styles.link}>
                  achieveplus01@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+94777623119" className={styles.link}>
                  +(94) 77 762 3119
                </a>
              </li>
              <li>
                <span className={styles.linkMuted}>
                  Informatics Institute of Technology
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Achieve+. Developed by{' '}
            <span className={styles.highlight}>SDGP SE-74</span>
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={styles.backToTop}
            aria-label="Back to top"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 16V4M10 4L5 9M10 4L15 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
