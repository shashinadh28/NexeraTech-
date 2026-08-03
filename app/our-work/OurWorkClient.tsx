"use client";

import { useState, useMemo, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Sparkles, Briefcase, ArrowUpRight } from "lucide-react";
import { ourWorkItems, OurWorkItem, tagColors } from "@/lib/our-work-data";

const displayFont = { fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" };

const filterTags = [
  "All",
  "AI Studio",
  "Design Studio",
  "Front-end",
  "Backend",
  "Mobile",
  "Data Studio",
  "Quality Studio",
];

// Viewport-aware stagger wrapper
function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Aceternity-style HoverEffect Grid ──────────────────────────────────────
// This mirrors the exact Aceternity UI card-hover-effect:
//   - A shared layoutId motion.span background slides between hovered cards
//   - Light orange fill (rgba(232,93,4,0.08)) instead of black
// ────────────────────────────────────────────────────────────────────────────

interface HoverEffectGridProps {
  items: OurWorkItem[];
}

function HoverEffectGrid({ items }: HoverEffectGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, idx) => (
        <HoverCard
          key={item.id}
          item={item}
          index={idx}
          isHovered={hoveredIndex === idx}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
}

interface HoverCardProps {
  item: OurWorkItem;
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function HoverCard({ item, index, isHovered, onMouseEnter, onMouseLeave }: HoverCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative group block p-3 h-full w-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* ── Aceternity shared-layoutId background block ── */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="absolute inset-0 h-full w-full block rounded-3xl"
            style={{ backgroundColor: "rgba(232, 93, 4, 0.07)" }}
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>

      {/* ── Card inner content ── */}
      <Link href={`/our-work/${item.slug}`} className="block h-full">
        <div
          className="relative z-20 h-full flex flex-col rounded-2xl overflow-hidden bg-[#0c1521] border border-white/[0.08] transition-all duration-300"
          style={{
            boxShadow: isHovered
              ? "0 8px 30px rgba(232,93,4,0.12), 0 1px 3px rgba(0,0,0,0.2)"
              : "0 1px 3px rgba(0,0,0,0.15)",
            borderColor: isHovered ? "rgba(232, 93, 4, 0.25)" : "rgba(255,255,255,0.07)",
          }}
        >
          {/* ── Image area ── */}
          <div className="relative aspect-[16/10] overflow-hidden bg-[#060d18] shrink-0">
            {/* Top accent bar — slides in on hover */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] bg-[#E85D04] z-10 origin-left transition-transform duration-500"
              style={{ transform: isHovered ? "scaleX(1)" : "scaleX(0)" }}
            />

            {item.image ? (
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500"
                style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles
                  className="w-8 h-8 transition-colors duration-300"
                  style={{ color: isHovered ? "#E85D04" : "rgba(255,255,255,0.2)" }}
                />
              </div>
            )}

            {/* Bottom bar on image */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-2 bg-black/50 backdrop-blur-sm z-10">
              <span className="text-[10px] font-mono text-white/40 truncate">{item.slug}</span>
              <span
                className="flex items-center gap-1 text-[10px] font-semibold transition-colors duration-200"
                style={{ color: isHovered ? "#FF9A4A" : "rgba(255,255,255,0.4)" }}
              >
                View <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          {/* ── Text content ── */}
          <div className="p-5 flex flex-col flex-1 justify-between bg-white">
            <div>
              {/* Tag badges */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {item.tags.map((tag) => {
                  const style = tagColors[tag] || {
                    bg: "bg-[#F3F4F6]",
                    text: "text-[#374151]",
                    border: "border-[#E5E7EB]",
                  };
                  return (
                    <span
                      key={tag}
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${style.bg} ${style.text} ${style.border}`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>

              {/* Title */}
              <h2
                className="text-sm font-bold leading-snug line-clamp-2 mb-2 transition-colors duration-200"
                style={{
                  ...displayFont,
                  color: isHovered ? "#E85D04" : "#0A1628",
                }}
              >
                {item.title}
              </h2>

              {/* Summary */}
              {item.summary && (
                <p className="text-[12px] text-[#6B7280] leading-relaxed line-clamp-2">
                  {item.summary}
                </p>
              )}
            </div>

            {/* Footer */}
            <div className="pt-4 mt-4 border-t border-[#F3F4F6] flex items-center justify-between">
              <span className="text-[11px] font-medium text-[#9CA3AF]">{item.industry}</span>
              <div
                className="flex items-center gap-1 text-[11px] font-semibold text-[#E85D04] transition-opacity duration-200"
                style={{ opacity: isHovered ? 1 : 0 }}
              >
                Explore <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function OurWorkClient() {
  const [selectedTag, setSelectedTag] = useState("All");

  const filteredItems = useMemo(() => {
    return ourWorkItems.filter((item) =>
      selectedTag === "All" ? true : item.tags.includes(selectedTag)
    );
  }, [selectedTag]);

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F1117]">

      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-[#0A1628] text-white pt-36 pb-24 border-b border-white/[0.07]"
      >
        {/* Dot grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div aria-hidden className="absolute top-0 left-0 right-0 h-px bg-white/10" />
        <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] text-[#FF802B] text-xs font-bold uppercase tracking-widest mb-8"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Featured Portfolio &amp; Case Studies
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.05]"
              style={displayFont}
            >
              Our{" "}
              <span className="relative inline-block">
                Work
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#E85D04] rounded-full" />
              </span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/60 leading-relaxed max-w-2xl"
            >
              Explore how we partner with world-class startups, Fortune 500 leaders, and innovators to
              engineer scalable platforms, intuitive UX, and custom AI solutions.
            </motion.p>

            {/* Stats — centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="flex flex-wrap justify-center gap-12 mt-10"
            >
              {[
                { value: "38+", label: "Case Studies" },
                { value: "500+", label: "Engineers" },
                { value: "15+", label: "Years Experience" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <span className="text-3xl font-black text-white" style={displayFont}>{stat.value}</span>
                  <span className="text-xs font-medium text-white/40 uppercase tracking-wider mt-0.5">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Filter & Grid ────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Filter Pills */}
        <AnimatedSection>
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {filterTags.map((tag) => {
              const isActive = selectedTag === tag;
              return (
                <motion.button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  whileTap={{ scale: 0.96 }}
                  className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#0A1628] text-white shadow-[0_2px_12px_rgba(10,22,40,0.18)]"
                      : "bg-white text-[#4B5563] hover:bg-[#F3F4F6] border border-[#E5E7EB]"
                  }`}
                >
                  {tag}
                  {tag === "All" && (
                    <span className={`ml-1.5 text-[11px] font-bold ${isActive ? "text-white/60" : "text-[#9CA3AF]"}`}>
                      {ourWorkItems.length}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Counter */}
        <AnimatedSection>
          <div className="flex items-center justify-between mb-6 pb-5 border-b border-[#E8EDF2]">
            <p className="text-sm font-medium text-[#6B7280] flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#E85D04]" />
              Showing{" "}
              <motion.span
                key={filteredItems.length}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-bold text-[#0A1628]"
              >
                {filteredItems.length}
              </motion.span>{" "}
              projects
              {selectedTag !== "All" && (
                <span>
                  {" "}in{" "}
                  <span className="font-bold text-[#E85D04]">{selectedTag}</span>
                </span>
              )}
            </p>
            {selectedTag !== "All" && (
              <button
                onClick={() => setSelectedTag("All")}
                className="text-xs font-semibold text-[#6B7280] hover:text-[#0A1628] transition-colors"
              >
                Clear filter ×
              </button>
            )}
          </div>
        </AnimatedSection>

        {/* ── HoverEffect Cards Grid ── */}
        <AnimatePresence mode="wait">
          {filteredItems.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center py-24 bg-white rounded-2xl border border-[#E8EDF2]"
            >
              <p className="text-[#6B7280] text-lg font-medium">No projects found in this category.</p>
              <button
                onClick={() => setSelectedTag("All")}
                className="mt-5 px-6 py-2.5 rounded-full bg-[#0A1628] text-white font-semibold text-sm hover:bg-[#162236] transition-colors"
              >
                Show All
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={selectedTag}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <HoverEffectGrid items={filteredItems} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA strip */}
        <AnimatedSection className="mt-24">
          <div className="bg-[#0A1628] rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div aria-hidden className="absolute top-0 left-0 right-0 h-[3px] bg-[#E85D04]" />

            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[#E85D04] mb-3">
                Start a Project
              </p>
              <h3 className="text-3xl font-black text-white leading-tight" style={displayFont}>
                Ready to build something<br className="hidden sm:block" /> extraordinary?
              </h3>
              <p className="text-white/50 mt-3 max-w-lg text-sm leading-relaxed">
                Partner with world-class engineers, AI specialists, and UX designers to boost your engineering ROI and product outcomes.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#E85D04] text-white font-bold text-sm hover:bg-[#d05202] transition-colors group shadow-[0_4px_20px_rgba(232,93,4,0.35)]"
              >
                Book a free consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
