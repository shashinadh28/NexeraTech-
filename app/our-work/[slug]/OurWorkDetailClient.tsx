"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Building2,
  Wrench,
  Lightbulb,
  Code,
  Cpu,
  Sparkles,
  ChevronRight,
  Smartphone
} from "lucide-react";
import { OurWorkItem, ourWorkItems } from "@/lib/our-work-data";

const displayFont = { fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)" };

interface Props {
  item: OurWorkItem;
}

export default function OurWorkDetailClient({ item }: Props) {
  // Find previous and next project for seamless navigation
  const currentIndex = ourWorkItems.findIndex((w) => w.slug === item.slug);
  const prevItem = currentIndex > 0 ? ourWorkItems[currentIndex - 1] : ourWorkItems[ourWorkItems.length - 1];
  const nextItem = currentIndex < ourWorkItems.length - 1 ? ourWorkItems[currentIndex + 1] : ourWorkItems[0];

  // Active tab state for Solutions Overview sidebar
  const defaultTab = item.solutionsSections && item.solutionsSections.length > 0 ? 0 : 0;
  const [activeTab, setActiveTab] = useState(defaultTab);

  const outcomes = item.outcomesHighlights || item.results;

  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-28 pb-24 text-[#0D1117]">
      
      {/* ─── Top Breadcrumb Navigation ──────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-[#E85D04] transition-colors bg-white px-3.5 py-1.5 rounded-full border border-gray-200 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Our Work</span>
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            <Link href="/our-work" className="hover:text-gray-900">Our Work</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
            <span className="text-gray-900 font-medium truncate max-w-[200px]">{item.title}</span>
          </div>
        </div>
      </div>

      {/* ─── SECTION 1: HERO HEADER ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          {/* Left Column: Title & Intro */}
          <div className="lg:col-span-7 pr-0 lg:pr-6">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D1117] leading-[1.15] tracking-tight mb-6"
              style={displayFont}
            >
              {item.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              {item.summary}
            </p>
          </div>

          {/* Right Column: Project Image / Hero Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.10)] border border-gray-100 min-h-[320px] group bg-[#0A1628]">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={540}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ minHeight: 320 }}
                />
              ) : (
                <>
                  {/* Subtle background glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-100/50 via-purple-50/50 to-blue-50/50 opacity-60" />

                  {/* Mockup Container */}
                  <div className="relative z-10 flex items-center justify-center gap-4 w-full h-full p-6">
                    {/* Phone Mockup 1 */}
                    <div className="w-36 sm:w-44 aspect-[9/18] bg-gray-900 rounded-[28px] p-2 shadow-2xl border-4 border-gray-800 flex flex-col justify-between overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <div className="w-16 h-3 bg-gray-800 rounded-full mx-auto mb-1" />
                      <div className="flex-1 bg-amber-50 rounded-xl p-2.5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-1 mb-2">
                            <Smartphone className="w-3 h-3 text-[#E85D04]" />
                            <span className="text-[9px] font-bold text-gray-900">FindMeBoard</span>
                          </div>
                          <div className="bg-white rounded-md p-1.5 shadow-sm text-[8px] text-gray-800 font-bold leading-tight mb-1">
                            Real jobs. One market. Yours.
                          </div>
                          <div className="text-[7px] text-gray-500 leading-tight">
                            We send jobs directly to local pros.
                          </div>
                        </div>
                        <div className="text-[7px] bg-[#E85D04] text-white rounded p-1 text-center font-bold">
                          Image Holder
                        </div>
                      </div>
                    </div>

                    {/* Phone Mockup 2 */}
                    <div className="w-36 sm:w-44 aspect-[9/18] bg-gray-900 rounded-[28px] p-2 shadow-2xl border-4 border-gray-800 flex flex-col justify-between overflow-hidden transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                      <div className="w-16 h-3 bg-gray-800 rounded-full mx-auto mb-1" />
                      <div className="flex-1 bg-white rounded-xl p-2.5 flex flex-col justify-between border border-gray-100">
                        <div>
                          <div className="text-[9px] font-bold text-gray-900 mb-1">Dashboard</div>
                          <div className="flex gap-1 mb-2">
                            <span className="px-1 py-0.5 bg-orange-100 text-[#E85D04] text-[7px] font-bold rounded">Active</span>
                            <span className="px-1 py-0.5 bg-gray-100 text-gray-600 text-[7px] rounded">Bidding</span>
                          </div>
                          <div className="text-[8px] font-bold text-gray-800 mb-0.5">Plumbing Job</div>
                          <div className="text-[7px] text-gray-500">Homeowner: John S.</div>
                        </div>
                        <div className="text-[7px] bg-gray-100 text-gray-600 rounded p-1 text-center font-medium">
                          Place Image Here
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── SECTION 2: SPECIFICATION CARDS GRID (4 + 1) ─────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* 1. Industries */}
            <div className="bg-[#F2F4F7] rounded-2xl p-6 border border-gray-200/60 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#E85D04] flex-shrink-0 mt-0.5">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1" style={displayFont}>
                  Industries
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                  {item.industriesList ? item.industriesList.join(", ") : item.industry}
                </p>
              </div>
            </div>

            {/* 2. Services */}
            <div className="bg-[#F2F4F7] rounded-2xl p-6 border border-gray-200/60 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#E85D04] flex-shrink-0 mt-0.5">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1" style={displayFont}>
                  Services
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                  {item.servicesList ? item.servicesList.join(", ") : item.tags.join(", ")}
                </p>
              </div>
            </div>

            {/* 3. Solutions */}
            <div className="bg-[#F2F4F7] rounded-2xl p-6 border border-gray-200/60 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#E85D04] flex-shrink-0 mt-0.5">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1" style={displayFont}>
                  Solutions
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                  {item.solutionsList ? item.solutionsList.join(", ") : "Custom Marketplace, Cloud Infrastructure, AI Matching"}
                </p>
              </div>
            </div>

            {/* 4. Technologies */}
            <div className="bg-[#F2F4F7] rounded-2xl p-6 border border-gray-200/60 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#E85D04] flex-shrink-0 mt-0.5">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1" style={displayFont}>
                  Technologies
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                  {item.technologies.join(", ")}
                </p>
              </div>
            </div>

          </div>

          {/* Full-width AI tools banner */}
          <div className="bg-[#F2F4F7] rounded-2xl p-6 border border-gray-200/60 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0 mt-0.5">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-1" style={displayFont}>
                AI tools that powered our workflow
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
                {item.aiTools ? item.aiTools.join(", ") : "Claude Code, Figma MCP"}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── SECTION 3: OUTCOMES AND HIGHLIGHTS (BLACK BG BAR) ────────── */}
      <section className="bg-black text-white py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Title Column */}
            <div className="lg:col-span-4">
              <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight" style={displayFont}>
                <span className="text-[#FF5C00] block">Outcomes</span>
                <span className="text-white block">and highlights</span>
              </h2>
            </div>

            {/* Right Bullet List Column */}
            <div className="lg:col-span-8 space-y-4">
              {outcomes.map((out, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#FF5C00] font-bold text-base mt-0.5 flex-shrink-0">✓</span>
                  <p className="text-sm sm:text-base font-semibold text-white/90 leading-relaxed">
                    {out}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 4: SOLUTIONS OVERVIEW WITH SIDEBAR TABS ──────────── */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        {/* Grid background with low opacity */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(10,22,40,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(10,22,40,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            borderRadius: "1rem",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-10" style={displayFont}>
            Solutions overview
          </h2>

          {item.solutionsSections && item.solutionsSections.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Sidebar Navigation Tabs */}
              <div className="lg:col-span-4 flex flex-col gap-2.5">
                {item.solutionsSections.map((sec, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`text-left px-5 py-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                        isActive
                          ? "bg-white text-gray-900 border-gray-300 shadow-md translate-x-1"
                          : "bg-white/60 text-gray-500 border-gray-200/80 hover:bg-white hover:text-gray-800"
                      }`}
                    >
                      {sec.title}
                    </button>
                  );
                })}
              </div>

              {/* Right Content Panel for Active Tab */}
              <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 border border-gray-200/80 shadow-sm border-l-4 border-l-[#E85D04]">
                {(() => {
                  const currentSec = item.solutionsSections[activeTab] || item.solutionsSections[0];
                  return (
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900" style={displayFont}>
                        {currentSec.title}
                      </h3>

                      {/* Description Paragraphs */}
                      <div className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4 whitespace-pre-line">
                        {currentSec.description}
                      </div>

                      {/* Key Deliverables */}
                      {currentSec.keyDeliverables && currentSec.keyDeliverables.length > 0 && (
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 mb-4" style={displayFont}>
                            Key deliverables
                          </h4>
                          <div className="space-y-3">
                            {currentSec.keyDeliverables.map((deliv, dIdx) => (
                              <div key={dIdx} className="flex items-start gap-3">
                                <span className="text-[#E85D04] font-bold text-sm mt-0.5 flex-shrink-0">✓</span>
                                <span className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                                  {deliv}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Technologies for this section */}
                      {currentSec.technologies && currentSec.technologies.length > 0 && (
                        <div className="pt-4 border-t border-gray-100">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                            Technologies
                          </h4>
                          <p className="text-xs sm:text-sm font-medium text-gray-700">
                            {currentSec.technologies.join(", ")}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  );
                })()}
              </div>

            </div>
          ) : (
            /* Fallback layout if no solutionsSections array */
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.overview}</p>
            </div>
          )}
        </motion.div>
      </section>

      {/* ─── SECTION 5: BOTTOM CALL TO ACTION ──────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl"
        >
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4" style={displayFont}>
              {item.ctaHeadline || "Build and scale on AWS with confidence"}
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-8">
              {item.ctaText || "Engage AWS-certified engineers who deliver measurable positive outcomes. From new product development to modernization and migration initiatives, NexeraTech provides the software engineering, cloud, and AI expertise needed to create secure, innovative, and reliable solutions."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#E85D04] text-white font-bold text-sm hover:bg-[#d05202] hover:scale-105 transition-all shadow-lg shadow-[#E85D04]/30"
            >
              <span>{item.ctaButtonText || "Book a free consultation"}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ─── SECTION 6: PREVIOUS & NEXT PROJECT SWITCHER ─────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href={`/our-work/${prevItem.slug}`}
            className="group bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-[#E85D04] group-hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-gray-400 font-semibold block uppercase">Previous Project</span>
                <span className="text-sm font-bold text-gray-900 group-hover:text-[#E85D04] transition-colors line-clamp-1">
                  {prevItem.title}
                </span>
              </div>
            </div>
          </Link>

          <Link
            href={`/our-work/${nextItem.slug}`}
            className="group bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex items-center justify-between text-right"
          >
            <div>
              <span className="text-xs text-gray-400 font-semibold block uppercase">Next Project</span>
              <span className="text-sm font-bold text-gray-900 group-hover:text-[#E85D04] transition-colors line-clamp-1">
                {nextItem.title}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:bg-[#E85D04] group-hover:text-white transition-colors">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}
