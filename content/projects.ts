export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
    paper?: string;
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Stock Price Prediction (Research)',
    description: 'High-frequency AAPL forecasting using machine learning models. Achieved R²=0.9778 and MSE=0.0502 with ensemble methods combining Linear Regression, XGBoost, and LSTM.',
    tags: ['Python', 'Machine Learning', 'Time Series', 'XGBoost', 'LSTM', 'Research'],
    links: {
      github: 'https://github.com/dikshithreddym/stock-prediction',
      paper: '/papers/stock-prediction-snpd2025.pdf'
    },
    featured: true
  },
  {
    title: 'EcoSort AI',
    description: 'AI-powered waste sorting application that won HackTrent 2024 Best AI Project. Uses computer vision to classify and sort different types of waste for recycling.',
    tags: ['Python', 'Computer Vision', 'AI', 'Databricks', 'Hackathon'],
    links: {
      github: 'https://github.com/dikshithreddym/ecosort-ai',
      live: 'https://devpost.com/software/ecosort-ai'
    },
    featured: true
  },
  {
    title: 'Cheese Fat Level Classification',
    description: 'Machine learning model to classify cheese fat levels using image processing and feature extraction techniques.',
    tags: ['Python', 'Machine Learning', 'Computer Vision', 'Classification'],
    links: {
      github: 'https://github.com/dikshithreddym/cheese-classification'
    },
    featured: true
  },
  {
    title: 'Mini X',
    description: 'A compact Twitter-like social media platform built with modern web technologies.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Social Media'],
    links: {
      github: 'https://github.com/dikshithreddym/mini-x',
      live: 'https://mini-x.vercel.app'
    }
  },
  {
    title: 'TwinMind Transcriber',
    description: 'AI-powered transcription tool with real-time processing and speaker identification.',
    tags: ['Python', 'AI', 'Speech Recognition', 'Real-time'],
    links: {
      github: 'https://github.com/dikshithreddym/twinmind-transcriber'
    }
  }
];
