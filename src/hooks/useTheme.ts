import { useCallback, useEffect, useState } from 'react'

export type ThemeMode =
  | 'system'
  | 'light'
  | 'dark'
  | 'ocean'
  | 'forest'
  | 'sunset'
  | 'lavender'
  | 'rose'
  | 'amber'
  | 'midnight'

export interface ThemeOption {
  id: ThemeMode
  label: string
  icon: string
  appearance: 'light' | 'dark' | 'system'
}

export const themeOptions: ThemeOption[] = [
  { id: 'system', label: 'System', icon: '◐', appearance: 'system' },
  { id: 'light', label: 'Light', icon: '☀', appearance: 'light' },
  { id: 'dark', label: 'Dark', icon: '☾', appearance: 'dark' },
  { id: 'ocean', label: 'Ocean', icon: '◉', appearance: 'dark' },
  { id: 'forest', label: 'Forest', icon: '♣', appearance: 'light' },
  { id: 'sunset', label: 'Sunset', icon: '◒', appearance: 'light' },
  { id: 'lavender', label: 'Lavender', icon: '✦', appearance: 'light' },
  { id: 'rose', label: 'Rose', icon: '●', appearance: 'light' },
  { id: 'amber', label: 'Amber', icon: '◆', appearance: 'light' },
  { id: 'midnight', label: 'Midnight', icon: '✧', appearance: 'dark' },
]

function isThemeMode(value: string | null): value is ThemeMode {
  return themeOptions.some((theme) => theme.id === value)
}

function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function resolveTheme(mode: ThemeMode): 'light' | 'dark' {
  if (mode === 'system') return getSystemTheme()
  return themeOptions.find((theme) => theme.id === mode)?.appearance === 'dark' ? 'dark' : 'light'
}

function applyTheme(mode: ThemeMode, resolved: 'light' | 'dark') {
  document.documentElement.classList.toggle('dark', resolved === 'dark')
  document.documentElement.dataset.theme = mode
  document.documentElement.style.colorScheme = resolved
}

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem('theme')
    return isThemeMode(stored) ? stored : 'system'
  })

  const resolved = resolveTheme(mode)

  useEffect(() => {
    applyTheme(mode, resolved)
  }, [mode, resolved])

  useEffect(() => {
    if (mode !== 'system') return

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => applyTheme('system', getSystemTheme())
    media.addEventListener('change', handler)
    return () => media.removeEventListener('change', handler)
  }, [mode])

  const setTheme = useCallback((next: ThemeMode) => {
    setMode(next)
    localStorage.setItem('theme', next)
  }, [])

  return { mode, resolved, setTheme }
}
