export type CategoryId =
  | 'length'
  | 'weight'
  | 'temperature'
  | 'volume'
  | 'area'
  | 'speed'
  | 'time'
  | 'data'
  | 'energy'
  | 'pressure'
  | 'angle'

export interface Unit {
  id: string
  name: string
  symbol: string
  factor: number
}

export interface Category {
  id: CategoryId
  label: string
  icon: string
  units: Unit[]
  isTemperature?: boolean
}

export type NotationMode = 'standard' | 'scientific' | 'engineering'

const length: Category = {
  id: 'length',
  label: 'Length',
  icon: '↔',
  units: [
    { id: 'nm', name: 'Nanometer', symbol: 'nm', factor: 1e-9 },
    { id: 'um', name: 'Micrometer', symbol: 'µm', factor: 1e-6 },
    { id: 'mm', name: 'Millimeter', symbol: 'mm', factor: 0.001 },
    { id: 'cm', name: 'Centimeter', symbol: 'cm', factor: 0.01 },
    { id: 'm', name: 'Meter', symbol: 'm', factor: 1 },
    { id: 'km', name: 'Kilometer', symbol: 'km', factor: 1000 },
    { id: 'in', name: 'Inch', symbol: 'in', factor: 0.0254 },
    { id: 'ft', name: 'Foot', symbol: 'ft', factor: 0.3048 },
    { id: 'yd', name: 'Yard', symbol: 'yd', factor: 0.9144 },
    { id: 'mi', name: 'Mile', symbol: 'mi', factor: 1609.344 },
    { id: 'nmi', name: 'Nautical Mile', symbol: 'nmi', factor: 1852 },
  ],
}

const weight: Category = {
  id: 'weight',
  label: 'Weight',
  icon: '⚖',
  units: [
    { id: 'mg', name: 'Milligram', symbol: 'mg', factor: 1e-6 },
    { id: 'g', name: 'Gram', symbol: 'g', factor: 0.001 },
    { id: 'kg', name: 'Kilogram', symbol: 'kg', factor: 1 },
    { id: 'oz', name: 'Ounce', symbol: 'oz', factor: 0.0283495 },
    { id: 'lb', name: 'Pound', symbol: 'lb', factor: 0.453592 },
    { id: 'st', name: 'Stone', symbol: 'st', factor: 6.35029 },
    { id: 't', name: 'Metric Ton', symbol: 't', factor: 1000 },
    { id: 'us_ton', name: 'US Ton', symbol: 'ton', factor: 907.185 },
  ],
}

const temperature: Category = {
  id: 'temperature',
  label: 'Temperature',
  icon: '🌡',
  isTemperature: true,
  units: [
    { id: 'c', name: 'Celsius', symbol: '°C', factor: 0 },
    { id: 'f', name: 'Fahrenheit', symbol: '°F', factor: 0 },
    { id: 'k', name: 'Kelvin', symbol: 'K', factor: 0 },
  ],
}

const volume: Category = {
  id: 'volume',
  label: 'Volume',
  icon: '🧪',
  units: [
    { id: 'ml', name: 'Milliliter', symbol: 'mL', factor: 0.001 },
    { id: 'l', name: 'Liter', symbol: 'L', factor: 1 },
    { id: 'm3', name: 'Cubic Meter', symbol: 'm³', factor: 1000 },
    { id: 'tsp', name: 'Teaspoon', symbol: 'tsp', factor: 0.00492892 },
    { id: 'tbsp', name: 'Tablespoon', symbol: 'tbsp', factor: 0.0147868 },
    { id: 'floz', name: 'Fluid Ounce (US)', symbol: 'fl oz', factor: 0.0295735 },
    { id: 'cup', name: 'Cup (US)', symbol: 'cup', factor: 0.236588 },
    { id: 'pt', name: 'Pint (US)', symbol: 'pt', factor: 0.473176 },
    { id: 'qt', name: 'Quart (US)', symbol: 'qt', factor: 0.946353 },
    { id: 'gal', name: 'Gallon (US)', symbol: 'gal', factor: 3.78541 },
    { id: 'imp_gal', name: 'Gallon (Imperial)', symbol: 'imp gal', factor: 4.54609 },
  ],
}

