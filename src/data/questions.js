// ============================================================
// DOMANDE DEL VIAGGIO NARRATIVO
// ------------------------------------------------------------
// Modifica liberamente testi, categorie e contenuti sbloccati.
// Ogni domanda, qualunque opzione venga scelta, sblocca lo
// stesso "tesoro" di ricordo: non è un quiz a punteggio, è un
// pretesto per raccontare un pezzo della sua vita.
//
// Campi:
// - id: identificativo univoco
// - category: una delle 6 categorie suggerite (puoi cambiarle)
// - question: il testo della domanda
// - options: 3-4 possibili risposte (puramente narrative)
// - unlock.memory: un piccolo ricordo legato al tema
// - unlock.phrase: una frase affettuosa
// - unlock.funFact: una curiosità (vera o scherzosa)
// - unlock.message: un mini messaggio personale per lui
// ============================================================

export const questions = [
  {
    id: 'child-1',
    category: 'Da bambino',
    question: 'Se dovessi scegliere un colore per descrivere te da bambino, quale sarebbe?',
    options: ['Blu, tranquillo', 'Giallo, vivace', 'Verde, curioso', 'Rosso, testardo'],
    unlock: {
      memory:
        'Ti immagino bambino, con le ginocchia sempre sbucciate e la fantasia accesa, a inventare mondi nuovi ogni pomeriggio.',
      phrase: 'Quel bambino è ancora dentro di te, ogni volta che ridi senza pensarci.',
      funFact: 'Si dice che i bambini più curiosi diventino gli adulti più capaci di stupirsi: tu non hai mai smesso.',
      message: '✍️ Personalizza qui un ricordo vero della sua infanzia che solo tu conosci.',
    },
  },
  {
    id: 'child-2',
    category: 'Da bambino',
    question: 'Qual era il tuo gioco o passatempo preferito prima dei 10 anni?',
    options: ['Disegnare', 'Giocare fuori', 'Costruire qualcosa', 'Leggere o sognare'],
    unlock: {
      memory: 'Ogni gioco che amavi da piccolo raccontava già qualcosa di chi saresti diventato.',
      phrase: 'Mi piace pensare che quella parte giocosa di te non sia mai sparita davvero.',
      funFact: 'I bambini che giocano molto da soli sviluppano spesso un\u2019immaginazione fuori dal comune.',
      message: '✍️ Racconta qui un aneddoto vero sui suoi giochi d\u2019infanzia.',
    },
  },
  {
    id: 'teen-1',
    category: 'Da adolescente',
    question: 'Se la tua adolescenza fosse una canzone, che genere sarebbe?',
    options: ['Rock ribelle', 'Pop romantico', 'Indie malinconico', 'Qualcosa di inclassificabile'],
    unlock: {
      memory: 'Penso a te adolescente, con tutte le domande che si hanno a quell\u2019età e la voglia di capire il mondo.',
      phrase: 'Anche nei momenti più incerti, dentro di te c\u2019era già la persona meravigliosa che sei oggi.',
      funFact: 'I gusti musicali dell\u2019adolescenza restano spesso i preferiti per tutta la vita.',
      message: '✍️ Aggiungi qui un dettaglio vero sulla sua adolescenza (una canzone, un amico, un episodio).',
    },
  },
  {
    id: 'teen-2',
    category: 'Da adolescente',
    question: 'Cosa ti faceva sognare di più da ragazzo?',
    options: ['Un futuro lontano da casa', 'Un grande amore', 'Un successo personale', 'La libertà, semplicemente'],
    unlock: {
      memory: 'I sogni di chi eri allora hanno costruito, passo dopo passo, la persona che ho davanti oggi.',
      phrase: 'Ti ho conosciuto da adulto, ma a volte intravedo ancora il ragazzo che sognava in grande.',
      funFact: 'Gli psicologi dicono che i sogni dell\u2019adolescenza spesso anticipano i valori dell\u2019età adulta.',
      message: '✍️ Personalizza con un sogno che sai aveva da adolescente.',
    },
  },
  {
    id: 'passion-1',
    category: 'Le tue passioni',
    question: 'Quale delle tue passioni di oggi ti fa perdere completamente la nozione del tempo?',
    options: ['Un hobby creativo', 'Lo sport', 'La tecnologia', 'Qualcosa che resta un mistero per tutti'],
    unlock: {
      memory: 'Quando parli di ciò che ami, i tuoi occhi cambiano luce: è una delle cose che amo osservare di più.',
      phrase: 'Le tue passioni sono uno dei motivi per cui non mi annoio mai con te.',
      funFact: 'Perdere la nozione del tempo mentre si fa qualcosa si chiama "stato di flow": è un segno di vera passione.',
      message: '✍️ Scrivi qui quale sua passione ami osservare di più e perché.',
    },
  },
  {
    id: 'passion-2',
    category: 'Le tue passioni',
    question: 'Se potessi dedicare un intero weekend a una sola cosa che ami, cosa scegli?',
    options: ['Imparare qualcosa di nuovo', 'Stare all\u2019aria aperta', 'Creare qualcosa con le mani', 'Stare con le persone che ami'],
    unlock: {
      memory: 'Mi piace come ti dedichi completamente alle cose che ami, senza mezze misure.',
      phrase: 'Spero che in questo weekend immaginario, da qualche parte, ci sia anche un po\u2019 di posto per me.',
      funFact: 'Le persone che dedicano tempo regolare ai propri interessi riportano livelli di felicità più alti.',
      message: '✍️ Racconta qui come gli piace passare un weekend ideale.',
    },
  },
  {
    id: 'quirk-1',
    category: 'Le tue stranezze',
    question: 'Qual è la tua "stranezza" più simpatica, quella che fa sorridere chi ti conosce?',
    options: ['Una manìa di ordine', 'Un\u2019espressione che ripeti sempre', 'Un\u2019abitudine bizzarra', 'Un talento inutile ma geniale'],
    unlock: {
      memory: 'Le tue piccole stranezze sono tra le cose che, segretamente, amo di più di te.',
      phrase: 'Non cambierei nessuna delle tue piccole manie, nemmeno quella più assurda.',
      funFact: 'Gli psicologi delle relazioni dicono che le "stranezze" condivise rafforzano il legame di coppia.',
      message: '✍️ Inserisci qui la sua stranezza preferita (quella che ti fa ridere ogni volta).',
    },
  },
  {
    id: 'quirk-2',
    category: 'Le tue stranezze',
    question: 'Quale piccola abitudine tua nessuno noterebbe, tranne chi ti conosce davvero bene?',
    options: ['Un gesto che fai senza accorgertene', 'Una parola che usi spesso', 'Un rituale prima di dormire', 'Un modo tutto tuo di ridere'],
    unlock: {
      memory: 'Conoscerti così bene da notare anche i tuoi gesti più piccoli è uno dei regali più belli della nostra storia.',
      phrase: 'Sono i piccoli dettagli, quelli che nessun altro nota, a farmi innamorare di te ogni giorno un po\u2019 di più.',
      funFact: 'Notare i piccoli dettagli di una persona è, secondo molti studi, uno dei segnali più forti di affetto profondo.',
      message: '✍️ Scrivi qui un\u2019abitudine sua che solo tu conosci così bene.',
    },
  },
  {
    id: 'us-1',
    category: 'Noi due',
    question: 'Qual è il momento in cui hai capito che con noi due c\u2019era qualcosa di speciale?',
    options: ['Una serata semplice', 'Un viaggio insieme', 'Una crisi superata insieme', 'Non un singolo momento, ma tanti piccoli'],
    unlock: {
      memory: 'Ogni volta che ripenso al nostro inizio, ritrovo lo stesso batticuore di allora.',
      phrase: 'Con te ho imparato che l\u2019amore vero si costruisce nei piccoli gesti quotidiani, non nei grandi gesti da film.',
      funFact: 'Le coppie che ricordano con dettaglio i primi momenti insieme tendono ad avere relazioni più solide nel tempo.',
      message: '✍️ Racconta qui il vostro momento speciale, quello che ricordi sempre con un sorriso.',
    },
  },
  {
    id: 'us-2',
    category: 'Noi due',
    question: 'Qual è la cosa più bella che abbiamo costruito insieme finora?',
    options: ['La nostra complicità', 'I nostri viaggi', 'La nostra casa', 'Il nostro modo di ridere insieme'],
    unlock: {
      memory: 'Ogni giorno con te aggiunge un piccolo mattone a qualcosa che, insieme, abbiamo costruito un passo alla volta.',
      phrase: 'Se dovessi scegliere ancora, sceglierei sempre e di nuovo questa storia, con te.',
      funFact: 'Gli studi sulle relazioni durature mostrano che è la quotidianità condivisa, più delle grandi occasioni, a tenere unite le coppie.',
      message: '✍️ Scrivi qui cosa, secondo te, avete costruito di più bello insieme.',
    },
  },
  {
    id: 'future-1',
    category: 'Il futuro',
    question: 'Se potessi regalarti un solo desiderio per i prossimi 30 anni, quale sarebbe?',
    options: ['Serenità', 'Avventure nuove', 'Tempo per le persone che ami', 'Realizzare un sogno rimasto in sospeso'],
    unlock: {
      memory: 'Penso spesso a tutto ciò che ancora vivremo insieme, e mi emoziono già da ora.',
      phrase: 'Qualunque cosa il futuro ci porti, voglio essere lì, al tuo fianco, a guardarlo insieme a te.',
      funFact: 'Chi immagina concretamente il proprio futuro tende a realizzarlo con più probabilità: sognare in grande funziona.',
      message: '✍️ Scrivi qui un desiderio vero che vorresti per lui nei prossimi anni.',
    },
  },
  {
    id: 'future-2',
    category: 'Il futuro',
    question: 'Tra 30 anni, di questo trentesimo compleanno, cosa vorresti ricordare?',
    options: ['Le risate di oggi', 'Le persone che ti hanno festeggiato', 'Questa lettera', 'Semplicemente, di essere stato felice'],
    unlock: {
      memory: 'Spero che tra trent\u2019anni, rileggendo questa lettera, tu possa ritrovare lo stesso calore di oggi.',
      phrase: 'Qualunque cosa accada, voglio essere parte dei tuoi ricordi più belli, oggi e sempre.',
      funFact: 'I ricordi legati a forti emozioni positive sono quelli che il nostro cervello conserva più a lungo e con più nitidezza.',
      message: '✍️ Scrivi qui cosa vorresti che ricordasse, tra trent\u2019anni, di questo giorno.',
    },
  },
]

export const categories = [
  'Da bambino',
  'Da adolescente',
  'Le tue passioni',
  'Le tue stranezze',
  'Noi due',
  'Il futuro',
]
