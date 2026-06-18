"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, AlertTriangle } from "lucide-react";
import type { CaseStudy } from "@/lib/case-studies-data";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

interface Props {
  caseStudy: CaseStudy;
  related: CaseStudy[];
}

export default function CaseStudyDetailClient({ caseStudy: cs, related }: Props) {
  return (
    <div className="overflow-hidden">
      {/* Disclaimer */}
      <div className="bg-amber-50 border-b border-amber-200 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm text-amber-800">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" />
          <span><strong>Editorial Note:</strong> Confirm client name and details before publishing. Replace with anonymized version if needed.</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-40 top-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-15" style={{ background: cs.color }} />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6 text-sm flex-wrap">
              <Link href="/" className="text-gray-500 hover:text-[#E85D04] transition-colors">Home</Link>
              <span className="text-gray-600">/</span>
              <Link href="/case-studies" className="text-gray-500 hover:text-[#E85D04] transition-colors">Case Studies</Link>
              <span className="text-gray-600">/</span>
              <span className="font-medium" style={{ color: cs.color }}>Case Study {cs.number} of 5</span>
            </motion.div>

            {/* Tags */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider" style={{ background: cs.color + "25", color: cs.color }}>{cs.industry}</span>
              {cs.services.map((svc, i) => (
                <span key={i} className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/70">{svc}</span>
              ))}
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
              {cs.headline}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/60 max-w-3xl mb-8">
              {cs.subheadline}
            </motion.p>

            {/* Client info table */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
              {[
                { label: "Client", value: cs.client },
                { label: "Country", value: `${cs.flag} ${cs.country}` },
                { label: "Duration", value: cs.duration },
                { label: "Team Size", value: cs.teamSize },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-xs text-gray-500 font-medium mb-1">{item.label}</p>
                  <p className="text-sm font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12" style={{ background: cs.color }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cs.stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/70 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-py bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {[
            { title: "The Challenge", content: cs.challenge, emoji: "🎯" },
            { title: "Our Solution", content: cs.solution, emoji: "💡" },
            { title: "The Results", content: cs.results, emoji: "🏆" },
          ].map((section, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{section.emoji}</span>
                <h2 className="text-3xl font-bold text-white">{section.title}</h2>
              </div>
              <div className="pl-10 border-l-4" style={{ borderColor: cs.color }}>
                <p className="text-gray-600 leading-relaxed text-lg">{section.content}</p>
              </div>
            </motion.div>
          ))}

          {/* Quote */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="rounded-2xl p-8 border-2 mt-8" style={{ borderColor: cs.color, background: cs.color + "08" }}>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-[#E85D04] text-[#E85D04]" />)}
            </div>
            <p className="text-xl text-white font-medium italic leading-relaxed mb-6">
              &ldquo;{cs.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white" style={{ background: cs.color }}>
                {cs.client[0]}
              </div>
              <div>
                <p className="font-bold text-white">{cs.client}</p>
                <p className="text-sm text-gray-500">{cs.flag} {cs.country} · {cs.industry}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Used */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h3 className="text-xl font-bold text-white mb-4">Services Delivered in This Engagement</h3>
            <div className="flex flex-wrap gap-3">
              {cs.services.map((svc, i) => (
                <span key={i} className="px-4 py-2 rounded-full font-medium text-sm" style={{ background: cs.color + "15", color: cs.color }}>
                  {svc}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-py bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white">More Case Studies</h2>
              <Link href="/case-studies" className="flex items-center gap-1 text-[#E85D04] font-semibold text-sm hover:gap-2 transition-all">
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((rel) => (
                <motion.div key={rel.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <Link href={`/case-studies/${rel.slug}`} className="group block bg-gray-50 rounded-2xl p-6 border border-gray-100 card-hover">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg">{rel.flag}</span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold" style={{ background: rel.color + "18", color: rel.color }}>{rel.industry}</span>
                    </div>
                    <h3 className="font-bold text-white mb-2 group-hover:text-[#E85D04] transition-colors">{rel.headline}</h3>
                    <div className="flex items-center gap-1 text-sm font-semibold mt-4 group-hover:gap-2 transition-all" style={{ color: rel.color }}>
                      Read case study <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20" style={{ background: cs.color }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Facing a Similar Challenge?</h2>
          <p className="text-white/80 text-lg mb-8">Let&apos;s talk about how NexeraTech can deliver similar results for your business.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-white font-bold rounded-xl hover:bg-gray-50 transition-all duration-200 hover:scale-105" style={{ color: cs.color }}>
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
