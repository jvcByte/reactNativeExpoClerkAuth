import { ReactNode } from 'react';

export default function AuthenticatedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
