import { useCallback, useEffect, useState } from 'react'
import type { CategoryId } from '../lib/units'

export interface HistoryEntry {
  id: string
  category: CategoryId
  categoryLabel: string
  fromValue: number
  fromSymbol: string
  toValue: number
  toSymbol: string
  timestamp: number
}

const STORAGE_KEY = 'convert-history'
const MAX_ENTRIES = 50

function loadHistory(): HistoryEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    return JSON.parse(raw) as HistoryEntry[]
  } catch {
    return []
  }
}

export function useHistory() {
  const [entries, setEntries] = useState<HistoryEntry[]>(loadHistory)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
  }, [entries])

  const addEntry = useCallback((entry: Omit<HistoryEntry, 'id' | 'timestamp'>) => {
    setEntries((prev) => {
      const latest = prev[0]
      if (
        latest &&
        latest.category === entry.category &&
        latest.fromValue === entry.fromValue &&
        latest.fromSymbol === entry.fromSymbol &&
        latest.toValue === entry.toValue &&
        latest.toSymbol === entry.toSymbol
      ) {
        return [{ ...latest, timestamp: Date.now() }, ...prev.slice(1)]
      }

      const next: HistoryEntry = {
        ...entry,
        id: crypto.randomUUID(),
        timestamp: Date.now(),
      }
      return [next, ...prev].slice(0, MAX_ENTRIES)
    })
  }, [])

  const clearHistory = useCallback(() => {
    setEntries([])
  }, [])

  const removeEntry = useCallback((id: string) => {
    setEntries((prev) => prev.filter((e) => e.id !== id))
  }, [])

  return { entries, addEntry, clearHistory, removeEntry, isOpen, setIsOpen }
}
