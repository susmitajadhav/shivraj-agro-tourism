export default function CardSkeleton() {
  return (
    <div className="animate-pulse bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow">
      <div className="h-56 bg-gray-200 dark:bg-slate-700" />
      <div className="p-6 space-y-4">
        <div className="h-4 w-2/3 bg-gray-200 dark:bg-slate-700 rounded" />
        <div className="h-3 w-full bg-gray-200 dark:bg-slate-700 rounded" />
        <div className="h-3 w-5/6 bg-gray-200 dark:bg-slate-700 rounded" />
      </div>
    </div>
  )
}
