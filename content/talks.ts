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
    description: 'Presented a research paper on high-frequency stock price forecasting using ensemble machine learning methods. Abstract: This paper explores the application of machine learning techniques for intraday stock price prediction using 2-minute frequency data.',
    links: {
      paper: 'https://drive.google.com/file/d/15Y2iSFWaMZfq9nw0TeIGCVy7vJNjnMcl/view?usp=sharing'
    }
  },
  {
    title: 'Exploring AI: Consciousness, Ethics, and the Singularity',
    venue: 'AI Student Conference',
    date: 'April 26, 2025',
    description: 'Presented a research paper exploring the philosophical and ethical boundaries of artificial intelligence, including the question of machine consciousness, the singularity, and the distinction between intelligence and awareness. The paper drew on frameworks from Advaita Vedanta, Osho\'s teachings, and modern AI ethics.',
    links: {
      paper: 'https://drive.google.com/file/d/1DLqtaJ4BfPmEisozCO1OoXbMGVlU5LHh/view?usp=sharing'
    }
  }
];
