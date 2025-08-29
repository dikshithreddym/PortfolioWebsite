export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  date: string;
  relationship: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'uche-obinwanne',
    name: 'Uche Obinwanne',
    title: 'Applied AI Intern',
    company: 'Vector Institute | Research and Teaching Assistant @ Trent University',
    content: `It was a pleasure mentoring and collaborating with Dikshith during his research project at Trent University in the summer of 2025. Dikshith played a central role in our project on intraday stock price prediction using machine learning, where he demonstrated impressive technical ability and creativity.

He worked extensively on feature engineering, designing meaningful technical indicators, lagged variables, and rolling statistics that significantly strengthened our predictive models. He successfully developed and evaluated accurate linear regression, XGBoost, and LSTM models, which were crucial to the project's outcomes. He was equally able to derive valuable insights from the models in relation to short-term financial forecasting.

Dikshith also collaborated seamlessly with his peers and the principal investigator, incorporating feedback into his paper for the SNPD 2025 international conference, where his work was accepted for presentation.
 
I strongly recommend Dikshith for any future opportunities in data science, machine learning, or research-oriented roles. His strong analytical mindset, adaptability, and commitment to quality make him a standout contributor to any project or organization.`,
    date: 'August 24, 2025',
    relationship: 'Mentor',
  },
  {
    id: 'michael-bruder',
    name: 'Michael Bruder',
    title: 'C.E.O.',
    company: 'Aristos Education Services Inc',
    content: `I had the pleasure of teaching Dikshith in a course focused on the philosophy of Artificial Intelligence, and I can say without hesitation that they are one of the most intellectually curious and engaged students I've encountered. Their enthusiasm for the topic of AI was evident from the very first class and only deepened as the semester progressed.

What sets Dikshith apart is not only their strong work ethic, but also their remarkable ability to draw insightful connections between complex philosophical ideas and contemporary developments in AI. Whether we were discussing Heidegger's concept of technology or the ethical implications of machine learning, he brought a level of analytical depth and originality that enriched our classroom discussions.

His passion for learning and drive to understand the broader implications of technological change make Dikshith an asset to any academic or professional setting. I have no doubt that he will continue to make meaningful contributions to the field.`,
    date: 'June 30, 2025',
    relationship: 'Teacher',
  },
];
