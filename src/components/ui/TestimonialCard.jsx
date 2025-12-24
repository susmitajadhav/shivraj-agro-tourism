import { motion } from 'framer-motion'

export default function TestimonialCard({ name, message, image }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="relative bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
    >
      {/* Quote mark */}
      <span className="absolute top-4 right-6 text-6xl text-blue-500/10">
        “
      </span>

      {/* Message */}
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {message}
      </p>

      {/* User */}
      <div className="mt-6 flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">
            {name}
          </p>
          <p className="text-sm text-blue-600">
            Verified Visitor
          </p>
        </div>
      </div>
    </motion.div>
  )
}
