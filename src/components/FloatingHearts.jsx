import { useEffect, useState, useRef } from 'react'
import { FaHeart } from 'react-icons/fa'
import { useReducedMotion } from '../hooks/useReducedMotion'

let heartId = 0

/**
 * Cuoricini che appaiono occasionalmente e fluttuano verso l\u2019alto
 * dissolvendosi. Effetto ambientale discreto, disattivato se
 * l\u2019utente preferisce animazioni ridotte.
 */
export default function FloatingHearts({ intervalMs = 6000 }) {
  const reducedMotion = useReducedMotion()
  const [hearts, setHearts] = useState([])
  const containerRef = useRef(null)

  useEffect(() => {
    if (reducedMotion) return
    const spawn = () => {
      const id = heartId++
      const left = 5 + Math.random() * 90
      setHearts((prev) => [...prev.slice(-6), { id, left }])
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id))
      }, 4200)
    }
    const interval = setInterval(spawn, intervalMs)
    return () => clearInterval(interval)
  }, [reducedMotion, intervalMs])

  if (reducedMotion) return null

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
      aria-hidden="true"
    >
      {hearts.map((h) => (
        <FaHeart
          key={h.id}
          className="absolute bottom-10 text-primary/70 animate-heart-float"
          style={{ left: `${h.left}%`, fontSize: `${14 + Math.random() * 10}px` }}
        />
      ))}
    </div>
  )
}
