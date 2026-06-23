"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Compass, Shield, Users, Heart, Award, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-primary inline-flex items-center gap-1.5">
              <Compass className="h-4 w-4 text-primary animate-spin-slow" />
              Who We Are
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
              About Chalte Firte
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We are a community-centric trekking and camping adventure club based in Maharashtra. Bringing urban explorers closer to nature with absolute safety.
            </p>
          </div>

          {/* Intro Story Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Our Mission: Empowering Local Mountain Tribes
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Chalte Firte was founded on a simple philosophy: "Chalte Firte" (always moving, exploring). While guiding city-dwellers to the pristine fort ruins and waterfall pools of Maharashtra, we observed a critical opportunity—empowering the rural base villages.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Rather than importing packaged urban foods, we source 100% of our trekking meals directly from local village cooks. Our guides are native youngsters who know every bend of the hill trail by heart. Through this, 60%+ of your booking expense flows directly into local rural economies, conserving mountain heritage and ensuring livelihoods.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span className="text-xs font-bold text-foreground">100% Local Sourced</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span className="text-xs font-bold text-foreground">Certified Safety Leads</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span className="text-xs font-bold text-foreground">Eco-Tourism First</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                  <span className="text-xs font-bold text-foreground">Aadhaar Verified Permits</span>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden border border-border shadow-md bg-muted">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop"
                alt="Hikers on Mountain"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Pillars Section */}
          <div className="border-t border-border pt-20 mb-20">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center tracking-tight mb-12">
              Our Pillars of Excellence
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Safety */}
              <div className="p-8 rounded-2xl border border-border bg-card space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-primary flex items-center justify-center">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Safety-First Protocol</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We don't take shortcuts. We maintain strict group sizes (1:10 lead-to-trekker ratio), carry standard trauma and first-aid kits, verify Aadhaar parameters, and utilize satellite GPS tracking on deep jungle paths.
                </p>
              </div>

              {/* Community */}
              <div className="p-8 rounded-2xl border border-border bg-card space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Community Empowerment</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Our travels fund village school kits, trail garbage clearing campaigns, clean water tanks for base village households, and guide license training certifications for mountain youngsters.
                </p>
              </div>

              {/* Passion */}
              <div className="p-8 rounded-2xl border border-border bg-card space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 flex items-center justify-center">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">Leave No Trace Heritage</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Nature gave us these gorgeous mountains. We guarantee that every traveler follows strict environmental protocols. We pick up litter, minimize charcoal fires, and preserve local bio-spheres.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