const area: Category = {
  id: 'area',
  label: 'Area',
  icon: '▢',
  units: [
    { id: 'mm2', name: 'Square Millimeter', symbol: 'mm²', factor: 1e-6 },
    { id: 'cm2', name: 'Square Centimeter', symbol: 'cm²', factor: 1e-4 },
    { id: 'm2', name: 'Square Meter', symbol: 'm²', factor: 1 },
    { id: 'km2', name: 'Square Kilometer', symbol: 'km²', factor: 1e6 },
    { id: 'in2', name: 'Square Inch', symbol: 'in²', factor: 0.00064516 },
    { id: 'ft2', name: 'Square Foot', symbol: 'ft²', factor: 0.092903 },
    { id: 'yd2', name: 'Square Yard', symbol: 'yd²', factor: 0.836127 },
    { id: 'acre', name: 'Acre', symbol: 'ac', factor: 4046.86 },
    { id: 'ha', name: 'Hectare', symbol: 'ha', factor: 10000 },
  ],
}

const speed: Category = {
  id: 'speed',
  label: 'Speed',
  icon: '⚡',
  units: [
    { id: 'mps', name: 'Meters per Second', symbol: 'm/s', factor: 1 },
    { id: 'kph', name: 'Kilometers per Hour', symbol: 'km/h', factor: 1 / 3.6 },
    { id: 'mph', name: 'Miles per Hour', symbol: 'mph', factor: 0.44704 },
    { id: 'fps', name: 'Feet per Second', symbol: 'ft/s', factor: 0.3048 },
    { id: 'knot', name: 'Knot', symbol: 'kn', factor: 0.514444 },
    { id: 'mach', name: 'Mach', symbol: 'Ma', factor: 343 },
  ],
}

const time: Category = {
  id: 'time',
  label: 'Time',
  icon: '⏱',
  units: [
    { id: 'ns', name: 'Nanosecond', symbol: 'ns', factor: 1e-9 },
    { id: 'us', name: 'Microsecond', symbol: 'µs', factor: 1e-6 },
    { id: 'ms', name: 'Millisecond', symbol: 'ms', factor: 0.001 },
    { id: 's', name: 'Second', symbol: 's', factor: 1 },
    { id: 'min', name: 'Minute', symbol: 'min', factor: 60 },
    { id: 'h', name: 'Hour', symbol: 'h', factor: 3600 },
    { id: 'd', name: 'Day', symbol: 'd', factor: 86400 },
    { id: 'wk', name: 'Week', symbol: 'wk', factor: 604800 },
    { id: 'mo', name: 'Month (avg)', symbol: 'mo', factor: 2629800 },
    { id: 'yr', name: 'Year (avg)', symbol: 'yr', factor: 31557600 },
  ],
}

const data: Category = {
  id: 'data',
  label: 'Data',
  icon: '💾',
  units: [
    { id: 'bit', name: 'Bit', symbol: 'b', factor: 0.125 },
    { id: 'B', name: 'Byte', symbol: 'B', factor: 1 },
    { id: 'KB', name: 'Kilobyte', symbol: 'KB', factor: 1000 },
    { id: 'KiB', name: 'Kibibyte', symbol: 'KiB', factor: 1024 },
    { id: 'MB', name: 'Megabyte', symbol: 'MB', factor: 1e6 },
    { id: 'MiB', name: 'Mebibyte', symbol: 'MiB', factor: 1048576 },
    { id: 'GB', name: 'Gigabyte', symbol: 'GB', factor: 1e9 },
    { id: 'GiB', name: 'Gibibyte', symbol: 'GiB', factor: 1073741824 },
    { id: 'TB', name: 'Terabyte', symbol: 'TB', factor: 1e12 },
    { id: 'TiB', name: 'Tebibyte', symbol: 'TiB', factor: 1099511627776 },
  ],
}

const energy: Category = {
  id: 'energy',
  label: 'Energy',
  icon: '⚡',
  units: [
    { id: 'J', name: 'Joule', symbol: 'J', factor: 1 },
    { id: 'kJ', name: 'Kilojoule', symbol: 'kJ', factor: 1000 },
    { id: 'cal', name: 'Calorie', symbol: 'cal', factor: 4.184 },
    { id: 'kcal', name: 'Kilocalorie', symbol: 'kcal', factor: 4184 },
    { id: 'Wh', name: 'Watt-hour', symbol: 'Wh', factor: 3600 },
    { id: 'kWh', name: 'Kilowatt-hour', symbol: 'kWh', factor: 3.6e6 },
    { id: 'eV', name: 'Electronvolt', symbol: 'eV', factor: 1.60218e-19 },
    { id: 'BTU', name: 'British Thermal Unit', symbol: 'BTU', factor: 1055.06 },
  ],
}

