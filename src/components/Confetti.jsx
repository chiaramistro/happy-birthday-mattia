import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import { useReducedMotion } from '../hooks/useReducedMotion'

/**
 * Lancia un coriandolo discreto (poche particelle, colori della
 * palette) quando "trigger" diventa true. Pensato per essere
 * usato una sola volta, al termine della dedica finale.
 */
export default function Confetti({ trigger }) {
  const reducedMotion = useReducedMotion()
  const firedRef = useRef(false)

  useEffect(() => {
    if (!trigger || firedRef.current || reducedMotion) return
    firedRef.current = true

    confetti({
      particleCount: 60,
      spread: 65,
      startVelocity: 28,
      gravity: 0.9,
      ticks: 200,
      origin: { y: 0.6 },
      colors: ['#B62424', '#D14B4B', '#C9A227', '#F7E9D3'],
      scalar: 0.8,
    })

    const t = setTimeout(() => {
      confetti({
        particleCount: 30,
        spread: 80,
        startVelocity: 20,
        gravity: 0.9,
        ticks: 180,
        origin: { y: 0.55 },
        colors: ['#B62424', '#D14B4B', '#C9A227'],
        scalar: 0.7,
      })
    }, 350)

    return () => clearTimeout(t)
  }, [trigger, reducedMotion])

  return null
}
