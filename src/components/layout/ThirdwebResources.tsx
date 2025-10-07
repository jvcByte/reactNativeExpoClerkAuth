import { ThirdwebResourcesProps } from '@/types';
import { cn } from '@/lib/utils';
import { ArticleCard } from '@/components/common/ArticleCard';

/**
 * Resources section component showcasing thirdweb documentation and tools
 */
export function ThirdwebResources({ className }: ThirdwebResourcesProps) {
  const resources = [
    {
      title: "thirdweb SDK Docs",
      href: "https://portal.thirdweb.com/typescript/v5",
      description: "Complete thirdweb TypeScript SDK documentation with examples and guides"
    },
    {
      title: "Components and Hooks",
      href: "https://portal.thirdweb.com/typescript/v5/react",
      description: "Learn about thirdweb React components and hooks for building dApps"
    },
    {
      title: "thirdweb Dashboard",
      href: "https://thirdweb.com/dashboard",
      description: "Deploy, configure, and manage your smart contracts from the dashboard"
    }
  ];

  return (
    <section className={cn("space-y-6", className)}>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-zinc-100 mb-2">
          Get Started with thirdweb
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Explore these essential resources to build powerful decentralized applications
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 max-w-6xl mx-auto">
        {resources.map((resource, index) => (
          <ArticleCard
            key={index}
            title={resource.title}
            href={resource.href}
            description={resource.description}
          />
        ))}
      </div>
    </section>
  );
}
