import { Progress } from '@heroui/react'
import PaperTexture from './components/PaperTexture'
import FloatingHearts from './components/FloatingHearts'
import Hero from './sections/Hero'
import Quiz from './sections/Quiz'
import Timeline from './sections/Timeline'
import Memories from './sections/Memories'
import Letters from './sections/Letters'
import FinalDedication from './sections/FinalDedication'
import { useScrollProgress } from './hooks/useScrollProgress'

function App() {
  const progress = useScrollProgress()

  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PaperTexture />
      <FloatingHearts />

      {/* Barra di avanzamento globale del viaggio, fissa in alto */}
      <div className="fixed top-0 left-0 right-0 z-40" aria-hidden="true">
        <Progress
          aria-label="Avanzamento del viaggio"
          value={progress}
          size="sm"
          radius="none"
          classNames={{
            indicator: 'bg-primary',
            track: 'bg-paper-dark/60',
          }}
        />
      </div>

      <main className="relative z-10">
        <Hero onStart={scrollToQuiz} />
        <Quiz />
        <Timeline />
        {/* <Memories /> */}
        {/* <Letters /> */}
        <FinalDedication />
      </main>

      <footer className="relative z-10 text-center py-8 font-script text-ink-secondary/70 text-sm">
        Creato con amore, per i tuoi 30 anni.
      </footer>
    </div>
  )
}

export default App
