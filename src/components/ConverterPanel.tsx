import { useEffect, useState } from 'react'
import {
  convert,
  formatResult,
  getCategory,
  getUnit,
  type CategoryId,
} from '../lib/units'
import type { HistoryEntry } from '../hooks/useHistory'
import { UnitSelect } from './UnitSelect'

interface ConverterPanelProps {
  categoryId: CategoryId
  onConvert: (entry: Omit<HistoryEntry, 'id' | 'timestamp'>) => void
}

export function ConverterPanel({ categoryId, onConvert }: ConverterPanelProps) {
  const category = getCategory(categoryId)
  const [fromUnitId, setFromUnitId] = useState(category.units[0].id)
  const [toUnitId, setToUnitId] = useState(category.units[1]?.id ?? category.units[0].id)
  const [inputValue, setInputValue] = useState('1')

  useEffect(() => {
    setFromUnitId(category.units[0].id)
    setToUnitId(category.units[1]?.id ?? category.units[0].id)
    setInputValue('1')
  }, [categoryId, category.units])

  const numericValue = parseFloat(inputValue)
  const result = Number.isFinite(numericValue)
    ? convert(numericValue, categoryId, fromUnitId, toUnitId)
    : NaN
  const formatted = formatResult(result)

  useEffect(() => {
    if (!Number.isFinite(numericValue) || !Number.isFinite(result) || inputValue === '') return

    const timer = window.setTimeout(() => {
      const from = getUnit(categoryId, fromUnitId)
      const to = getUnit(categoryId, toUnitId)

      onConvert({
        category: categoryId,
        categoryLabel: category.label,
        fromValue: numericValue,
        fromSymbol: from.symbol,
        toValue: result,
        toSymbol: to.symbol,
      })
    }, 1200)

    return () => window.clearTimeout(timer)
  }, [numericValue, result, inputValue, categoryId, fromUnitId, toUnitId, category.label, onConvert])

  const swapUnits = () => {
    setFromUnitId(toUnitId)
    setToUnitId(fromUnitId)
    if (Number.isFinite(result)) {
      setInputValue(formatResult(result))
    }
  }

  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/60 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-900/50 dark:shadow-black/20 sm:p-8">
      <div className="mb-6">
        <label
          htmlFor="value-input"
          className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400"
        >
          Value
        </label>
        <input
          id="value-input"
          type="text"
          inputMode="decimal"
          value={inputValue}
          onChange={(e) => {
            const val = e.target.value
            if (val === '' || val === '-' || val === '.' || /^-?\d*\.?\d*$/.test(val)) {
              setInputValue(val)
            }
          }}
          placeholder="Enter a value"
          className="w-full rounded-2xl border border-slate-200/80 bg-white/80 px-5 py-4 text-3xl font-semibold tracking-tight text-slate-900 backdrop-blur-sm transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/30 dark:border-slate-700/60 dark:bg-slate-950/50 dark:text-white sm:text-4xl"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
        <UnitSelect
          id="from-unit"
          label="From"
          units={category.units}
          value={fromUnitId}
          onChange={setFromUnitId}
        />

        <button
          type="button"
          onClick={swapUnits}
          className="group mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/70 text-slate-600 backdrop-blur-sm transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-600 active:scale-95 dark:border-slate-700/60 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:border-brand-500/50 dark:hover:bg-brand-950/50 dark:hover:text-brand-400 sm:mb-0.5"
          aria-label="Swap units"
          title="Swap units"
        >
          <svg
            className="h-5 w-5 transition group-hover:rotate-180 duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
          </svg>
        </button>

        <UnitSelect
          id="to-unit"
          label="To"
          units={category.units}
          value={toUnitId}
          onChange={setToUnitId}
        />
      </div>

      <div className="mt-8 rounded-2xl bg-gradient-to-br from-brand-500/10 to-cyan-500/10 p-6 dark:from-brand-500/15 dark:to-cyan-500/15">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Result
        </p>
        <p className="break-all text-3xl font-bold tracking-tight text-brand-700 dark:text-brand-400 sm:text-4xl">
          {formatted}
          <span className="ml-2 text-xl font-semibold text-slate-500 dark:text-slate-400">
            {getUnit(categoryId, toUnitId).symbol}
          </span>
        </p>
        {Number.isFinite(numericValue) && Number.isFinite(result) && (
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
            {formatResult(numericValue)} {getUnit(categoryId, fromUnitId).symbol} = {formatted}{' '}
            {getUnit(categoryId, toUnitId).symbol}
          </p>
        )}
      </div>
    </div>
  )
}
