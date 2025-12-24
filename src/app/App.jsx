import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import AppRouter from './Router'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <AppRouter />
      </main>
      <Footer />
    </div>
  )
}
