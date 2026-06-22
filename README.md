# 30 anni di te 🕯️

Realizzato con **React + Vite + Tailwind CSS + HeroUI + Framer Motion**.

---

## 1. Requisiti

* [Node.js](https://nodejs.org/) versione 18 o superiore (consigliata la 20)
* npm (incluso con Node.js)

## 2. Avvio in locale

```bash
npm install
npm run dev
```

Apri il link mostrato nel terminale (di solito `http://localhost:5173`).

---

## 3. Come personalizzare i contenuti

Tutti i testi e i contenuti "narrativi" sono in **`src/data/`**, separati dal codice, così puoi modificarli senza toccare i componenti:

| File | Cosa contiene |
|---|---|
| `src/data/questions.js` | Le domande del quiz narrativo, divise per categoria, con ricordo/frase/curiosità/messaggio da sbloccare |
| `src/data/memories.js` | Le card della sezione "Piccoli momenti che porto con me" |
| `src/data/letters.js` | Le tre lettere (passato, presente, futuro) |
| `src/data/photos.js` | Le voci della timeline fotografica (etichetta, anno, didascalia, immagine) |
| `src/data/dedication.js` | Il testo della dedica finale, la chiusura e la firma |

### Aggiungere le foto vere

Per impostazione predefinita ogni foto nella timeline è un placeholder ("Aggiungi una foto qui"), così puoi pubblicare il sito anche prima di avere tutte le immagini pronte.
Per inserire una foto vera:

1. Copia il file immagine in `src/assets/photos/` (es. `src/assets/photos/da-piccolo.jpg`).
2. In `src/sections/Timeline.jsx` importa l'immagine in alto al file:
   ```js
   import daPiccolo from '../assets/photos/da-piccolo.jpg'
   ```
3. In `src/data/photos.js`, sostituisci `src: null` con `src: daPiccolo` per la voce corrispondente.

Le foto vengono mostrate automaticamente con cornice rossa, ombra ed effetto "fotografia stampata", come richiesto dal design.

---

## 4. Struttura del progetto

```
src/
  assets/        risorse statiche (es. foto, in src/assets/photos/)
  components/    componenti riutilizzabili (cornice foto, sigillo, coriandoli, ecc.)
  data/          tutti i contenuti personalizzabili (vedi tabella sopra)
  hooks/         hook React custom (scroll progress, prefers-reduced-motion)
  sections/      le sezioni della pagina (Hero, Quiz, Timeline, Memories, Letters, FinalDedication)
  App.jsx        assembla tutte le sezioni e la barra di avanzamento globale
  main.jsx       punto di ingresso, avvolge l'app nel provider di HeroUI
  index.css      font, stili di base, focus da tastiera, riduzione animazioni
```

---

## 5. Crediti tecnici

* [HeroUI](https://heroui.com/) — componenti UI (Button, Card, Progress, Tabs, Chip)
* [Framer Motion](https://www.framer.com/motion/) — animazioni e transizioni
* [React Icons](https://react-icons.github.io/react-icons/) — set di icone
* [canvas-confetti](https://github.com/catdad/canvas-confetti) — effetto coriandoli discreto
* Font: Cormorant Garamond, EB Garamond, Caveat (Google Fonts)
