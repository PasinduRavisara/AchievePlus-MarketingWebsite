'use client';

import { motion } from 'framer-motion';
import styles from './Features.module.css';

const features = [
  {
    id: 1,
    title: 'Task Assignment & Completion',
    description: 'Assign, track, and complete tasks seamlessly. Stay organized and boost your productivity!',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 14L12 17L19 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    size: 'large',
  },
  {
    id: 2,
    title: 'Progress Analysis',
    description: 'Real-time insights on task progress and performance metrics.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 21L10 15L14 19L24 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 9H24V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    size: 'small',
  },
  {
    id: 3,
    title: 'Leaderboard',
    description: 'Compete, climb the ranks, and get recognized!',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3L17 9L24 10L19 15L20 22L14 19L8 22L9 15L4 10L11 9L14 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    size: 'small',
  },
  {
    id: 4,
    title: 'Reward Store',
    description: 'Earn points for completed tasks and redeem exciting rewards. Work hard, get rewarded!',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M20 8H8C6.89543 8 6 8.89543 6 10V22C6 23.1046 6.89543 24 8 24H20C21.1046 24 22 23.1046 22 22V10C22 8.89543 21.1046 8 20 8Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M9 4L14 8L19 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="16" r="3" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    size: 'large',
  },
  {
    id: 5,
    title: 'Achievements & Badges',
    description: 'Unlock badges, earn points, and celebrate every milestone!',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 15L7 24L14 21L21 24L19 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    size: 'medium',
  },
  {
    id: 6,
    title: 'Break Notifications',
    description: 'Stay refreshed with timely water and stretch break reminders!',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7.5 6.5L9.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20.5 6.5L18.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 14H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M21 14H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 11V14L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    size: 'medium',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      {/* Background gradient orbs */}
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />

      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Features</span>
          <h2 className={styles.title}>
            Everything you need to 
            <span className={styles.highlight}> supercharge </span>
            your team
          </h2>
          <p className={styles.subtitle}>
            Powerful features designed to transform how your team works and collaborates.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className={`${styles.card} ${styles[feature.size]}`}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className={styles.cardInner}>
                <div className={styles.iconWrapper}>
                  {feature.icon}
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>
              <div className={styles.cardGlow} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
