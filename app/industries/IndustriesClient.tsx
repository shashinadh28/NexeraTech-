"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Landmark, HeartPulse, Laptop, ShoppingCart, Scale, Factory, CheckCircle } from "lucide-react";
import { industries } from "@/lib/industries-data";

const iconMap: Record<string, React.ElementType> = {
  Landmark, HeartPulse, Laptop, ShoppingCart, Scale, Factory,
};

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function IndustriesClient() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-28 pb-20 bg-[#0A1628] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-[#E85D04] opacity-8 blur-[100px]" />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, rgba(232,93,4,0.1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 justify-center mb-4 text-sm">
              <Link href="/" className="text-white/40 hover:text-[#E85D04] transition-colors">Home</Link>
              <span className="text-white/25">/</span>
              <span className="text-[#E85D04] font-medium">Industries</span>
            </motion.div>
            <motion.span variants={fadeUp} className="inline-block px-4 py-1.5 bg-[#FFF4EC] text-[#E85D04] text-xs font-bold uppercase tracking-widest rounded-full mb-6">Who We Serve</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl lg:text-6xl font-bold text-white mb-6">
              6 Industries,{" "}<span className="text-[#E85D04]">Deep Expertise</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Our clients typically have one thing in common: they need technology delivered fast, reliably, and at a cost that makes commercial sense — across regulated, competitive, or complex environments.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="section-py bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] || Landmark;
              return (
                <motion.div key={industry.slug} variants={fadeUp}>
                  <div className="group bg-white rounded-2xl border-2 border-gray-100 hover:border-[#E85D04] card-hover overflow-hidden h-full transition-all duration-300">
                    {/* Color strip */}
                    <div className="h-1.5" style={{ background: industry.color }} />
                    <div className="p-8">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{ background: industry.color + "18" }}>
                        <Icon className="w-7 h-7" style={{ color: industry.color }} />
                      </div>
                      <h2 className="text-2xl font-bold text-[#0A1628] mb-2 group-hover:text-[#E85D04] transition-colors">{industry.name}</h2>
                      <p className="text-sm font-medium mb-4" style={{ color: industry.color }}>{industry.tagline}</p>
                      <p className="text-gray-500 text-sm leading-relaxed mb-6">{industry.description}</p>

                      {/* Key challenges */}
                      <div className="mb-6">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Key Challenges We Address</p>
                        <ul className="space-y-2">
                          {industry.challenges.slice(0, 3).map((ch, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: industry.color }} />
                              {ch}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Services tags */}
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Key Services</p>
                        <div className="flex flex-wrap gap-1.5">
                          {industry.keyServices.map((svc, i) => (
                            <span key={i} className="px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: industry.color + "15", color: industry.color }}>
                              {svc}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Clients Choose Nexeratech */}
      <section className="section-py section-line-dark border-t border-white/05 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-[100px] opacity-12" style={{ background: "rgba(232,93,4,0.35)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <span className="eyebrow-tag eyebrow-tag-dark mb-4"><span className="dot" />Why NexeraTech</span>
            <h2 className="text-4xl font-bold text-white mt-4">Why Clients Choose Us</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Dual-Shore Delivery Model", desc: "Hyderabad depth, US/UK time zone alignment and communication standards — the best of both worlds." },
              { title: "AI-Ready Team", desc: "Practicing AI/ML delivery now, not planning it for the future. LLMs, RAG, and custom models in production." },
              { title: "IAM & Cybersecurity Expertise", desc: "Rare combination of identity, access, and compliance depth — Okta, Azure AD, Zero Trust, SOC 2." },
              { title: "Transparent Engagement Models", desc: "Fixed price, time-and-material, and dedicated team options — with clear billing and no hidden fees." },
              { title: "Payroll & EOR Capability", desc: "One partner for both technology delivery and workforce compliance — payroll, EOR, and HR operations." },
              { title: "CSR Commitment", desc: "Active contributor to IShara Foundation's digital inclusion programs — technology for social impact." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#E85D04]/30 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-[#E85D04] mb-3" />
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Table */}
      <section className="section-py bg-white overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0A1628]">Industry × Service Matrix</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A1628] text-white">
                  <th className="px-6 py-4 text-left font-bold">Industry</th>
                  <th className="px-6 py-4 text-left font-bold">How NexeraTech Serves Them</th>
                  <th className="px-6 py-4 text-left font-bold">Key Services</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { ind: "BFSI / Fintech", how: "Core banking integrations, IAM and compliance implementation, AI fraud detection, offshore engineering teams", svcs: "IAM, Software Dev, AI/ML, Offshore IT" },
                  { ind: "Healthcare", how: "HIPAA-compliant data systems, EHR integrations, health-tech product development, IT staffing", svcs: "Software Dev, Cloud, Staff Aug, IAM" },
                  { ind: "Technology / SaaS", how: "Product engineering, QA automation, DevOps, AI feature integration, offshore dev squads", svcs: "Software Dev, AI/ML, QA, Offshore IT" },
                  { ind: "Retail / E-Commerce", how: "AI recommendation engines, cloud migration, platform development, managed IT", svcs: "AI/ML, Cloud, Software Dev, Managed IT" },
                  { ind: "Legal", how: "Legal process outsourcing, document AI, contract review automation, secure client portals", svcs: "AI/ML, Software Dev, IAM" },
                  { ind: "Manufacturing", how: "ERP integrations, supply chain automation, IoT applications, IT infrastructure management", svcs: "Software Dev, Cloud, Managed IT" },
                ].map((row, i) => (
                  <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-[#FFF4EC] transition-colors`}>
                    <td className="px-6 py-4 font-semibold text-white whitespace-nowrap">{row.ind}</td>
                    <td className="px-6 py-4 text-gray-600 max-w-xs">{row.how}</td>
                    <td className="px-6 py-4">
                      <span className="text-[#E85D04] font-medium text-xs">{row.svcs}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden border-t border-white/05" style={{ backgroundColor: "#070D19" }}>
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-[100px] opacity-15" style={{ background: "radial-gradient(circle, rgba(232,93,4,0.40) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="eyebrow-tag eyebrow-tag-dark mb-6 inline-flex"><span className="dot" />Industries</span>
          <h2 className="text-4xl font-bold text-white mb-4 mt-4">Work in One of These Industries?</h2>
          <p className="text-white/60 text-lg mb-8">Tell us about your challenge — we&apos;ll match you with the right team and service line.</p>
          <Link href="/contact" className="glow-btn">
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
