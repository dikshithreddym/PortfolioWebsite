'use client';

import { useState } from 'react';
import { Card } from './Card';
import { Tag } from './Tag';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/content/testimonials';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="space-y-8">
      {/* Testimonials Display */}
      <div className="relative">
        <Card className="p-8 relative overflow-hidden">
          {/* Quote Icon */}
          <div className="absolute top-4 right-4 text-accent/20">
            <Quote className="h-12 w-12" />
          </div>

          {/* Testimonial Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-muted leading-relaxed italic">
                &ldquo;{currentTestimonial.content}&rdquo;
              </p>
            </div>

            {/* Author Info */}
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-foreground">
                  {currentTestimonial.name}
                </h4>
                <p className="text-sm text-accent font-medium">
                  {currentTestimonial.title}
                </p>
                <p className="text-sm text-muted">
                  {currentTestimonial.company}
                </p>
                <div className="flex items-center gap-2">
                  <Tag variant="default" size="sm" className="text-xs">
                    {currentTestimonial.relationship}
                  </Tag>
                  <span className="text-xs text-muted">
                    {currentTestimonial.date}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 border border-border text-muted hover:text-foreground hover:bg-background transition-all duration-200 focus-ring"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 border border-border text-muted hover:text-foreground hover:bg-background transition-all duration-200 focus-ring"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </Card>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 focus-ring ${
                index === currentIndex
                  ? 'bg-accent'
                  : 'bg-muted/30 hover:bg-muted/60'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Testimonials Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-accent mb-2">
            {testimonials.length}
          </div>
          <div className="text-sm text-muted">Recommendations</div>
        </Card>
        <Card className="p-6 text-center">
          <div className="text-3xl font-bold text-blue-400 mb-2">
            100%
          </div>
          <div className="text-sm text-muted">Positive Feedback</div>
        </Card>
      </div>
    </div>
  );
}
