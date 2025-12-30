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
}

const articles: Article[] = [
  {
    date: "Oct 5, 2025",
    title: "Cutting-Edge Innovations in Data Analytics",
    description: "Learn about the latest trends in data analytics and how they can drive business growth.",
    authors: [
      { name: "Shadcn", avatar: "https://avatars.githubusercontent.com/u/124599?v=4" },
      { name: "Meschac Irung", avatar: "https://avatars.githubusercontent.com/u/47919550?v=4" },
    ],
    href: "#",
  },
  {
    date: "Oct 15, 2025",
    title: "Advancements in Cybersecurity Technologies",
    description: "Discover new technologies protecting businesses from digital threats.",
    authors: [
      { name: "Meschac Irung", avatar: "https://avatars.githubusercontent.com/u/47919550?v=4" },
    ],
    href: "#",
  },
  {
    date: "Nov 1, 2025",
    title: "The Role of Blockchain in Modern Finance",
    description: "Understand how blockchain is reshaping the financial landscape.",
    authors: [
      { name: "Theo Balick", avatar: "https://avatars.githubusercontent.com/u/68236786?v=4" },
    ],
    href: "#",
  },
  {
    date: "Nov 10, 2025",
    title: "Sustainability in Tech: A Growing Focus",
    description: "Explore efforts towards sustainable practices in technology.",
    authors: [
      { name: "Shadcn", avatar: "https://avatars.githubusercontent.com/u/124599?v=4" },
    ],
    href: "#",
  },
  {
    date: "Dec 5, 2025",
    title: "Big Data as a Strategic Asset",
    description: "See how big data analytics can unlock new opportunities.",
    authors: [
      { name: "Bernard Ngandu", avatar: "https://avatars.githubusercontent.com/u/31113941?v=4" },
    ],
    href: "#",
  },
  {
    date: "Dec 5, 2025",
    title: "The Future of Business with Big Data",
    description: "See how big data analytics can unlock new opportunities.",
    authors: [
      { name: "Glodie Lukose", avatar: "https://avatars.githubusercontent.com/u/99137927?v=4" },
    ],
    href: "#",
  },
  {
    date: "Dec 5, 2025",
    title: "Turning Data into Business Growth",
    description: "See how big data analytics can unlock new opportunities insights and more from.",
    authors: [
      { name: "Bernard Ngandu", avatar: "https://avatars.githubusercontent.com/u/31113941?v=4" },
      { name: "Shadcn", avatar: "https://avatars.githubusercontent.com/u/124599?v=4" },
    ],
    href: "#",
  },
  {
    date: "Aug 18, 2025",
    title: "Building a Strong Remote Work Culture",
    description: "Uncover the benefits and challenges of adopting a remote work culture in modern businesses.",
    authors: [
      { name: "Meschac Irung", avatar: "https://avatars.githubusercontent.com/u/47919550?v=4" },
    ],
    href: "#",
  },
  {
    date: "Sep 10, 2025",
    title: "The Transformative Future of AI in Digital Marketing",
    description: "Explore the potential of AI to revolutionize marketing strategies and customer engagement.",
    authors: [
      { name: "Theo Balick", avatar: "https://avatars.githubusercontent.com/u/68236786?v=4" },
      { name: "Méschac Irung", avatar: "https://avatars.githubusercontent.com/u/47919550?v=4" },
    ],
    href: "#",
  },
  {
    date: "Oct 5, 2025",
    title: "Emerging Trends in Data Analytics",
    description: "Learn about the latest trends in data analytics and how they can drive business growth.",
    authors: [
      { name: "Shadcn", avatar: "https://avatars.githubusercontent.com/u/124599?v=4" },
      { name: "Meschac Irung", avatar: "https://avatars.githubusercontent.com/u/47919550?v=4" },
    ],
    href: "#",
  },
  {
    date: "Oct 15, 2025",
    title: "Next-Gen Cybersecurity Solutions",
    description: "Discover new technologies protecting businesses from digital threats.",
    authors: [
      { name: "Meschac Irung", avatar: "https://avatars.githubusercontent.com/u/47919550?v=4" },
    ],
    href: "#",
  },
  {
    date: "Nov 1, 2025",
    title: "Blockchain's Impact on Global Finance",
    description: "Understand how blockchain is reshaping the financial landscape.",
    authors: [
      { name: "Theo Balick", avatar: "https://avatars.githubusercontent.com/u/68236786?v=4" },
    ],
    href: "#",
  },
  {
    date: "Nov 10, 2025",
    title: "The Push for Green Technology",
    description: "Explore efforts towards sustainable practices in technology.",
    authors: [
      { name: "Shadcn", avatar: "https://avatars.githubusercontent.com/u/124599?v=4" },
    ],
    href: "#",
  },
  {
    date: "Dec 5, 2025",
    title: "Big Data Driving Innovation",
    description: "See how big data analytics can unlock new opportunities.",
    authors: [
      { name: "Bernard Ngandu", avatar: "https://avatars.githubusercontent.com/u/31113941?v=4" },
    ],
    href: "#",
  },
  {
    date: "Dec 5, 2025",
    title: "Real-Time Insights with Big Data",
    description: "See how big data analytics can unlock new opportunities.",
    authors: [
      { name: "Glodie Lukose", avatar: "https://avatars.githubusercontent.com/u/99137927?v=4" },
    ],
    href: "#",
  },
  {
    date: "Dec 5, 2025",
    title: "From Data to Decisions",
    description: "See how big data analytics can unlock new opportunities insights and more from.",
    authors: [
      { name: "Bernard Ngandu", avatar: "https://avatars.githubusercontent.com/u/31113941?v=4" },
      { name: "Shadcn", avatar: "https://avatars.githubusercontent.com/u/124599?v=4" },
    ],
    href: "#",
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
