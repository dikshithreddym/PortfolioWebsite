import Link from 'next/link';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';

export default function NotFound() {
  return (
    <Section className="pt-24">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <Button asChild>
          <Link href="/">
            Go Back Home
          </Link>
        </Button>
      </div>
    </Section>
  );
}
