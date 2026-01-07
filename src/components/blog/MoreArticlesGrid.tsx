"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import posthog from "posthog-js";

interface Author {
  name: string;
  avatar: string;
}

interface Article {
  date: string;
  title: string;
  description: string;
  authors: Author[];
  href: string;
  image: string;
}

const articles: Article[] = [
  {
    date: "Jan 2, 2025",
    title: "Best Advanced Component Libraries in 2025",
    description: "Discover the top advanced component libraries that are revolutionizing React development. From Aceternity UI to Magic UI, explore tools that will make your applications stand out.",
    authors: [
      { name: "ez0000001000000", avatar: "https://avatars.githubusercontent.com/u/207921092?v=4" },
    ],
    href: "/blog/posts/best-advanced-component-libraries-2025",
    image: "https://cdn.gamma.app/0q3kwkx42ofh0ga/415cea3f46a345b0b1e7f22c383c3e7b/original/Blog-2.jpg",
  },
  {
    date: "Dec 30, 2025",
    title: "Best AI App Builders in 2025",
    description: "Discover the top AI-powered app builders that are revolutionizing web development. From no-code platforms to advanced AI assistants, explore tools that can help you build applications faster and more efficiently.",
    authors: [
      { name: "ez0000001000000", avatar: "https://avatars.githubusercontent.com/u/207921092?v=4" },
    ],
    href: "/blog/posts/best-ai-app-builders-2025",
    image: "https://cdn.gamma.app/0q3kwkx42ofh0ga/6068268a929f45ebb444078c13811dd5/original/AI-Post.png",
  },
];

export default function MoreArticlesGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1152px] px-6">
        <div className="relative">
          {/* Grid Scaffolding Lines */}
          <div className="pointer-events-none absolute -inset-x-px -inset-y-0 border-x"></div>
          <div className="pointer-events-none absolute -inset-y-0 inset-x-0 left-1/2 w-2 -translate-x-1 border-x max-sm:hidden lg:left-1/3 lg:-translate-x-1.5"></div>
          <div className="pointer-events-none absolute -inset-y-0 inset-x-0 right-1/3 ml-auto w-2 translate-x-1.5 border-x max-lg:hidden"></div>
          
          {/* Section Header */}
          <div className="relative group">
            <div className="pointer-events-none absolute -inset-x-6 -inset-y-px border-y"></div>
            <div className="-mx-6 bg-transparent px-12 py-2">
              <h2 className="text-foreground text-[12px] font-medium uppercase tracking-wider">
                More Articles
              </h2>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid gap-x-0 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <article
                key={index}
                className="group relative flex flex-col gap-3 p-6 border-b transition-colors duration-200 hover:bg-muted/30 focus-within:bg-muted/30"
              >
                {/* Vertical Divider for columns (simulated by relative layout if needed, but here we use the container borders) */}
                <time className="text-muted-foreground text-[14px]">
                  {article.date}
                </time>
                <h3 className="text-foreground text-[18px] font-semibold leading-snug">
                  <a
                    href={article.href}
                    className="before:absolute before:inset-0 focus:outline-none"
                    onClick={() => posthog.capture("more_article_clicked", {
                      article_title: article.title,
                      article_date: article.date,
                      article_authors: article.authors.map(a => a.name).join(", "),
                      section: "more_articles_grid",
                      position: index + 1,
                    })}
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="text-muted-foreground text-[16px] leading-[1.625]">
                  {article.description}
                </p>
                
                {/* Footer Metadata */}
                <div className="mt-auto grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
                  <div className="space-y-2">
                    {article.authors.map((author, authIdx) => (
                      <div key={authIdx} className="grid grid-cols-[auto_1fr] items-center gap-2">
                        <div className="flex aspect-square size-6 overflow-hidden rounded-[6px] border border-transparent shadow-sm ring-1 ring-foreground/5 bg-card">
                          <img
                            src={author.avatar}
                            alt={author.name}
                            className="w-full h-full object-cover"
                            width={24}
                            height={24}
                          />
                        </div>
                        <span className="text-muted-foreground text-[14px] line-clamp-1">
                          {author.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex h-6 items-center">
                    <span className="text-primary group-hover:text-foreground inline-flex items-center gap-1 text-[14px] font-medium transition-colors duration-200">
                      Read
                      <ChevronRight className="size-3.5 translate-y-[0.5px] transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
