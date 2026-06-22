import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { dedication } from '../data/dedication'
import Typewriter from '../components/Typewriter'
import Confetti from '../components/Confetti'
import WaxSeal from '../components/WaxSeal'

export default function FinalDedication() {
  const [finished, setFinished] = useState(false)

  return (
    <section
      id="dedication"
      className="relative min-h-screen w-full flex items-center justify-center px-6 py-24"
    >
      <Confetti trigger={finished} />

      <div className="max-w-2xl w-full text-center">
        <WaxSeal size={56} className="mx-auto mb-6" />
        <h2 className="font-display text-3xl md:text-5xl text-ink mb-10">
          {dedication.title}
        </h2>

        <div className="text-left bg-paper-light border border-primary/15 shadow-paper rounded-md p-7 md:p-10">
          <Typewriter
            paragraphs={dedication.paragraphs}
            onComplete={() => setFinished(true)}
          />
        </div>

        <AnimatePresence>
          {finished && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10"
            >
              <p className="font-display text-3xl md:text-4xl text-primary mb-3">
                {dedication.closing}
              </p>
              <p className="font-script text-ink-secondary text-xl">{dedication.signature}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
