// initial array of articles created by AI

const initialArticles = [

    {
        id: 1,
        titolo: "Il futuro del Web Design nel 2026",
        autore: "Marco Rossi",
        data: "2026-03-15",
        descrizione: "Una panoramica sulle nuove tendenze visive e sull'impatto dell'intelligenza artificiale nelle interfacce utente.",
        contenutoCompleto: "Negli ultimi anni il web design si è evoluto rapidamente. L'integrazione di layout fluidi, micro-interazioni avanzate e l'uso dell'IA per la personalizzazione in tempo reale stanno ridefinendo l'esperienza utente. Chi progetta siti web oggi deve bilanciare estetica, accessibilità e prestazioni ottimali."
    },
    {
        id: 2,
        titolo: "Guida rapida ad Async/Await in JavaScript",
        autore: "Elena Bianchi",
        data: "2026-02-28",
        descrizione: "Come gestire le operazioni asincrone in modo pulito e leggibile senza cadere nel callback hell.",
        contenutoCompleto: "La gestione del codice asincrono è fondamentale nello sviluppo moderno. Con le parole chiave async e await, possiamo scrivere codice asincrono che sembra e si comporta quasi come codice sincrono. Questo approccio migliora la leggibilità del codice e semplifica notevolmente la gestione degli errori tramite blocchi try/catch."
    },
    {
        id: 3,
        titolo: "Perché la sintassi Tailwind CSS conquista gli sviluppatori",
        autore: "Luca Verdi",
        data: "2026-01-10",
        descrizione: "I vantaggi dell'approccio Utility-First rispetto al CSS tradizionale.",
        contenutoCompleto: "Tailwind CSS continua a guadagnare popolarità grazie alla sua filosofia utility-first. Invece di scrivere fogli di stile separati con nomi di classi personalizzati, gli sviluppatori possono comporre le interfacce direttamente nel markup. Ciò velocizza lo sviluppo, riduce le dimensioni dei file CSS e garantisce coerenza stilistica."
    },
    {
        id: 4,
        titolo: "Consigli per ottimizzare le prestazioni di una Web App",
        autore: "Sofia Neri",
        data: "2025-11-20",
        descrizione: "Strategie pratiche per ridurre i tempi di caricamento e migliorare i Core Web Vitals.",
        contenutoCompleto: "La velocità di un sito web incide direttamente sulla soddisfazione dell'utente e sul posizionamento SEO. Per ottimizzare un'app occorre comprimere e formattare le immagini in formati moderni (come WebP o AVIF), implementare il lazy loading ed eliminare il codice JavaScript non utilizzato prima dell'invio al client."
    },
    {
        id: 5,
        titolo: "Introduzione alla Sicurezza Web per Principianti",
        autore: "Alessandro Romano",
        data: "2025-09-05",
        descrizione: "I concetti base per proteggere le proprie applicazioni da XSS e CSRF.",
        contenutoCompleto: "Garantire la sicurezza di un'applicazione web è una responsabilità cruciale. Vulnarabilità comuni come Cross-Site Scripting (XSS) e Cross-Site Request Forgery (CSRF) possono essere evitate igienizzando sempre l'input degli utenti, utilizzando token di autenticazione sicuri e configurando correttamente gli header HTTP di sicurezza."
    }
];

export default initialArticles;