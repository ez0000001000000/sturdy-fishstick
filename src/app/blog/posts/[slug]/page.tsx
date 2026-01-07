import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

interface PostData {
  title: string;
  date: string;
  author: string;
  avatar: string;
  description: string;
  image: string;
  content: string;
}

async function getPostData(slug: string): Promise<PostData | null> {
  try {
    const filePath = path.join(process.cwd(), 'src/app/blog/posts', `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      title: data.title,
      date: data.date,
      author: data.author,
      avatar: data.avatar,
      description: data.description,
      image: data.image,
      content,
    };
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const postData = await getPostData(slug);
  
  if (!postData) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: postData.title,
    description: postData.description,
    openGraph: {
      title: postData.title,
      description: postData.description,
      images: [postData.image],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  if (!postData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="mx-auto max-w-4xl px-6 py-6">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="size-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-12">
          {/* Featured Image */}
          <div className="mb-8 aspect-video overflow-hidden rounded-lg">
            <Image
              src={postData.image}
              alt={postData.title}
              width={1200}
              height={630}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Title and Meta */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
              {postData.title}
            </h1>
            
            <div className="flex items-center gap-4 text-muted-foreground">
              <a 
                href="https://github.com/ez0000001000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <div className="relative size-8 overflow-hidden rounded-full">
                  <Image
                    src={postData.avatar}
                    alt={postData.author}
                    width={32}
                    height={32}
                    className="size-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium">{postData.author}</span>
              </a>
              <span className="text-sm">•</span>
              <time className="text-sm">{postData.date}</time>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {postData.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white border-t">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <article className="prose prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h1: (props: any) => <h1 className="text-3xl font-bold text-foreground mb-6 mt-8" {...props} />,
                h2: (props: any) => <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8" {...props} />,
                h3: (props: any) => <h3 className="text-xl font-semibold text-foreground mb-3 mt-6" {...props} />,
                p: (props: any) => <p className="text-muted-foreground leading-relaxed mb-4" {...props} />,
                ul: (props: any) => <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2" {...props} />,
                ol: (props: any) => <ol className="list-decimal list-inside text-muted-foreground mb-4 space-y-2" {...props} />,
                li: (props: any) => <li {...props} />,
                code: (props: any) => <code className="bg-muted px-2 py-1 rounded text-sm font-mono" {...props} />,
                pre: (props: any) => <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4" {...props} />,
                blockquote: (props: any) => (
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4" {...props} />
                ),
                strong: (props: any) => <strong className="font-semibold text-foreground" {...props} />,
                em: (props: any) => <em className="italic" {...props} />,
                a: (props: any) => (
                  <a className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" {...props} />
                ),
              }}
            >
              {postData.content}
            </ReactMarkdown>
          </article>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="text-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="size-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
