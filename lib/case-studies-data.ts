export interface CaseStudy {
  slug: string;
  number: number;
  industry: string;
  services: string[];
  client: string;
  country: string;
  duration: string;
  teamSize: string;
  headline: string;
  subheadline: string;
  stats: { value: string; label: string }[];
  challenge: string;
  solution: string;
  results: string;
  quote: string;
  color: string;
  flag: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "finbridge-offshore-engineering",
    number: 1,
    industry: "BFSI / Fintech",
    services: ["Offshore IT Services", "Staff Augmentation"],
    client: "US Fintech Company",
    country: "USA",
    duration: "Ongoing — 8+ months",
    teamSize: "6 engineers",
    headline: "Scaling an Offshore Engineering Team for a US Fintech Platform",
    subheadline:
      "A fast-growing fintech platform needed senior engineers fast — without 90-day US hiring timelines.",
    stats: [
      { value: "60 days", label: "to a full 6-person team" },
      { value: "40%", label: "cost vs. US hiring" },
      { value: "4", label: "major product releases" },
    ],
    challenge:
      "A fast-growing US-based fintech company was struggling to scale its engineering function quickly enough to support its product roadmap. Hiring senior developers locally in the US was taking 90 to 120 days per engineer and cost significantly more than the company's Series A budget allowed. They needed a reliable offshore partner who could deliver senior-level talent, integrate into their existing Agile processes, and operate with minimal management overhead.",
    solution:
      "Nexeratech deployed a dedicated offshore engineering team from our Hyderabad delivery center. We started with a two-week discovery phase to understand the client's tech stack (React, Node.js, PostgreSQL, AWS), team culture, and sprint cadence. Within 30 days we had placed the first two engineers — a senior full-stack developer and a QA automation specialist. By day 60 the team had grown to six: three backend engineers, one frontend developer, one QA lead, and one DevOps engineer. All six were integrated into the client's Jira and Slack workflows from day one. We operate on a dedicated team model — the client treats our engineers as direct extensions of their team, not vendor resources.",
    results:
      "Eight months in, the offshore team has delivered four major product releases, reduced QA cycle time by 35%, and enabled the client to hit their Series A milestone commitments on schedule. The total engineering cost is 40% lower than equivalent US-based hiring. The client has since initiated a conversation about expanding to a team of ten.",
    quote:
      "Nexeratech's team integrated into our workflow faster than any onshore hire I have made. They take ownership — they do not wait to be told what to do next.",
    color: "#E85D04",
    flag: "🇺🇸",
  },
  {
    slug: "precisionhealth-patient-portal",
    number: 2,
    industry: "Healthcare",
    services: ["Software Development", "Cloud Services (AWS)"],
    client: "UK Healthcare Provider",
    country: "United Kingdom",
    duration: "5 months",
    teamSize: "4 engineers + 1 QA",
    headline: "HIPAA-Compliant Patient Portal for a UK Healthcare Provider",
    subheadline:
      "A digital healthcare company needed a HIPAA & GDPR-compliant patient platform — built right the first time.",
    stats: [
      { value: "On time", label: "delivered on schedule" },
      { value: "Zero", label: "compliance audit findings" },
      { value: "100%", label: "HIPAA audit pass" },
    ],
    challenge:
      "A UK-based digital healthcare company needed to build a patient data management and appointment portal from the ground up. The system had to handle sensitive personal health data in compliance with HIPAA and UK GDPR standards, integrate with two existing EHR platforms via HL7 FHIR APIs, and support up to 50,000 concurrent users. Previous discovery work with another agency had stalled due to compliance concerns — the client needed a development partner with genuine health-tech security credentials.",
    solution:
      "Nexeratech assigned a cross-functional team consisting of a solution architect, two senior backend developers, a frontend engineer, and a dedicated QA specialist. Before writing a single line of code, we completed a compliance architecture review — mapping every data flow against HIPAA and UK GDPR requirements and producing a documented Data Protection Impact Assessment (DPIA). We built the platform on AWS using a serverless-first architecture with end-to-end encryption, role-based access controls, and full audit logging. FHIR API integrations were delivered in Week 6. The portal was deployed to production in Month 5, on schedule and within budget.",
    results:
      "The platform successfully completed an independent HIPAA compliance audit with zero findings. It is now live and handling patient records for three NHS-affiliated clinics. The client's internal IT team was handed comprehensive documentation and a runbook, and required zero post-launch support from Nexeratech in the first 90 days.",
    quote:
      "They flagged compliance risks before they became problems. That level of proactiveness — especially on a HIPAA project — is rare and genuinely valuable.",
    color: "#0A1628",
    flag: "🇬🇧",
  },
  {
    slug: "velocify-ai-document-classification",
    number: 3,
    industry: "Technology / SaaS",
    services: ["AI / ML Services", "Software Development"],
    client: "Indian SaaS Startup",
    country: "India",
    duration: "6 weeks (prototype to production)",
    teamSize: "2 AI engineers + 1 backend dev",
    headline: "AI Document Classification Engine for a Legal-Tech SaaS Product",
    subheadline:
      "A legal-tech platform needed AI that could classify and extract from 12,000+ legal documents with 85%+ accuracy.",
    stats: [
      { value: "14 days", label: "working prototype" },
      { value: "94%", label: "classification accuracy" },
      { value: "6 weeks", label: "prototype to production" },
    ],
    challenge:
      "A Hyderabad-based legal-tech SaaS company needed to add an AI-powered document classification and extraction feature to their existing platform. The feature needed to automatically categorise incoming legal documents (contracts, NDAs, court filings, invoices) and extract key clauses for downstream workflow automation. Their internal team had no ML expertise, previous attempts with open-source models had produced accuracy rates below 70%, and the product roadmap deadline was firm.",
    solution:
      "Nexeratech's AI team proposed a Retrieval-Augmented Generation (RAG) architecture using a fine-tuned language model combined with a structured extraction layer. In the first two weeks we delivered a working prototype connected to a sample document corpus of 500 legal files. We then ran a three-week fine-tuning phase using the client's actual historical document library of 12,000 files. The final production system was built with a FastAPI backend, integrated into the client's existing SaaS platform via REST API, and deployed to AWS Lambda for serverless scaling. Full documentation and model retraining instructions were handed over to the client's team.",
    results:
      "The production model achieved 94% classification accuracy and 89% key-clause extraction accuracy across all tested document types — significantly exceeding the client's 85% target. The feature went live six weeks from project start. The client's product team estimates it saves legal-team users an average of 90 minutes per day in manual document review.",
    quote:
      "Their AI team understands the business problem behind the technology. They asked the right questions, challenged our assumptions in a constructive way, and built exactly what we needed.",
    color: "#E85D04",
    flag: "🇮🇳",
  },
  {
    slug: "atlantic-capital-okta-rollout",
    number: 4,
    industry: "BFSI / Fintech",
    services: ["IAM & Cybersecurity", "Okta Implementation"],
    client: "US Financial Services Firm",
    country: "USA",
    duration: "3 weeks",
    teamSize: "2 IAM specialists",
    headline: "Enterprise Okta SSO & MFA Rollout for a US Financial Services Firm",
    subheadline:
      "Six months behind schedule and 45 days from a regulatory audit — Nexeratech stabilized the Okta platform and delivered.",
    stats: [
      { value: "400", label: "users migrated to MFA" },
      { value: "21 days", label: "full rollout time" },
      { value: "3", label: "security gaps remediated" },
    ],
    challenge:
      "A mid-sized US financial services firm had an Okta implementation that was six months behind schedule. Their internal IT team had partially configured the platform but lacked the Okta expertise to resolve persistent SSO integration failures, MFA policy conflicts, and a broken provisioning workflow with their HR system. With a regulatory audit approaching in 45 days, they needed an expert team to stabilise the platform and complete the rollout immediately.",
    solution:
      "Nexeratech deployed two senior IAM specialists who began with a two-day diagnostic assessment of the existing Okta configuration. We identified seven critical misconfigurations — including an overpermissioned admin account, two broken SAML integrations, and MFA policies that were inconsistently applied across departments. We resolved all seven issues and completed the full SSO rollout across 15 enterprise applications within two weeks. MFA was enforced for all 400 users by end of Week 3. We also identified three broader access policy gaps — users with unrevoked access to systems post-termination — and helped the client remediate these before the audit.",
    results:
      "The regulatory audit passed with no identity or access management findings — a first for the client in three annual cycles. All 400 users are now on enforced MFA. The three access policy gaps were remediated before the audit window. The client has since retained Nexeratech on a quarterly IAM review contract.",
    quote:
      "Their IAM team's depth of knowledge across Okta, Azure AD, and Zero Trust is genuinely impressive. They came in, stabilised our entire identity infrastructure in three weeks, and found problems we did not even know we had.",
    color: "#E85D04",
    flag: "🇺🇸",
  },
  {
    slug: "globaledge-payroll-compliance",
    number: 5,
    industry: "Manufacturing",
    services: ["Payroll & EOR Services", "HR Operations"],
    client: "Indian Manufacturing Company",
    country: "India",
    duration: "Ongoing — 8 months",
    teamSize: "Dedicated payroll manager + compliance team",
    headline: "End-to-End Payroll Compliance for a Multi-State Indian Manufacturer",
    subheadline:
      "A manufacturer across 3 states was facing EPFO notices and compliance risk. Nexeratech rebuilt their entire payroll framework.",
    stats: [
      { value: "80+", label: "employees across 3 states" },
      { value: "Zero", label: "payroll errors in 8 months" },
      { value: "15→2 days", label: "HR payroll time saved" },
    ],
    challenge:
      "A Hyderabad-based export manufacturing company with 80+ employees spread across facilities in Telangana, Maharashtra, and Tamil Nadu was managing payroll internally using a fragmented mix of spreadsheets and a legacy payroll tool. The company was facing mounting compliance risk — inconsistent PF and ESI filings, missed TDS deadlines, and undocumented reimbursement processes. A mid-year statutory notice from the EPFO was the trigger for seeking a managed payroll partner.",
    solution:
      "Nexeratech conducted a two-week payroll audit covering all three state locations, identifying 11 compliance gaps across PF, ESI, and TDS filings. We rebuilt the payroll structure on a compliant framework, migrated all employee records into a centralised system, and took over the full monthly payroll cycle including net pay calculation, payslip generation, PF and ESI challan preparation, TDS deduction and filing, and statutory registers. We also helped the client respond to and resolve the outstanding EPFO notice. Monthly payroll is now processed and disbursed by the 28th of each month without exception.",
    results:
      "Eight months of zero payroll errors. The EPFO notice was resolved with no penalty. All three state locations are now on a single compliant payroll framework. The HR team, previously spending 15+ days per month on payroll, now spends fewer than 2 days reviewing and approving Nexeratech's output.",
    quote:
      "They found a compliance issue from the previous year and helped us fix it before it became a penalty. That alone made the entire engagement worthwhile — and everything since has been flawless.",
    color: "#E85D04",
    flag: "🇮🇳",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
