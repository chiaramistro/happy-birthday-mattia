import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardBody, Button, Chip } from '@heroui/react'
import { FaArrowRight, FaQuoteLeft, FaLightbulb, FaHeart } from 'react-icons/fa'
import { questions } from '../data/questions'
import WaxSeal from '../components/WaxSeal'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Quiz({ onProgress }) {
  const reducedMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const current = questions[index]
  const isLast = index === questions.length - 1

  const progressLabel = useMemo(
    () => `Tappa ${index + 1} di ${questions.length}`,
    [index]
  )

  const handleSelect = (option) => {
    setSelected(option)
  }

  const handleNext = () => {
    if (!isLast) {
      setIndex((i) => i + 1)
      setSelected(null)
      onProgress?.((index + 2) / questions.length)
    }
  }

  return (
    <section
      id="quiz"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-24"
    >
      <div className="max-w-xl w-full">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-ink mb-2">
            Un piccolo viaggio tra i tuoi ricordi
          </h2>
          <p className="font-script text-ink-secondary text-lg">
            Non c'è un punteggio da raggiungere: solo storie da riscoprire.
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="bg-paper-light border border-primary/20 shadow-paper">
              <CardBody className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <Chip color="primary" variant="flat" size="sm" className="font-body">
                    {current.category}
                  </Chip>
                  <span className="font-body text-xs text-ink-secondary uppercase tracking-wider">
                    {progressLabel}
                  </span>
                </div>

                <h3 className="font-display text-2xl text-ink mb-6">{current.question}</h3>

                <div className="flex flex-col gap-3" role="radiogroup" aria-label={current.question}>
                  {current.options.map((opt) => {
                    const isSelected = selected === opt
                    return (
                      <Button
                        key={opt}
                        variant={isSelected ? 'solid' : 'bordered'}
                        color={isSelected ? 'primary' : 'default'}
                        radius="lg"
                        role="radio"
                        aria-checked={isSelected}
                        className={`font-body justify-start text-left h-auto py-3 ${
                          isSelected ? '' : 'border-primary/30 text-ink'
                        }`}
                        onPress={() => handleSelect(opt)}
                      >
                        {opt}
                      </Button>
                    )
                  })}
                </div>

                <AnimatePresence>
                  {selected && (
                    <motion.div
                      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={reducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-primary/20 space-y-4">
                        <div className="flex gap-3 items-start">
                          <WaxSeal size={28} className="shrink-0 mt-0.5" />
                          <p className="font-script text-ink text-lg leading-snug">
                            {current.unlock.memory}
                          </p>
                        </div>
                        <div className="flex gap-3 items-start">
                          <FaQuoteLeft className="text-primary/60 mt-1 shrink-0" aria-hidden="true" />
                          <p className="font-body italic text-ink-secondary text-sm">
                            {current.unlock.phrase}
                          </p>
                        </div>
                        <div className="flex gap-3 items-start">
                          <FaLightbulb className="text-gold mt-1 shrink-0" aria-hidden="true" />
                          <p className="font-body text-ink-secondary text-sm">
                            {current.unlock.funFact}
                          </p>
                        </div>
                        <div className="flex gap-3 items-start bg-paper-dark/60 rounded-md p-3">
                          <FaHeart className="text-primary mt-1 shrink-0" aria-hidden="true" />
                          <p className="font-body text-ink text-sm">{current.unlock.message}</p>
                        </div>

                        {!isLast ? (
                          <div className="flex justify-end pt-2">
                            <Button
                              color="primary"
                              variant="solid"
                              radius="full"
                              endContent={<FaArrowRight aria-hidden="true" />}
                              onPress={handleNext}
                              className="font-body"
                            >
                              Avanti
                            </Button>
                          </div>
                        ) : (
                          <p className="text-center font-script text-ink-secondary text-lg pt-2">
                            Il viaggio tra i ricordi continua qui sotto&hellip;
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardBody>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
