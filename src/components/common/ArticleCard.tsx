import { ArticleCardProps } from '@/types';
import { cn } from '@/lib/utils';

/**
 * ArticleCard component for displaying resource links with consistent styling
 */
export function ArticleCard({
  title,
  href,
  description,
  className
}: ArticleCardProps) {
  return (
    <a
      href={href + "?utm_source=next-template"}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex flex-col border border-zinc-800 p-4 rounded-lg",
        "hover:bg-zinc-900/50 transition-all duration-200",
        "hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-900/20",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-900",
        className
      )}
    >
      <article className="space-y-2">
        <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed">
          {description}
        </p>
      </article>

      {/* Visual indicator for external links */}
      <div className="mt-3 flex items-center text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
        <svg
          className="w-3 h-3 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
        External link
      </div>
    </a>
  );
}
