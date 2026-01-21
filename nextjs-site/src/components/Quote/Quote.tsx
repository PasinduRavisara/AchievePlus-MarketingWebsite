'use client';

import { motion } from 'framer-motion';
import styles from './Quote.module.css';

export default function Quote() {
  return (
    <section id="quote" className={styles.quote}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* App Screenshot */}
          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageGlow} />
              <img
                src="/assets/WebApplication.PNG"
                alt="ACHIEVE+ Web Application"
                className={styles.image}
              />
              <div className={styles.imageOverlay} />
            </div>
          </div>

          {/* Content Section */}
          <div className={styles.textSection}>
            <motion.span
              className={styles.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to Transform?
            </motion.span>
            
            <motion.h2
              className={styles.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Book a Session 
              <span className={styles.highlight}> with Us</span>
            </motion.h2>
            
            <motion.p
              className={styles.description}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Discover how Achieve+ can revolutionize your workflow. Book a session 
              with our experts for a personalized demo, or watch our demo video to 
              see the magic in action.
            </motion.p>

            <motion.div
              className={styles.buttons}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="/assets/AchievePlus.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 212, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M8 5L15 10L8 15V5Z" fill="currentColor"/>
                </svg>
                Watch Demo
              </motion.a>
              
              <motion.a
                href="mailto:achieveplus01@gmail.com"
                className={styles.btnSecondary}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 5H17V15H3V5Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M3 5L10 11L17 5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Book a Session
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className={styles.stats}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className={styles.stat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Happy Teams</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Satisfaction</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNumber}>2x</span>
                <span className={styles.statLabel}>Productivity</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
