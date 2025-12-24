export default function TestimonialCard({ name, message }) {
  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow">
      <p className="text-gray-600 dark:text-gray-300">“{message}”</p>
      <p className="mt-4 font-semibold text-gray-900 dark:text-white">
        — {name}
      </p>
    </div>
  )
}
