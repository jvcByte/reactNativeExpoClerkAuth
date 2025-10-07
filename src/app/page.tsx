'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/layout/hero-section';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Handle errors
  if (error) {
    return (
      <ErrorBoundary
        onError={(err) => {
          console.error('Error in Home component:', err);
          setError(err);
        }}
      >
        <div className="min-h-screen flex items-center justify-center p-4 bg-background">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-500 mb-4">
              Something went wrong
            </h2>
            <p className="text-muted-foreground mb-6">
              We&apos;re having trouble loading the application. Please try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary onError={(err) => setError(err)}>
      {isLoading ? (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="animate-pulse flex flex-col items-center gap-4">
            <div className="h-12 w-48 bg-muted rounded-lg"></div>
            <div className="h-4 w-32 bg-muted rounded"></div>
          </div>
        </div>
      ) : (
        <HeroSection />
      )}
    </ErrorBoundary>
  );
}
