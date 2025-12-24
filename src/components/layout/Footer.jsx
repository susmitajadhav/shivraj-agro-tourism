import { SITE } from '../../config/site'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold text-white">{SITE.name}</h3>
          <p className="mt-2 text-sm">{SITE.tagline}</p>
        </div>

        <div className="text-sm md:text-right">
          <p>© {new Date().getFullYear()} {SITE.name}</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
