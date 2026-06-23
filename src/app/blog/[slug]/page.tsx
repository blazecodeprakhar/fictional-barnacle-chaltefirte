import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BLOGS } from "@/lib/db";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, ArrowLeft, BookOpen, AlertTriangle } from "lucide-react";
import { ImageWithFallback } from "@/components/ImageWithFallback";

// Pre-render static paths for blogs
export function generateStaticParams() {
  return BLOGS.map((blog) => ({
    slug: blog.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Find blog corresponding to this slug
  const blog = BLOGS.find((b) => b.slug === slug);

  // Recommended blogs
  const recommendedBlogs = BLOGS.filter((b) => b.slug !== slug).slice(0, 2);

  if (!blog) {
    return (
      <>
        <Header />
        <main className="flex-grow pt-32 pb-20 flex items-center justify-center">
          <div className="text-center space-y-4 p-8 rounded-2xl border border-border bg-card max-w-md mx-auto">
            <AlertTriangle className="h-12 w-12 text-destructive mx-auto animate-bounce" />
            <h1 className="text-2xl font-black">Article Not Found</h1>
            <p className="text-xs text-muted-foreground">The article you are searching for does not exist or has been removed.</p>
            <Link href="/blog">
              <Button size="sm" className="mt-4">Back to Blog Journal</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center text-xs font-bold text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-1.5" /> Back to Journal
          </Link>

          {/* Article Header Metadata */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-wider">
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-primary" /> {blog.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-primary" /> {blog.readTime}</span>
              <span>•</span>
              <span className="text-primary font-extrabold">{blog.tags.join(", ")}</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-foreground">
              {blog.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-2.5 pt-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-black text-primary text-xs">
                {blog.author[0]}
              </div>
              <div>
                <span className="text-xs font-bold block text-foreground leading-none">{blog.author}</span>
                <span className="text-[10px] text-muted-foreground">Trek Coordinator</span>
              </div>
            </div>
          </div>

          {/* Hero cover image */}
          <div className="relative h-[40vh] sm:h-[50vh] w-full rounded-2xl overflow-hidden border border-border mb-10 shadow-sm bg-muted">
            <ImageWithFallback
              src={blog.coverImage}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="text-sm sm:text-base text-foreground/90 leading-relaxed space-y-6 max-w-3xl mx-auto whitespace-pre-line border-b border-border pb-12">
            {blog.content}
          </div>

          {/* Recommended Posts Section */}
          <div className="mt-16 max-w-3xl mx-auto space-y-8">
            <h3 className="text-lg font-black uppercase tracking-wider text-foreground flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" /> Recommended Reading
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {recommendedBlogs.map((rec) => (
                <Link key={rec.id} href={`/blog/${rec.slug}`} className="group block space-y-3">
                  <div className="relative h-44 rounded-xl overflow-hidden bg-muted border border-border">
                    <ImageWithFallback
                      src={rec.coverImage}
                      alt={rec.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[10px] text-muted-foreground font-semibold">{rec.date} • {rec.readTime}</span>
                    <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {rec.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
