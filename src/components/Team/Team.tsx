'use client';

import { motion } from 'framer-motion';
import styles from './Team.module.css';

const teamMembers = [
  { name: 'Pasindu Ravisara', role: 'Team Leader', image: '/team/Pasindu.png' },
  { name: 'Shevon Kahandawita', role: 'Project Manager', image: '/team/Shevon.jpeg' },
  { name: 'Devdun Fernando', role: 'Developer', image: '/team/Devdun.png' },
  { name: 'Minthaj Ameer', role: 'QA Engineer', image: '/team/Minthaj.png' },
  { name: 'Nadishi Christina', role: 'Developer', image: '/team/Nadishi.jpg' },
  { name: 'Nadini Nuwansa', role: 'Developer', image: '/team/Nadini.png' },
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
  hidden: { opacity: 0, y: 40, scale: 0.9 },
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

export default function Team() {
  return (
    <section id="team" className={styles.team}>
      {/* Background Elements */}
      <div className={styles.bgGradient} />
      
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>Our Team</span>
          <h2 className={styles.title}>
            Meet the <span className={styles.highlight}>Minds</span> Behind ACHIEVE+
          </h2>
          <p className={styles.subtitle}>
            A passionate team of developers and designers dedicated to revolutionizing productivity.
          </p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className={styles.card}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3 }
              }}
            >
              <div className={styles.cardInner}>
                <div className={styles.imageWrapper}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay} />
                  <div className={styles.imageGlow} />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <span className={styles.role}>{member.role}</span>
                </div>
              </div>
              <div className={styles.cardBorder} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
