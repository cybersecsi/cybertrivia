import { IBaseGameQuestion } from '@/types';

export const questions: { [category: string]: IBaseGameQuestion[] } = {
  'Online Safety': [
    {
      question:
        "Pubblichi una foto di te e della tua migliore amica sulla tua piattaforma di social media preferita. Lei non si sente a suo agio con l'immagine, quindi accetti di rimuoverla. Ciò assicurerà che nessun'altra persona veda la foto?",
      answers: [
        "No. Una volta che un'immagine (o qualsiasi altra informazione) viene pubblicata su internet, è praticamente impossibile rimuoverla completamente dalla circolazione. Rimuoverla dalla tua pagina dei social media aiuterà, ma non c'è alcuna garanzia che altre persone non l'abbiano già vista e/o scaricata sui propri dispositivi.",
      ],
      points: 100,
    },
    {
      question:
        "Ricevi un'email da un sito di shopping online che sostiene che ti sia stato addebitato in modo errato l'ultimo acquisto e che hai diritto a un rimborso. L'email ti chiede di cliccare su un link dove inserirai le informazioni necessarie. Cosa dovresti fare?",
      answers: [
        "NON cliccare sul link! Controlla l'indirizzo del mittente e verifica il documento per eventuali errori di ortografia/grammatica. Se noti qualcosa di sospetto, è probabile che l'email sia una truffa. Anche se sembra legittima, accedi al sito da solo anziché cliccare su eventuali link.",
      ],
      points: 200,
    },
    {
      question:
        "Ti sei appena sistemato nella tua nuova camera d'albergo quando ti rendi conto di dover trasferire alcuni fondi dal tuo conto di risparmio al tuo conto corrente. Per farlo, dovrai connettere il tuo laptop alla rete Wi-Fi pubblica dell'hotel e accedere al tuo conto bancario online. Dovresti rischiare?",
      answers: [
        "Dipende. In generale, non è mai sicuro trasmettere informazioni personali identificabili (PII), soprattutto informazioni finanziarie, su una rete pubblica. Se ti trovi in una situazione in cui potresti averne bisogno, considera prima tutte le opzioni, inclusa l'uso dei tuoi dati mobili o di una VPN (rete virtuale privata) per proteggere la tua navigazione.",
      ],
      points: 300,
    },
    {
      question:
        "Hai un lungo tragitto pendolare. Per fortuna, il tuo treno ha appena installato una rete Wi-Fi pubblica. Ora puoi ascoltare la tua musica o il tuo podcast preferito. Tuttavia, quando controlli gli aggiornamenti dei social media intorno all'ora di pranzo, scopri che il tuo account è stato hackerato. Quali misure potresti prendere per evitare che i dati del tuo dispositivo mobile o del tuo laptop vengano compromessi in futuro?",
      answers: [
        '1. Disattiva Wi-Fi e Bluetooth quando non li stai utilizzando. Queste tecnologie ti lasciano vulnerabile ad attacchi remoti.',
        "2. Assicurati che la rete sia legittima. Gli hacker amano creare reti false che imitano quelle reali, attirando utenti ignari a effettuare l'accesso.",
        "3. Non connetterti. Sebbene possa sembrare drastico, un modo quasi certo per evitare i pericoli della Wi-Fi pubblica è semplicemente evitarne l'uso il più possibile.",
      ],
      points: 400,
    },
  ],
  'Device Security': [],
  'Tipi di Attacco': [],
  'Cyber History': [],
  'Cyber Stats': [],
};
