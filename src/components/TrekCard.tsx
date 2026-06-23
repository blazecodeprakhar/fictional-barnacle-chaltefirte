"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar, Star, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Badge } from "@/components/ui/Badge";
import { Trek } from "@/lib/db";

type TrekCardProps = {
  trek: Trek;
};

export function TrekCard({ trek }: TrekCardProps) {
  // Map difficulty levels to badge variants
  const difficultyVariants: Record<Trek["difficulty"], "success" | "warning" | "destructive" | "secondary"> = {
    "Easy": "success",
    "Easy to Moderate": "success",
    "Moderate": "warning",
    "Difficult": "destructive",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* Trek Image & Badge */}
      <div className="relative h-56 w-full overflow-hidden bg-muted">
        <ImageWithFallback
          src={trek.image}
          alt={trek.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        
        {/* Difficulty Badge */}
        <div className="absolute top-4 left-4 z-10">
          <Badge variant={difficultyVariants[trek.difficulty] || "secondary"}>
            {trek.difficulty}
          </Badge>
        </div>

        {/* Location tag */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 text-xs font-semibold text-white">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          {trek.location}
        </div>
      </div>

      {/* Trek Body */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center justify-between mb-2">
          {/* Reviews Rating */}
          <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
            <Star className="h-3.5 w-3.5 fill-current" />
            {trek.rating} <span className="text-muted-foreground font-medium">({trek.reviewsCount})</span>
          </div>
          {/* Duration */}
          <div className="flex items-center gap-1 text-xs text-muted-foreground font-semibold">
            <Calendar className="h-3.5 w-3.5 text-primary" />
            {trek.duration}
          </div>
        </div>

        <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-1 mb-2">
          {trek.title}
        </h3>
        
        <p className="text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
          {trek.description}
        </p>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/80">
          {/* Pricing */}
          <div>
            <span className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
              Starting From
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-black text-foreground">₹{trek.price}</span>
              {trek.originalPrice && (
                <span className="text-xs text-muted-foreground line-through font-medium">
                  ₹{trek.originalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Learn More Button */}
          <Link href={`/treks/${trek.slug}`}>
            <span className="inline-flex items-center justify-center gap-1 text-xs font-extrabold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider">
              Details
              <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
