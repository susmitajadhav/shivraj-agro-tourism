import { Sun, Moon } from 'lucide-react'
import useTheme from '../../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={() =>
        setTheme(theme === 'light' ? 'dark' : 'light')
      }
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition"
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  )
}
