"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BLOGS } from "@/lib/db";
import { Compass, BookOpen, Clock, Calendar, ArrowRight, User } from "lucide-react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export default function BlogListingPage() {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  // Extract unique tags
  const tags = ["All", ...Array.from(new Set(BLOGS.flatMap((b) => b.tags)))];

  const filteredBlogs = selectedTag === "All"
    ? BLOGS
    : BLOGS.filter(b => b.tags.includes(selectedTag));

  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-primary inline-flex items-center gap-1.5">
              <BookOpen className="h-4 w-4 text-primary" />
              Trekking & Adventure Journals
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Stories from the Summit
            </h1>
            <p className="text-sm text-muted-foreground">
              Mountaineering advice, trail secrets, local culture histories, and safety guides compiled by our veteran trek leaders.
            </p>
          </div>

          {/* Tag Selectors */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                  selectedTag === tag
                    ? "bg-primary border-primary text-primary-foreground"
                    : "bg-card border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Blog list Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {filteredBlogs.map((blog, idx) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-60 w-full overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-85" />
                  
                  {/* Tags */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
                    {blog.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[9px] font-black uppercase bg-primary text-primary-foreground px-2 py-0.5 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div className="space-y-3.5">
                    <div className="flex items-center gap-4 text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                      <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-primary" /> {blog.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 text-primary" /> {blog.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/80">
                    <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                      <div className="w-6.5 h-6.5 rounded-full bg-secondary flex items-center justify-center text-primary font-black text-[10px]">
                        {blog.author[0]}
                      </div>
                      <span>{blog.author}</span>
                    </div>
                    
                    <Link href={`/blog/${blog.slug}`} className="inline-flex items-center text-xs font-extrabold text-primary uppercase tracking-wider">
                      Read Article <ArrowRight className="h-4.5 w-4.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-sm font-semibold text-muted-foreground">No articles match the selected category tag.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
