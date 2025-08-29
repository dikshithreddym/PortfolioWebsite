# Dikshith Reddy Macherla - Portfolio

A fast, minimal, and responsive personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Fast & Minimal**: Built with Next.js 14 App Router for optimal performance
- **Responsive Design**: Looks great on phone, tablet, and laptop
- **Accessible**: WCAG 2.1 AA compliant with keyboard navigation
- **SEO Optimized**: Complete metadata, sitemap, and robots.txt
- **Contact Form**: Serverless API endpoint with spam protection
- **Analytics**: Vercel Analytics integration
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd PortfolioWebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking
- `npm run analyze` - Analyze bundle size

## 📝 Content Management

The website content is managed through TypeScript files in the `/content` directory:

### `/content/socials.ts`
Update social media links and contact information:
```typescript
export const socials = {
  github: 'https://github.com/dikshithreddym',
  linkedin: 'http://linkedin.com/in/dikshithreddym',
  email: 'dikshithreddy.macherla@trentu.ca',
  // ... other social links
};
```

### `/content/projects.ts`
Add or modify projects:
```typescript
export const projects: Project[] = [
  {
    title: 'Project Name',
    description: 'Project description...',
    tags: ['React', 'TypeScript'],
    links: {
      github: 'https://github.com/...',
      live: 'https://...',
    },
    featured: true, // Show on homepage
  },
];
```

### `/content/experience.ts`
Update work experience:
```typescript
export const experience: Experience[] = [
  {
    title: 'Job Title',
    company: 'Company Name',
    location: 'Location',
    period: 'Duration',
    description: ['Achievement 1', 'Achievement 2'],
    tags: ['Skills', 'Technologies'],
  },
];
```

### `/content/talks.ts`
Add presentations and publications:
```typescript
export const talks: Talk[] = [
  {
    title: 'Talk Title',
    venue: 'Conference/Event',
    date: 'Date',
    description: 'Description...',
    links: {
      slides: '/path/to/slides.pdf',
      paper: '/path/to/paper.pdf',
    },
  },
];
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository to Vercel**
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Environment Variables** (if needed):
   - Add any required environment variables in Vercel dashboard

4. **Deploy**: Vercel will automatically deploy on every push to main branch

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## 📊 Performance

The website is optimized for performance with:
- **Lighthouse Score**: Target 95+ on all metrics
- **Image Optimization**: Next.js Image component with automatic optimization
- **Code Splitting**: Automatic code splitting with Next.js
- **Tree Shaking**: Unused code elimination
- **Minification**: Production builds are minified

## 🎨 Customization

### Colors
Update the color palette in `tailwind.config.ts`:
```typescript
colors: {
  background: '#0B0B0C',
  foreground: '#EDEDED',
  accent: '#4ADE80',
  muted: '#A1A1AA',
  border: '#27272A',
}
```

### Fonts
The website uses Inter font by default. To change:
1. Update the font import in `app/globals.css`
2. Modify the font family in `tailwind.config.ts`

### Styling
All styling is done with Tailwind CSS utility classes. Custom styles can be added in `app/globals.css`.

## 🔧 Configuration

### Contact Form
The contact form uses a serverless API endpoint at `/api/contact/route.ts`. To enable email sending:

1. **Add an email provider** (e.g., Vercel Email, SendGrid, Resend)
2. **Update the API route** with your email service
3. **Add environment variables** for API keys

### Analytics
Vercel Analytics is included by default. To disable:
1. Remove the `@vercel/analytics` import from `app/layout.tsx`
2. Remove the `<Analytics />` component

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- **WCAG 2.1 AA** compliant
- **Keyboard navigation** support
- **Screen reader** friendly
- **Focus indicators** for all interactive elements
- **Reduced motion** support
- **Semantic HTML** structure

## 🔍 SEO

- **Meta tags** for all pages
- **Open Graph** and **Twitter Cards**
- **Sitemap** generation
- **Robots.txt** configuration
- **Structured data** (JSON-LD)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: dikshithreddy.macherla@trentu.ca
- LinkedIn: [Dikshith Reddy Macherla](http://linkedin.com/in/dikshithreddym)
- GitHub: [dikshithreddym](https://github.com/dikshithreddym)
