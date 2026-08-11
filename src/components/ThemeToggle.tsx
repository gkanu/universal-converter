import { themeOptions, type ThemeMode } from '../hooks/useTheme'

interface ThemeToggleProps {
  mode: ThemeMode
  onChange: (mode: ThemeMode) => void
}

export function ThemeToggle({ mode, onChange }: ThemeToggleProps) {
  const activeTheme = themeOptions.find((theme) => theme.id === mode) ?? themeOptions[0]

  return (
    <label
      className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/60 px-3 py-2 text-sm font-medium text-slate-700 backdrop-blur-sm transition hover:bg-white/90 dark:border-slate-700/60 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:bg-slate-800/90"
      title={`Theme: ${activeTheme.label}`}
    >
      <span className="text-base leading-none" aria-hidden="true">
        {activeTheme.icon}
      </span>
      <span className="sr-only">Theme</span>
      <span className="relative flex items-center">
        <select
          value={mode}
          onChange={(event) => onChange(event.target.value as ThemeMode)}
          className="theme-select w-[5.5rem] cursor-pointer appearance-none bg-transparent pr-4 text-sm font-medium text-slate-700 outline-none dark:text-slate-100 sm:w-[6.5rem]"
          aria-label="Choose theme"
        >
          {themeOptions.map((theme) => (
            <option key={theme.id} value={theme.id}>
              {theme.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-0 text-xs opacity-60" aria-hidden="true">
          ▾
        </span>
      </span>
    </label>
  )
}
