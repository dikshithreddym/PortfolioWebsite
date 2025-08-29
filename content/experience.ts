export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tags: string[];
}

export const experience: Experience[] = [
  {
    title: 'Research Intern — Machine Learning & Data Science',
    company: 'Trent University',
    location: 'Peterborough, ON',
    period: 'May–Aug 2025',
    description: [
      'Developed high-frequency AAPL forecasting models using 2-minute data',
      'Engineered features including RSI, MACD, EMA, rolling statistics, and lag variables',
      'Implemented Linear Regression, XGBoost, and LSTM models achieving R²=0.9778, MSE=0.0502',
      'Presenting research at IEEE/ACIS SNPD 2025 conference'
    ],
    tags: ['Python', 'Machine Learning', 'Time Series', 'XGBoost', 'LSTM', 'Research']
  },
  {
    title: 'Executive',
    company: 'Trent Computer Science Durham (TCSD)',
    location: 'Oshawa, ON',
    period: 'Sep 2024–Present',
    description: [
      'Organize and lead coding workshops and technical sessions',
      'Deliver talks on emerging technologies and programming concepts',
      'Build and maintain the computer science community at Durham campus',
      'Mentor junior students in programming and software development'
    ],
    tags: ['Leadership', 'Community Building', 'Teaching', 'Mentorship']
  },
  {
    title: 'CPU Intern — Default Management',
    company: 'MCAP',
    location: 'Toronto, ON',
    period: 'May–Aug 2024',
    description: [
      'Gained exposure to mortgage workflow and process management',
      'Maintained high standards of accuracy and confidentiality',
      'Improved operational efficiency through process optimization',
      'Collaborated with cross-functional teams on default management procedures'
    ],
    tags: ['Process Management', 'Data Analysis', 'Operations', 'Finance']
  }
];
