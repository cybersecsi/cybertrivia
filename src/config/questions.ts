import { IBaseGameQuestion } from '@/types';

export const questions: { [category: string]: IBaseGameQuestion[] } = {
  'Online Safety': [
    {
      question:
        "Pubblichi una foto di te e della tua migliore amica sulla tua piattaforma di social media preferita. Lei non si sente a suo agio con l'immagine, quindi accetti di rimuoverla. Ciò assicurerà che nessun'altra persona veda la foto?",
      answer:
        "No. Una volta che un'immagine (o qualsiasi altra informazione) viene pubblicata su internet, è praticamente impossibile rimuoverla completamente dalla circolazione. Rimuoverla dalla tua pagina dei social media aiuterà, ma non c'è alcuna garanzia che altre persone non l'abbiano già vista e/o scaricata sui propri dispositivi.",
      points: 100,
    },
  ],
  'Device Security': [],
  'Tipi di Attacco': [],
  'Cyber History': [],
  'Cyber Stats': [],
};
