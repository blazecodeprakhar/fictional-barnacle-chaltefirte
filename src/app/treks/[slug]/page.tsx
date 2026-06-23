"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { TREKS } from "@/lib/db";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Dialog } from "@/components/ui/Dialog";
import { BookingForm } from "@/components/BookingForm";
import { MapPin, Calendar, Star, ShieldAlert, Award, ChevronRight, HelpCircle, Check, X as CloseIcon, Clock, AlertTriangle, Compass } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TrekDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  // Find trek
  const trek = TREKS.find((t) => t.slug === slug);
  const [activeTab, setActiveTab] = useState<"overview" | "itinerary" | "inclusions" | "faqs">("overview");
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  // Difficulty tag mapping
  const difficultyColors = {
    "Easy": "success",
    "Easy to Moderate": "success",
    "Moderate": "warning",
    "Difficult": "destructive",
  } as const;

  if (!trek) {
    return (
      <>
        <Header />
        <main className="flex-grow pt-32 pb-20 flex items-center justify-center">
          <div className="text-center space-y-4 p-8 rounded-2xl border border-border bg-card max-w-md mx-auto">
            <AlertTriangle className="h-12 w-12 text-destructive mx-auto animate-bounce" />
            <h1 className="text-2xl font-black">Trek Package Not Found</h1>
            <p className="text-xs text-muted-foreground">The adventure package you are looking for does not exist or has been archived.</p>
            <Link href="/treks">
              <Button size="sm" className="mt-4">Back to Trek Packages</Button>
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

      <main className="flex-grow pt-24 pb-20">
        {/* Banner Hero */}
        <section className="relative h-[45vh] w-full overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback
              src={trek.image}
              alt={trek.title}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>

          <div className="absolute bottom-8 left-0 right-0 z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={difficultyColors[trek.difficulty] || "secondary"}>
                  {trek.difficulty}
                </Badge>
                <span className="flex items-center gap-1 text-xs text-slate-300 font-bold bg-slate-900/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                  <MapPin className="h-3 w-3 text-primary" /> {trek.location}
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-none">
                {trek.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-200 font-medium max-w-2xl">
                {trek.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Core Layout Split */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Sticky Tab Menu */}
              <div className="flex border-b border-border gap-6 overflow-x-auto no-scrollbar pt-1 sticky top-16 bg-background z-20">
                {(["overview", "itinerary", "inclusions", "faqs"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm font-bold uppercase tracking-wider pb-3 border-b-2 transition-all cursor-pointer ${
                      activeTab === tab
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Outputs */}
              <div className="pt-2 min-h-[40vh]">
                {/* 1. Overview Tab */}
                {activeTab === "overview" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="space-y-3">
                      <h3 className="text-lg font-bold">About the Trek</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                        {trek.description}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4">
                      <h3 className="text-lg font-bold">Key Highlights</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {trek.highlights.map((high, idx) => (
                          <div key={idx} className="flex gap-2.5 p-3 rounded-xl border border-border bg-card">
                            <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                            <span className="text-xs font-semibold leading-relaxed text-foreground">{high}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 2. Itinerary Tab */}
                {activeTab === "itinerary" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-bold">Detailed Itinerary</h3>
                    <div className="relative border-l-2 border-border/80 ml-3 pl-6 space-y-8 py-2">
                      {trek.itinerary.map((step, idx) => {
                        const [time, ...descParts] = step.split(":");
                        const desc = descParts.join(":");
                        return (
                          <div key={idx} className="relative">
                            {/* Bullet Circle */}
                            <div className="absolute -left-[31px] top-0 w-4.5 h-4.5 rounded-full bg-primary border-4 border-background flex items-center justify-center" />
                            
                            <div className="space-y-1">
                              <span className="inline-block text-xs font-extrabold text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-md uppercase tracking-wider">
                                {time}
                              </span>
                              <p className="text-xs font-medium text-foreground leading-relaxed pt-1.5">
                                {desc ? desc.trim() : time}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* 3. Inclusions Tab */}
                {activeTab === "inclusions" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                  >
                    {/* Inclusions */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-emerald-500 flex items-center gap-2">
                        <Award className="h-5 w-5" /> What's Included
                      </h3>
                      <ul className="space-y-2">
                        {trek.inclusions.map((inc, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-xs text-muted-foreground">
                            <div className="w-4 h-4 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                              <Check className="h-3 w-3" />
                            </div>
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Exclusions */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-destructive flex items-center gap-2">
                        <CloseIcon className="h-5 w-5" /> What's Excluded
                      </h3>
                      <ul className="space-y-2">
                        {trek.exclusions.map((exc, idx) => (
                          <li key={idx} className="flex items-center gap-2.5 text-xs text-muted-foreground">
                            <div className="w-4 h-4 rounded-full bg-destructive/10 flex items-center justify-center text-destructive shrink-0">
                              <CloseIcon className="h-3 w-3" />
                            </div>
                            {exc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {/* 4. FAQs Tab */}
                {activeTab === "faqs" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-bold">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                      {trek.faqs.map((faq, idx) => (
                        <div key={idx} className="p-4 rounded-xl border border-border bg-card space-y-2">
                          <h4 className="text-sm font-extrabold text-foreground flex items-center gap-2">
                            <HelpCircle className="h-4.5 w-4.5 text-primary shrink-0" />
                            {faq.question}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="border border-border rounded-2xl bg-card p-6 shadow-sm sticky top-24 space-y-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-muted-foreground">
                    Package Cost
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-foreground">₹{trek.price}</span>
                    {trek.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through font-medium">
                        ₹{trek.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-emerald-500 font-bold block">
                    *Taxes & Forest Permits included
                  </span>
                </div>

                <div className="h-px bg-border/80" />

                {/* Trek Details Grid */}
                <div className="space-y-3.5 text-xs">
                  <div className="flex justify-between font-semibold">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-primary" /> Duration
                    </span>
                    <span>{trek.duration}</span>
                  </div>
                  {trek.altitude && (
                    <div className="flex justify-between font-semibold">
                      <span className="text-muted-foreground flex items-center gap-1.5">
                        <Compass className="h-4 w-4 text-primary" /> Altitude
                      </span>
                      <span>{trek.altitude}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-semibold">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <Star className="h-4 w-4 text-primary" /> Rating
                    </span>
                    <span className="text-amber-500 font-bold">{trek.rating} ({trek.reviewsCount} reviews)</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span className="text-muted-foreground flex items-center gap-1.5">
                      <ShieldAlert className="h-4 w-4 text-primary" /> Difficulty
                    </span>
                    <span className="font-bold">{trek.difficulty}</span>
                  </div>
                </div>

                <div className="h-px bg-border/80" />

                {/* Booking Trigger */}
                <Button className="w-full font-extrabold uppercase py-3" onClick={() => setIsBookModalOpen(true)}>
                  Book Adventure Now
                </Button>

                {/* Safety Seal */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-secondary/50 border border-border text-[10px] leading-relaxed text-muted-foreground">
                  <Award className="h-6 w-6 text-primary shrink-0" />
                  <span>
                    <strong>Chalte Firte Guarantee:</strong> Certified mountaineer leads, standardized emergency first-aid kits, and eco-certified guides on every batch.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Booking Checkout Dialog modal */}
      <Dialog
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        title={`Book ${trek.title}`}
        size="lg"
      >
        <BookingForm trek={trek} onSuccess={() => {}} />
      </Dialog>

      <Footer />
    </>
  );
}
