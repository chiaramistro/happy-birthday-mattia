import { useEffect, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

/**
 * Effetto macchina da scrivere su una lista di paragrafi.
 * Scrive un paragrafo alla volta; quando un paragrafo è
 * completo passa al successivo. Chiama onComplete quando ha
 * finito tutti i paragrafi. Se l\u2019utente preferisce animazioni
 * ridotte, mostra subito tutto il testo.
 */
export default function Typewriter({ paragraphs, speed = 28, pauseBetween = 450, onComplete }) {
  const reducedMotion = useReducedMotion()
  const [paraIndex, setParaIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (reducedMotion) {
      setDone(true)
      onComplete?.()
      return
    }
  }, [reducedMotion, onComplete])

  useEffect(() => {
    if (reducedMotion || done) return
    const current = paragraphs[paraIndex] ?? ''

    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), speed)
      return () => clearTimeout(t)
    }

    if (paraIndex < paragraphs.length - 1) {
      const t = setTimeout(() => {
        setParaIndex((p) => p + 1)
        setCharIndex(0)
      }, pauseBetween)
      return () => clearTimeout(t)
    }

    setDone(true)
    onComplete?.()
  }, [charIndex, paraIndex, paragraphs, speed, pauseBetween, reducedMotion, done, onComplete])

  if (reducedMotion) {
    return (
      <div className="space-y-5">
        {paragraphs.map((p, i) => (
          <p key={i} className="font-body text-ink text-lg md:text-xl leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-5" aria-live="polite">
      {paragraphs.slice(0, paraIndex + 1).map((p, i) => {
        const isCurrent = i === paraIndex
        const text = isCurrent ? p.slice(0, charIndex) : p
        return (
          <p key={i} className="font-body text-ink text-lg md:text-xl leading-relaxed">
            {text}
            {isCurrent && charIndex < p.length && (
              <span className="inline-block w-[2px] h-5 bg-primary ml-0.5 align-middle animate-caret-blink" />
            )}
          </p>
        )
      })}
    </div>
  )
}
