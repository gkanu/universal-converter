import type { Unit } from '../lib/units'

interface UnitSelectProps {
  id: string
  label: string
  units: Unit[]
  value: string
  onChange: (unitId: string) => void
}

export function UnitSelect({ id, label, units, value, onChange }: UnitSelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full cursor-pointer appearance-none rounded-xl border border-slate-200/80 bg-white/70 px-4 py-3 text-sm font-medium text-slate-800 backdrop-blur-sm transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/30 dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-100"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2371717a' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 12px center',
          paddingRight: '2.5rem',
        }}
      >
        {units.map((unit) => (
          <option key={unit.id} value={unit.id}>
            {unit.name} ({unit.symbol})
          </option>
        ))}
      </select>
    </div>
  )
}
