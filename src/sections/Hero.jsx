import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@heroui/react'
import { FaEnvelopeOpenText } from 'react-icons/fa'
import WaxSeal from '../components/WaxSeal'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Hero({ onStart }) {
  const reducedMotion = useReducedMotion()
  const [opened, setOpened] = useState(false)

  const handleOpen = () => {
    setOpened(true)
    setTimeout(() => {
      onStart?.()
    }, reducedMotion ? 100 : 1300)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="envelope"
            className="flex flex-col items-center gap-8"
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -30, transition: { duration: 0.5 } }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* busta */}
              <div className="relative w-64 h-44 md:w-80 md:h-56 bg-paper-light border-2 border-primary/70 rounded-sm shadow-paper flex items-center justify-center">
                <div
                  className="absolute inset-0 border-t-2 border-primary/40"
                  style={{
                    clipPath: 'polygon(0 0, 50% 55%, 100% 0)',
                  }}
                />
                <FaEnvelopeOpenText className="text-primary text-4xl opacity-70" aria-hidden="true" />
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
                  <WaxSeal size={40} />
                </div>
              </div>
            </motion.div>

            <h1 className="font-display text-ink text-4xl md:text-6xl tracking-wide">
              30 anni di te
            </h1>
            {/* <p className="font-script text-ink-secondary text-xl md:text-2xl max-w-md">
              Una piccola lettera interattiva per celebrare il tuo viaggio.
            </p> */}

            <Button
              color="primary"
              size="lg"
              radius="full"
              onPress={handleOpen}
              className="font-body text-base px-8 shadow-paper"
            >
              Inizia il viaggio
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="unfolding"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <motion.div
              className="w-72 md:w-96 bg-paper-light border border-primary/50 rounded-sm shadow-paper px-8 py-10 origin-top"
              initial={reducedMotion ? { opacity: 1 } : { scaleY: 0.05, opacity: 0 }}
              animate={reducedMotion ? { opacity: 1 } : { scaleY: 1, opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-script text-ink text-2xl">
                Sto aprendo la lettera per te&hellip;
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="absolute bottom-6 text-ink-secondary/70 font-body text-xs tracking-widest uppercase">
        scorri per continuare il viaggio
      </p>
    </section>
  )
}
