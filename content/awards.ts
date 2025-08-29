export interface Award {
  title: string;
  organization: string;
  date: string;
  description?: string;
}

export interface Certification {
  title: string;
  organization: string;
  date: string;
  status: 'completed' | 'in-progress';
  link?: string;
}

export const awards: Award[] = [
  {
    title: 'Best AI Project',
    organization: 'HackTrent 2024',
    date: '2024',
    description: 'Databricks Open Source category for EcoSort AI project'
  },
  {
    title: "Dean's Honour Roll",
    organization: 'Trent University',
    date: '2023–2024',
    description: 'Academic excellence recognition'
  }
];

export const certifications: Certification[] = [
  {
    title: 'Machine Learning Specialization',
    organization: 'Stanford Online & DeepLearning.AI',
    date: 'Aug 2025',
    status: 'completed',
    link: 'https://www.coursera.org/specializations/machine-learning-introduction'
  },
  {
    title: 'Reinforcement Learning Specialization',
    organization: 'University of Alberta',
    date: 'In Progress',
    status: 'in-progress',
    link: 'https://www.coursera.org/specializations/reinforcement-learning'
  },
  {
    title: 'MLOps Specialization',
    organization: 'Duke University',
    date: 'In Progress',
    status: 'in-progress',
    link: 'https://www.coursera.org/specializations/mlops'
  },
  {
    title: 'AWS Certified AI Practitioner',
    organization: 'Amazon Web Services',
    date: 'In Progress',
    status: 'in-progress',
    link: 'https://aws.amazon.com/certification/certified-ai-practitioner/'
  }
];
