import Header from "@/components/sections/header";
import BlogHeader from "@/components/blog/BlogHeader";
import FeaturedPosts from "@/components/blog/FeaturedPosts";
import MoreArticlesGrid from "@/components/blog/MoreArticlesGrid";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <BlogHeader />
        <FeaturedPosts />
        <MoreArticlesGrid />
      </main>
    </div>
  );
}
