import { motion } from 'framer-motion'

export default function AttractionCard({ title, description, image }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.article>
  )
}
