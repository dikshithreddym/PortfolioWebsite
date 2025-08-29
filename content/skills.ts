export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: string;
  icon?: string;
}

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', level: 'advanced', category: 'Programming Languages' },
  { name: 'JavaScript', level: 'intermediate', category: 'Programming Languages' },
  { name: 'C', level: 'intermediate', category: 'Programming Languages' },
  { name: 'PHP', level: 'intermediate', category: 'Programming Languages' },

  // Web Development
  { name: 'HTML', level: 'advanced', category: 'Web Development' },
  { name: 'CSS', level: 'advanced', category: 'Web Development' },
  { name: 'React.js', level: 'intermediate', category: 'Web Development' },

  // Backend Development
  { name: 'Flask', level: 'intermediate', category: 'Backend Development' },
  { name: 'Node.js', level: 'intermediate', category: 'Backend Development' },
  { name: 'Express.js', level: 'intermediate', category: 'Backend Development' },

  // Database Management
  { name: 'SQL', level: 'intermediate', category: 'Database Management' },
  { name: 'MySQL', level: 'intermediate', category: 'Database Management' },

  // Cloud Technologies
  { name: 'AWS', level: 'intermediate', category: 'Cloud Technologies' },
  { name: 'Microsoft Azure', level: 'intermediate', category: 'Cloud Technologies' },

  // Version Control
  { name: 'Git', level: 'advanced', category: 'Version Control' },
  { name: 'GitHub', level: 'advanced', category: 'Version Control' },
  { name: 'CI/CD', level: 'intermediate', category: 'Version Control' },

  // AI & ML
  { name: 'NumPy', level: 'advanced', category: 'AI & ML' },
  { name: 'Pandas', level: 'advanced', category: 'AI & ML' },
  { name: 'Matplotlib', level: 'advanced', category: 'AI & ML' },
  { name: 'Scikit-learn', level: 'advanced', category: 'AI & ML' },
  { name: 'TensorFlow', level: 'intermediate', category: 'AI & ML' },
  { name: 'PyTorch', level: 'intermediate', category: 'AI & ML' },
  { name: 'Stable-Baseline3', level: 'intermediate', category: 'AI & ML' },

  // Business Intelligence
  { name: 'Power BI', level: 'intermediate', category: 'Business Intelligence' },
  { name: 'Tableau', level: 'intermediate', category: 'Business Intelligence' },
  { name: 'Lucidchart', level: 'intermediate', category: 'Business Intelligence' },

  // Development Tools
  { name: 'Visual Studio Code', level: 'advanced', category: 'Development Tools' },
  { name: 'Jupyter Notebook', level: 'advanced', category: 'Development Tools' },

  // Testing
  { name: 'Unit Testing', level: 'intermediate', category: 'Testing' },
  { name: 'Integration Testing', level: 'intermediate', category: 'Testing' },

  // Other Tools
  { name: 'Draw.io', level: 'intermediate', category: 'Other Tools' },
  { name: 'GitBash', level: 'intermediate', category: 'Other Tools' },
  { name: 'PowerShell Scripting', level: 'intermediate', category: 'Other Tools' },
  { name: 'Microsoft Office Suite', level: 'advanced', category: 'Other Tools' },
];

export const skillCategories = [
  'Programming Languages',
  'Web Development',
  'Backend Development',
  'Database Management',
  'Cloud Technologies',
  'Version Control',
  'AI & ML',
  'Business Intelligence',
  'Development Tools',
  'Testing',
  'Other Tools',
];
