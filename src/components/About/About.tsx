'use client';

import { motion } from 'framer-motion';
import styles from './About.module.css';

const cards = [
  {
    id: 'problem',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 10V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="21" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: 'The Problem',
    description: 'Traditional task management systems often fail to keep employees engaged and motivated. Employees may struggle with procrastination, lack of incentives, and burnout, leading to decreased productivity and job dissatisfaction.',
    gradient: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%)',
    borderColor: 'rgba(239, 68, 68, 0.2)',
    iconBg: 'rgba(239, 68, 68, 0.1)',
    iconColor: '#ef4444',
  },
  {
    id: 'solution',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M11 16L14 19L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Our Solution',
    description: 'Achieve+ transforms task management into an engaging and rewarding experience through gamification. Employees earn points, unlock achievements, and receive rewards for completing tasks efficiently. Features like burnout prevention, leaderboards, and real-time analytics ensure sustained productivity and motivation.',
    gradient: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(20, 184, 166, 0.05) 100%)',
    borderColor: 'rgba(0, 212, 255, 0.2)',
    iconBg: 'rgba(0, 212, 255, 0.1)',
    iconColor: '#00d4ff',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>
            Why <span className={styles.highlight}>ACHIEVE+</span>?
          </h2>
          <p className={styles.subtitle}>
            We identified the core challenges in workplace productivity and built the perfect solution.
          </p>
        </motion.div>

        <motion.div
          className={styles.cards}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className={styles.card}
              variants={cardVariants}
              style={{
                background: card.gradient,
                borderColor: card.borderColor,
              }}
              whileHover={{ 
                y: -8,
                boxShadow: `0 20px 40px -20px ${card.borderColor}`,
              }}
            >
              <div
                className={styles.iconWrapper}
                style={{ 
                  background: card.iconBg,
                  color: card.iconColor,
                }}
              >
                {card.icon}
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
