# 30 anni di te 🕯️

Una lettera d'amore interattiva, creata come regalo di compleanno: un piccolo viaggio narrativo tra ricordi, domande, foto e lettere personali.

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

## 3. Build di produzione (per controllare il risultato finale)

```bash
npm run build
npm run preview
```

---

## 4. Come personalizzare i contenuti

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

### Modificare la firma e il nome

Apri `src/data/dedication.js` e sostituisci `[Il tuo nome]` con il tuo nome.

---

## 5. Struttura del progetto

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

## 6. Pubblicare su GitHub Pages

### Opzione A — Automatica con GitHub Actions (consigliata)

Il progetto include già un workflow (`.github/workflows/deploy.yml`) che builda e pubblica il sito automaticamente a ogni push sul branch `main`.

1. Crea un nuovo repository su GitHub (es. `30-anni-di-te`) e carica questa cartella:
   ```bash
   git init
   git add .
   git commit -m "Primo commit: 30 anni di te"
   git branch -M main
   git remote add origin https://github.com/<tuo-utente>/<nome-repo>.git
   git push -u origin main
   ```
2. Su GitHub vai su **Settings → Pages** e in "Build and deployment" seleziona come Source: **GitHub Actions**.
3. Dopo qualche minuto il sito sarà online su:
   `https://<tuo-utente>.github.io/<nome-repo>/`

Il workflow calcola da solo la "base path" corretta usando il nome del repository: non devi modificare nulla nel codice.

### Opzione B — Manuale con il branch `gh-pages`

Se preferisci non usare le GitHub Actions:

1. Crea un file `.env` nella root del progetto con:
   ```
   VITE_BASE_PATH=/nome-del-repo/
   ```
2. Builda e pubblica:
   ```bash
   npm run build
   npm run deploy
   ```
   (lo script `deploy` usa `gh-pages` per pubblicare la cartella `dist` sul branch `gh-pages`)
3. Su GitHub, in **Settings → Pages**, seleziona come Source il branch `gh-pages`.

### Nota sul dominio personalizzato

Se invece pubblichi su un dominio personalizzato o su `<utente>.github.io` come repository "root", lascia `VITE_BASE_PATH` non impostata (di default è `/`).

---

## 7. Accessibilità

* Layout responsive, pensato mobile-first.
* Tutti i controlli interattivi (pulsanti, opzioni del quiz, tab) sono navigabili da tastiera, con focus visibile.
* Le animazioni (cuori fluttuanti, coriandoli, macchina da scrivere, transizioni) rispettano `prefers-reduced-motion`: se l'utente ha impostazioni di sistema per ridurre le animazioni, il sito mostra i contenuti in modo immediato e statico.
* Contrasti testo/sfondo verificati sulla palette richiesta.

---

## 8. Crediti tecnici

* [HeroUI](https://heroui.com/) — componenti UI (Button, Card, Progress, Tabs, Chip)
* [Framer Motion](https://www.framer.com/motion/) — animazioni e transizioni
* [React Icons](https://react-icons.github.io/react-icons/) — set di icone
* [canvas-confetti](https://github.com/catdad/canvas-confetti) — effetto coriandoli discreto
* Font: Cormorant Garamond, EB Garamond, Caveat (Google Fonts)

Buon compleanno! ❤️
