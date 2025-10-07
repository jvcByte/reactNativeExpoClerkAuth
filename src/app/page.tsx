'use client';

import { useState, useEffect } from 'react';
import { ConnectButton } from 'thirdweb/react';
import { thirdwebClient } from '../lib/thirdweb/client';
import { Header } from '@/components/layout/Header';
import { ThirdwebResources } from '@/components/layout/ThirdwebResources';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { HeaderSkeleton, ResourcesSkeleton } from '@/components/ui/Skeleton';
import { config } from '@/lib/config';

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
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-500 mb-4">
              Something went wrong
            </h2>
            <p className="text-zinc-400 mb-6">
              We&apos;re having trouble loading the application. Please try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
      <main className="min-h-screen bg-zinc-950 text-white">
        <div className="container mx-auto px-4 py-10">
          {isLoading ? (
            // Show loading state
            <div className="space-y-20">
              <HeaderSkeleton />
              <div className="flex justify-center">
                <div className="h-12 w-48 bg-zinc-800 rounded-lg animate-pulse"></div>
              </div>
              <ResourcesSkeleton />
            </div>
          ) : (
            // Show content when loaded
            <div className="space-y-20">
              <Header />

              <div className="flex justify-center">
                <ConnectButton
                  client={thirdwebClient}
                  appMetadata={{
                    name: config.app.name,
                    url: config.app.url,
                  }}
                  theme="dark"
                />
              </div>

              <ThirdwebResources />
            </div>
          )}
        </div>
      </main>
    </ErrorBoundary>
  );
}
