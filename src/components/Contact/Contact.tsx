'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isHighlighted, setIsHighlighted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsHighlighted(true);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => setIsHighlighted(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // EmailJS Configuration
    const SERVICE_ID = 'AchievePlus_Contact';
    const TEMPLATE_ID = 'AchievePlus_Contact_Us';
    const PUBLIC_KEY = 'EvNTcWB6AEHQdvBCF';

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_name: 'Achieve+ Team',
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
          reply_to: formState.email,
        },
        PUBLIC_KEY
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMessage('Failed to send message. Please try again later.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left Side - Info */}
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.label}>Contact Us</span>
            <h2 className={styles.title}>
              We Value Your 
              <span className={styles.highlight}> Feedback</span>
            </h2>
            <p className={styles.description}>
              Let us know how we&apos;re doing. Your feedback helps us improve our services 
              and build a better product for you.
            </p>

            {/* Contact Details */}
            <div className={styles.contactDetails}>
              <a href="#" onClick={handleEmailClick} className={styles.contactItem} role="button">
                <div className={styles.contactIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 4H17V16H3V4Z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M3 4L10 10L17 4" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>achieveplus01@gmail.com</span>
                </div>
              </a>

              <a href="https://wa.me/94777623119" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 3H8L10 7L7.5 8.5C8.57 10.67 10.33 12.43 12.5 13.5L14 11L18 13V17C18 17.5523 17.5523 18 17 18C9.26801 18 3 11.732 3 4C3 3.44772 3.44772 3 4 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.contactLabel}>Phone</span>
                  <span className={styles.contactValue}>+(94) 77 762 3119</span>
                </div>
              </a>

              <a href="https://maps.app.goo.gl/xniu5BNxEYZG1Znp9" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M10 2C6.134 2 3 5.134 3 9C3 13.866 10 18 10 18C10 18 17 13.866 17 9C17 5.134 13.866 2 10 2Z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.contactLabel}>Location</span>
                  <span className={styles.contactValue}>Informatics Institute of Technology</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            ref={formRef}
            className={`${styles.formWrapper} ${isHighlighted ? styles.highlighted : ''}`}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.formLabel}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Share your thoughts with us..."
                  rows={5}
                  required
                  className={styles.formTextarea}
                />
              </div>

              <motion.button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className={styles.loading}>
                    <span className={styles.loadingDot} />
                    <span className={styles.loadingDot} />
                    <span className={styles.loadingDot} />
                  </span>
                ) : isSubmitted ? (
                  <>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Sent Successfully!
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </motion.button>
              {errorMessage && (
                <p style={{ color: '#ef4444', fontSize: '0.9rem', marginTop: '1rem', textAlign: 'center' }}>
                  {errorMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
