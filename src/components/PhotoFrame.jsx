import { motion } from 'framer-motion'
import { FaCamera } from 'react-icons/fa'
import { useReducedMotion } from '../hooks/useReducedMotion'

/**
 * Cornice fotografica in stile "foto stampata appoggiata sulla
 * lettera": bordo rosso, ombra leggera, leggera inclinazione
 * casuale. Se non viene fornita un\u2019immagine (src), mostra un
 * placeholder elegante che invita ad aggiungerne una.
 */
export default function PhotoFrame({ src, alt = '', caption, rotate, className = '' }) {
  const reducedMotion = useReducedMotion()
  const tilt = rotate ?? (Math.random() * 6 - 3).toFixed(1)

  return (
    <motion.figure
      initial={reducedMotion ? false : { opacity: 0, y: 24, rotate: 0 }}
      whileInView={
        reducedMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0, rotate: Number(tilt) }
      }
      whileHover={reducedMotion ? {} : { rotate: 0, scale: 1.03 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`inline-block bg-paper-light p-3 pb-5 rounded-sm shadow-photo border border-primary/70 ${className}`}
    >
      <div className="w-full aspect-[4/5] bg-paper-dark border border-primary/40 flex items-center justify-center overflow-hidden">
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-ink-secondary px-3 text-center">
            <FaCamera className="text-2xl text-primary/60" aria-hidden="true" />
            <span className="font-body text-xs leading-tight">Aggiungi una foto qui per {alt}</span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 font-script text-ink-secondary text-sm text-center px-1">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  )
}
