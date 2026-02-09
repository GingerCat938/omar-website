// Array delle citazioni
const citazioni = [
    { testo: 'Non puoi trovare la pace evitando la vita.', autore: 'Virginia Woolf' },
    { testo: 'Il principio più forte della crescita risiede nella scelta umana.', autore: 'George Eliot' },
    { testo: 'Concentrati più sul tuo desiderio che sul tuo dubbio, e il sogno si prenderà cura di sé stesso.', autore: 'Mark Twain' },
    { testo: 'Dobbiamo continuamente saltare giù dalle scogliere e sviluppare le nostre ali durante la caduta.', autore: 'Kurt Vonnegut' },
    { testo: 'Il mondo sembra sempre più luminoso quando hai appena creato qualcosa che non esisteva prima.', autore: 'Neil Gaiman' },
    { testo: 'Non piegarti; non annacquare... segui le tue ossessioni più intense senza pietà.', autore: 'Franz Kafka' },
    { testo: 'La vita è ciò che accade mentre stai facendo altri progetti.', autore: 'John Lennon' },
    { testo: 'Il successo è camminare da un fallimento all\'altro senza perdere l\'entusiasmo.', autore: 'Winston Churchill' },
    { testo: 'La gentilezza è il linguaggio che il sordo può sentire e il cieco può vedere.', autore: 'Mark Twain' },
    { testo: 'La vita è troppo importante per essere presa sul serio.', autore: 'Oscar Wilde' },
    { testo: 'Il coraggio non è l\'assenza della paura, ma la capacità di affrontarla.', autore: 'Nelson Mandela' },
    { testo: 'La perfezione non è mai raggiungibile, ma se la cerchi, puoi raggiungere l\'eccellenza.', autore: 'Vince Lombardi' },
    { testo: 'La cosa più difficile è la decisione di agire, il resto è solo tenacia.', autore: 'Amelia Earhart' },
    { testo: 'La vita è un\'avventura audace o niente.', autore: 'Helen Keller' },
    { testo: 'Non aspettare l\'ispirazione. Esci e inseguila con un bastone.', autore: 'Jack London' },
    { testo: 'La felicità non è qualcosa di pronto. Viene dalle tue azioni.', autore: 'Dalai Lama' },
    { testo: 'Il modo per iniziare è smettere di parlare e iniziare a fare.', autore: 'Walt Disney' },
    { testo: 'Non importa quanto sia ripida la strada, se hai una visione chiara, raggiungerai la vetta.', autore: 'Michael John Bobak' },
    { testo: 'La gratitudine rende ciò che abbiamo abbastanza.', autore: 'Melody Beattie' },
    { testo: 'Il fallimento è l\'opportunità di ricominciare con maggiore intelligenza.', autore: 'Henry Ford' },
    { testo: 'Siamo ciò che facciamo ripetutamente. L\'eccellenza, quindi, non è un atto, ma un\'abitudine.', autore: 'Aristotele' },
    { testo: 'La vita è fatta di scelte. Oggi, scegli la felicità.', autore: 'Paulo Coelho' },
    { testo: 'Non permettere a ciò che non puoi fare di interferire con ciò che puoi fare.', autore: 'John Wooden' },
    { testo: 'La vita è un\'opportunità, coglila.', autore: 'Madre Teresa' },
    { testo: 'Sii te stesso, tutti gli altri sono già stati presi.', autore: 'Oscar Wilde' },
    { testo: 'Le sfide sono ciò che rendono la vita interessante e superarle è ciò che la rende significativa.', autore: 'Joshua J. Marine' },
    { testo: 'Il segreto del successo sta nel sapere qualcosa che nessuno sa.', autore: 'Aristotle Onassis' },
    { testo: 'L\'ottimismo è la fede che porta al successo. Nulla può essere fatto senza speranza e fiducia.', autore: 'Helen Keller' },
    { testo: 'La cosa più importante è cercare di ispirare le persone in modo che possano essere grandi in qualsiasi cosa decidano di fare.', autore: 'Kobe Bryant' },
    { testo: 'Sii il cambiamento che vuoi vedere nel mondo.', autore: 'Mahatma Gandhi' },
    { testo: 'Il futuro appartiene a coloro che credono nella bellezza dei propri sogni.', autore: 'Eleanor Roosevelt' },
    { testo: 'La cosa più importante è non smettere di fare domande.', autore: 'Albert Einstein' },
    { testo: 'La vita è come andare in bicicletta. Per mantenere l\'equilibrio, devi muoverti.', autore: 'Albert Einstein' },
    { testo: 'Il solo limite alle nostre realizzazioni di domani sono i nostri dubbi di oggi.', autore: 'Franklin D. Roosevelt' },
    { testo: 'Non è mai troppo tardi per essere ciò che avresti voluto essere.', autore: 'George Eliot' },
    { testo: 'Chi ha un perché per vivere può sopportare quasi ogni come.', autore: 'Friedrich Nietzsche' },
    { testo: 'Il successo non è definitivo, il fallimento non è fatale: è il coraggio di continuare che conta.', autore: 'Winston Churchill' },
    { testo: 'Agisci come se ciò che fai facesse la differenza. Perché lo fa.', autore: 'William James' },
    { testo: 'La mente è come un paracadute. Funziona solo se si apre.', autore: 'Frank Zappa' },
    { testo: 'Non contare i giorni, fai in modo che i giorni contino.', autore: 'Muhammad Ali' },
    { testo: 'Fai ciò che puoi, con quello che hai, dove sei.', autore: 'Theodore Roosevelt' },
    { testo: 'Il solo vero errore è quello da cui non impariamo nulla.', autore: 'Henry Ford' },
    { testo: 'Non andare dove il sentiero può portare. Vai invece dove non c\'è sentiero e lascia una traccia.', autore: 'Ralph Waldo Emerson' },
    { testo: 'Non misurare la tua giornata dal raccolto che hai ottenuto, ma dai semi che hai piantato.', autore: 'Robert Louis Stevenson' },
    { testo: 'Non aver paura della perfezione. Non la raggiungerai mai.', autore: 'Salvador Dalí' },
    { testo: 'Abbi il coraggio di seguire il tuo cuore e la tua intuizione.', autore: 'Steve Jobs' },
    { testo: 'La misura di chi siamo è ciò che facciamo con ciò che abbiamo.', autore: 'Vince Lombardi' },
    { testo: 'Non importa quanto lentamente vai, finché non ti fermi.', autore: 'Confucio' },
    { testo: 'Niente nella vita va temuto, dev\'essere solo compreso.', autore: 'Marie Curie' }
];

// Funzione per ottenere una citazione casuale
function getRandomQuote() {
    return citazioni[Math.floor(Math.random() * citazioni.length)];
}

// Funzione per inserire citazione nel DOM (senza innerHTML)
function insertRandomQuote(elementId) {
    const quote = getRandomQuote();
    const element = document.getElementById(elementId);
    
    if (!element) return;
    
    // Svuota l'elemento
    element.textContent = '';
    
    // Crea il paragrafo con il testo della citazione
    const p = document.createElement('p');
    p.textContent = `"${quote.testo}"`;
    element.appendChild(p);
    
    // Crea il break
    const br = document.createElement('br');
    element.appendChild(br);
    
    // Crea il footer/span per l'autore
    const footer = document.createElement('footer');
    footer.className = 'blockquote-footer';
    footer.textContent = quote.autore;
    element.appendChild(footer);
}
