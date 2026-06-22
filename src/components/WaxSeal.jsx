/**
 * Sigillo di ceralacca: l\u2019elemento decorativo "firma" del sito,
 * riusato come icona di sblocco, divisore di sezione e accento
 * nei pulsanti. Puro SVG, theme-aware tramite currentColor.
 */
export default function WaxSeal({ size = 48, className = '', animate = true, symbol = 'heart' }) {
  const symbols = {
    heart: 'M24 33s-10-6.2-10-13.6C14 14.8 17.6 12 21 12c1.7 0 3 .8 3 .8s1.3-.8 3-.8c3.4 0 7 2.8 7 7.4C34 26.8 24 33 24 33z',
    initial: null,
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={`${animate ? 'animate-stamp-in' : ''} ${className}`}
      role="img"
      aria-label="Sigillo di ceralacca"
    >
      <defs>
        <radialGradient id="sealGradient" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#D14B4B" />
          <stop offset="55%" stopColor="#B62424" />
          <stop offset="100%" stopColor="#7A1818" />
        </radialGradient>
      </defs>
      {/* bordo irregolare simulato con cerchio + piccoli "gocciolamenti" */}
      <circle cx="24" cy="24" r="21" fill="url(#sealGradient)" />
      <circle cx="9" cy="14" r="3" fill="url(#sealGradient)" />
      <circle cx="39" cy="34" r="2.5" fill="url(#sealGradient)" />
      <circle cx="36" cy="10" r="2" fill="url(#sealGradient)" />
      <circle cx="24" cy="24" r="17" fill="none" stroke="#F7E9D3" strokeOpacity="0.35" strokeWidth="1" />
      {symbols[symbol] && (
        <path d={symbols[symbol]} fill="#F7E9D3" fillOpacity="0.92" transform="translate(0,2)" />
      )}
    </svg>
  )
}
