/**
 * Overlay di texture "carta vintage": un leggero rumore generato
 * via SVG (data URI) sovrapposto a un fondo color carta, più una
 * vignettatura ai bordi che ricorda l\u2019album dei ricordi.
 * Puramente decorativo, fisso, non interattivo.
 */
export default function PaperTexture() {
  const noise =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")"

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: noise, backgroundRepeat: 'repeat' }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 55%, rgba(61,46,46,0.10) 100%)',
        }}
      />
    </div>
  )
}
