import { motion } from 'framer-motion'
import { Card, CardBody } from '@heroui/react'
import {
  FaCoffee,
  FaPlane,
  FaLaugh,
  FaMoon,
  FaUtensils,
  FaHandHoldingHeart,
} from 'react-icons/fa'
import { memories } from '../data/memories'
import SectionDivider from '../components/SectionDivider'
import { useReducedMotion } from '../hooks/useReducedMotion'

// Mappa nome-icona (stringa nei dati) -> componente react-icons.
// Aggiungi qui nuove icone se ne usi altre in src/data/memories.js
const ICONS = {
  FaCoffee,
  FaPlane,
  FaLaugh,
  FaMoon,
  FaUtensils,
  FaHandHoldingHeart,
}

export default function Memories() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="memories" className="relative w-full px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="font-display text-3xl md:text-4xl text-ink">
            Piccoli momenti che porto con me
          </h2>
          <p className="font-script text-ink-secondary text-lg mt-2">
            Frammenti di noi, raccolti come pagine di un album.
          </p>
        </div>
        <SectionDivider className="mb-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((m, i) => {
            const Icon = ICONS[m.icon] ?? FaHandHoldingHeart
            return (
              <motion.div
                key={m.id}
                initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: reducedMotion ? 0 : (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card
                  isHoverable
                  className="bg-paper-light border border-primary/15 shadow-paper h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-photo"
                >
                  <CardBody className="p-6 flex flex-col gap-3">
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">
                      <Icon aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl text-ink">{m.title}</h3>
                    <p className="font-body text-ink-secondary text-sm leading-relaxed">
                      {m.description}
                    </p>
                  </CardBody>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
