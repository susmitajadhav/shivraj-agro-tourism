import clsx from 'clsx'

export default function Button({
  children,
  variant = 'primary',
  className,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-semibold px-6 py-3 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-brand'

  const variants = {
    primary:
      'bg-brand text-white hover:scale-105',
    outline:
      'border border-gray-300 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-800',
  }

  return (
    <button
      {...props}
      className={clsx(base, variants[variant], className)}
    >
      {children}
    </button>
  )
}
