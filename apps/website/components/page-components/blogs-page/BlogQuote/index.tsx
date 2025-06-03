import React from 'react';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@/components/ui/avatar';

interface BlogQuoteProps {
  quote: string;
  authorName: string;
  authorTitle?: string;
  authorInitials?: string;
  authorImage?: string;
}

const BlogQuote: React.FC<BlogQuoteProps> = ({
  quote,
  authorName,
  authorTitle = '',
  authorInitials = '',
  authorImage = '',
}) => {
  return (
    <div className="w-full max-w-3xl my-4">
      <figure className="relative p-8 md:p-10 rounded-xl dark:bg-background-0 border border-outline-950/10">
        {/* Quote mark */}
        <svg
          className="absolute h-12 w-12 text-typography-900/10"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>

        {/* Quote content */}
        <div className="relative">
          <blockquote className="mt-6 md:mt-8">
            <p className="text-lg md:text-xl text-typography-900/80 leading-relaxed">
              {quote}
            </p>
          </blockquote>

          {/* Author info */}
          <figcaption className="mt-6 md:mt-8 flex items-center gap-4">
            <Avatar>
              <AvatarFallbackText>{authorInitials}</AvatarFallbackText>
              <AvatarImage source={{ uri: authorImage }} />
            </Avatar>
            <div>
              <div className="text-base font-semibold text-typography-900">
                {authorName}
              </div>
              {authorTitle && (
                <div className="mt-1 text-sm text-typography-900/60">
                  {authorTitle}
                </div>
              )}
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export { BlogQuote };
