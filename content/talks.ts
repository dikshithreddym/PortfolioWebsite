export interface Talk {
  title: string;
  venue: string;
  date: string;
  description: string;
  links?: {
    slides?: string;
    paper?: string;
    video?: string;
  };
}

export const talks: Talk[] = [
  {
    title: 'Intraday Stock Price Prediction using Machine Learning',
    venue: 'IEEE/ACIS SNPD 2025',
    date: 'July 24, 2025',
    description: 'Presenting research on high-frequency stock price forecasting using ensemble machine learning methods. Abstract: This paper explores the application of machine learning techniques for intraday stock price prediction using 2-minute frequency data.',
    links: {
      paper: 'https://drive.google.com/file/d/15Y2iSFWaMZfq9nw0TeIGCVy7vJNjnMcl/view?usp=sharing'
    }
  },
  {
    title: 'Exploring AI: Consciousness, Ethics, and the Singularity',
    venue: 'AI Student Conference',
    date: 'April 26, 2025',
    description: 'A comprehensive exploration of artificial intelligence consciousness, ethical considerations in AI development, and the concept of technological singularity.',
    links: {
      slides: 'https://drive.google.com/file/d/1DLqtaJ4BfPmEisozCO1OoXbMGVlU5LHh/view?usp=sharing'
    }
  }
];
