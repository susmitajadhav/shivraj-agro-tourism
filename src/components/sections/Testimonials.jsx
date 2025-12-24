import { motion } from 'framer-motion'
import Section from '../ui/Section'
import TestimonialCard from '../ui/TestimonialCard'
import { TESTIMONIALS } from '../../config/testimonials'

export default function Testimonials() {
  return (
    <Section className="relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-slate-900/50 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white text-center">
          What Our Visitors Say
        </h2>

        <p className="mt-4 text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Thousands of families trust Shivraj Agro Tourism for safe,
          joyful, and memorable experiences.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
