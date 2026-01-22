'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Static Background Orbs - CSS animations only for performance */}
      <div className={styles.orbContainer}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
      </div>

      {/* Grid Lines Background */}
      <div className={styles.gridBg} />

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge */}
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className={styles.badgeDot} />
            <span>Revolutionize Your Productivity</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className={styles.titleLine}>Want to earn rewards</span>
            <span className={styles.titleLine}>while boosting</span>
            <span className={styles.titleHighlight}>productivity?</span>
          </motion.h1>

          {/* Brand Name */}
          <motion.div
            className={styles.brandWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className={styles.brandName}>
              <span className={styles.brandOutline}>ACHIEVE</span>
              <span className={styles.brandPlus}>+</span>
            </h2>
            <div className={styles.brandGlow} />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            The gamified task management platform that transforms work into an 
            engaging experience with points, rewards, and achievements.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="#quote" className={styles.ctaPrimary}>
              <span>Get Started</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#features" className={styles.ctaSecondary}>
              <span>Explore Features</span>
            </a>
          </motion.div>
        </div>

        {/* Hero Image/Banner */}
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className={styles.imageGlow} />
          <img
            src="/assets/Team.webp"
            alt="ACHIEVE+ Team Collaboration"
            className={styles.heroImage}
          />
          <div className={styles.imageOverlay} />
        </motion.div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel} />
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
