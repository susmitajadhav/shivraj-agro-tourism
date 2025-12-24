import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import Seo from '../seo/Seo'
import { SITE } from '../config/site'

import Section from '../components/ui/Section'
import Testimonials from '../components/sections/Testimonials'

export default function Home() {
  return (
    <>
      {/* SEO */}
      <Seo
        title={`${SITE.name} | Water Park, Amusement Park & Agro Tourism`}
        description={SITE.description}
      />

      {/* ================= HERO ================= */}
     <motion.section
  initial={{ scale: 1.08 }}
  animate={{ scale: 1 }}
  transition={{ duration: 1.2, ease: 'easeOut' }}
  className="relative min-h-screen flex items-center overflow-hidden bg-center bg-cover"
  style={{
    backgroundImage: "url('/images/hero/hero.png')",
  }}
>
  {/* Layered cinematic overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-sky-600/30" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="text-5xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg"
    >
      Shivraj Agro Tourism
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.7 }}
      className="mt-6 max-w-2xl text-lg md:text-xl text-white/90 leading-relaxed"
    >
      Water rides, thrilling amusement attractions, and authentic agro tourism
      experiences — crafted for unforgettable family memories.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="mt-10 flex flex-wrap gap-4"
    >
      <Link
        to="/attractions"
        className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition"
      >
        Explore Attractions
      </Link>

      <Link
        to="/contact"
        className="bg-blue-600/90 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:bg-blue-700 hover:scale-105 transition"
      >
        Book Your Visit
      </Link>
    </motion.div>
  </div>
</motion.section>

{/* ================= ABOUT PREVIEW ================= */}
<Section className="relative">
  <div className="grid gap-12 md:grid-cols-2 items-center">
    {/* Image */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative"
    >
      <img
        src="/images/about/about.png"
        alt="Agro tourism experience at Shivraj Agro Tourism"
        className="rounded-2xl shadow-xl w-full object-cover"
        loading="lazy"
      />
      {/* Decorative accent */}
      <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-blue-500/20 rounded-full blur-2xl" />
    </motion.div>

    {/* Content */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
        A Perfect Blend of <span className="text-blue-600">Fun</span>,{' '}
        <span className="text-green-600">Nature</span> &{' '}
        <span className="text-sky-600">Adventure</span>
      </h2>

      <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
        Shivraj Agro Tourism is thoughtfully designed for families,
        children, and adventure lovers who want more than just rides.
        From refreshing water attractions and thrilling amusement rides
        to peaceful agro tourism experiences, we offer a complete day
        filled with joy, relaxation, and unforgettable memories.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          to="/about"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:scale-105 transition"
        >
          Learn More About Us →
        </Link>

        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 border border-gray-300 dark:border-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-slate-800 transition"
        >
          View Gallery
        </Link>
      </div>
    </motion.div>
  </div>
</Section>


      {/* ================= TESTIMONIALS ================= */}
      <Testimonials />
    </>
  )
}
