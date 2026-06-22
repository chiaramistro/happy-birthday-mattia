import WaxSeal from './WaxSeal'

/**
 * Divisore decorativo tra sezioni: una linea calligrafica con
 * un piccolo sigillo di ceralacca al centro. Usato per scandire
 * il "viaggio" senza bisogno di bordi netti o card pesanti.
 */
export default function SectionDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-4 py-2 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 max-w-[120px] bg-primary/40" />
      <WaxSeal size={32} animate={false} />
      <span className="h-px flex-1 max-w-[120px] bg-primary/40" />
    </div>
  )
}
