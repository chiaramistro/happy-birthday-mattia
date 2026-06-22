// ============================================================
// 30 ANNI IN IMMAGINI
// ------------------------------------------------------------
// Per ogni voce, "src" è il percorso dell\u2019immagine.
// Lascia src: null per mostrare un elegante placeholder
// "Aggiungi una foto" finché non hai le foto definitive.
//
// Per aggiungere una foto vera:
// 1. Metti il file in /src/assets/photos/ (es. nonno.jpg)
// 2. Importa l\u2019immagine in src/sections/Timeline.jsx
//    es: import fotoPiccolo from '../assets/photos/piccolo.jpg'
// 3. Sostituisci src: null con src: fotoPiccolo
// ============================================================

export const photos = [
  {
    id: 'photo-1',
    label: 'Foto da piccolo',
    year: '~1996',
    // caption: 'Il primo capitolo della storia: tutto è iniziato da qui.',
    src: null,
  },
  {
    id: 'photo-2',
    label: 'Foto alle elementari',
    year: '~2002',
    src: null,
  },
  {
    id: 'photo-3',
    label: 'Foto da adolescente',
    year: '~2010',
    src: null,
  },
  {
    id: 'photo-4',
    label: 'Foto recenti',
    year: 'Oggi',
    src: null,
  },
  {
    id: 'photo-5',
    label: 'Foto insieme',
    year: 'Noi',
    src: null,
  },
  {
    id: 'photo-6',
    label: 'Viaggi insieme',
    year: 'In cammino',
    src: null,
  },
  {
    id: 'photo-7',
    label: 'Momenti speciali',
    year: 'Per sempre',
    src: null,
  },
]
