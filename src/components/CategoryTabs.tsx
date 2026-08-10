import type { Category, CategoryId } from '../lib/units'

interface CategoryTabsProps {
  categories: Category[]
  active: CategoryId
  onChange: (id: CategoryId) => void
}

export function CategoryTabs({ categories, active, onChange }: CategoryTabsProps) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {categories.map((cat) => {
        const isActive = cat.id === active
        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onChange(cat.id)}
            className={`flex items-center justify-center gap-2 rounded-2xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
              isActive
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/25'
                : 'border border-slate-200/80 bg-white/50 text-slate-600 backdrop-blur-sm hover:bg-white/80 dark:border-slate-700/60 dark:bg-slate-800/40 dark:text-slate-300 dark:hover:bg-slate-800/70'
            }`}
          >
            <span className="text-base leading-none">{cat.icon}</span>
            <span className="truncate">{cat.label}</span>
          </button>
        )
      })}
    </div>
  )
}
