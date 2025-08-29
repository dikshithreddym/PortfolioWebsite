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
      github: 'https://github.com/dikshithreddym/ResearchProject_StockPricePrediction',
      paper: 'https://drive.google.com/file/d/15Y2iSFWaMZfq9nw0TeIGCVy7vJNjnMcl/view?usp=sharing'
    },
    featured: true
  },
  {
    title: 'EcoSort AI',
    description: 'AI-powered waste sorting application that won HackTrent 2024 Best AI Project. Uses computer vision to classify and sort different types of waste for recycling.',
    tags: ['Python', 'Computer Vision', 'AI', 'Databricks', 'Hackathon'],
    links: {
      live: 'https://www.linkedin.com/posts/dikshithreddym_hacktrent2024-databricks-aws-activity-7261748988758904833-mp39?utm_source=share&utm_medium=member_desktop'
    },
    featured: true
  },
  {
    title: 'Applied AI/ML Course Project',
    description: 'Final project for COIS-3550H Applied Artificial Intelligence and Machine Learning course at Trent University.',
    tags: ['Python', 'Machine Learning', 'Jupyter', 'Academic'],
    links: {
      github: 'https://github.com/dikshithreddym/COIS-3550H-AppliedArtificialIntelligenceAndMachineLearning'
    },
    featured: true
  },
  {
    title: 'TwinMind Chrome Extension',
    description: 'AI-powered transcription Chrome extension with real-time processing and speaker identification using Deepgram and Whisper.',
    tags: ['JavaScript', 'Chrome Extension', 'AI', 'Speech Recognition', 'Real-time'],
    links: {
      github: 'https://github.com/dikshithreddym/TwinMind_Chrome_Extension'
    },
    featured: true
  },
  {
    title: 'TourPlan Website',
    description: 'A comprehensive travel planning website built with modern web technologies.',
    tags: ['Web Development', 'HTML', 'CSS', 'JavaScript'],
    links: {
      live: 'https://dikshithreddym.github.io/TourPlan_Website/'
    }
  },
  {
    title: 'Assignment 3 - Web Development',
    description: 'Web development assignment showcasing frontend skills and responsive design.',
    tags: ['Web Development', 'HTML', 'CSS', 'JavaScript'],
    links: {
      live: 'https://loki.trentu.ca/~dmacherla/www_data/Assignment-3'
    }
  }
];
