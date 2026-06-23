"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrekCard } from "@/components/TrekCard";
import { TREKS } from "@/lib/db";
import { Compass, Search, Filter, HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/Input";

export default function TreksPage() {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("All");
  const [location, setLocation] = useState("All");

  // Get unique locations
  const locations = ["All", ...Array.from(new Set(TREKS.map((t) => t.location.split(",")[0].trim())))];

  // Filtering Logic
  const filteredTreks = TREKS.filter((trek) => {
    const matchesSearch = trek.title.toLowerCase().includes(search.toLowerCase()) || 
                          trek.description.toLowerCase().includes(search.toLowerCase());
    const matchesDifficulty = difficulty === "All" || trek.difficulty === difficulty;
    const matchesLocation = location === "All" || trek.location.includes(location);

    return matchesSearch && matchesDifficulty && matchesLocation;
  });

  return (
    <>
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-primary inline-flex items-center gap-1.5">
              <Compass className="h-4 w-4 text-primary animate-spin-slow" />
              Weekend Batches
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
              Trekking & Tour Packages
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Explore the best Sahyadri fort treks and monsoon waterfalls in Maharashtra. Certified leads, private transport, and home-cooked meals included.
            </p>
          </div>

          {/* Search and Filters panel */}
          <div className="p-6 rounded-2xl border border-border bg-card shadow-sm mb-12 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
              <Filter className="h-4 w-4 text-primary" /> Filter Tours
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search Bar */}
              <div className="md:col-span-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                  <Search className="h-4 w-4" />
                </div>
                <input
                  type="text"
                  placeholder="Search by trek name, key highlights..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 h-10 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all"
                />
              </div>

              {/* Difficulty Dropdown */}
              <div>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="h-10 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all cursor-pointer"
                >
                  <option value="All">All Difficulties</option>
                  <option value="Easy">Easy</option>
                  <option value="Easy to Moderate">Easy to Moderate</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Difficult">Difficult</option>
                </select>
              </div>

              {/* Location Dropdown */}
              <div>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="h-10 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all cursor-pointer"
                >
                  <option value="All">All Locations</option>
                  {locations.filter(l => l !== "All").map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Treks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredTreks.map((trek) => (
              <TrekCard key={trek.id} trek={trek} />
            ))}
          </div>

          {/* Empty State */}
          {filteredTreks.length === 0 && (
            <div className="text-center py-20 border border-dashed border-border rounded-2xl bg-card">
              <Compass className="h-12 w-12 text-muted-foreground/45 mx-auto mb-3 animate-pulse" />
              <p className="text-sm font-semibold text-foreground">No adventure packages found.</p>
              <p className="text-xs text-muted-foreground mt-1">Try resetting the search terms or change filters.</p>
            </div>
          )}

          {/* General FAQ Section */}
          <div className="mt-24 border-t border-border pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <HelpCircle className="h-8 w-8 text-primary mx-auto mb-2" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Trekking General FAQs</h2>
              <p className="text-xs text-muted-foreground">Everything you need to know before booking your weekend gateway.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                { q: "How do I reach the pickup location?", a: "Pickup coordinates (usually near prominent railway/metro stations in Mumbai and Pune) are emailed to you 48 hours prior to departure along with the group leader's contact details." },
                { q: "What kind of food is provided?", a: "We serve authentic local food cooked by base villagers. It usually includes bhakri, local sabzi, dal-rice, and local chicken curry (for non-vegetarians). Clean drinking water is supplied." },
                { q: "Can I cancel my booking?", a: "Yes, cancellations are permitted. Please check our Cancellation Policy page in the footer for refund slabs and timeline structures." },
                { q: "Is registration document upload secure?", a: "Absolutely. Document uploads are stored temporarily inside secured folders for local forest department checks, and all metadata is cleared post-trek completion." }
              ].map((faq, idx) => (
                <div key={idx} className="space-y-2 p-5 rounded-xl border border-border bg-card">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {faq.q}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-3">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
