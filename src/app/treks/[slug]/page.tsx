import React from "react";
import { TREKS } from "@/lib/db";
import TrekDetailPageClient from "./TrekDetailPageClient";

// Tell Next.js to pre-render these static routes
export function generateStaticParams() {
  return TREKS.map((trek) => ({
    slug: trek.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  // Find trek corresponding to this slug
  const trek = TREKS.find((t) => t.slug === slug) || null;

  return <TrekDetailPageClient trek={trek} />;
}
