import { Link, NavLink } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useTheme from '../../hooks/useTheme'
import { SITE } from '../../config/site'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClass = scrolled
    ? 'bg-white/90 dark:bg-slate-950/90 shadow backdrop-blur'
    : 'bg-transparent'

  const linkClass =
    'relative px-1 py-2 text-sm font-medium transition'

  const activeClass =
    'text-blue-600 dark:text-blue-400 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-blue-500 after:rounded-full'

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all ${navClass}`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-lg font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          {SITE.name}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['/attractions', '/gallery', '/contact'].map((path, i) => {
            const label =
              path === '/attractions'
                ? 'Attractions'
                : path === '/gallery'
                ? 'Gallery'
                : 'Contact'

            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `${linkClass} ${
                    isActive ? activeClass : 'text-gray-700 dark:text-gray-300'
                  }`
                }
              >
                {label}
              </NavLink>
            )
          })}

          {/* Theme toggle */}
          <button
            aria-label="Toggle theme"
            onClick={() =>
              setTheme(theme === 'light' ? 'dark' : 'light')
            }
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed inset-0 z-50 bg-white dark:bg-slate-950"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b">
              <span className="font-bold">{SITE.name}</span>
              <button onClick={() => setOpen(false)}>
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col items-center gap-8 mt-16 text-lg">
              <NavLink to="/attractions" onClick={() => setOpen(false)}>
                Attractions
              </NavLink>
              <NavLink to="/gallery" onClick={() => setOpen(false)}>
                Gallery
              </NavLink>
              <NavLink to="/contact" onClick={() => setOpen(false)}>
                Contact
              </NavLink>

              <button
                onClick={() =>
                  setTheme(theme === 'light' ? 'dark' : 'light')
                }
                className="mt-8 p-3 rounded-full bg-gray-100 dark:bg-slate-800"
              >
                {theme === 'light' ? <Moon /> : <Sun />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
