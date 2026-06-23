"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Users, CheckCircle2, Trophy, ArrowRight, Shield, Award, Map, Calendar, ChevronRight, Star, Heart } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { TrekCard } from "@/components/TrekCard";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { TREKS, BLOGS } from "@/lib/db";

export default function Home() {
  const [filterDifficulty, setFilterDifficulty] = useState<string>("All");

  const filteredTreks = filterDifficulty === "All"
    ? TREKS
    : TREKS.filter(t => t.difficulty === filterDifficulty);

  return (
    <>
      <Header />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden py-20 px-4">
          {/* Background Image with blur & dark overlay */}
          <div className="absolute inset-0 z-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920&auto=format&fit=crop"
              alt="Sahyadri Mountains"
              className="w-full h-full object-cover opacity-35 scale-105 transform hover:scale-100 transition-transform duration-[10000ms]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-slate-950/80 to-[#0a0c10]" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-primary/35 text-primary text-xs font-bold uppercase tracking-wider"
            >
              <Compass className="h-4 w-4 animate-spin-slow" />
              Wander the Sahyadri Ranges
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none text-white"
            >
              Collect Moments, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Not Just Things.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-medium"
            >
              Explore ancient basalt hill fortresses, splash in turquoise hidden waterfall lagoons, and camp under a canopy of stars with Maharashtra's safest adventure community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
            >
              <Link href="/treks">
                <Button size="lg" className="font-extrabold group">
                  Explore Weekend Treks
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="font-bold text-white border-white/20 bg-transparent hover:bg-white/10">
                  Our Story
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Curved separator */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0a0c10] to-transparent" />
        </section>

        {/* 2. Brand Impact & Trust Badging (Stats) */}
        <section className="py-12 border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-1">
                <span className="block text-3xl md:text-4xl font-black text-primary">2,000+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Trekkers Guided</span>
              </div>
              <div className="space-y-1">
                <span className="block text-3xl md:text-4xl font-black text-primary">100+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tours Completed</span>
              </div>
              <div className="space-y-1">
                <span className="block text-3xl md:text-4xl font-black text-primary">4.9/5</span>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Customer Rating</span>
              </div>
              <div className="space-y-1">
                <span className="block text-3xl md:text-4xl font-black text-primary">100%</span>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Safety Record</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Pillars (Why Choose Us) */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                Our Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Designed for Safety, Built for Experience
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Trekking is more than climbing. It is a connection with history, local community, and our environment. Here are the core pillars that guide our journeys.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Pillar 1 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="p-8 rounded-2xl border border-border bg-card space-y-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Safety First, Always</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our trek leads are certified mountaineers and first-responders. We carry extensive safety medical gear, satellite communication backups, and monitor real-time weather forecasts.
                </p>
              </motion.div>

              {/* Pillar 2 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="p-8 rounded-2xl border border-border bg-card space-y-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Local Community Empowerment</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We partner directly with the base villages. Over 60% of tour expenses go straight to local homestays, farmers, cooks, and porters, securing their livelihoods.
                </p>
              </motion.div>

              {/* Pillar 3 */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="p-8 rounded-2xl border border-border bg-card space-y-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Leave No Trace Principle</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We respect the mountains. We strictly practice eco-trekking by cleaning trails, banning plastic disposables on campsites, and taking our waste back.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 4. Featured Trek Packages */}
        <section className="py-20 bg-secondary/30 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="space-y-3">
                <span className="text-xs font-black uppercase tracking-widest text-primary">
                  Explore Packages
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Featured Weekend Adventures
                </h2>
                <p className="text-sm text-muted-foreground max-w-xl">
                  Choose from historical fort ruins, gushing monsoon canyon trails, and pristine campsites in the Western Ghats.
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {["All", "Easy", "Moderate", "Difficult"].map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setFilterDifficulty(diff)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-colors cursor-pointer border ${
                      filterDifficulty === diff
                        ? "bg-primary border-primary text-primary-foreground"
                        : "bg-card border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

            {/* Trek Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredTreks.map((trek) => (
                <TrekCard key={trek.id} trek={trek} />
              ))}
            </div>
            
            {filteredTreks.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-sm font-semibold">No treks match this difficulty filter.</p>
              </div>
            )}
          </div>
        </section>

        {/* 5. How It Works */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                Simple Booking
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                How to Book Your Adventure
              </h2>
              <p className="text-sm text-muted-foreground">
                We've built a fully-digital, streamlined booking system to get you from busy streets to serene summits in 4 simple steps.
              </p>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
            >
              {[
                { step: "01", title: "Select Trek", desc: "Browse and select your destination based on difficulty, duration, and pricing options." },
                { step: "02", title: "Pick Date", desc: "Select a convenient departure weekend slot and enter the number of seats." },
                { step: "03", title: "Upload Docs", desc: "Provide details and upload your Aadhaar card copy securely directly in the app." },
                { step: "04", title: "Head to Camp", desc: "Get confirmation details, route instructions, and gears checklist via email." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95, y: 15 },
                    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
                  }}
                  className="relative p-6 rounded-2xl bg-card border border-border group hover:border-primary/50 transition-colors"
                >
                  <div className="text-3xl font-black text-primary/10 group-hover:text-primary/25 transition-colors absolute top-4 right-4 leading-none">
                    {item.step}
                  </div>
                  <h3 className="text-base font-extrabold text-foreground mb-2 mt-4">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 6. High-Quality Testimonials */}
        <section className="py-20 bg-secondary/20 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                Trekkers Feedbacks
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Stories from the Trails
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Rahul Deshpande", loc: "Mumbai", review: "Ratangad was my first ever trek. The team was extremely patient, explained safety rules, and the home-cooked Maharashtrian lunch at the base village was incredible. 10/10 recommended!", stars: 5 },
                { name: "Sneha Nair", loc: "Pune", review: "Loved Nanemachi waterfall! The turquoise pool experience was secure because they provided life jackets and had leaders watching. The online booking process was super smooth.", stars: 5 },
                { name: "Ketan Patil", loc: "Thane", review: "I trek regularly, but Chalte Firte's dedication to eco-tourism impressed me. We cleaned up plastic trash along the Raigad route. A great team with a conscience.", stars: 5 }
              ].map((test, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border flex flex-col justify-between shadow-sm">
                  <p className="text-xs leading-relaxed text-muted-foreground italic mb-6">
                    "{test.review}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                      {test.name[0]}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-foreground">{test.name}</h4>
                      <span className="text-[10px] text-muted-foreground block">{test.loc}</span>
                      <div className="flex items-center gap-0.5 mt-1 text-amber-500">
                        {Array.from({ length: test.stars }).map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Highlights from Travel Blog */}
        <section className="py-20 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
              <div className="space-y-3">
                <span className="text-xs font-black uppercase tracking-widest text-primary">
                  Travel Blogs
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Trekking News & Guides
                </h2>
              </div>
              <Link href="/blog">
                <Button variant="outline" size="sm" className="font-bold">
                  View All Articles <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BLOGS.map((blog) => (
                <div key={blog.id} className="group flex flex-col sm:flex-row rounded-2xl border border-border overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow">
                  <div className="sm:w-2/5 h-48 sm:h-auto relative bg-muted shrink-0">
                    <ImageWithFallback
                      src={blog.coverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-[10px] text-muted-foreground font-bold uppercase tracking-wider">
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                      </div>
                      <h3 className="text-base font-extrabold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                        {blog.excerpt}
                      </p>
                    </div>

                    <Link href={`/blog/${blog.slug}`} className="mt-4 inline-flex items-center text-xs font-extrabold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider">
                      Read Story <ArrowRight className="h-3 w-3 ml-1.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Call to Action Banner */}
        <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-border">
          <div className="absolute inset-0 z-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1200&auto=format&fit=crop"
              alt="Camping"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-slate-950/70" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Escape the City Life?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Join our upcoming weekend batches. Sign up today and get detailed schedules, assemblies guidelines, and gear coupons.
            </p>
            <div className="pt-4">
              <Link href="/treks">
                <Button size="lg" className="font-extrabold">
                  Book Your Weekend Slot
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
