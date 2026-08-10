import type { ThemeMode } from '../hooks/useTheme'

interface ThemeToggleProps {
  mode: ThemeMode
  onCycle: () => void
}

const labels: Record<ThemeMode, string> = {
  light: 'Light',
  dark: 'Dark',
  system: 'System',
}

const icons: Record<ThemeMode, string> = {
  light: '☀',
  dark: '☾',
  system: '◐',
}

export function ThemeToggle({ mode, onCycle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onCycle}
      className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/60 px-3 py-2 text-sm font-medium text-slate-700 backdrop-blur-sm transition hover:bg-white/90 dark:border-slate-700/60 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:bg-slate-800/90"
      title={`Theme: ${labels[mode]}`}
      aria-label={`Theme: ${labels[mode]}. Click to cycle.`}
    >
      <span className="text-base leading-none">{icons[mode]}</span>
      <span className="hidden sm:inline">{labels[mode]}</span>
    </button>
  )
}
