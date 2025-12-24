import { motion } from 'framer-motion'

export default function Section({ children, className = '' }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`max-w-7xl mx-auto px-6 py-24 ${className}`}
    >
      {children}
    </motion.section>
  )
}
