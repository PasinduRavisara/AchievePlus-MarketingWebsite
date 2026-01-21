'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Animated Background Orbs */}
      <div className={styles.orbContainer}>
        <motion.div
          className={`${styles.orb} ${styles.orb1}`}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`${styles.orb} ${styles.orb2}`}
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`${styles.orb} ${styles.orb3}`}
          animate={{
            x: [0, 60, 0],
            y: [0, 60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Lines Background */}
      <div className={styles.gridBg} />

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge */}
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
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
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className={styles.titleLine}>Want to earn rewards</span>
            <span className={styles.titleLine}>while boosting</span>
            <span className={styles.titleHighlight}>productivity?</span>
          </motion.h1>

          {/* Brand Name */}
          <motion.div
            className={styles.brandWrapper}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className={styles.brandName}>
              <span className={styles.brandOutline}>ACHIEVE</span>
              <span className={styles.brandPlus}>+</span>
            </h2>
            <motion.div
              className={styles.brandGlow}
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            The gamified task management platform that transforms work into an 
            engaging experience with points, rewards, and achievements.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.a
              href="#quote"
              className={styles.ctaPrimary}
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0, 212, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Book a Demo</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
            <motion.a
              href="#features"
              className={styles.ctaSecondary}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore Features</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Hero Image/Banner */}
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
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
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className={styles.scrollMouse}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className={styles.scrollWheel} />
          </motion.div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
