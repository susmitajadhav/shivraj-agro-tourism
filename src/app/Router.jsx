import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

/* ---------------- Lazy Loaded Pages ---------------- */

// Core
const Home = lazy(() => import('../pages/Home'))
const Attractions = lazy(() => import('../pages/Attractions'))

// Phase 4
const Gallery = lazy(() => import('../pages/Gallery'))
const Pricing = lazy(() => import('../pages/Pricing'))
const Safety = lazy(() => import('../pages/Safety'))

// (Phase 5 – coming next)
const Contact = lazy(() => import('../pages/Contact'))

/* ---------------- Fallback Loader ---------------- */

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center text-gray-500">
      Loading…
    </div>
  )
}

/* ---------------- Router ---------------- */

export default function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Attractions */}
        <Route path="/attractions" element={<Attractions />} />

        {/* Phase 4 */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/safety" element={<Safety />} />

        {/* Phase 5 */}
        <Route path="/contact" element={<Contact />} />

        {/* Fallback */}
        <Route
          path="*"
          element={
            <div className="min-h-[60vh] flex items-center justify-center text-xl">
              Page Not Found
            </div>
          }
        />
      </Routes>
    </Suspense>
  )
}
