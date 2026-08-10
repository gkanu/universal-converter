type InstrumentProps = {
  className: string
  children: React.ReactNode
}

function Instrument({ className, children }: InstrumentProps) {
  return (
    <div className={`floating-instrument ${className}`}>
      <svg viewBox="0 0 120 120" fill="none" aria-hidden="true">
        {children}
      </svg>
    </div>
  )
}

export function InstrumentBackground() {
  return (
    <div className="instrument-background" aria-hidden="true">
      <Instrument className="instrument-ruler">
        <g transform="rotate(-18 60 60)">
          <rect x="13" y="43" width="94" height="34" rx="9" />
          <path d="M27 43v15M39 43v9M51 43v15M63 43v9M75 43v15M87 43v9M99 43v15" />
        </g>
      </Instrument>

      <Instrument className="instrument-thermometer">
        <path d="M52 25a8 8 0 0 1 16 0v43.5a20 20 0 1 1-16 0V25Z" />
        <path d="M60 38v43M60 88v.5" />
        <path d="M73 34h11M73 46h7M73 58h11" />
      </Instrument>

      <Instrument className="instrument-scale">
        <path d="M60 24v66M35 93h50M45 24h30" />
        <path d="m29 40-15 28h30L29 40Zm62 0L76 68h30L91 40Z" />
        <path d="M20 76h18M82 76h18M29 40h62" />
      </Instrument>

      <Instrument className="instrument-cup">
        <path d="M29 27h53l-8 68H37l-8-68Z" />
        <path d="M82 38h7c14 0 16 27-2 32H77" />
        <path d="M39 46h15M38 59h10M36 72h18" />
        <path d="M29 27c12 5 41 5 53 0" />
      </Instrument>

      <Instrument className="instrument-protractor">
        <path d="M18 82a42 42 0 0 1 84 0H18Z" />
        <path d="M31 82a29 29 0 0 1 58 0M60 40v13M36 49l7 11M84 49l-7 11M22 65l13 5M98 65l-13 5" />
        <circle cx="60" cy="82" r="5" />
      </Instrument>

      <Instrument className="instrument-stopwatch">
        <circle cx="60" cy="65" r="34" />
        <path d="M60 31V19M50 18h20M84 39l8-8M87 28l7 7M60 65l13-12M60 42v5M83 65h-5M60 88v-5M37 65h5" />
        <circle cx="60" cy="65" r="4" />
      </Instrument>

      <Instrument className="instrument-tape">
        <rect x="22" y="27" width="76" height="67" rx="23" />
        <circle cx="58" cy="58" r="16" />
        <path d="M58 47v11l8 5M24 80h72M69 80v14M80 80v8M90 80v14" />
      </Instrument>

      <Instrument className="instrument-caliper">
        <path d="M27 27v50c0 11 9 20 20 20h42" />
        <path d="M27 38h63M45 38v27M45 65h18M90 27v22M90 49H72" />
        <path d="M34 38v9M43 38v6M52 38v9M61 38v6M70 38v9M79 38v6" />
      </Instrument>
    </div>
  )
}
