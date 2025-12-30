"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import posthog from 'posthog-js';

interface Author {
  name: string;
  avatar: string;
}

interface PostProps {
  date: string;
  title: string;
  description: string;
  image: string;
  authors: Author[];
}

const FeaturedPostCard = ({ date, title, description, image, authors }: PostProps) => {
  return (
    <div className="group relative">
      {/* Decorative background grid line for the group */}
      <div className="pointer-events-none absolute -inset-x-6 -inset-y-px group-first:border-y border-border/50"></div>
      
      <article className="bg-card/75 ring-foreground/3 hover:bg-card/50 focus-within:bg-card/50 group relative gap-2 rounded-xl border border-transparent shadow-md ring-1 transition-all duration-200 sm:grid sm:grid-cols-3">
        {/* Post Image Container */}
        <div className="relative m-0.5 aspect-square overflow-hidden rounded-[10px] before:absolute before:inset-0 before:rounded-[10px] before:border before:border-black/5 before:z-10">
          <Image
            alt={title}
            width={800}
            height={800}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={image}
          />
        </div>

        {/* Post Content */}
        <div className="col-span-2 grid gap-3 p-6">
          <time className="text-muted-foreground text-[14px] font-normal">{date}</time>
          
          <h2 className="text-foreground text-balance text-[20px] font-semibold leading-snug md:text-xl">
            <a
              className="before:absolute before:inset-0 focus:outline-none"
              href="#"
              onClick={() => posthog.capture("blog_article_clicked", {
                article_title: title,
                article_date: date,
                article_authors: authors.map(a => a.name).join(", "),
                section: "featured_posts",
              })}
            >
              {title}
            </a>
          </h2>
          
          <p className="text-muted-foreground text-[16px] leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Footer: Authors and Read Link */}
          <div className="grid grid-cols-[1fr_auto] items-end gap-2 pt-4">
            <div className="space-y-2">
              {authors.map((author, index) => (
                <div key={index} className="grid grid-cols-[auto_1fr] items-center gap-2">
                  <div className="bg-card aspect-square size-6 overflow-hidden rounded-md border border-transparent shadow-md shadow-black/15 ring-1 ring-black/5">
                    <img
                      src={author.avatar}
                      alt={author.name}
                      width={24}
                      height={24}
                      className="size-full object-cover"
                    />
                  </div>
                  <span className="text-muted-foreground line-clamp-1 text-[14px] font-normal">
                    {author.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex h-6 items-center">
              <span 
                aria-label={`Read ${title}`}
                className="text-primary group-hover:text-foreground flex items-center gap-1 text-[14px] font-medium transition-all duration-200"
              >
                Read
                <ChevronRight className="size-3.5 translate-y-px transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

const FeaturedPosts = () => {
  const posts = [
    {
      date: "Aug 18, 2025",
      title: "Embracing Remote Work Culture",
      description: "Explore the transformative shift towards remote work and how it has reshaped business operations globally. Discover strategies for effective communication, collaboration, and productivity in a remote work environment.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f9bcb133-3af6-4d94-8a70-da91f34b1766-pro-tailark-com/assets/images/images_2.png",
      authors: [
        { name: "Shadcn", avatar: "https://avatars.githubusercontent.com/u/124599?v=4" },
        { name: "Meschac Irung", avatar: "https://avatars.githubusercontent.com/u/47919550?v=4" }
      ]
    },
    {
      date: "Sep 10, 2025",
      title: "The Top Industries and Business Models Using AI for Fraud Prevention and Detection",
      description: "Discover how various industries leverage AI tools to enhance fraud prevention and detection. Gain insights into the leading sectors and business models adopting AI technologies and learn about the effectiveness of these approaches.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f9bcb133-3af6-4d94-8a70-da91f34b1766-pro-tailark-com/assets/images/images_1.png",
      authors: [
        { name: "Theo Balick", avatar: "https://avatars.githubusercontent.com/u/68236786?v=4" },
        { name: "Méschac Irung", avatar: "https://avatars.githubusercontent.com/u/47919550?v=4" }
      ]
    }
  ];

  return (
    <section className="bg-white">
      <div className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1152px] px-6">
          {/* Header section (context for the featured grid) */}
          <div className="max-w-md mb-12">
            <span className="text-muted-foreground text-[14px]">Blog</span>
            <h2 className="text-muted-foreground mt-4 text-balance text-[36px] font-semibold leading-tight">
              News, insights and more from <strong className="text-foreground font-semibold">Tailark Quartz</strong>
            </h2>
          </div>

          {/* This is the core Featured Section grid logic */}
          <div className="relative mt-12 md:mt-16">
            {/* Architectural Grid Lines (Quartz Aesthetic) */}
            <div className="pointer-events-none absolute -inset-x-px -inset-y-6 border-x border-border/50"></div>
            <div className="pointer-events-none absolute -inset-y-6 inset-x-0 left-1/2 w-2 -translate-x-1 border-x border-border/50 max-sm:hidden lg:left-1/3 lg:-translate-x-1.5"></div>
            <div className="pointer-events-none absolute -inset-y-6 inset-x-0 right-1/3 ml-auto w-2 translate-x-1.5 border-x border-border/50 max-lg:hidden"></div>

            {/* Content properly spaced with 12px gaps as per design */}
            <div className="space-y-12">
              {posts.map((post, index) => (
                <FeaturedPostCard key={index} {...post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
