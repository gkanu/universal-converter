import { formatResult } from '../lib/units'
import type { HistoryEntry } from '../hooks/useHistory'

interface HistoryPanelProps {
  entries: HistoryEntry[]
  isOpen: boolean
  onClose: () => void
  onClear: () => void
  onRemove: (id: string) => void
}

function formatTime(timestamp: number): string {
  return new Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
    minute: '2-digit',
  }).format(timestamp)
}

export function HistoryPanel({ entries, isOpen, onClose, onClear, onRemove }: HistoryPanelProps) {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm dark:bg-black/40"
          onClick={onClose}
          aria-label="Close history"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-slate-200/70 bg-white/90 shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-out dark:border-slate-700/50 dark:bg-slate-950/90 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-slate-200/70 px-6 py-5 dark:border-slate-700/50">
          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">History</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {entries.length} conversion{entries.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="flex gap-2">
            {entries.length > 0 && (
              <button
                type="button"
                onClick={onClear}
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/40"
              >
                Clear
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 text-slate-600 transition hover:bg-slate-100 dark:border-slate-700/60 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Close panel"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {entries.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-slate-500 dark:text-slate-400">
              <span className="text-4xl opacity-40">📋</span>
              <p className="text-sm">Conversions you make will appear here.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {entries.map((entry) => (
                <li
                  key={entry.id}
                  className="group rounded-2xl border border-slate-200/70 bg-white/60 p-4 transition hover:border-brand-200/80 dark:border-slate-700/50 dark:bg-slate-900/50 dark:hover:border-brand-500/30"
                >
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <span className="rounded-lg bg-brand-500/15 px-2 py-0.5 text-xs font-medium text-brand-700 dark:bg-brand-950/60 dark:text-brand-400">
                      {entry.categoryLabel}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400">{formatTime(entry.timestamp)}</span>
                      <button
                        type="button"
                        onClick={() => onRemove(entry.id)}
                        className="opacity-0 transition group-hover:opacity-100 text-slate-400 hover:text-red-500"
                        aria-label="Remove entry"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                  <p className="font-medium text-slate-800 dark:text-slate-100">
                    {formatResult(entry.fromValue)} {entry.fromSymbol}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">↓</p>
                  <p className="font-semibold text-brand-700 dark:text-brand-400">
                    {formatResult(entry.toValue)} {entry.toSymbol}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </>
  )
}
