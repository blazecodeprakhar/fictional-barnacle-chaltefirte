"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Compass, Sparkles, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "@/components/ImageWithFallback";

type GalleryItem = {
  id: number;
  title: string;
  category: "Camping" | "Forts" | "Waterfalls";
  image: string;
  location: string;
};

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Camping Under the Stars",
    category: "Camping",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop",
    location: "Bhandardara Lake"
  },
  {
    id: 2,
    title: "Climbing the Steel Ladders",
    category: "Forts",
    image: "https://images.unsplash.com/photo-1626761191028-7f4ad1cc41f2?q=80&w=800&auto=format&fit=crop",
    location: "Ratangad Fort"
  },
  {
    id: 3,
    title: "Prabalmachi Plateau Campsite",
    category: "Camping",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=800&auto=format&fit=crop",
    location: "Prabalmachi Campsite"
  },
  {
    id: 4,
    title: "Historic Maha Darwaja",
    category: "Forts",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    location: "Raigad Fort"
  },
  {
    id: 5,
    title: "Nanemachi Gushing Cascade",
    category: "Waterfalls",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
    location: "Mahad Valleys"
  },
  {
    id: 6,
    title: "Morning Mist on Summit",
    category: "Waterfalls",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop",
    location: "Western Ghats Range"
  }
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const filteredItems = filter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx(selectedIdx === 0 ? filteredItems.length - 1 : selectedIdx - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx(selectedIdx === filteredItems.length - 1 ? 0 : selectedIdx + 1);
  };

  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-primary inline-flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              Visual Stories
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Media Gallery
            </h1>
            <p className="text-sm text-muted-foreground">
              A curated collection of nature captures, summits, historical fortifications, and campsite memories from our travelers.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {["All", "Camping", "Forts", "Waterfalls"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setSelectedIdx(null);
                }}
                className={`px-4.5 py-1.5 rounded-full text-xs font-bold tracking-wide border transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-primary border-primary text-primary-foreground"
                    : "bg-card border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setSelectedIdx(idx)}
                className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-64 w-full overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80" />
                </div>

                {/* Caption Details */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="inline-block text-[9px] font-extrabold uppercase tracking-wider bg-primary px-2 py-0.5 rounded-md mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="text-base font-extrabold truncate">{item.title}</h3>
                  <p className="text-[10px] text-gray-300 mt-0.5">{item.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Lightbox Dialog Overlay */}
          <AnimatePresence>
            {selectedIdx !== null && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
                onClick={() => setSelectedIdx(null)}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedIdx(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Left navigation */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 sm:left-8 p-3 rounded-full bg-slate-900 border border-slate-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Image & Caption block */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="max-w-4xl w-full flex flex-col items-center justify-center gap-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ImageWithFallback
                    src={filteredItems[selectedIdx].image}
                    alt={filteredItems[selectedIdx].title}
                    className="max-h-[70vh] rounded-xl object-contain max-w-full shadow-2xl border border-slate-800"
                  />
                  <div className="text-center text-white space-y-1">
                    <h3 className="text-lg font-black tracking-tight">{filteredItems[selectedIdx].title}</h3>
                    <p className="text-xs text-gray-400">{filteredItems[selectedIdx].location} • {filteredItems[selectedIdx].category}</p>
                  </div>
                </motion.div>

                {/* Right navigation */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 sm:right-8 p-3 rounded-full bg-slate-900 border border-slate-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </>
  );
}
