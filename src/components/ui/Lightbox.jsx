import { motion } from 'framer-motion'

export default function Lightbox({ image, onClose }) {
  if (!image) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.img
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        src={image.src}
        alt={image.alt}
        className="max-w-[90vw] max-h-[90vh] rounded-xl"
      />
    </motion.div>
  )
}
