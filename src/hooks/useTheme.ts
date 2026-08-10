import { useCallback, useEffect, useState } from 'react'

export type ThemeMode = 'light' | 'dark' | 'system'

function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(resolved: 'light' | 'dark') {
  document.documentElement.classList.toggle('dark', resolved === 'dark')
}

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem('theme') as ThemeMode | null
    return stored ?? 'system'
  })

  const resolved = mode === 'system' ? getSystemTheme() : mode

  useEffect(() => {
    applyTheme(resolved)
  }, [resolved])

  useEffect(() => {
    if (mode !== 'system') return

    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => applyTheme(getSystemTheme())
    media.addEventListener('change', handler)
    return () => media.removeEventListener('change', handler)
  }, [mode])

  const setTheme = useCallback((next: ThemeMode) => {
    setMode(next)
    localStorage.setItem('theme', next)
  }, [])

  const cycleTheme = useCallback(() => {
    setTheme(mode === 'light' ? 'dark' : mode === 'dark' ? 'system' : 'light')
  }, [mode, setTheme])

  return { mode, resolved, setTheme, cycleTheme }
}
