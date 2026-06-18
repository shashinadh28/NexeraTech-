export interface Industry {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  keyServices: string[];
  challenges: string[];
  color: string;
}

export const industries: Industry[] = [
  {
    slug: "bfsi-fintech",
    name: "BFSI / Fintech",
    icon: "Landmark",
    tagline: "Secure, compliant, and scalable financial technology",
    description:
      "Core banking integrations, IAM and compliance implementation, AI fraud detection, and offshore engineering teams. We understand the regulatory environment that BFSI clients operate in — and we build accordingly.",
    keyServices: ["IAM & Cybersecurity", "Software Development", "AI / ML Services", "Offshore IT Services"],
    challenges: [
      "SOC 2, PCI-DSS, and GDPR compliance requirements",
      "Rapid product scaling with limited local engineering budget",
      "IAM and access control at enterprise scale",
      "AI-powered fraud detection and risk modeling",
    ],
    color: "#E85D04",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "HeartPulse",
    tagline: "HIPAA-compliant health tech, delivered without compromise",
    description:
      "HIPAA-compliant data systems, EHR integrations, health-tech product development, and IT staffing. We bring genuine health-tech security credentials — not just familiarity with the acronyms.",
    keyServices: ["Software Development", "Cloud Services", "Staff Augmentation", "IAM & Cybersecurity"],
    challenges: [
      "HIPAA and UK GDPR compliance",
      "HL7 FHIR and EHR system integration",
      "Patient data security and audit trail requirements",
      "High-concurrency patient portal architecture",
    ],
    color: "#0A1628",
  },
  {
    slug: "technology-saas",
    name: "Technology / SaaS",
    icon: "Laptop",
    tagline: "Engineering velocity for ambitious SaaS teams",
    description:
      "Product engineering, QA automation, DevOps, AI feature integration, and offshore development squads. We help SaaS companies ship faster, maintain quality, and scale their engineering function cost-effectively.",
    keyServices: ["Software Development", "AI / ML Services", "QA & Testing", "Offshore IT Services"],
    challenges: [
      "Shipping product features faster than competitors",
      "Scaling engineering without proportional cost growth",
      "Integrating AI/ML capabilities into existing platforms",
      "Maintaining quality as development velocity increases",
    ],
    color: "#E85D04",
  },
  {
    slug: "retail-ecommerce",
    name: "Retail / E-Commerce",
    icon: "ShoppingCart",
    tagline: "Commerce platforms that convert and scale",
    description:
      "AI recommendation engines, cloud migration, platform development, and managed IT. We help retail businesses build modern commerce experiences and the infrastructure to support high-traffic demand.",
    keyServices: ["AI / ML Services", "Cloud Services", "Software Development", "Managed IT"],
    challenges: [
      "High-traffic scalability for peak commerce periods",
      "AI-powered personalization and recommendation engines",
      "Omnichannel platform integration",
      "Legacy e-commerce platform modernization",
    ],
    color: "#E85D04",
  },
  {
    slug: "legal",
    name: "Legal",
    icon: "Scale",
    tagline: "AI and technology for modern legal operations",
    description:
      "Legal process outsourcing, document AI, contract review automation, and secure client portals. We help legal teams and legal-tech platforms automate the manual processes that consume billable hours.",
    keyServices: ["AI / ML Services", "Software Development", "IAM & Cybersecurity"],
    challenges: [
      "Manual document review consuming lawyer time",
      "Secure client portal and document management requirements",
      "Contract clause extraction and analysis automation",
      "Legal data privacy and confidentiality requirements",
    ],
    color: "#E85D04",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: "Factory",
    tagline: "Digital operations for industrial enterprises",
    description:
      "ERP integrations, supply chain automation, IoT applications, IT infrastructure management, and payroll compliance. We help manufacturers digitize their operations and manage workforce compliance across multi-site environments.",
    keyServices: ["Software Development", "Cloud Services", "Managed IT", "Payroll & EOR"],
    challenges: [
      "Multi-site payroll and statutory compliance",
      "ERP integration and legacy system modernization",
      "Supply chain visibility and automation",
      "IoT and industrial data platform development",
    ],
    color: "#E85D04",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
