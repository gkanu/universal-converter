import { useCallback, useState } from 'react'
import { categories, type CategoryId } from './lib/units'
import { useTheme } from './hooks/useTheme'
import { useHistory } from './hooks/useHistory'
import { CategoryTabs } from './components/CategoryTabs'
import { ConverterPanel } from './components/ConverterPanel'
import { HistoryPanel } from './components/HistoryPanel'
import { ThemeToggle } from './components/ThemeToggle'

export default function App() {
  const [categoryId, setCategoryId] = useState<CategoryId>('length')
  const { mode, cycleTheme } = useTheme()
  const { entries, addEntry, clearHistory, removeEntry, isOpen, setIsOpen } = useHistory()

  const handleConvert = useCallback(
    (entry: Parameters<typeof addEntry>[0]) => {
      addEntry(entry)
    },
    [addEntry],
  )

  return (
    <div className="min-h-dvh text-slate-900 dark:text-slate-100">
      <header className="mx-auto flex max-w-4xl items-center justify-between px-4 py-6 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-lg font-bold text-white shadow-lg shadow-brand-500/25">
            ⇄
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">Convert</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">Universal unit converter</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/60 px-3 py-2 text-sm font-medium text-slate-700 backdrop-blur-sm transition hover:bg-white/90 dark:border-slate-700/60 dark:bg-slate-800/60 dark:text-slate-200 dark:hover:bg-slate-800/90"
          >
            <span>History</span>
            {entries.length > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-600 px-1.5 text-xs font-semibold text-white">
                {entries.length > 99 ? '99+' : entries.length}
              </span>
            )}
          </button>
          <ThemeToggle mode={mode} onCycle={cycleTheme} />
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
        <div className="mb-6">
          <CategoryTabs categories={categories} active={categoryId} onChange={setCategoryId} />
        </div>

        <ConverterPanel categoryId={categoryId} onConvert={handleConvert} />

        <p className="mt-8 text-center text-sm text-slate-400 dark:text-slate-500">
          11 categories · 80+ units · Instant conversion
        </p>
      </main>

      <HistoryPanel
        entries={entries}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onClear={clearHistory}
        onRemove={removeEntry}
      />
    </div>
  )
}