const pressure: Category = {
  id: 'pressure',
  label: 'Pressure',
  icon: '◎',
  units: [
    { id: 'Pa', name: 'Pascal', symbol: 'Pa', factor: 1 },
    { id: 'kPa', name: 'Kilopascal', symbol: 'kPa', factor: 1000 },
    { id: 'bar', name: 'Bar', symbol: 'bar', factor: 100000 },
    { id: 'atm', name: 'Atmosphere', symbol: 'atm', factor: 101325 },
    { id: 'psi', name: 'PSI', symbol: 'psi', factor: 6894.76 },
    { id: 'mmHg', name: 'mmHg', symbol: 'mmHg', factor: 133.322 },
    { id: 'torr', name: 'Torr', symbol: 'Torr', factor: 133.322 },
  ],
}

const angle: Category = {
  id: 'angle',
  label: 'Angle',
  icon: '∠',
  units: [
    { id: 'rad', name: 'Radian', symbol: 'rad', factor: 1 },
    { id: 'deg', name: 'Degree', symbol: '°', factor: Math.PI / 180 },
    { id: 'grad', name: 'Gradian', symbol: 'grad', factor: Math.PI / 200 },
    { id: 'arcmin', name: 'Arcminute', symbol: '′', factor: Math.PI / 10800 },
    { id: 'arcsec', name: 'Arcsecond', symbol: '″', factor: Math.PI / 648000 },
    { id: 'rev', name: 'Revolution', symbol: 'rev', factor: 2 * Math.PI },
  ],
}

export const categories: Category[] = [
  length,
  weight,
  temperature,
  volume,
  area,
  speed,
  time,
  data,
  energy,
  pressure,
  angle,
]

export function getCategory(id: CategoryId): Category {
  return categories.find((c) => c.id === id) ?? length
}

export function getUnit(categoryId: CategoryId, unitId: string): Unit {
  const category = getCategory(categoryId)
  return category.units.find((u) => u.id === unitId) ?? category.units[0]
}

function toCelsius(value: number, unitId: string): number {
  switch (unitId) {
    case 'c':
      return value
    case 'f':
      return (value - 32) * (5 / 9)
    case 'k':
      return value - 273.15
    default:
      return value
  }
}

function fromCelsius(celsius: number, unitId: string): number {
  switch (unitId) {
    case 'c':
      return celsius
    case 'f':
      return celsius * (9 / 5) + 32
    case 'k':
      return celsius + 273.15
    default:
      return celsius
  }
}

export function convert(
  value: number,
  categoryId: CategoryId,
  fromUnitId: string,
  toUnitId: string,
): number {
  if (!Number.isFinite(value)) return NaN

  const category = getCategory(categoryId)

  if (category.isTemperature) {
    const celsius = toCelsius(value, fromUnitId)
    return fromCelsius(celsius, toUnitId)
  }

  const from = getUnit(categoryId, fromUnitId)
  const to = getUnit(categoryId, toUnitId)
  const base = value * from.factor
  return base / to.factor
}

function formatExponent(exponent: number): string {
  return `${exponent >= 0 ? '+' : ''}${exponent}`
}

function formatScientific(value: number): string {
  const [rawCoefficient, rawExponent] = value.toExponential(6).split('e')
  const coefficient = rawCoefficient.replace(/\.?0+$/, '')
  return `${coefficient}e${formatExponent(Number(rawExponent))}`
}

function formatEngineering(value: number): string {
  let exponent = Math.floor(Math.log10(Math.abs(value)) / 3) * 3
  let coefficient = Number((value / 10 ** exponent).toPrecision(7))

  if (Math.abs(coefficient) >= 1000) {
    coefficient /= 1000
    exponent += 3
  }

  return `${coefficient}e${formatExponent(exponent)}`
}

export function formatResult(value: number, notation: NotationMode = 'standard'): string {
  if (!Number.isFinite(value)) return '—'
  if (value === 0) return '0'

  if (notation === 'scientific') return formatScientific(value)
  if (notation === 'engineering') return formatEngineering(value)

  const abs = Math.abs(value)
  if (abs >= 1e12 || (abs < 1e-6 && abs > 0)) {
    return new Intl.NumberFormat('en-US', {
      useGrouping: false,
      maximumSignificantDigits: 12,
    }).format(value)
  }

  const decimals = abs >= 1000 ? 2 : abs >= 1 ? 4 : abs >= 0.01 ? 6 : 8
  return value
    .toFixed(decimals)
    .replace(/\.?0+$/, '')
}
