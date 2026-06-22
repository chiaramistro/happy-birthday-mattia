import { Tabs, Tab, Card, CardBody } from '@heroui/react'
import { motion } from 'framer-motion'
import { letters } from '../data/letters'
import SectionDivider from '../components/SectionDivider'
import WaxSeal from '../components/WaxSeal'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Letters() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="letters" className="relative w-full px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="font-display text-3xl md:text-4xl text-ink">Tre lettere per te</h2>
          <p className="font-script text-ink-secondary text-lg mt-2">
            Parole per il bambino che eri, l\u2019uomo che sei, e chi diventerai.
          </p>
        </div>
        <SectionDivider className="mb-10" />

        <Tabs
          aria-label="Lettere personali"
          color="primary"
          variant="underlined"
          fullWidth
          classNames={{
            tabList: 'gap-4 font-body',
            tab: 'h-12 text-sm md:text-base',
            cursor: 'bg-primary',
          }}
        >
          {letters.map((letter) => (
            <Tab key={letter.id} title={letter.label}>
              <motion.div
                initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Card className="bg-paper-light border border-primary/15 shadow-paper mt-2">
                  <CardBody className="p-7 md:p-10 relative">
                    <WaxSeal size={36} animate={false} className="absolute -top-4 -left-4" />
                    <h3 className="font-display text-2xl text-ink mb-5">{letter.title}</h3>
                    <div className="space-y-4">
                      {letter.body.map((para, i) => (
                        <p key={i} className="font-body text-ink text-base leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </Tab>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
