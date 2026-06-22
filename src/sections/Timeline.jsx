import { motion } from 'framer-motion'
import { photos } from '../data/photos'
import PhotoFrame from '../components/PhotoFrame'
import SectionDivider from '../components/SectionDivider'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Timeline() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="timeline" className="relative w-full px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-4">
          <h2 className="font-display text-3xl md:text-4xl text-ink">30 anni in immagini</h2>
          {/* <p className="font-script text-ink-secondary text-lg mt-2">
            Un album sparso di momenti, da quando tutto è iniziato a oggi.
          </p> */}
        </div>
        <SectionDivider className="mb-12" />

        <div className="relative">
          {/* filo verticale centrale, visibile da tablet in su */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/25 hidden md:block"
            aria-hidden="true"
          />

          <ol className="space-y-16 md:space-y-20">
            {photos.map((photo, i) => {
              const isLeft = i % 2 === 0

              const frame = (
                <motion.div
                  initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <PhotoFrame src={photo.src} alt={photo.label} caption={photo.caption} />
                </motion.div>
              )

              const labelBlock = (
                <div className="font-display text-primary text-sm tracking-wide">
                  {photo.label}
                </div>
              )

              return (
                <li
                  key={photo.id}
                  className="relative flex flex-col md:flex-row items-center gap-4 md:gap-0"
                >
                  {/* lato sinistro (desktop) */}
                  <div className="md:w-1/2 flex justify-center md:justify-end md:pr-10">
                    {isLeft ? frame : <div className="hidden md:block">{labelBlock}</div>}
                  </div>

                  {/* anno, al centro del filo */}
                  <div
                    className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-primary text-paper shrink-0 shadow-seal z-10 font-display text-[0.65rem] text-center px-1"
                    aria-hidden="true"
                  >
                    {photo.year}
                  </div>

                  {/* etichetta mobile, sopra la foto */}
                  <div className="text-center md:hidden font-display text-primary text-sm">
                    {photo.label} &middot; {photo.year}
                  </div>

                  {/* lato destro (desktop) */}
                  <div className="md:w-1/2 flex justify-center md:justify-start md:pl-10">
                    {!isLeft ? frame : <div className="hidden md:block">{labelBlock}</div>}
                  </div>

                  {/* foto su mobile, sempre visibile sotto l'etichetta */}
                  <div className="md:hidden">{frame}</div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
