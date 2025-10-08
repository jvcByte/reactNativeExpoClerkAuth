import { ReactNode } from 'react';
import { Header } from '@/components/layout/Header';

export default function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {children}
      </main>
    </div>
  );
}
