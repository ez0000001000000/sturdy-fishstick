import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface Author {
  name: string;
  avatar: string;
}

interface Article {
  date: string;
  title: string;
  description: string;
  image: string;
  authors: Author[];
}

const FEATURED_ARTICLES: Article[] = [
  {
    date: "Dec 30, 2025",
    title: "Best AI App Builders in 2025",
    description:
      "Discover the top AI-powered app builders that are revolutionizing web development. From no-code platforms to advanced AI assistants, explore tools that can help you build applications faster and more efficiently.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=800&fit=crop",
    authors: [
      { name: "ez0000001000000", avatar: "https://avatars.githubusercontent.com/u/207921092?v=4" },
    ],
  },
  {
    date: "Dec 25, 2025",
    title: "Modern Web Development Trends",
    description:
      "Explore the latest trends shaping web development in 2025. From AI integration to new frameworks, understand what's driving innovation in the web development landscape.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=800&fit=crop",
    authors: [
      { name: "ez0000001000000", avatar: "https://avatars.githubusercontent.com/u/207921092?v=4" },
    ],
  },
];

const FeaturedArticles = () => {
  return (
    <div className="relative space-y-12">
      {/* Structural Scaffolding Lines */}
      <div className="pointer-events-none absolute -inset-x-px -inset-y-6 border-x border-border/40"></div>
      <div className="pointer-events-none absolute -inset-y-6 inset-x-0 left-1/2 w-2 -translate-x-1 border-x border-border/40 max-sm:hidden lg:left-1/3 lg:-translate-x-1.5"></div>
      <div className="pointer-events-none absolute -inset-y-6 inset-x-0 right-1/3 ml-auto w-2 translate-x-1.5 border-x border-border/40 max-lg:hidden"></div>

      <div className="space-y-12">
        {FEATURED_ARTICLES.map((article, index) => (
          <div key={index} className="group relative">
            {/* Horizontal Grid Line for separation */}
            <div className="pointer-events-none absolute -inset-x-6 -inset-y-px border-y border-border/40 group-first:border-t group-first:border-b-0"></div>
            
            <article className="bg-card/75 ring-foreground/5 hover:bg-card/50 group relative gap-2 rounded-xl border border-transparent shadow-md ring-1 transition-colors duration-200 sm:grid sm:grid-cols-3">
              {/* Image Container with Custom Inset Border */}
              <div className="relative m-0.5 aspect-square overflow-hidden rounded-[10px] before:absolute before:inset-0 before:z-10 before:rounded-[10px] before:border before:border-white/10">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Area (2/3 width on desktop) */}
              <div className="col-span-2 grid gap-3 p-6 sm:p-8">
                <time className="text-muted-foreground text-sm font-normal">
                  {article.date}
                </time>
                
                <h2 className="text-foreground text-balance text-lg font-semibold tracking-tight md:text-xl md:leading-tight">
                  <a className="before:absolute before:inset-0" href="#">
                    {article.title}
                  </a>
                </h2>
                
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  {article.description}
                </p>

                {/* Footer Meta: Authors and CTA */}
                <div className="grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
                  <div className="space-y-2.5">
                    {article.authors.map((author, authIdx) => (
                      <div key={authIdx} className="grid grid-cols-[auto_1fr] items-center gap-2">
                        <div className="bg-card relative aspect-square size-6 overflow-hidden rounded-[6px] border border-transparent shadow-sm ring-1 ring-foreground/10">
                          <Image
                            src={author.avatar}
                            alt={author.name}
                            width={48}
                            height={48}
                            className="size-full object-cover"
                          />
                        </div>
                        <span className="text-muted-foreground line-clamp-1 text-sm font-medium">
                          {author.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex h-6 items-center">
                    <span 
                      aria-label={`Read ${article.title}`} 
                      className="text-primary group-hover:text-foreground flex items-center gap-1 text-sm font-semibold transition-colors duration-200"
                    >
                      Read
                      <ChevronRight className="size-3.5 translate-y-px transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedArticles;
