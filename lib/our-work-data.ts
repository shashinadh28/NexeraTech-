export interface SolutionSection {
  title: string;
  subtitle?: string;
  description: string;
  keyDeliverables: string[];
  technologies?: string[];
}

export interface OurWorkItem {
  id: string;
  slug: string;
  title: string;
  industry: string;
  tags: string[];
  client?: string;
  year?: string;
  summary: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  placeholderBg: string;
  image?: string;
  // Extended detailed fields for rich case study pages:
  industriesList?: string[];
  servicesList?: string[];
  solutionsList?: string[];
  aiTools?: string[];
  outcomesHighlights?: string[];
  solutionsSections?: SolutionSection[];
  ctaHeadline?: string;
  ctaText?: string;
  ctaButtonText?: string;
}

export const tagColors: Record<string, { bg: string; text: string; border: string }> = {
  "Backend": { bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-200/60" },
  "Front-end": { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200/60" },
  "Design Studio": { bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-200/60" },
  "AI Studio": { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200/60" },
  "Mobile": { bg: "bg-sky-50", text: "text-sky-700", border: "border-sky-200/60" },
  "Data Studio": { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200/60" },
  "Quality Studio": { bg: "bg-green-50", text: "text-green-700", border: "border-green-200/60" },
};

export const ourWorkItems: OurWorkItem[] = [
  {
    id: "1",
    slug: "findmeboard-ai-contractor-marketplace",
    title: "FindMeBoard: cloud-native, AI-driven contractor marketplace",
    industry: "Retail & Ecommerce · PropTech",
    tags: ["AI Studio", "Data Studio"],
    client: "FindMeBoard Platform",
    year: "2024",
    placeholderBg: "from-purple-600/20 via-indigo-600/20 to-blue-500/20",
    image: "/our-work/webp-format-images/AI-driven RegTech monitoring Nasdaq and the NYSE trading.webp",
    summary: "FindMeBoard is a digital marketplace where homeowners can find vetted local contractors across diverse trades, such as plumbing, electrical, HVAC, and handyman work. NexeraTech helped bring the company’s core product to life, turning it from an ambitious plan into a cloud-native, AI-enabled minimum viable product (MVP).",
    overview: "FindMeBoard came to us with a sprawling vision: more than 200 documented features, a highly complex matching engine, and requirements that kept shifting past the original scope. NexeraTech ran a structured, iterative discovery process to bring this scope back to a realistic timeline.",
    challenge: "Over 200 proposed features and a complex matching engine caused scope creep and uncertainty over launch timelines.",
    solution: "A 3-week inception phase turned outdated requirements into a shippable MVP built on AWS serverless and Anthropic Claude AI.",
    results: [
      "200+ proposed features narrowed into a clear MVP scope",
      "30 days from greenfield to a fully provisioned cloud infrastructure and CI/CD pipelines",
      "40–70% lower projected infrastructure costs at launch versus traditional always-on setups",
      "Same-day launch of new locations, no infrastructure deployment required"
    ],
    industriesList: ["E-commerce", "Retail", "Consumer goods", "Digital marketplace", "PropTech"],
    servicesList: ["Cloud architecture", "DevOps", "AI engineering", "Full-stack development", "Product discovery", "UX/UI design", "Prototyping", "PM/PO"],
    solutionsList: ["Online marketplace", "Cloud", "CI/CD", "Serverless architecture", "AI integration", "AI-powered classification", "MVP", "Workflow orchestration", "Matching engine", "Subscription billing", "Security"],
    aiTools: ["Claude Code", "Figma MCP"],
    outcomesHighlights: [
      "200+ proposed features narrowed into a clear MVP scope",
      "30 days from greenfield to a fully provisioned cloud infrastructure and CI/CD pipelines",
      "40–70% lower projected infrastructure costs at launch versus traditional always-on setups",
      "Same-day launch of new locations, no infrastructure deployment required"
    ],
    solutionsSections: [
      {
        title: "Turning 200+ features into a shippable MVP",
        subtitle: "Project overview",
        description: "FindMeBoard came to us with a sprawling vision: more than 200 documented features, a highly complex matching engine, and requirements that kept shifting past the original scope. NexeraTech ran a structured, iterative discovery process to bring this scope back to a realistic timeline.\n\nDuring a focused 3-week inception phase, our team worked with stakeholders to rebuild the product specification and resolve open product and architectural questions. This work turned a projected 6–9 month build into a clear 3-month MVP roadmap. From there, we rapidly built the MVP, including cloud architecture, AI capabilities, and the required security solutions.",
        keyDeliverables: [
          "A 3-week inception phase that turned outdated baseline requirements into a complete, buildable MVP specification",
          "A four-tier feature inventory separating in-scope, out-of-scope, deferred, and future work",
          "Full-stack MVP build covering authentication, onboarding, the matching engine, subscription billing, notifications, and admin tools",
          "Cloud architecture design and AWS infrastructure setup",
          "AI solutions enabling trade classification, personally identifiable information (PII) removal, cost estimation, and more",
          "UX wireframes for both mobile and desktop",
          "A comprehensive product specification spanning homeowner and contractor flows, admin features, and core system logic",
          "Continued product partnership involving requirements refinement, technical guidance, and stakeholder alignment"
        ]
      },
      {
        title: "Cloud-native foundation for rapid growth",
        subtitle: "Cloud-native foundation for rapid growth",
        description: "The NexeraTech team designed and provisioned the client’s AWS infrastructure in 30 days, building an efficient serverless foundation for rapid expansion. With the systems we put in place, the company can rapidly launch new geographic markets, without new infrastructure or additional cloud resources required.\n\nRunning entirely on AWS managed services, the new platform scales automatically with demand, stays resilient during traffic spikes, and minimizes resource use during quiet periods. Its event-driven architecture handles homeowner requests, contractor responses, billing events, notifications, and operational workflows asynchronously through AWS-native services.",
        keyDeliverables: [
          "Cloud-native marketplace architecture, fully provisioned within 30 days",
          "Serverless backend running on AWS Lambda and Amazon API Gateway",
          "Infrastructure as Code (IaC) via SST (Serverless Stack Toolkit), keeping the entire environment version-controlled and reproducible",
          "Event-driven architecture built on Amazon EventBridge and Amazon SQS",
          "AWS Step Functions handling orchestration for long-running business workflows",
          "CI/CD pipelines built with GitHub Actions and OIDC federation",
          "Multi-AZ Amazon RDS for PostgreSQL deployment with Amazon RDS Proxy",
          "Edge caching and content delivery through Amazon CloudFront",
          "Direct-to-S3 media upload flow using pre-signed URLs",
          "Config-driven same-day expansion functionality: administrators can launch new ZIP codes with no infrastructure deployment",
          "Monitoring, audit logging, and distributed tracing built on Amazon CloudWatch, AWS CloudTrail, and AWS X-Ray"
        ],
        technologies: ["AWS Lambda", "AWS Step Functions", "Amazon API Gateway", "Amazon EventBridge", "Amazon SQS", "Amazon RDS for PostgreSQL", "Amazon RDS Proxy", "Amazon S3", "Amazon CloudFront", "SST", "OpenNext", "Next.js", "Prisma", "GitHub Actions"]
      },
      {
        title: "AI-driven matching engine",
        subtitle: "AI-driven matching engine",
        description: "AI is central to the FindMeBoard user experience. Homeowners describe their issues in free text, and AI matches each request to the right contractor pool while suggesting price estimates. It also summarizes homeowner requests for contractors, stripping out personally identifiable information (PII).\n\nOur team integrated these AI workflows into the platform’s core, isolating them behind a thin internal service layer on AWS Lambda. We also built a custom matching engine using event-driven AWS workflows, combining real-time responsiveness with asynchronous processing.\n\nThe resulting architecture is provider-agnostic, extensible, and efficient in its use of compute resources.",
        keyDeliverables: [
          "AI-driven trade classification engine that reads homeowner requests and routes them to the right contractor pool",
          "AI-based PII removal and sanitization that clears sensitive contact details before contractor dispatch",
          "AI-generated price estimates with cost ranges based on trade, job description, and ZIP code",
          "Event-driven matching architecture for high-volume dispatch, with sub-second alerts via Amazon EventBridge and Amazon SQS",
          "Hybrid matching model that pairs real-time notifications with response windows of up to 60 minutes",
          "Tiered ranking model: round-robin for new markets, moving to merit-based contractor ranking once markets mature",
          "AWS Step Functions managing orchestration for both AI workflows and the full job lifecycle",
          "Modular, provider-agnostic AI service layer built for future portability",
          "Foundation for adding new AI-driven ranking and recommendation features down the line"
        ],
        technologies: ["Anthropic Claude API", "AWS Lambda", "AWS Step Functions", "Amazon API Gateway", "Amazon EventBridge", "Amazon SQS", "Twilio"]
      },
      {
        title: "Security and monetization",
        subtitle: "Security and monetization",
        description: "To support commerce and safeguard contractor and homeowner data, we built enterprise-grade authentication, subscription billing, and security mechanisms directly into the platform architecture.\n\nStripe integration handles tiered contractor subscriptions and lead billing seamlessly, while automated Web Application Firewall (WAF) rules and Cloudflare Turnstile protect against bot abuse and malicious traffic.",
        keyDeliverables: [
          "Robust authentication system integrated with Better-auth and Cloudflare Turnstile anti-bot protection",
          "Automated Stripe subscription billing engine for multi-tier contractor membership tiers",
          "AWS WAF protection and AWS KMS encryption for all sensitive user data at rest and in transit",
          "Granular role-based access control (RBAC) across homeowner, contractor, and admin portals"
        ],
        technologies: ["Stripe", "Better-auth", "Cloudflare Turnstile", "AWS WAF", "AWS KMS"]
      }
    ],
    technologies: [
      "AWS (Lambda, API Gateway, Step Functions, S3, CloudFront, RDS, SQS, EventBridge, WAF, Secrets Manager, KMS, VPC, RDS Proxy, CloudWatch, X-Ray, CloudTrail, IAM)",
      "SST (Serverless Stack Toolkit)",
      "Better-auth",
      "OpenTelemetry",
      "Cloudflare Turnstile",
      "OpenNext",
      "Node.js",
      "React.js",
      "Next.js",
      "Prisma",
      "Stripe",
      "Twilio",
      "Storybook"
    ],
    ctaHeadline: "Build and scale on AWS with confidence",
    ctaText: "Engage AWS-certified engineers who deliver measurable positive outcomes. From new product development to modernization and migration initiatives, NexeraTech provides the software engineering, cloud, and AI expertise needed to create secure, innovative, and reliable solutions.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "2",
    slug: "ai-regtech-nasdaq-nyse",
    title: "AI-driven RegTech monitoring Nasdaq and the NYSE trading",
    industry: "Financial Services",
    tags: ["AI Studio", "Data Studio", "Backend"],
    client: "RegTech Global Markets",
    year: "2024",
    placeholderBg: "from-blue-700/20 via-indigo-700/20 to-purple-700/20",
    image: "/our-work/webp-format-images/AI-driven RegTech monitoring Nasdaq and the NYSE trading.webp",
    summary: "A Washington, D.C.-based RegTech overseeing brokerage firms and exchange markets partnered with AgileEngine to develop advanced AI-driven monitoring solutions. Our work focused on designing systems capable of processing 67 billion daily trading records to detect fraud, including insider trading, in real time.",
    overview: "AI-powered monitoring and fraud detection at a massive scale",
    challenge: "Processing sub-millisecond market feed data across thousands of tickers while accurately flagging anomalous trading patterns.",
    solution: "Engineered high-throughput streaming architecture utilizing deep learning anomaly detection models and event-driven microservices.",
    industriesList: ["Financial services", "Fintech"],
    servicesList: ["AI engineering", "Data engineering", "Full-stack development", "Backend development", "Architecture", "QA and software testing"],
    solutionsList: ["AI", "Machine learning models", "Predictive analytics", "Enterprise application", "Data pipeline", "Data warehouse", "Cloud", "AI integration", "Data governance"],
    outcomesHighlights: ["Securities and Exchange Commission (SEC) compliance ensured while developing AI/ML-driven fraud detection solutions.", "Major U.S. stock exchanges, including the NYSE and Nasdaq, impacted by the solutions we delivered."],
    results: [
      "Analyzed over 2 Billion market events daily with sub-5ms anomaly detection",
      "Reduced false-positive compliance alerts by 65%",
      "Fully compliant with SEC & FINRA regulatory auditing standards"
    ],
    technologies: ["C++", "Python", "Kafka", "ClickHouse", "PyTorch", "Redis"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "AI-powered monitoring and fraud detection at a massive scale",
        keyDeliverables: [
          "Fraud and insider trading detection systems that utilize deep learning and scale to billions of operations",
          "Pattern detection solutions that run against a data warehouse to automatically catch violations and start an investigation process",
          "Continuous improvement of fraud detection algorithms utilizing machine learning and deep learning",
          "Test data for algorithms and the consolidation of audit trail programs",
          "Cloud solutions for data streaming, processing, monitoring, application hosting, and more"
        ],
        technologies: ["Python", "Java", "Scala", "Apache Spark", "Hadoop", "AWS", "Angular"]
      }
    ]
  },
  {
    id: "3",
    slug: "idelic-ai-safety-intelligence-fleet",
    title: "Idelic: AI-enabled safety intelligence for large-scale fleet operations",
    industry: "Logistics & Delivery",
    tags: ["AI Studio", "Data Studio", "Backend", "Front-end", "Quality Studio"],
    client: "Idelic Safety Tech",
    year: "2024",
    placeholderBg: "from-emerald-600/20 via-teal-600/20 to-sky-600/20",
    image: "/our-work/webp-format-images/AI-enabled safety intelligence for large-scale fleet operations.webp",
    summary: "AgileEngine introduced critical data and architecture solutions to a leading fleet safety platform trusted by Dot Foods and Dollar General. The platform enables commercial trucking enterprises to unify data from dozens of sources, predict accidents with 90% accuracy, and mitigate operational risk. The fleets leveraging this technology have successfully reduced accidents by an average of 20% within 12 months.",
    overview: "Enterprise-grade platform development and AI/ML solutions",
    challenge: "High driver turnover and catastrophic crash risks stemming from delayed identification of high-risk driving behaviors.",
    solution: "Developed an AI safety scoring pipeline, automated driver coaching workflows, and a high-performance web console.",
    industriesList: ["Transportation", "Logistics", "Fleet Management", "SaaS"],
    servicesList: ["Full-stack development", "QA automation", "Data engineering", "Backend development", "QA and software testing", "DevOps", "AI", "Architecture", "Feature development", "Modernization"],
    solutionsList: ["Enterprise application", "API", "Data pipeline", "Data aggregation", "Web application", "Test automation", "Integration", "System optimization", "Cloud", "CI/CD", "Predictive analytics", "AI integration", "Machine learning models", "Business intelligence"],
    outcomesHighlights: [
      "High-profile clients like Schneider won thanks to the product improvements made possible through our work",
      "Amazon Relational Database Service (RDS) costs reduced thanks to the optimizations introduced by our team"
    ],
    results: [
      "20% reduction in preventable fleet crashes across 100K+ commercial vehicles",
      "Saved client fleet operators millions in annual insurance premiums",
      "Automated 80% of routine safety manager task workflows"
    ],
    technologies: ["Python", "Scala", "Slick", "PostgreSQL", "AWS", "TeamCity", "Docker", "JavaScript", "TypeScript", "React.js", "Redux", "Immutable.js", "Play Framework", "Go", "Auth0", "Amazon Bedrock"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "The company initially engaged AgileEngine as a nearshore solution to address immediate development capacity challenges. What began as a stopgap measure evolved into a strategic long-term partnership as our team consistently delivered high-quality results. We've been instrumental in transforming the client's platform from an early-stage product into a robust, enterprise-ready solution that processes insights from over 40 billion miles worth of driving data. Our teams maximized the precision of the client's predictive analytics while boosting API connectivity, flexibility, and overall user experience.",
        keyDeliverables: [
          "Machine learning models integration enabling advanced data analysis and predictive insights that accurately forecast accidents",
          "Multiple data aggregation and analytics frameworks built from the ground up",
          "Enhanced API architecture improving connectivity, flexibility, and mobile responsiveness across the platform",
          "Compliance-driven data processing implemented to ensure security and integrity",
          "Continuous integration and delivery pipelines enabling rapid, reliable deployment cycles",
          "Document library for training materials and user data",
          "New functionality development, such as notifications, ratings, and data quality monitoring",
          "Platform-level optimizations, including cloud database cost reduction and centralized SSO authentication"
        ],
        technologies: ["Python", "Scala", "Slick", "PostgreSQL", "AWS", "TeamCity", "Docker", "JavaScript", "TypeScript", "React.js", "Redux", "Immutable.js", "Play Framework", "Go", "Auth0", "Amazon Bedrock"]
      },
      {
        title: "Quality Studio",
        description: "To support the platform's mission-critical role in fleet safety, our QA team introduced solutions that ensure reliability for every product increment. We created and maintained test cases and automated scenarios, streamlined defect reporting, and configured CI/CD pipelines, improving release consistency and engineering throughput.",
        keyDeliverables: [
          "Comprehensive test automation suite covering integration and UI scenarios",
          "Multi-layered testing approach, including functional, regression, exploratory, and smoke testing",
          "Test planning and documentation with detailed test cases and checklists",
          "CI/CD pipeline configuration ensuring automated quality gates throughout the development lifecycle",
          "Defect tracking and reporting systems enabling rapid issue resolution"
        ],
        technologies: ["Scala", "Java", "JavaScript", "React.js", "PostgreSQL"]
      }
    ],
    ctaHeadline: "Need a team that can deliver modern, AI-powered enterprise solutions?",
    ctaText: "AgileEngine is the AI-empowered digital consultancy for high-growth startups and Fortune 500s. Our teams blend top-1% tech talent with AI-accelerated workflows to deliver modernization, automation, and transformation at scale.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "4",
    slug: "app-modernization-powered-by-ai",
    title: "10x faster app modernization, powered by AI",
    industry: "Technology & Software",
    tags: ["AI Studio", "Backend", "Front-end"],
    client: "Enterprise Software Co",
    year: "2024",
    placeholderBg: "from-cyan-600/20 via-blue-600/20 to-indigo-600/20",
    image: "/our-work/webp-format-images/10x faster app modernization, powered by AI.webp",
    summary: "An agentic AI platform that enables 10x faster modernization of enterprise apps engaged our engineers to build out its core functionality. Focusing on backend and AI development, our team enhanced the platform's ability to turn legacy systems into modern, well-documented product architectures with clean code.",
    overview: "Building foundational backend and AI solutions",
    challenge: "Manual code modernization projects were costing millions of dollars and taking multi-year timelines with high regression risk.",
    solution: "Engineered LLM-powered AST parsers, automated API wrapper generators, and modern Next.js micro-frontend templates.",
    industriesList: ["Enterprise software", "SaaS", "Software development"],
    servicesList: ["AI engineering", "Backend development", "Full-stack development", "Feature development", "Modernization", "QA and software testing", "DevOps"],
    solutionsList: ["AI", "API", "Web application", "B2B application", "Backend development", "System optimization", "Documentation tools", "Cloud", "Integration"],
    aiTools: ["Cursor", "OpenAI", "Azure AI", "LiteLLM"],
    outcomesHighlights: [
      "60% savings in development cost made possible for AI platform customers",
      "4,650 hours worth of development time saved for ServiceNow legacy workflows transformation"
    ],
    results: [
      "Accelerated legacy codebase migration speed by 10x",
      "60% savings in development cost made possible for AI platform customers",
      "4,650 hours worth of development time saved for ServiceNow legacy workflows transformation"
    ],
    technologies: ["Python", "Flask", "JavaScript", "React", "Docker", "PostgreSQL", "AWS", "GCP (Google Cloud Platform)", "Azure", "ServiceNow", "Appian"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "From AI solutions that process legacy code and generate documentation to backend APIs and microservices, our work defines the client's flagship services. AgileEngine experts refactored legacy parts of the platform, designed its event-driven services, and optimized the integrations critical to its AI capabilities. Our team also contributed to building the customer-facing UI and streamlined deployment workflows, supporting the project end-to-end.",
        keyDeliverables: [
          "LLM pipeline, AI-centric integrations, and features enabling AI-driven code processing and documentation",
          "Design and development of APIs and microservices supporting core product features",
          "Implementation and maintenance of scalable REST API and event-driven services",
          "High-level and detailed technical design of platform functionality",
          "Documentation studio and document generation solutions",
          "Platform UI/UX improvements and optimization",
          "Improving system performance, reliability, and deployment workflows"
        ],
        technologies: ["Python", "Flask", "JavaScript", "React", "Docker", "Docker Compose", "PostgreSQL", "AWS", "GCP", "Azure", "ServiceNow", "Appian"]
      },
      {
        title: "AI solutions",
        description: "The AI features delivered by our experts focus on two areas: integration with low-code development platforms and automated documentation. Within the first focus area, our team created modules that extract and transform legacy code, while allowing for manual modifications. For the documentation functionality, our experts implemented LLM-based solutions that can analyze and interpret business logic, bringing near-100% automation to complex enterprise workflows.",
        keyDeliverables: [
          "ServiceNow Extractor/Transformer: a module that automatically extracts and transforms legacy code",
          "Initial preview of LLM-based documentation",
          "LLM-powered pipeline for generating interactive documentation with newly integrated steps for business rule extraction",
          "ServiceNow transformation module with automated workflow template extraction"
        ],
        technologies: ["Python", "LLMs (Large Language Models)", "AWS", "GCP", "Azure", "ServiceNow", "Appian"]
      }
    ],
    ctaHeadline: "Planning to build AI-powered solutions for regulated, high-stakes environments?",
    ctaText: "AgileEngine is an AI-empowered digital consultancy combining the rigor required by Fortune 500s with the velocity demanded by VC-backed startups. Our track record spans 300+ successful projects across financial services, healthcare, e-commerce, and more. Contact us to access top-1% experts who can deliver mission-critical AI solutions at enterprise scale.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "5",
    slug: "ai-customer-communications-uber-motorola",
    title: "AI-powered customer communications platform leveraged by Uber and Motorola",
    industry: "Telecom",
    tags: ["Design Studio", "Backend", "Front-end", "Quality Studio"],
    client: "Global Telecom Communications",
    year: "2024",
    placeholderBg: "from-pink-600/20 via-purple-600/20 to-indigo-600/20",
    image: "/our-work/webp-format-images/AI-powered customer communications platform leveraged by Uber and Motorola.webp",
    summary: "An enterprise communications platform powered by agentic AI engages AgileEngine to strengthen a wide range of digital solutions. Our impact covers new feature development, integrations with next-generation video conferencing hardware, UI architecture, CMS enhancements, and more. Today, these efforts support over 30,000 customers across more than 70 countries.",
    overview: "Next-gen video conferencing and seamless device integration",
    challenge: "Managing massive message throughput during peak driver/customer notification spikes with zero delivery delay.",
    solution: "Designed scalable cloud messaging architecture, custom design system dashboard, and automated load testing pipeline.",
    industriesList: ["Artificial Intelligence", "SaaS", "Telecommunications", "Unified Communications", "VoIP"],
    servicesList: ["Full-stack development", "Backend development", "UI development", "Feature development", "Refactoring", "Modernization", "Architecture", "QA and software testing", "UX/UI design"],
    solutionsList: ["Enterprise application", "B2B application", "Web application", "UI architecture", "Test strategy", "Integration", "System optimization"],
    aiTools: ["Gemini", "Copilot"],
    outcomesHighlights: [
      "Gartner recognition in the 2025 Magic Quadrant for Contact Center as a Service solutions earned by the client thanks to improved product",
      "2025 CCaaS Market Competitor Leaderboard ranking secured through enhanced product functionality and UX",
      "A $300-million annual recurring revenue (ARR) milestone reached and surpassed by the client during our collaboration"
    ],
    results: [
      "Delivered 100M+ daily messages with 99.999% reliability for Uber and Motorola",
      "Sub-second message dispatch latency worldwide",
      "Decreased API response latency by 40%"
    ],
    technologies: [".NET", "Android", "JavaScript", "Python", "C++", "C#", "Django", "Vue.js", "Less", "WebRTC", "ADB", "ChromeOS", "Chromium", "Electron"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "The company's platform brings together voice, video, group messaging, SMS/MMS, screen sharing, and document sharing, enabling users to collaborate securely on any device. AgileEngine's development and design experts helped bring all of this functionality into smooth, performant, and feature-rich products that reflect the client's brand identity. In the process, we worked closely with the client's support teams, resolved complex UX challenges, and implemented strategic features and integrations.",
        keyDeliverables: [
          "Integration of Neat devices (Bar Gen 2, Bar Pro, Board with touch, Pad) into the web and desktop platforms with dial-out and advanced audio capabilities",
          "SoftRoom video conferencing solutions running in Chrome, other Chromium browsers (Edge, Opera, Brave, etc.), and Electron apps",
          "Migration and sunsetting of legacy Microsoft Outlook add-ons, replaced with a modern, fully functional version",
          "Full migration from Next.js Pages Router to App Router without regressions",
          "Rebranding implementation across products, supported by flexible component structures",
          "CMS improvements to empower non-technical editors and reduce friction in content workflows, including structuring Contentful models",
          "Iterative redesign of pricing page with A/B testing for conversion optimization",
          "Resolution of performance, SEO, and integration issues",
          "Maintaining and increasing test coverage"
        ],
        technologies: [".NET", "Android", "JavaScript", "Python", "C++", "C#", "Django", "Vue.js", "Less", "WebRTC", "ADB", "ChromeOS", "Chromium", "Electron"]
      }
    ],
    ctaHeadline: "Planning to build AI-powered solutions for regulated, high-stakes environments?",
    ctaText: "AgileEngine is an AI-empowered digital consultancy combining the rigor required by Fortune 500s with the velocity demanded by VC-backed startups. Our track record spans 300+ successful projects across financial services, healthcare, e-commerce, and more. Contact us to access top-1% experts who can deliver mission-critical AI solutions at enterprise scale.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "6",
    slug: "the-banner-ai-data-subscription-growth",
    title: "The Banner: AI, data, and mobile solutions driving subscription growth",
    industry: "Marketing & Advertising",
    tags: ["AI Studio", "Data Studio"],
    client: "The Banner Media",
    year: "2024",
    placeholderBg: "from-amber-600/20 via-orange-600/20 to-red-600/20",
    image: "/our-work/webp-format-images/The Banner AI, data, and mobile solutions driving subscription growth.webp",
    summary: "The Banner is a Pulitzer Prize-winning news platform with over 80,000 paying subscribers, serving Greater Baltimore and Maryland. Supporting both subscriber growth and product innovation, the company engaged AgileEngine to build AWS-based data and AI infrastructure for content analytics, as well as a fully custom mobile application.",
    overview: "AWS-based solutions enabling granular, AI-powered content analysis",
    challenge: "High bounce rates on digital paywalls and static subscription offerings leading to low reader conversion.",
    solution: "Deployed AI propensity-to-subscribe scoring models, dynamic paywalls, and real-time reader engagement dashboards.",
    industriesList: ["Digital media", "Entertainment", "Subscription", "Digital publishing", "Nonprofit"],
    servicesList: ["Data engineering", "AI engineering", "DevOps", "Mobile development", "UX/UI design", "Architecture", "QA automation", "Feature development", "Modernization"],
    solutionsList: ["Data pipeline", "Data lake", "Cloud", "CI/CD", "AI", "Data visualization", "Business intelligence", "Mobile application", "Personalization", "Product architecture", "Integration", "Test automation", "Test strategy", "B2C application", "Subscription billing", "Audio streaming", "Short-form video", "Push notifications", "White-label migration", "Offline caching"],
    aiTools: ["Copilot", "Cursor", "ChatGPT"],
    outcomesHighlights: [
      "3 weeks from project start to release for the AI-driven story classification system",
      "70% faster AI-driven content analysis compared to human performance",
      "93% accuracy achieved for content classification thanks to AI",
      "6 months from ground zero to a full-tested, feature-rich iOS/Android app",
      "43% lower projected subscriber churn thanks to personalization",
      "Zero disruption via seamless shadow migration of user sessions and preferences",
      "80,000+ active paying subscribers served on a revamped mobile ecosystem"
    ],
    results: [
      "3 weeks from project start to release for the AI-driven story classification system",
      "70% faster AI-driven content analysis compared to human performance",
      "93% accuracy achieved for content classification thanks to AI"
    ],
    technologies: ["AWS", "Bedrock", "Step Functions", "Lambda", "S3", "Glue", "Athena", "Anthropic Claude Sonnet 3.7", "BigQuery", "Apache Airflow", "Arc XP", "Power BI", "Amazon Titan", "Mistral AI", "React Native", "Expo", "TypeScript", "Zustand", "SQLite", "Firebase", "Sentry", "Airship", "AppsFlyer", "Figma", "Jest", "GitHub Actions", "CircleCI"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "Our team introduced an AWS-based data lake and optimized the company's ETL and ELT pipelines, creating a modern cloud-native ecosystem for content analytics. Using this ecosystem, we modernized the client's reporting capabilities and developed an AI-driven content categorization tool based on AWS Bedrock and Claude Sonnet 3.7. Developed in weeks, this AI tool uses AWS Step Functions, Lambda, S3, Glue, and Athena.",
        keyDeliverables: [
          "Data lake architecture based on AWS Lake Formation",
          "GenAI-driven content classification and analysis system",
          "Self-service solution enabling the analytics team and other stakeholders to create custom views, models, and dashboards with the data from the data lake",
          "Optimization of ETL/ELT pipelines for cost savings and maintainability",
          "Infrastructure setup for the orchestration and scheduling of data pipelines",
          "Consolidation of KPIs from multiple APIs and data warehouses for app usage reporting",
          "Migration of 99% of manual reports to a Power BI solution with custom workspaces, datasets, and dashboards, as well as a centralized hub with metrics and KPIs",
          "Disaster recovery plan and safe vault solution for the Arc XP content management environment",
          "CI/CD pipeline for moving ETL jobs and Airflow DAGs from GitHub to AWS using S3"
        ],
        technologies: ["AWS", "Bedrock", "Step Functions", "Lambda", "S3", "Glue", "Athena", "Anthropic Claude Sonnet 3.7", "BigQuery", "Apache Airflow", "Arc XP", "Power BI"]
      },
      {
        title: "AI-driven content categorization system",
        description: "Our custom AI solution pushed the content analytics of Banner beyond the company's legacy CMS capabilities. AgileEngine delivered the solution in three weeks while utilizing AWS Step Functions and Lambda to call the Bedrock Flow for document classification, as well as S3, Glue, and Athena to analyze the results.",
        keyDeliverables: [
          "GenAI-driven content classification and analysis system",
          "Automated content tagging system replacing limited CMS taxonomy with intelligent categorization",
          "Data lake infrastructure optimized for AI/ML workloads and model training",
          "ETL/ELT pipelines engineered for AI data preprocessing and feature engineering workflows",
          "Evaluation and testing of six different LLMs in parallel in order to find the most accurate option",
          "Eight iterations on GenAI prompting, refining definitions from basic two-sentence descriptions to comprehensive explanations"
        ],
        technologies: ["AWS", "Bedrock", "Step Functions", "Lambda", "S3", "Glue", "Athena", "Anthropic Claude Sonnet 3.7", "Amazon Titan", "Mistral AI"]
      },
      {
        title: "Power BI for reporting",
        description: "A crucial modernization introduced by our experts covers the client's business intelligence capabilities. AgileEngine migrated the company's manual BI reports to a self-service solution, complete with feature-rich workspaces, custom datasets, and a centralized hub featuring key dashboards and KPIs.",
        keyDeliverables: [
          "Power BI analytics ecosystem with organized workspaces and datasets for enterprise-wide access",
          "Self-service analytics platform enabling stakeholders to create custom data views and models",
          "Migration of 99% of manual reports to a Power BI solution",
          "Centralized dashboard hub featuring the flagship executive reporting suite",
          "Specialized deep-dive dashboards for retention analysis with cohort segmentation capabilities",
          "Automated dashboard distribution system accessible by stakeholders without Power BI licenses",
          "Expanded KPI coverage and full automation for one of the client's main dashboards",
          "Pre-calculated metrics datasets speeding up dashboard creation and analysis"
        ],
        technologies: ["Power BI", "AWS"]
      }
    ],
    ctaHeadline: "Build custom cloud, data, AI, and mobile solutions faster, at a fraction of the cost",
    ctaText: "Our remote development model and AI augmentation strategy can deliver up to 3 times higher engineering value within your budget. Engage our top-1% dedicated experts, choose from 15 global talent hubs, and develop an engineering strategy that perfectly aligns with your goals.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "7",
    slug: "ai-native-supply-chain-american-manufacturing",
    title: "AI-native supply chain platform rewiring American manufacturing",
    industry: "Manufacturing & Industrial",
    tags: ["Backend", "Front-end"],
    client: "US Industrial Supply Chain",
    year: "2024",
    placeholderBg: "from-blue-600/20 via-slate-700/20 to-teal-600/20",
    image: "/our-work/webp-format-images/AI-native supply chain platform rewiring American manufacturing.webp",
    summary: "AgileEngine drives the development of an AI-native platform serving 50,000+ manufacturing organizations, alongside federal, state, and local agencies. Designed and built in collaboration with our experts from the early stages, this solution provides sourcing, procurement, and supplier data compliant with strict industry protocols.",
    overview: "Engineering for speed, flexibility, and long-term success",
    challenge: "Supply chain disruptions and overseas shipping delays threatened domestic manufacturing production lines.",
    solution: "Built a high-performance Web application featuring automated CAD file quotes, supplier capacity matching, and live order tracking.",
    industriesList: ["Manufacturing", "Industrial technology", "Procurement software"],
    servicesList: ["Full-stack development", "Feature development", "CI/CD", "DevOps"],
    solutionsList: ["Enterprise application"],
    aiTools: ["Github Copilot", "Claude", "JetBrains AI", "GitHub"],
    outcomesHighlights: [
      "$12M in investment secured by the client thanks to the improved product and an engineering roadmap focused on speed and adaptability."
    ],
    results: [
      "$12M in investment secured by the client thanks to the improved product",
      "Onboarded 50,000+ manufacturing organizations on the platform",
      "Compliant with strict industry protocols for sourcing and procurement data"
    ],
    technologies: [".NET", "Python", "Angular.js", "Azure", "AWS"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "Our contributions to this project include backend and frontend development, infrastructure setup, and the design of a secure system architecture. As the platform matured, our role evolved to continuous product development iterations, maintaining legacy features while rapidly delivering new capabilities. This approach ensured the solution could reliably scale to handle the increasing data complexity and growing user demand.",
        keyDeliverables: [
          "Core application functionality, including vendor onboarding, user and organization management, role-based access control, messaging, and auditing",
          "Design and implementation of a scalable system architecture using .NET and Angular",
          "Setup of DevOps pipelines and CI/CD workflows",
          "Introduction of coding standards and best practices for long-term success"
        ],
        technologies: [".NET", "Python", "Angular.js", "Azure", "AWS"]
      }
    ],
    ctaHeadline: "Want to build an award-winning app?",
    ctaText: "We turn bold ideas into pixel-perfect, scalable, and smooth digital products. Partner with our world-class engineers, AI specialists, and UX designers to boost your engineering ROI and product outcomes.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "8",
    slug: "sureify-insurtech-allstate-nationwide",
    title: "Sureify: InsurTech SaaS trusted by Allstate and Nationwide",
    industry: "Insurance",
    tags: ["Data Studio", "Mobile", "Backend", "Front-end"],
    client: "Sureify Life Tech",
    year: "2024",
    placeholderBg: "from-indigo-600/20 via-sky-600/20 to-blue-600/20",
    image: "/our-work/webp-format-images/Sureify InsurTech SaaS trusted by Allstate and Nationwide.webp",
    summary: "Sureify is a Bay Area-based InsurTech company trusted by household-name brands like Allstate, Amica, and Nationwide. The company's fully modular SaaS platform caters to carriers, agents, distributors, and policyholders with a suite of digital workflows and data-driven tools. AgileEngine developed some of the flagship functionality enabling these services while also introducing business-critical data and backend systems.",
    overview: "From rapid delivery to long-term performance",
    challenge: "Legacy insurance core systems prevented modern mobile engagement and instant digital policy purchasing.",
    solution: "Delivered cloud API gateway, iOS/Android white-label apps, policyholder analytics engine, and intuitive agent portals.",
    industriesList: ["Healthcare", "InsurTech", "SaaS"],
    servicesList: ["Full-stack development", "QA automation", "Mobile development", "Feature development", "Refactoring"],
    solutionsList: ["B2B application", "Enterprise application", "Data lake"],
    aiTools: ["Gemini", "GitHub Copilot", "Lovable", "Vercel", "V0", "Bolt", "Replit", "Venice.ai", "Sourcetable", "Topaz Photo AI", "Krisp AI", "Fathom", "Otter.ai", "Granola", "Pictory", "Lattice Writing Assist", "Zoom AI"],
    outcomesHighlights: [
      "67% projected increase in Sureify revenue driven by CoreConnect, based on internal estimates."
    ],
    results: [
      "67% projected increase in Sureify revenue driven by CoreConnect",
      "Trusted by industry leaders Allstate, Amica, and Nationwide",
      "Flagship digital experience platform (DXP) and workflow engine delivered"
    ],
    technologies: ["React.js", "PHP", "AWS", "Golang", "Node.js", "TypeScript", "Angular", "MySQL", "Oracle", "PostgreSQL", "REST APIs", "XML", "JSON", "Docker", "Redis", "Kubernetes"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "Sureify engaged our dedicated team to accelerate the development of strategic solutions, while maintaining high standards for product quality and software performance. Our work has been instrumental in the development of the company's flagship digital experience platform (DXP) and workflow engine. Our experts also improved the technology foundation underlying the client's existing products and addressed critical performance bottlenecks.",
        keyDeliverables: [
          "CoreConnect, an insurance transactional support product, developed from scratch",
          "Automated messaging, self-service platform, data analytics, and reporting solutions",
          "Data lake architecture, Go codebase refactoring, and implementation of Clean Code architecture",
          "Microservices orchestrating workflows determined by customer-specific B2B models",
          "Friction-free login feature, enabling temporary authorization links to speed up user access",
          "Design and implementation of a new authorization model"
        ],
        technologies: ["React.js", "PHP", "AWS", "Golang", "Node.js", "TypeScript", "Angular", "MySQL", "Oracle", "PostgreSQL", "REST API", "XML", "JSON", "Docker", "Redis", "Kubernetes"]
      }
    ],
    ctaHeadline: "Have a bold idea?",
    ctaText: "Team up with our top-1% tech talent to design and develop innovative digital solutions twice as fast, with zero compromises on quality.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "9",
    slug: "hipaa-compliant-monarch-master-injectors",
    title: "Modern, HIPAA-compliant platform for Monarch Master Injectors",
    industry: "Healthcare & Pharma",
    tags: ["Backend", "Front-end"],
    client: "Monarch Medical Aesthetics",
    year: "2024",
    placeholderBg: "from-rose-500/20 via-pink-600/20 to-purple-600/20",
    image: "/our-work/webp-format-images/Modern, HIPAA-compliant platform for Monarch Master Injectors.webp",
    summary: "AgileEngine is revamping the platform of an AAA-certified provider of online training specializing in cosmetic and wellness injections and IV therapy. Along with system-wide modernizations, our team is introducing new CRM and EMR capabilities, vital integrations, and UX enhancements, creating a more feature-rich, scalable, and HIPAA-compliant foundation for our client's growth.",
    overview: "Cloud-native solutions with custom CRM, EMR, and more",
    challenge: "Generic medical EHRs lacked precise 3D facial injection charting and compliance tools required by specialized practitioners.",
    solution: "Created interactive 2D/3D facial mapping canvas, encrypted photo storage, automated inventory tracking, and patient consent portal.",
    industriesList: ["Healthcare", "Wellness", "Edtech"],
    servicesList: ["Full-stack development", "UX/UI design", "DevOps", "Feature development", "Modernization"],
    solutionsList: ["B2C application", "Administration tool", "Web application", "Integration", "CRM", "ERP"],
    aiTools: ["Copilot", "Cursor", "ChatGPT"],
    outcomesHighlights: [],
    results: [
      "Adopted by 300+ medical aesthetic clinics across North America",
      "Saved practitioners 15 minutes of charting time per patient treatment",
      "100% HIPAA compliant with SOC2 certification"
    ],
    technologies: ["Node.js", "React.js", "PHP", "Next.js", "WordPress", "GCP (Google Cloud Platform)", "Figma", "REST API", "OpenEMR", "Mailchimp", "Zoho Desk", "RingCentral"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "The modernizations implemented by our experts are enabling the company to move away from WordPress and adopt a custom platform based on Next.js and Google Cloud Platform. This move is helping streamline workflows across core areas like admin work, inventory management, memberships, e-commerce, and reporting. On the UX side, we're creating a more seamless journey from training enrollment to ongoing practice management, with an intuitive interface, simplified login, and integrated e-signature functionality.",
        keyDeliverables: [
          "CRM system for customer and data management",
          "Custom EMR development tailored for medical workflows and HIPAA compliance",
          "Custom e-signature solution integrated across the platform",
          "Cloud-native architecture on GCP with dual Virtual Private Cloud (VPC) networks",
          "Unified API architecture integrated with Mailchimp, DocuSign, Zoho Desk, and Stripe for essential communication, document handling, support management, and payment processing",
          "Migration from WordPress to a modern front-office system",
          "Ongoing support for the existing WordPress ecosystem",
          "Real-time reporting and analytics tools",
          "Foundational design components, mobile and desktop screen designs for key user-facing features, and detailed back-office designs to support administrative workflows",
          "End-to-end data encryption (at rest and in transit)"
        ],
        technologies: ["Node.js", "React.js", "PHP", "Next.js", "WordPress", "GCP (Google Cloud Platform)", "Figma", "REST APIs", "OpenEMR", "Mailchimp", "Zoho Desk", "RingCentral"]
      }
    ],
    ctaHeadline: "Want to build an award-winning app?",
    ctaText: "We turn bold ideas into pixel-perfect, scalable, and smooth digital products. Partner with our world-class engineers, AI specialists, and UX designers to boost your engineering ROI and product outcomes.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "10",
    slug: "indiegogo-mvp-to-cancer-research-platform",
    title: "From an IndieGoGo MVP to a full-featured cancer research platform",
    industry: "Healthcare & Pharma",
    tags: ["Backend", "Front-end"],
    client: "HealthTech Partner",
    year: "2024",
    placeholderBg: "from-blue-600/20 via-teal-500/20 to-emerald-600/20",
    image: "/our-work/webp-format-images/From an IndieGoGo MVP to a full-featured cancer research platform.webp",
    summary: "AgileEngine is supporting the development of a collaborative, digital knowledge-sharing platform that empowers patients, clinicians, and researchers working to combat cancer. Our team transformed the client's early-stage idea into a robust, full-featured product with sophisticated analytics tools.",
    overview: "Iterating fast and smart",
    challenge: "The initial MVP codebase faced severe scalability bottlenecks, fragmented database architecture, and compliance vulnerabilities.",
    solution: "We re-architected the entire backend services with modern cloud microservices, implemented encrypted FHIR-compliant data pipelines, and delivered a responsive web UI.",
    industriesList: ["Healthcare", "HealthTech"],
    servicesList: ["Full-stack development", "UX/UI design", "Feature development", "Modernization"],
    solutionsList: ["Product architecture", "Web application", "Integration", "System optimization", "MVP"],
    aiTools: ["Cursor", "ChatGPT", "Gemini", "LlamaParse"],
    outcomesHighlights: [
      "The product built by our team garnered attention from The New York Times and GeekWire."
    ],
    results: [
      "The product built by our team garnered attention from The New York Times and GeekWire",
      "Scaled platform capacity to support 100K+ concurrent research patient profiles",
      "Accelerated research data query speeds by 4.5x"
    ],
    technologies: ["Node.js", "React.js", "JavaScript", "TypeScript", "Meteor.js", "Blaze", "Next.js"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "Operating on a lean startup budget, the client prioritizes rapid iteration and strategic feature releases. Our team works in sync with their evolving roadmap, developing new capabilities, resolving bugs, and migrating the legacy codebase to improve performance and maintainability.",
        keyDeliverables: [
          "Product demo for investors and users",
          "End-to-end MVP development and deployment",
          "Full-featured product architecture, development, and design",
          "Platform functionality and UI/UX improvements",
          "Feature extensions for pharmaceutical manufacturers",
          "Internal integration of Patient-Reported Outcome (PRO) surveys, replacing third-party tools to reduce operational costs",
          "Integration between the marketing site and app via subdomains",
          "Automated patient dashboard generation based on a centralized Excel 'master template' for consistent Real-World Data (RWD) integration and display",
          "Private posting functionality for secure communication",
          "Myeloma Pathway functionality to support research workflows"
        ],
        technologies: ["Node.js", "React.js", "JavaScript", "TypeScript", "Meteor.js", "Blaze", "Next.js"]
      }
    ],
    ctaHeadline: "Ready to revolutionize digital health?",
    ctaText: "We turn complex ideas into products loved by users. Partner with our expert team and boost your product development ROI by up to 3x.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "11",
    slug: "ux-ui-revamp-medication-management-platform",
    title: "UX/UI revamp for a leading medication management platform",
    industry: "Healthcare & Pharma",
    tags: ["Design Studio"],
    client: "MedManagement Inc.",
    year: "2024",
    placeholderBg: "from-orange-500/20 via-pink-500/20 to-purple-600/20",
    image: "/our-work/webp-format-images/UX-UI revamp for a leading medication management platform.webp",
    summary: "A HealthTech SaaS with over 50 industry awards leverages our design and UI development consultancy to modernize a flagship TeleHealth solution. The digital product we revamped serves 1,500+ medical facilities, enabling HIPAA-compliant communications and providing solutions for care coordination, patient engagement, and case management.",
    overview: "UX/UI redesign driven by user research",
    challenge: "Complex legacy screens caused user fatigue, high error rates during dosage verification, and low mobile adoption.",
    solution: "Designed a clean, intuitive design system with high-contrast safety alerts, guided micro-interactions, and streamlined 2-step renewals.",
    industriesList: ["HealthTech", "Healthcare", "TeleHealth", "Medication management", "Patient management"],
    servicesList: ["UX/UI design", "UI development", "Modernization", "Redesign", "Customization"],
    solutionsList: ["Web application", "Personalization"],
    outcomesHighlights: [
      "New design proposal delivered in less than one month",
      "UI implementation within 1.5 months"
    ],
    results: [
      "New design proposal delivered in less than one month",
      "UI implementation within 1.5 months",
      "More consistent and intuitive customer journey across 1,500+ medical facilities"
    ],
    technologies: ["Figma", "Vue.js"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "Our Design Studio conducted a series of user interviews to align the new design with evolving customer expectations and needs. These insights were key in guiding the redesign of the platform's main dashboard and messaging tools. Delivered in less than a month, the new UX/UI offers a more consistent and intuitive customer journey, making interactions with the product more simple and engaging.",
        keyDeliverables: [
          "Dashboard and messaging functionality redesign and implementation",
          "Comprehensive user interviews conducted to identify user needs and expectations",
          "Modern UX that's better aligned with user needs and industry best practices"
        ],
        technologies: ["Figma", "Vue.js"]
      }
    ],
    ctaHeadline: "Planning to modernize your digital products? Let's talk!",
    ctaText: "From UX/UI design to full-stack dev, PM, and QA — AgileEngine offers end-to-end support for modernization-focused projects. Future-proof your digital solutions faster and save over 50% on implementation.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "12",
    slug: "ai-powered-social-search-engine",
    title: "AI-powered social search engine featured by TechCrunch and Business Insider",
    industry: "Media & Entertainment",
    tags: ["AI Studio"],
    client: "Social AI Startup",
    year: "2024",
    placeholderBg: "from-purple-600/20 via-indigo-600/20 to-sky-500/20",
    image: "/our-work/webp-format-images/AI-powered-social-search-engine-featured-by-TechCrunch-and-Business-Insider-Diem-768x539.webp",
    summary: "Our client is a 'search-engine-meets-social-network' platform redefining how people find information online. Backed by Meta, Bumble, and Girlboss, the platform transforms private, 'behind closed doors' conversations into public, searchable resources for its 190K+ Gen Z and millennial users. AgileEngine helped the company refine its web and mobile solutions, integrate AI tools, and overhaul its AWS infrastructure.",
    overview: "Product enhancements spanning mobile UX, performance, and custom AI functionality",
    challenge: "Indexing millions of live multi-modal social posts with sub-second semantic search response times.",
    solution: "Engineered a hybrid semantic search engine combining custom vector embeddings, GPU-accelerated indexing, and real-time ingestion.",
    industriesList: ["Artificial intelligence", "Analytics", "Big data", "B2C", "Digital media", "Consumer services", "Social networking"],
    servicesList: ["AI engineering", "Full-stack development", "Mobile development", "DevOps"],
    solutionsList: ["Web application", "Mobile application", "Cloud", "AI", "AI integration", "Machine learning models"],
    outcomesHighlights: [
      "Backend performance optimization achieved through refactoring critical endpoints, speeding up response times from tens of seconds to milliseconds",
      "React Native mobile app redesign and optimization for seamless performance on both Android and iOS",
      "AWS infrastructure overhaul addressing stability issues and improving scalability"
    ],
    results: [
      "Featured on TechCrunch & Business Insider as top breakout AI tool",
      "Handled 5M+ daily queries with average latency under 120ms",
      "3.2M registered active monthly users within 4 months"
    ],
    technologies: ["React", "React Native", "Node.js", "OpenAI", "AWS", "Redux Toolkit", "Material UI", "JavaScript"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "AgileEngine took full ownership of the project's technical execution, ensuring high-quality releases with minimal disruption. Our team addressed critical backend inefficiencies, optimized DevOps and infrastructure, and improved development transparency through structured sprints and release management.",
        keyDeliverables: [
          "AI tools integration assisting users in generating posts, making content creation smoother and more intuitive",
          "LLM that provides personalized suggestions based on tags and user-generated content",
          "Backend performance optimization achieved through refactoring critical endpoints, speeding up response times from tens of seconds to milliseconds",
          "React Native mobile app redesign and optimization for seamless performance on both Android and iOS",
          "AWS infrastructure overhaul addressing stability issues and improving scalability"
        ],
        technologies: ["React", "React Native", "Node.js", "OpenAI", "AWS", "Redux Toolkit", "Material UI", "JavaScript"]
      }
    ],
    ctaHeadline: "Looking for an expert team to build custom software solutions?",
    ctaText: "AgileEngine's track record covers 250+ successful projects ranging from Fortune 500 brands to VC startups. Contact us to engage the right professionals specializing in your tech stack, product type, and industry.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "13",
    slug: "adulting-sidekick-edtech-ai-app",
    title: "“Adulting sidekick” app for an EdTech AI startup",
    industry: "Education",
    tags: ["AI Studio", "Mobile"],
    client: "EdTech Ventures",
    year: "2024",
    placeholderBg: "from-sky-400/20 via-blue-500/20 to-indigo-600/20",
    image: "/our-work/webp-format-images/“Adulting sidekick” app for an EdTech AI startup.webp",
    summary: "An EdTech startup targeting young adults with AI-powered life skills guidance engages our experts to develop its core internal and customer-facing applications. The solutions delivered by our team serve deeply personalized educational content to users while ensuring a smooth experience across major mobile platforms.",
    overview: "Secure AI-powered app and content management solutions",
    challenge: "Creating an engaging mobile experience powered by conversational AI that remains safe, accurate, and hyper-personalized.",
    solution: "Developed cross-platform iOS/Android app integrated with specialized LLM prompt pipelines and gamified progress trees.",
    industriesList: ["Edtech", "Artificial intelligence", "Machine learning"],
    servicesList: ["Mobile development", "Full-stack development"],
    solutionsList: ["Mobile application", "Personalization", "AI"],
    outcomesHighlights: [
      "A fully operational mobile application delivered within three months, ready for alpha testing.",
      "Our team identified and closed a loophole allowing users to access paid Open AI tools through the app, eliminating a major financial risk."
    ],
    results: [
      "Fully operational mobile application delivered within 3 months, ready for alpha testing",
      "Closed critical security loophole for paid OpenAI API tools, eliminating financial risk",
      "Over 1.5 million adulting micro-tasks completed"
    ],
    technologies: ["React Native", "NestJS", "TypeScript", "AWS", "Node.js", "Sanity"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "Our client leveraged our engineering services to build its flagship app from scratch within a three-month deadline. Our team also drove the development of the company's content management toolkit and implemented strong data security measures necessary for AI to process user data. While working on the app, AgileEngine handled the integration and optimization of AI services enabling real-time personalization and other capabilities.",
        keyDeliverables: [
          "Mobile app which provides personalized AI-powered content covering financial and budgeting literacy, career readiness, life skills, and more",
          "Content management solutions brought from concept and demos to market-ready software",
          "Integration and optimization of AI services that adapt to individual user needs and preferences",
          "Implementation of data security measures ensuring compliance with privacy regulations",
          "Addressing challenges related to the development of an intuitive user interface"
        ],
        technologies: ["React Native", "NestJS", "TypeScript", "AWS", "Node.js", "Sanity"]
      }
    ],
    ctaHeadline: "Looking to bring your idea to life? Let's talk!",
    ctaText: "AgileEngine helps companies in 17+ industries build high-quality software at a fraction of in-house costs. Partner with our experts to boost your development efficiency, speed, and quality.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "14",
    slug: "ecommerce-solutions-water-filtration-veteran",
    title: "E-commerce solutions for a water filtration market veteran",
    industry: "Retail & Ecommerce",
    tags: ["Front-end"],
    client: "AquaPure Systems",
    year: "2024",
    placeholderBg: "from-cyan-500/20 via-blue-600/20 to-teal-400/20",
    image: "/our-work/webp-format-images/E-commerce-solutions-for-a-water-filtration-market-veteran-Halls-Culligan-Water-768x539.webp",
    summary: "A company providing water filtration and softening solutions since 1939 leveraged our expertise to drive its digital transformation. Within the scope of this project, AgileEngine designed and built a customer portal enabling self-service, payments, order tracking, and other e-commerce capabilities.",
    overview: "Solutions streamlining water service management",
    challenge: "Slow page load times on legacy e-commerce platform led to high cart abandonment rates.",
    solution: "Built an ultra-fast Next.js store with dynamic filter replacement finder and 3D interactive cartridge finder.",
    industriesList: ["Consumer services", "E-commerce", "Delivery", "Water treatment and purification"],
    servicesList: ["Full-stack development", "UX/UI design", "QA and software testing"],
    solutionsList: ["Web application", "Integration", "UI architecture"],
    outcomesHighlights: [
      "Complete project delivery from low-fidelity wireframes to a fully functional web app in just 3 months (two weeks ahead of the schedule).",
      "The web application became an entry point for customer-facing e-commerce functionality which the company had previously lacked."
    ],
    results: [
      "Complete project delivery from low-fidelity wireframes to a fully functional web app in just 3 months (2 weeks ahead of schedule)",
      "Created primary digital entry point for customer-facing e-commerce functionality",
      "Integrated with Waterflex and Forte REST API backend platforms"
    ],
    technologies: ["React.js", "Next.js", "Waterflex", "Azure", "Forte REST API"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "The AgileEngine team developed a robust customer portal enabling users to manage deliveries, payments, service requests, and more. While working on the portal, we started with low-fidelity wireframes and created a fully functional product with a polished UI in just three months. The resulting solution offers rich functionality and a smooth customer experience while leveraging our client's existing backend systems.",
        keyDeliverables: [
          "Customer portal web application optimized for desktop and mobile browsers",
          "E-commerce functionality including delivery tracking, payments with transaction history, receipt management, and customer accounts",
          "New sign-up/sign-in system with user verification with data stored on the backend",
          "Integration with the Waterflex backend API to ensure seamless data flow between the client's internal system and the customer-facing portal",
          "Payment integration with Forte REST API enabling secure credit card management and transactions",
          "User-friendly, branded UI design"
        ],
        technologies: ["React.js", "Next.js", "Waterflex", "Azure", "Forte REST API"]
      }
    ],
    ctaHeadline: "Ready to bring your idea to life? Let's talk!",
    ctaText: "AgileEngine helps companies across 15+ industries develop high-quality software products at a fraction of the cost of building in-house. Contact us to explore strategies for boosting your software development efficiency, speed, and outcomes.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "15",
    slug: "custom-ar-solutions-fortune-500-leaders",
    title: "Custom AR solutions powering Fortune 500 leaders",
    industry: "Manufacturing & Industrial",
    tags: ["Backend", "Front-end"],
    client: "Industrial Global Tech",
    year: "2024",
    placeholderBg: "from-blue-700/20 via-indigo-700/20 to-violet-600/20",
    image: "/our-work/webp-format-images/Custom AR solutions powering Fortune 500 leaders.webp",
    summary: "The AgileEngine team contributes to AR-driven remote assistance tools used by global enterprises like Ford, Samsung, and Airbus. Our custom digital solutions help streamline workflows across manufacturing, warehousing, training, and inspection, enabling employees to access real-time, hands-free guidance in complex tasks.",
    overview: "Engineering AR tools for enterprise-grade remote assistance",
    challenge: "Rendering heavy 3D CAD assets on mobile devices without native app installation requirements.",
    solution: "Designed lightweight WebXR spatial tracking with web workers, offline caching engines, and cloud sync.",
    industriesList: ["SaaS", "Cloud", "Augmented reality", "Internet of Things"],
    servicesList: ["Backend development", "UI development", "Customization", "Architecture", "DevOps", "Feature development"],
    solutionsList: ["AR", "Enterprise application", "B2B application", "UI architecture", "Product architecture", "Integration", "System optimization"],
    aiTools: ["Microsoft Copilot"],
    outcomesHighlights: [
      "35+ remote experts added to the client's team within months, enabling the company to quickly reach development targets",
      "Ford, Samsung, Airbus, and more high-profile B2B clients impacted by our custom solutions and customizations"
    ],
    results: [
      "35+ remote experts added to the client's team within months, enabling rapid development target execution",
      "Ford, Samsung, Airbus, and more high-profile B2B clients impacted by our custom solutions",
      "3D spatial UI solutions deployed across high-demand industrial enterprise environments"
    ],
    technologies: ["JavaScript", "React.js", "Node.js", "AWS", "Go", "C++", "Unity 3D", "Redux", "Koa.js", "Kubernetes", "MongoDB", "PostgreSQL", "Keycloak", "RabbitMQ"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "AgileEngine embedded nearshore experts across the client's engineering teams to scale the development and customization of flagship AR-driven remote assistance products. The solutions we delivered have expedited major product releases while also enabling architecture-level improvements. Our team also led critical efforts in system deployments, custom integrations, and spatial UI development, ensuring enterprise-grade reliability, scalability, performance, and flexibility.",
        keyDeliverables: [
          "Onsite and offsite support covering deployments, migrations, and upgrades for B2B customers leveraging the AR tool",
          "Customizations necessary for the platform to meet the operational needs of a high-profile customer's Warehouse Management System (WMS)",
          "3D augmented reality and spatial UI solutions based on C++ and Unity 3D, allowing non-programmers to create and edit complex workflows",
          "Flagship product release preparation and continuous improvements in service stability",
          "Micro-frontend architecture proposed and implemented by our experts to enhance scalability and modularity"
        ],
        technologies: ["JavaScript", "React.js", "Node.js", "AWS", "Go", "C++", "Unity 3D", "Redux", "Koa.js", "Kubernetes", "MongoDB", "PostgreSQL", "Keycloak", "RabbitMQ"]
      }
    ],
    ctaHeadline: "Looking for a trusted technology partner?",
    ctaText: "We engage top-1% engineers, designers, and QA experts from across 4 continents to deliver custom digital solutions for fast-moving startups and Fortune 500 enterprises. We deliver on time, on budget, and with zero compromise on quality.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "16",
    slug: "enterprise-automation-airbus-xerox-vendor",
    title: "Scaling the enterprise automation products of an Airbus and Xerox vendor",
    industry: "Manufacturing & Industrial",
    tags: ["Design Studio", "Backend", "Front-end"],
    client: "Enterprise Supply Vendor",
    year: "2024",
    placeholderBg: "from-emerald-600/20 via-teal-600/20 to-blue-600/20",
    image: "/our-work/webp-format-images/Scaling-enterprise-automation-for-an-Airbus-and-Xerox-vendor-Redwood-768x539.webp",
    summary: "AgileEngine is partnering with a leader in lights-out automation to help streamline critical business processes for 3,000+ enterprises like Coca-Cola, Airbus, and Xerox. Our team accelerates high-impact initiatives, bringing engineering excellence to areas like migration tooling, DevOps automation, and core platform enhancements.",
    overview: "Enhancing core product capabilities through dedicated engineering expertise and strategic ownership",
    challenge: "Handling complex multi-tiered vendor approvals, heavy document verification pipelines, and legacy ERPs.",
    solution: "Built a micro-frontend architecture with intuitive dashboards, automated document processing, and audit trails.",
    industriesList: ["Software development", "Enterprise process automation", "Robotic process automation", "IT process automation", "Business process automation"],
    servicesList: ["Full-stack development", "DevOps", "QA and software testing"],
    solutionsList: ["Enterprise application", "Test strategy", "Cloud", "CI/CD"],
    outcomesHighlights: [
      "8.2/10 overall client satisfaction score",
      "Recognized in two internal hackathons, our QA team's solutions are now being deployed in production.",
      "The contributions we made helped the company win the SAP Pinnacle Award (2024), G2 Momentum Leader (Winter 2025), and Gartner Magic Quadrant Leader for SOAPs."
    ],
    results: [
      "8.2/10 overall client satisfaction score",
      "Helped company win SAP Pinnacle Award (2024), G2 Momentum Leader (Winter 2025), and Gartner Magic Quadrant Leader for SOAPs",
      "QA hackathon automation solutions deployed into production environments"
    ],
    technologies: ["Java", "TypeScript", "React", "C++", "AWS", "Kubernetes", "Docker Swarm", "Cypress", "Bamboo CI", "Jenkins CI"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "The remote experts provided by AgileEngine are embedded across the client's product ecosystem, contributing to key areas like frontend, backend, QA, DevOps, PM/PO, data, and AI. As our engagement progressed, the company got top-featured by Gartner and won several key industry awards while our team took ownership of more strategic initiatives. Namely, our experts built the migration tooling to accelerate the onboarding of enterprise customers.",
        keyDeliverables: [
          "Ownership and development of migration tooling",
          "QA automation strategy, including custom automation scripts for the client's proprietary platforms",
          "DevOps automation enhancements",
          "Integrations with multiple third-party providers",
          "Finance automation using Java and JavaScript",
          "Heavy SAP integrations on the backend",
          "File transfer solution",
          "Document archiving and retrieval solution"
        ],
        technologies: ["Java", "TypeScript", "React", "C++", "AWS", "Kubernetes", "Docker Swarm", "Cypress", "Bamboo CI", "Jenkins CI"]
      }
    ],
    ctaHeadline: "Ready to supercharge your business?",
    ctaText: "Engage top-1% software talent trusted by Fortune 500 firms and VC startups across 17+ industries. Book a personalized consultation to determine which engagement models and destinations best fit your project goals.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "17",
    slug: "hotspot-cover-insurtech-high-risk-travel",
    title: "Hotspot Cover: InsurTech solutions for high-risk travel",
    industry: "Insurance",
    tags: ["Design Studio", "Backend", "Front-end"],
    client: "Hotspot Cover UK",
    year: "2024",
    placeholderBg: "from-amber-600/20 via-orange-600/20 to-red-600/20",
    image: "/our-work/webp-format-images/Hotspot Cover InsurTech solutions for high-risk travel Comment end.webp",
    summary: "Hotspot Cover is a Lloyd's-backed insurance brand providing coverage for individuals and organizations traveling to dangerous and remote regions. The company's 24/7 emergency medical support, crisis response, and evacuation services ensure peace of mind for travelers. AgileEngine developed solutions that make these services available as white-label offerings, in addition to streamlining policy creation and enabling the rapid creation of new insurance products.",
    overview: "Optimizing architecture, automation, and admin tools",
    challenge: "Dynamic risk scoring APIs and multi-currency payment processing required instantaneous response times.",
    solution: "Created a responsive Web UI, real-time risk index map integration, and policy issuance engine.",
    industriesList: ["InsurTech", "FinTech"],
    servicesList: ["Full-stack development", "UX/UI design"],
    solutionsList: ["Product architecture", "Web application", "Enterprise application", "Administration tool"],
    outcomesHighlights: [
      "Our experts fully built the client's admin panel and CMS solutions in 3.5 months.",
      "The further expansion of our solutions to support the client's new insurance product took only 1.5 months.",
      "The new CMS allows insurance pricing to be updated in just 5 minutes, whereas the client's legacy solution took up to a week.",
      "The OpCover customer-facing website and quote creation functionality were showcased at an industry exhibition as an example of advanced insurance capabilities.",
      "The project received a perfect 10/10 client satisfaction score."
    ],
    results: [
      "Admin panel and CMS solutions fully built in 3.5 months",
      "Insurance pricing update time cut from 1 week to just 5 minutes",
      "Perfect 10/10 client satisfaction score"
    ],
    technologies: ["TypeScript", "Prisma", "Next.js", "Figma", "Webflow", "Stripe"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "The insurance administration solution we built supports the client's high-risk travel policies and its newly launched product for medical tourism, OpCover. The solution features a fully integrated CMS with deep customization for admin users, allowing for real-time control over policy pricing, commissions, and partner configurations. By leveraging a domain-driven architecture, we made sure the solution streamlines the client's white-labeling services, enabling the company to rapidly launch new branded products.",
        keyDeliverables: [
          "Scalable insurance admin panel and CMS solutions architected, implemented, and integrated with the client's user-facing websites",
          "Features specific to the client's medical tourism insurance product added to the admin and CMS",
          "White label support allowing for deep customization without introducing changes to the core system",
          "Domain-driven architecture enabling the application to scale and handle increasing complexity resulting from the addition of new white label products",
          "Onboarding of multiple white label partners with the development of solutions tailored to diverse customer segments",
          "Robust backend solutions enabling flexible policy creation and management functionality",
          "Dynamic commission structures catering to different roles (e.g., brokers, affiliates), ensuring accurate automated calculations",
          "Additional coverage options integrated to enhance policy offerings",
          "Customer-facing website design covering five resolutions: from full-screen to tablet and mobile"
        ],
        technologies: ["TypeScript", "Prisma", "Next.js", "Figma", "Webflow", "Stripe"]
      }
    ],
    ctaHeadline: "Looking for a trusted technology partner?",
    ctaText: "Our top-1% software experts have delivered 290+ successful solutions for startups and Fortune 500s across 17+ industries. Whatever your tech challenge, we've got you covered.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "18",
    slug: "hipaa-compliant-ai-clinical-support",
    title: "HIPAA-compliant AI platform modernizing clinical support",
    industry: "Healthcare & Pharma",
    tags: ["AI Studio"],
    client: "Clinical AI Health",
    year: "2024",
    placeholderBg: "from-purple-700/20 via-violet-600/20 to-pink-600/20",
    image: "/our-work/webp-format-images/HIPAA-compliant-AI-platform-modernizing-clinical-support-Trovo-Health-1-1-768x539.webp",
    summary: "AgileEngine developed a custom AI copilot system for a fast-growing HealthTech startup that revolutionizes the patient management space. Engaging our team has enabled the startup to maximize the runway created by a recent seed funding round while adding a business-critical HIPAA-compliant solution to its platform.",
    overview: "Building a secure health copilot system",
    challenge: "Ensuring absolute medical accuracy, zero hallucination in clinical summaries, and HIPAA compliance.",
    solution: "Engineered a closed-domain RAG pipeline backed by vetted medical journals and real-time doctor verification UI.",
    industriesList: ["Artificial intelligence", "HealthTech", "Healthcare", "B2B"],
    servicesList: ["AI engineering", "Data engineering", "Full-stack development"],
    solutionsList: ["AI", "Machine learning models", "Predictive analytics"],
    aiTools: ["OpenAI GPT models", "Claude", "Cursor"],
    outcomesHighlights: [
      "Adopted by 150+ hospital units across North America",
      "Saved physicians an average of 1.8 hours of paperwork daily",
      "Achieved 99.4% agreement rate with expert panel evaluations"
    ],
    results: [
      "Adopted by 150+ hospital units across North America",
      "Saved physicians an average of 1.8 hours of paperwork daily",
      "Achieved 99.4% agreement rate with expert panel evaluations"
    ],
    technologies: ["NLP (Natural Language Processing)", "LLMs (Large Language Models)", "RAG (Retrieval-Augmented Generation)", "Open-source models", "AWS", "TypeScript", "Python", "OpenAI"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "AgileEngine built a custom solution that automates and optimizes daily tasks, providing assistance for documentation, decision-making, diagnostics, and treatment planning. The system integrates with diverse healthcare data sources while ensuring strict compliance with data privacy and security standards. Additionally, our full-stack engineering team contributed to the platform's backend and frontend, delivering seamless user experience and performance.",
        keyDeliverables: [
          "AI-driven platform enhancing healthcare providers' capabilities",
          "LLM APIs enabling natural language recognition and context-aware recommendations",
          "Prompt engineering for tailored LLM responses, improving clarity, tone, and relevance in clinical contexts",
          "Real-time, accurate medical knowledge retrieval using RAG",
          "Predictive models development",
          "Integration of diverse healthcare data sources"
        ],
        technologies: ["NLP (Natural Language Processing)", "LLMs (Large Language Models)", "RAG (Retrieval-Augmented Generation)", "Open-source models", "AWS", "TypeScript", "Python", "OpenAI"]
      }
    ],
    ctaHeadline: "Ready to transform healthcare with AI?",
    ctaText: "Let's talk! We build AI solutions that enhance decision-making, streamline operations, and drive better outcomes — all while ensuring top-tier security and compliance.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "19",
    slug: "energy-management-agentic-ai",
    title: "Streamlining energy management with agentic AI",
    industry: "Energy & Resources",
    tags: ["AI Studio", "Data Studio"],
    client: "EcoGrid Solutions",
    year: "2024",
    placeholderBg: "from-emerald-500/20 via-teal-600/20 to-cyan-700/20",
    image: "/our-work/webp-format-images/Streamlining-energy-management-with-agentic-AI-ClearCurrent-768x539.webp",
    summary: "Our client provides AI-driven energy management solutions that help organizations navigate the complexities of energy contracts, tariffs, and invoices. At the core of these tools is an automation, auditing, and forecasting platform developed in collaboration with AgileEngine and based on cutting-edge technology like agentic AI.",
    overview: "Transforming energy procurement and billing management",
    challenge: "Orchestrating hundreds of IoT sensors and actuators across multi-tenant buildings in real-time.",
    solution: "Deployed multi-agent reinforcement learning control pipelines with predictive load balancing.",
    industriesList: ["Artificial intelligence", "Energy management", "B2B", "SaaS"],
    servicesList: ["AI engineering", "Data engineering", "Backend development", "Frontend development", "DevOps", "UI development"],
    solutionsList: ["AI", "AI agent", "Machine learning models", "Data pipeline", "Data visualization", "UI"],
    outcomesHighlights: [
      "In just two months, our team took the project from greenfield to the first release, enabling the client to rapidly market-test the new solution.",
      "Our starter lead shaped the project from day one, providing the client with strategic consultancy on architecture and technology."
    ],
    results: [
      "Greenfield to initial market release delivered in just 2 months",
      "Strategic architecture consultancy provided from day one by our tech leads",
      "Significant operational cost reduction and enhanced UX across energy billing management"
    ],
    technologies: ["TypeScript", "React.js", "Vite", "MobX", "MUI", "Leaflet", "jsPDF", "ESLint", "Vitest", "Python", "Django", "Django REST Framework (DRF)", "PostgreSQL", "Celery", "Docker", "Pytest", "GCP (Google Cloud Platform)", "Redis", "Obsidian", "Terraform", "GitHub Actions", "OCR (Optical Character Recognition)", "LLMs (Large Language Models)"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "Our work encompassed AI development, backend optimization, frontend enhancements, and cloud deployment to ensure scalability, accuracy, and transparency in energy procurement and billing management. The solutions we delivered helped the client reduce operational costs, enhance UX, and scale effortlessly to accommodate growing customer adoption.",
        keyDeliverables: [
          "AI agent leveraging Gen AI, language recognition, computer vision, and custom analytics",
          "GCP-based cloud infrastructure with automated CI/CD pipelines and enhanced system security",
          "Interactive dashboard for users to manage energy invoices, review AI-generated insights, and take corrective actions",
          "Document processing system for handling diverse energy contract and invoice formats",
          "Flexible calculation framework that adapts to different invoice structures for accurate cost validation",
          "Standardized code generation, improving maintainability, consistency, and accuracy"
        ],
        technologies: ["Python", "TypeScript", "React.js", "Vite", "MobX", "MUI", "Leaflet", "jsPDF", "ESLint", "Vitest", "Django", "Django REST Framework (DRF)", "PostgreSQL", "Celery", "Docker", "Pytest", "GCP (Google Cloud Platform)", "Terraform", "GitHub Actions"]
      }
    ],
    ctaHeadline: "Ready to build AI solutions that make an impact?",
    ctaText: "AgileEngine helps companies across 15+ industries harness AI to streamline operations, optimize decision-making, and drive innovation at a fraction of the cost of building in-house.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "20",
    slug: "predictive-maintenance-evs",
    title: "AI/ML-powered predictive maintenance for tens of thousands of EVs",
    industry: "Manufacturing & Industrial",
    tags: ["AI Studio"],
    client: "NextDrive Mobility",
    year: "2024",
    placeholderBg: "from-purple-500/20 via-blue-600/20 to-indigo-700/20",
    image: "/our-work/webp-format-images/AI-ML-powered predictive maintenance for tens of thousands of EVs.webp",
    summary: "AgileEngine creates custom AI and data solutions for an AI startup launched in collaboration with a top-5 luxury car brand featured on the Fortune Global 500 list. The main focus of this collaboration is an ML-as-a-service platform streamlining electric vehicles manufacturing and maintenance. Our team helped ensure that the core AI/ML systems underlying the platform can reliably predict vehicle failures with unparalleled accuracy.",
    overview: "Bringing AI to EV manufacturing",
    challenge: "Processing 2.5 billion telemetry data points daily and providing actionable maintenance alerts.",
    solution: "Built Apache Kafka streaming analytics coupled with anomaly detection neural networks and manager dashboards.",
    industriesList: ["Automotive", "Manufacturing", "Big data", "Artificial intelligence", "Machine learning", "Internet of things"],
    servicesList: ["Full-stack development", "Data engineering", "AI engineering", "QA and software testing", "UX/UI design", "UI development"],
    solutionsList: ["Predictive maintenance", "AI/ML library", "Machine Learning models", "Data pipeline", "Data visualization"],
    outcomesHighlights: [
      "AgileEngine has outperformed the client's previous remote development vendor, demonstrating higher levels of AI/ML, engineering, and industry expertise",
      "The AI solution we delivered predicts battery failures by analyzing vehicle telemetry, ensuring timely repairs and saving the client up to 95% on component guarantees"
    ],
    results: [
      "Outperformed previous vendor in AI/ML, engineering, and industry domain expertise",
      "Battery failure prediction from telemetry saving client up to 95% on component guarantees",
      "ML library powering analytics for tens of thousands of electric vehicles"
    ],
    technologies: ["Python", "AWS", "AWS Sagemaker", "AWS Glue", "MWAA", "Redshift", "PostgreSQL", "Node.js", "GraphQL", "Serverless Framework", "Prisma ORM", "DBT", "Terraform", "TypeScript", "React.js", "Vite"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "The key solution delivered by our AI and data teams is a machine learning library that powers analytics and automation workflows for tens of thousands of electric cars. Based on a vast and textured dataset covering millions of vehicle scenarios, this solution enables our client to improve quality control and optimize repairs.",
        keyDeliverables: [
          "Machine learning library capturing and analyzing vehicle data",
          "Pipelines for the extraction, loading, and transformation of millions of vehicle telemetry records",
          "Information management and visualization application",
          "Design and deployment of the infrastructure required by Machine Learning models",
          "Data visualization enabling the deep analysis of individual vehicles and automotive fleets",
          "Alert system enabling the prediction of vehicle failures",
          "Built-in analysis tool reducing the manufacturers' QA time by up to 90%",
          "End-to-end software testing",
          "UX/UI design improvements"
        ],
        technologies: ["Python", "AWS", "AWS Sagemaker", "AWS Glue", "MWAA", "Redshift", "PostgreSQL", "Node.js", "GraphQL", "Serverless Framework", "Prisma ORM", "DBT", "Terraform", "TypeScript", "React.js", "Vite"]
      }
    ],
    ctaHeadline: "Drive your growth with technology expertise that powers 290+ successful digital products",
    ctaText: "Talk to our experts about your software challenges and explore the solutions we can offer.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "21",
    slug: "starz-ml-data-solutions-premium-tv-network",
    title: "Starz: ML and data solutions for a premium TV network",
    industry: "Marketing & Advertising",
    tags: ["AI Studio", "Data Studio"],
    client: "Starz Entertainment",
    year: "2024",
    placeholderBg: "from-indigo-600/20 via-purple-600/20 to-pink-500/20",
    image: "/our-work/webp-format-images/Starz ML and data solutions for a premium TV network.webp",
    summary: "A premium US television network reaching 28 million American households works with AgileEngine on business-critical data systems and experimental AI features. Our Data Studio experts modernized the company's data pipelines, introducing automation and standardization to core data engineering workflows. Thanks to our AI team, the company was able to rapidly develop proof-of-concept AI-driven MarTech while saving engineering costs.",
    overview: "Data pipeline modernization",
    challenge: "High churn rates after key show season finales and sub-optimal personal content recommendations.",
    solution: "Developed personalized recommendation algorithms, retention campaign triggers, and analytics dashboards.",
    industriesList: ["Digital media", "Entertainment", "Subscription"],
    servicesList: ["Data engineering", "AI engineering", "Backend development", "Modernization"],
    solutionsList: ["AI", "Predictive analytics", "Churn prediction", "Data pipeline", "Machine learning models", "AI integration"],
    outcomesHighlights: [
      "95% projected accuracy demonstrating that AI-driven churn prediction can significantly outperform traditional methods",
      "Up to 5X potential cost savings unlocked through improved retention compared to the average cost of acquiring new subscribers"
    ],
    results: [
      "95% projected accuracy demonstrating that AI-driven churn prediction outperforms traditional methods",
      "Up to 5X potential cost savings unlocked through improved subscriber retention",
      "Eliminated manual tasks and sped up issue resolution in data pipelines"
    ],
    technologies: ["Python", "SQL", "AWS Sagemaker", "AWS Batch", "AWS ECS", "AWS EMR", "XGBoost", "Bash", "Airflow", "Snowflake", "Tableau"],
    solutionsSections: [
      {
        title: "Data Studio & AI Studio",
        description: "Our Data Studio experts' work had a profound impact on the engineering workflows related to our client's migration to a new technology stack. The version control and a standardized process introduced by our team streamlined the client's data engineering pipelines, eliminating manual tasks and speeding up the detection and resolution of issues. With smarter automation in place, the company has seen significant improvements in data engineering speed and solutions reliability.",
        keyDeliverables: [
          "Development of a robust and reliable data engineering solution for the client's analytics teams",
          "Migration of critical data pipelines to a new technology stack and architecture",
          "Introduction of version control for the analytics projects, migrating and optimizing the data pipelines",
          "Automation of end-to-end processes that include extraction from external data sources and execution of ad hoc Python scripts as batch jobs"
        ],
        technologies: ["Python", "SQL", "Bash", "Airflow", "AWS Batch", "AWS ECS", "AWS EMR", "Snowflake", "Tableau"]
      }
    ],
    ctaHeadline: "Drive your growth with technology expertise that powers 290+ successful digital products",
    ctaText: "Talk to our experts about your software challenges and explore the solutions we can offer.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "22",
    slug: "funny-or-die-mobile-app-emmy-brand",
    title: "Funny or Die: mobile app revamp for an Emmy-winning brand",
    industry: "Media & Entertainment",
    tags: ["Mobile", "Backend", "Front-end"],
    client: "Funny Or Die Inc.",
    year: "2024",
    placeholderBg: "from-yellow-500/20 via-orange-600/20 to-red-600/20",
    image: "/our-work/webp-format-images/Funny or Die mobile app revamp for an Emmy-winning brand Comment end.webp",
    summary: "Funny Or Die needs no introduction. The company's off-the-wall comedy videos and feature films have won prestigious awards, including Emmy, Clio, the Golden Lion, and the Webby Awards. Funny Or Die engaged AgileEngine as an engineering consultancy to redesign its flagship app and develop several standalone web and Android solutions.",
    overview: "Bringing 100% funny content to mobile",
    challenge: "Buffering delays and outdated UI resulted in poor app retention among mobile viewers.",
    solution: "Engineered ultra-fast video player, personalized recommendation feed, and native iOS/Android client apps.",
    industriesList: ["Digital media", "Entertainment"],
    servicesList: ["Mobile development", "UI development", "Backend development", "R&D"],
    solutionsList: ["Mobile application", "Web application", "VR", "360-degree video", "Dashboard"],
    outcomesHighlights: [
      "Our redesign of the client's Android app increased its Google Play rating from 3.0 to 4.7 stars",
      "GeekWire featured one of the solutions we built as an App of the Week"
    ],
    results: [
      "Redesign of Android app increased Google Play rating from 3.0 to 4.7 stars",
      "GeekWire featured built solution as App of the Week",
      "Chromecast and experimental VR/360-degree video playback functionality successfully deployed"
    ],
    technologies: ["Java", "Kotlin", "C++", "Realm", "MVVM/Data binding", "Chromecast", "ExoPlayer", "OpenGL ES"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "AgileEngine redesigned and built the company's flagship app, helping Funny or Die expand its reach and improve engagement on Android. Our team also provided full-stack engineering support for the client's existing products and implemented experimental functionality like VR/360 video. The solutions delivered by our experts contributed to the remarkable growth of Funny Or Die's mobile presence.",
        keyDeliverables: [
          "Complete revamp of the Funny or Die app for Android featuring image galleries, articles, and a video browsing experience similar to YouTube",
          "Chromecast support helping bring Funny or Die videos to TV screens",
          "News Flash, a lightweight news app for Android",
          "Improvements for the Weather app for Android, including new features like the weather widget and multi-cities support",
          "UI and backend development support for the web version of Pitch, helping migrate parts of the app to a cross-platform iOS/Android stack (React Native)",
          "R&D services covering experiments with VR/360-degree video playback on Google Cardboard",
          "Video editing tool for Android"
        ],
        technologies: ["Java", "Kotlin", "C++", "Realm", "MVVM/Data binding", "Chromecast", "ExoPlayer", "OpenGL ES"]
      }
    ],
    ctaHeadline: "Want to build an award-winning app?",
    ctaText: "We turn bold ideas into pixel-perfect, scalable, and smooth digital products. Partner with our world-class engineers, AI specialists, and UX designers to boost your engineering ROI and product outcomes.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "23",
    slug: "omnichannel-martech-ecommerce-giant",
    title: "Omnichannel MarTech for an e-commerce giant",
    industry: "Retail & Ecommerce",
    tags: ["Quality Studio"],
    client: "Global Retail Enterprise",
    year: "2024",
    placeholderBg: "from-emerald-600/20 via-teal-600/20 to-cyan-600/20",
    image: "/our-work/webp-format-images/Omnichannel MarTech for an e-commerce giant.webp",
    summary: "We designed the system in close collaboration with the client's internal team, using RESTful principles and microservices to ensure scalability, maintainability, and performance. Our experts delivered the solutions following test-driven development, SCRUM, and continuous integration to establish and maintain an effective, frictionless product development process.",
    overview: "A/B testing at a scale of 87 million e-shoppers",
    challenge: "Broken marketing links and incorrect pricing display during flash sale push campaigns.",
    solution: "Created automated link verification, cross-browser campaign visual testing, and staging validation gates.",
    industriesList: ["E-commerce", "Advertising", "Digital marketplace", "Marketing"],
    servicesList: ["Full-stack development", "Software testing", "QA and software testing automation", "Mobile development"],
    solutionsList: ["Enterprise application solution", "API", "Data pipelines", "Test automation"],
    outcomesHighlights: [
      "Less than 100-millisecond overhead achieved for data processing",
      "Record-breaking Black Friday and Cyber Monday sales reported by the client through broader customer reach, contributing to 25% YoY growth",
      "4.1-star rating on Trustpilot, 4.2 stars on Influencer, and 9.6 stars on BritainReviews earned by the company thanks to UX improvements unlocked through A/B testing"
    ],
    results: [
      "Less than 100-millisecond overhead achieved for data processing",
      "Record-breaking Black Friday and Cyber Monday sales contributing to 25% YoY growth",
      "4.1-star rating on Trustpilot and 9.6 stars on BritainReviews through UX improvements"
    ],
    technologies: ["Java", "Scala", "Ruby", "HTML5", "Swift", "Objective-C", "JavaScript", "Apache Hive", "Sinatra", "Kafka", "Gatling", "SBT"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "We designed the system in close collaboration with the client's internal team, using RESTful principles and microservices to ensure scalability, maintainability, and performance. Our experts delivered the solutions following test-driven development, SCRUM, and continuous integration to establish and maintain an effective, frictionless product development process.",
        keyDeliverables: [
          "Architecture and full-stack development of an omnichannel A/B testing system with REST and microservices",
          "Data collection solutions interfacing with a data warehouse, leveraging stream processing, and keeping the overhead under 100 milliseconds per request",
          "Complete coverage with unit, performance, and UI tests for each part of the system"
        ],
        technologies: ["Java", "Scala", "Ruby", "HTML5", "Swift", "Objective-C", "JavaScript", "Apache Hive", "Sinatra", "Kafka", "Gatling", "SBT"]
      }
    ],
    ctaHeadline: "Want to build an award-winning app?",
    ctaText: "We turn bold ideas into pixel-perfect, scalable, and smooth digital products. Partner with our world-class engineers, AI specialists, and UX designers to boost your engineering ROI and product outcomes.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "24",
    slug: "vmware-product-aqa-cloud-computing",
    title: "VMware: product and AQA solutions for a leader in cloud computing",
    industry: "Technology & Software",
    tags: ["Design Studio", "Data Studio"],
    client: "VMware Inc.",
    year: "2024",
    placeholderBg: "from-sky-600/20 via-blue-700/20 to-indigo-800/20",
    image: "/our-work/webp-format-images/VMware product and AQA solutions for a leader in cloud computing.webp",
    summary: "A household name in cloud computing with an impressive network of 75,000 partners, VMware entrusts its flagship product and internal tools to AgileEngine. Our AQA experts ensured 90%+ testing coverage for the company's key solutions while our full-stack engineers modernized the UI architecture and feature set of VMware products.",
    overview: "UI architecture, AQA, and feature development",
    challenge: "Complex UI controls and inconsistent user workflows across disparate cloud management products.",
    solution: "Designed unified enterprise component design system and automated UI regression testing suites.",
    industriesList: ["Cloud computing", "Virtualization", "Cloud infrastructure", "Cloud management", "Cloud security", "Enterprise software", "Workforce management"],
    servicesList: ["Full-stack development", "UI development", "QA and software testing", "DevOps"],
    solutionsList: ["UI architecture", "B2B application", "Web application", "Mobile application", "Data visualization", "Test automation", "Dashboard", "CI/CD"],
    outcomesHighlights: [
      "Modular UI architecture streamlining and accelerating the engineering work of the client's internal teams",
      "Up to 30% faster time-to-market via automation solutions",
      "90%+ testing coverage achieved across multiple projects",
      "Critical vulnerabilities caught by our AQA team and reported to the client's security experts"
    ],
    results: [
      "Modular UI architecture streamlining internal engineering workflows",
      "Up to 30% faster time-to-market via test automation",
      "90%+ testing coverage achieved across multiple core projects"
    ],
    technologies: ["JavaScript", "TypeScript", "Angular", "Axios", "Clarity", "Nx", "CanJS", "JQuery", "PrimeNG", "Lodash", "Protractor", "Selenium", "Jest", "Jasmine", "Karma", "Python", "Pytest", "Jenkins", "TestRail", "Appium", "SCSS", "Node.js", "Express.js", "MySQL", "Redis", "Docker", "AWS", "Terraform", "Runway"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "AgileEngine has been a strategic vendor modernizing the UI and developing customer dashboards, data visualization, and cloud infrastructure for a product acquired by VMware. Post-acquisition, VMware expanded our full-stack development, testing automation, and CI/CD footprint to encompass more products and enterprise apps. Our experts also owned strategic technology migrations, future-proofing our client's technology platform.",
        keyDeliverables: [
          "Micro-frontend architecture and implementation of a flagship product as a single-page app (SPA)",
          "End-to-end and unit tests covering 1400+ product workflows",
          "Internal tool enabling order fulfillment, inventory management, enterprise and partner onboarding, SKU licensing, and more",
          "Service-template library used across multiple projects within the company",
          "Full-cycle development of a cross-platform edge network intelligence application",
          "Zero-touch branch deployment, automatic business policy, firmware updates, link performance monitoring, and capacity measurements",
          "Assistance in applications transition to cloud-native architectures, leveraging Kubernetes and containerized solutions",
          "Optimization of CI/CD pipelines, improving deployment efficiency and reliability across client projects"
        ],
        technologies: ["JavaScript", "TypeScript", "Angular", "Clarity", "Nx", "CanJS", "JQuery", "PrimeNG", "Lodash", "Protractor", "Selenium", "Jest", "Jasmine", "Karma", "SCSS", "Node.js", "Express.js", "Axios", "MySQL", "Redis", "Docker", "AWS", "Terraform", "Runway"]
      },
      {
        title: "Quality Studio",
        description: "Our QA/AQA deliverables cover multiple client-facing and enterprise solutions enabling cloud orchestration, cloud web security, and edge network intelligence. From testing automation and CI/CD to custom solutions — the AgileEngine team ensured healthy releases, speeding up our client's time-to-market.",
        keyDeliverables: [
          "QA automation accelerating the company's time-to-market by an estimated 30%",
          "90%+ test coverage for the company's cloud orchestrator product",
          "95%+ coverage with unit tests for an internal tool used by multiple teams within the company",
          "Performance and accessibility testing with exhaustive reporting and dashboards",
          "Stabilization of QA tests",
          "Development of contract automation tests",
          "Networking test automation, reducing manual effort and improving test coverage and reliability",
          "New Python scripts for CI/CD",
          "Introduction of Jenkins to streamline the delivery pipelines and releases"
        ],
        technologies: ["Python", "Pytest", "Selenium", "JavaScript", "TypeScript", "Protractor", "Docker", "Angular", "Axios", "Jenkins", "TestRail", "Appium", "Jasmine", "Jest", "Karma"]
      },
      {
        title: "Design Studio",
        description: "The AgileEngine team migrated the company's products to a new UI technology stack and architecture, making them more modular and flexible. Following the migration, our experts have been driving the development of new features while coordinating their efforts with the company's internal engineering teams.",
        keyDeliverables: [
          "Micro-frontend architecture for a Secure Access Service Edge solution",
          "Redesign of the web UI of a networking product as a single-page application (SPA), with 90% of the functionality migrated to a new UI technology",
          "Engineering support for the client's legacy web UI solutions",
          "UI development of new features across multiple products",
          "UX improvements covering main user workflows"
        ],
        technologies: ["JavaScript", "TypeScript", "Angular", "Clarity", "Nx", "CanJS", "JQuery", "SCSS", "Node.js", "Express.js"]
      }
    ],
    ctaHeadline: "Want to build an award-winning app?",
    ctaText: "We turn bold ideas into pixel-perfect, scalable, and smooth digital products. Partner with our world-class engineers, AI specialists, and UX designers to boost your engineering ROI and product outcomes.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "25",
    slug: "techstyle-ui-architecture-ecommerce-tools",
    title: "TechStyle: UI architecture, DevOps, and custom e-commerce tools",
    industry: "Retail & Ecommerce",
    tags: ["Mobile", "Backend", "Front-end"],
    client: "TechStyle Fashion Group",
    year: "2024",
    placeholderBg: "from-pink-500/20 via-rose-600/20 to-purple-600/20",
    image: "/our-work/webp-format-images/TechStyle UI architecture, DevOps, and custom e-commerce tools Comment end.webp",
    summary: "An omnichannel retail company with 5 million subscribers, TechStyle Fashion Group is renowned for its collaborations with A-list celebrities like Rihanna and Kate Hudson. What really sets TechStyle apart, though, is its end-to-end technology platform that enables the rapid creation of online brands based on market data. Our experts modernized this platform, making it much more scalable and versatile.",
    overview: "360-degree solutions for digital commerce",
    challenge: "Monolithic frontend architecture struggled to handle high traffic volume during celebrity brand launches.",
    solution: "Implemented Next.js micro-frontends, automated Kubernetes scaling, and streamlined 1-click mobile checkout.",
    industriesList: ["E-commerce", "Retail", "Fashion", "Lifestyle"],
    servicesList: ["UI development", "Full-stack development", "UX/UI design", "DevOps", "QA and software testing"],
    solutionsList: ["UI architecture", "Web application", "CI/CD"],
    outcomesHighlights: [
      "Delivered under a tight deadline, our UI solutions have been integral to the client's new celebrity collaboration",
      "Prior to engaging AgileEngine, the company had no in-house expertise in React or related technologies",
      "Our UI and DevOps solutions have become foundational in speeding up the future development of new features by the client's in-house team"
    ],
    results: [
      "UI solutions delivered under tight deadlines for major celebrity brand collaborations",
      "Introduced modern React expertise and decoupled UI architecture to the organization",
      "DevOps and codeless marketing tools established for global multi-brand management"
    ],
    technologies: ["React", "Redux", "Next.js", "Styled Components", "Jest", "Bitbucket", "Git Hooks", "Jenkins", "Prettier", "ESLint"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "AgileEngine's work with TechStyle began with the creation of a web application for a novel fashion brand. We've implemented the solution along with a UI component library reusable across our client's existing and future projects. Our engineers also integrated the company's app with third-party services, streamlining the checkout experience. AgileEngine also significantly enhanced TechStyle's operations by improving its DevOps solutions and enterprise software. We developed a suite of codeless tools scaling our client's marketing and customer support operations globally.",
        keyDeliverables: [
          "UI architecture and development of an e-commerce web application from scratch",
          "Responsive web design and development of new UI components",
          "Tools that enable non-engineers to manage languages, currencies, and content across multiple digital brands",
          "Integration with third-party services for checkout (e.g., Borderfree)",
          "DevOps: setting up reusable development processes",
          "Scalability improvements enabling the solution to support millions of users",
          "Automated testing and bug fixing"
        ],
        technologies: ["React", "Redux", "Next.js", "Styled Components", "Jest", "Bitbucket", "Git Hooks", "Jenkins", "Prettier", "ESLint"]
      },
      {
        title: "Future-ready UI rearchitecture",
        description: "Our experts revamped the UI systems of TechStyle by decoupling them from the existing monolithic architecture. Doing so allowed us to accelerate platform development, delivering critical solutions under tight deadlines. The more modular UI architecture has also enabled the client's internal team to build, improve, and test new products and features at a much faster pace.",
        keyDeliverables: [
          "Decoupling the UI from the company's existing monolithic architecture",
          "Comprehensive design system implementation",
          "New UI components, including the splash page, navbar, cart page, payment information, shipping information, checkout, and more"
        ],
        technologies: ["React", "Redux", "Next.js", "Styled Components", "Jest", "ESLint"]
      }
    ],
    ctaHeadline: "Want to build an award-winning app?",
    ctaText: "We turn bold ideas into pixel-perfect, scalable, and smooth digital products. Partner with our world-class engineers, AI specialists, and UX designers to boost your engineering ROI and product outcomes.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "26",
    slug: "top-ranking-healthcare-agency",
    title: "Top-ranking healthcare agency",
    industry: "Healthcare & Pharma",
    tags: ["Mobile", "Backend", "Front-end"],
    client: "Healthcare Agency Network",
    year: "2024",
    placeholderBg: "from-teal-500/20 via-cyan-600/20 to-blue-600/20",
    image: "/our-work/webp-format-images/Top-ranking healthcare agency.webp",
    summary: "AgileEngine played a key role in the digital transformation of a home healthcare agency ranking in the top 25% of the HomeCare Elite list. The company engaged our experts in the development of a comprehensive suite of mobile and web apps streamlining internal workflows like invoice management, scheduling, messaging, and more.",
    overview: "Transforming home care with web and mobile apps",
    challenge: "Long patient intake wait times and fragmented appointment booking systems across regional clinics.",
    solution: "Built unified web/mobile patient scheduling app with real-time specialist availability and WebRTC video consultations.",
    industriesList: ["HealthTech", "healthcare", "home care"],
    servicesList: ["Full-stack development", "Mobile development"],
    solutionsList: ["Web app", "Mobile app", "Enterprise tools", "Employee management", "Patient management", "Document management", "Practice management"],
    outcomesHighlights: [
      "Nearly a decade after the project start, all systems delivered by our team are still in use by the client"
    ],
    results: [
      "Nearly a decade after project start, all systems delivered are still in active daily use",
      "Comprehensive suite of web portals and cross-platform mobile apps deployed",
      "Streamlined employee scheduling, document tracking, e-forms, and messaging"
    ],
    technologies: [".NET", "C#", "ASP.NET MVC", "NHibernate", "Entity Framework", "TDD", "Knockout.js", "Angular.js", "React.js", "Node.js", "Switchvox", "Ionic", "SQL Server"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "The solutions delivered by our team cover nearly five decades worth of critical business processes, modernizing the experience for both patients and medical personnel. These solutions range from feature-rich web portals to mobile applications and leverage modern back-end and UI systems built from scratch by our full-stack engineers.",
        keyDeliverables: [
          "Client portal providing scheduling and invoice management functionality as well as real-time news updates relevant to each patient",
          "Employee portal that features a newsfeed and supports scheduling, document management, and knowledge assessment via quizzes",
          "Task and invoice management web portal for customers and home care specialists",
          "Cross-platform mobile app enabling scheduling, task management, and Twilio calls for the healthcare facilities personnel",
          "E-forms management, scheduling, and task management app for employees working outside the facilities",
          "iOS app for employee coordination",
          "Cross-platform mobile app for e-document tracking and management",
          "Web application that helps determine optimal schedules for employees based on their availability",
          "Messaging portal"
        ],
        technologies: [".NET", "C#", "ASP.NET MVC", "NHibernate", "Entity Framework", "TDD", "Knockout.js", "Angular.js", "React.js", "Node.js", "Switchvox", "Ionic", "SQL Server"]
      }
    ],
    ctaHeadline: "Want to build an award-winning app?",
    ctaText: "We turn bold ideas into pixel-perfect, scalable, and smooth digital products. Partner with our world-class engineers, AI specialists, and UX designers to boost your engineering ROI and product outcomes.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "27",
    slug: "food-delivery-solutions-4m-orders",
    title: "Food delivery solutions scaling to 4 million daily orders",
    industry: "Logistics & Delivery",
    tags: ["Mobile", "Backend", "Front-end"],
    client: "Global Delivery Tech",
    year: "2024",
    placeholderBg: "from-orange-500/20 via-amber-600/20 to-red-500/20",
    image: "/our-work/webp-format-images/Food delivery solutions scaling to 4 million daily orders.webp",
    summary: "The mobile and enterprise applications delivered by AgileEngine are integral to the growth strategy of a multinational food delivery network listed on Fortune 500 Europe. Our engineering and UX/UI experts played a key role in the architecture and development of a mobile app acquired by the network. Post-acquisition, our team focused on the development of internal tools streamlining the company's marketing efforts.",
    overview: "API and application development",
    challenge: "Extreme peak hour order volumes caused dispatch server bottlenecks and inaccurate ETA predictions.",
    solution: "Engineered event-driven microservices with Redis caching, dynamic driver route optimization, and live GPS map tracking.",
    industriesList: ["Delivery", "E-commerce", "Food Delivery", "Same Day Delivery"],
    servicesList: ["Full-stack development", "UI/UX design"],
    solutionsList: ["Mobile app", "UI architecture", "Web app", "Enterprise solution", "API"],
    outcomesHighlights: [
      "Our work on the client's application solidified its market position as a global leader in food delivery helping the company scale to 500,000+ restaurants",
      "The internal tools we've built simplify and automate our client's collaboration with promotion agencies in Canada, Europe, and Asia"
    ],
    results: [
      "Solidified market position as global leader scaling to 500,000+ restaurants",
      "Automated campaign management collaboration across promotion agencies in 70+ countries",
      "Flawlessly processed peak hour delivery traffic across major international markets"
    ],
    technologies: ["Java", "Python", "Ruby on Rails", "PostgreSQL", "JavaScript", "Angular", "React Native", "Redux", "CocoaPods", "React-native-maps", "Background-geolocation", "React-navigation", "HockeyApp", "Google Geocoding", "Lodash"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "The client engaged AgileEngine to add new features and ensure support for a wide range of web and mobile solutions. Our experts built the API, scheduling functionality, and a mobile-friendly single-page web app powering the company's core services. Further on, our engineering and design experts focused on internal mobile and web applications enabling the management of campaigns run by external promotion agencies.",
        keyDeliverables: [
          "Food delivery application architecture, design, and full-stack development",
          "Scheduling tool for the client's core food delivery service",
          "RESTful API backend",
          "Single-page application (SPA) for mobile devices",
          "Internal tool streamlining the entry, validation, and control of data while supporting multiple formats used by third-party promotion agencies"
        ],
        technologies: ["Java", "Python", "Angular", "JavaScript", "React Native", "Redux", "PostgreSQL"]
      },
      {
        title: "Internal app details",
        description: "The internal tool built by our full-stack development experts from the ground up streamlines our clients' collaboration with external promotion agencies. Designed to work internationally, the solution supports an extremely wide array of data formats, allowing the client to engage agencies across 70+ countries.",
        keyDeliverables: [
          "System architecture and core component implementation",
          "Geolocation, geotagging, and other maps-focused functionality providing granular vision into where the company's promotional materials are being distributed",
          "Scheduling and shift management solutions enabling the coordination of offline promotional activities",
          "Quality assurance and automated testing"
        ],
        technologies: ["React Native", "CocoaPods", "React-native-maps", "Background-geolocation", "HockeyApp", "Ruby on Rails", "PostgreSQL", "Google Geocoding"]
      }
    ],
    ctaHeadline: "Want to build an award-winning app?",
    ctaText: "We turn bold ideas into pixel-perfect, scalable, and smooth digital products. Partner with our world-class engineers, AI specialists, and UX designers to boost your engineering ROI and product outcomes.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "28",
    slug: "ai-driven-supply-chain-analytics",
    title: "AI-driven supply chain analytics leveraged by Fortune 500 brands",
    industry: "Logistics & Delivery",
    tags: ["Design Studio"],
    client: "Global Logistics Group",
    year: "2024",
    placeholderBg: "from-orange-500/20 via-amber-500/20 to-yellow-600/20",
    image: "/our-work/webp-format-images/AI-driven supply chain analytics leveraged by Fortune 500 brands.webp",
    summary: "One of AgileEngine's longest-running projects involves the strategic development and UI/UX design of a predictive supply chain analytics platform trusted by MSD, DSM, Dell, J&J, Bridgestone, and Pokémon. Our team played a major role in bringing the platform from a prototype to a patented AI/ML product top-listed by Gartner.",
    overview: "Predictive IoT analytics at scale",
    challenge: "Data clutter and fragmented legacy tools made it impossible for operators to quickly identify high-priority shipping delays.",
    solution: "Created a minimalist map-centric dashboard, custom UI component library, and intelligent alert priority system.",
    industriesList: ["Analytics", "Big data", "Artificial intelligence", "Machine learning", "Internet of things", "Supply chain", "Logistics"],
    servicesList: ["Full-stack development", "UI/UX design", "Data engineering", "QA and software testing", "Prototyping", "Customization"],
    solutionsList: ["Data visualization", "Data pipeline", "UI architecture", "B2B application", "Web application", "Test automation", "Dashboard"],
    outcomesHighlights: [
      "The platform we helped build has landed a top spot on the Gartner Market Guide as a leading supply chain analytics solution",
      "Our client has received a patent for an innovative approach to real-time big data collection and predictive analytics",
      "More than 30 high-profile B2B clients have been attracted thanks to the solutions we implemented"
    ],
    results: [
      "Top spot on Gartner Market Guide as leading supply chain analytics solution",
      "Patent granted for innovative real-time big data collection and predictive analytics",
      "Attracted 30+ high-profile B2B clients including Dell, J&J, and Bridgestone"
    ],
    technologies: ["AWS", "Java", "Spring", "Hibernate", "PostgreSQL", "Maven", "Gradle", "Angular", "Docker", "Kubernetes", "Kafka", "Ansible", "ELK stack", "Apache Superset", "Apache NiFi", "Apache Druid"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "The product that AgileEngine has been helping build and continually improve for nearly a decade packs impressive analytics capabilities. The platform gathers information from vehicle sensors, ports, weather stations, and satellites, processing 100,000+ IoT events per hour. Our work on this platform covers IoT data streaming architecture, end-to-end full-stack development and customizations, UX/UI design, software testing, and database optimizations.",
        keyDeliverables: [
          "High-load customer-facing system that tracks cargo and predicts its location and delivery time",
          "Processing, ML analytics, and visualization of real-time big data",
          "Infrastructure development and optimization of more than 700 microservices",
          "Assistance with establishing an effective software development process",
          "Software testing, including unit, integration, acceptance, functional, and regression testing"
        ],
        technologies: ["AWS", "Java", "Spring", "Hibernate", "PostgreSQL", "Maven", "Gradle", "Angular", "Docker", "Kubernetes", "Kafka", "Ansible", "ELK stack", "Apache Superset", "Apache NiFi", "Apache Druid"]
      }
    ],
    ctaHeadline: "Looking for a trusted technology partner?",
    ctaText: "We turn bold ideas into pixel-perfect, scalable, and smooth digital products. Partner with our world-class engineers, AI specialists, and UX designers to boost your engineering ROI and product outcomes.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "29",
    slug: "video-conferencing-saas-virgin-atlantic",
    title: "Video conferencing SaaS leveraged by Virgin and the Atlantic",
    industry: "Technology & Software",
    tags: ["Mobile", "Backend", "Front-end"],
    client: "SaaS Startup",
    year: "2024",
    placeholderBg: "from-sky-500/20 via-blue-600/20 to-teal-500/20",
    image: "/our-work/webp-format-images/Video conferencing SaaS leveraged by Virgin and the Atlantic.webp",
    summary: "A SaaS startup providing B2B video conferencing solutions to brands like the Atlantic, Virgin, and Rolling Stone engaged AgileEngine to enhance its flagship offering. The modernization and new video conferencing functionality delivered by our experts enabled the client to solidify and expand its market position.",
    overview: "High-impact deliverables in record time",
    challenge: "Modernizing a complex multi-platform video conferencing product while adding enterprise-grade features at speed.",
    solution: "Full-stack development, UX/UI, and data engineering spanning web, mobile, hardware, and third-party integrations.",
    industriesList: ["Video conferencing", "Workplace productivity", "Collaboration", "Enterprise software", "SaaS"],
    servicesList: ["Full-stack development", "UI development", "Mobile development", "Data engineering"],
    solutionsList: ["Video calls", "Web app", "Mobile app", "Data visualization", "Integrations", "UI architecture", "B2B application"],
    outcomesHighlights: [
      "Flagship video conferencing features delivered in under 10 months",
      "4.5-star rating on Capterra and the App Store",
      "Rapid product growth leading to a successful acquisition of the client's solution by a market leader in video conferencing. The new client continued engaging our experts post-acquisition"
    ],
    results: [
      "Flagship conferencing features delivered in under 10 months",
      "4.5-star rating on Capterra and the App Store",
      "Successful acquisition by a market leader in video conferencing"
    ],
    technologies: ["Scala", "Java", "PostgreSQL", "Redis", "Angular", "JavaScript", "HTML", "CSS", "C++", "Swift", "Kotlin", "AndroidX", "Backbone", "Vue.js", "Vuex", "Python", "BigQuery", "Elasticsearch", "Google Cloud Platform", "WebRTC", "Microsoft 365", "Flow", "Retrofit"],
    solutionsSections: [
      {
        title: "Video conferencing solutions",
        description: "The video conferencing solutions delivered within the scope of our engagement cover a wide range of complex, industry-leading technology. From purpose-built hardware and Dolby Voice support to WebRTC and AWS hyperscale cloud, these solutions ensure 'like you're there' quality for enterprise users.",
        keyDeliverables: [
          "Secure video conference meetings",
          "Video conferencing support for large numbers of participants",
          "SIP calls",
          "New in-meeting functionality and user experience enhancements",
          "Presentations, calls, and screen sharing on conference room devices",
          "Improved device synchronization during presentations and screen sharing",
          "Calendar add-ons for Google Calendar and Microsoft Office 365"
        ],
        technologies: ["JavaScript", "Vue.js", "Vuex", "Python", "Google Cloud Platform", "WebRTC", "Microsoft 365"]
      },
      {
        title: "Project overview",
        description: "AgileEngine's full-stack development, UX/UI, and data engineering experts have been collaborating closely with the client company's internal team, enhancing its digital and hardware capabilities. We developed high-impact conferencing functionality in record time, modernized the company's technology platform, improved UX across web and mobile, and implemented critical integrations with third-party tools and client APIs.",
        keyDeliverables: [
          "High-impact features like in-room presentations and customizable links that simplify sharing",
          "Video conferencing features like secure meetings, device synchronization, large group calls, etc.",
          "UI design system and documentation bringing consistency to component development",
          "UI migration from Vue 2 to Vue 3",
          "Modernization and enhancements of the customer analytics visualization solution",
          "Call categorization system design and development",
          "Integrations with external client APIs and 3rd-party solutions like Microsoft Exchange Server",
          "Android app: modernization, new features, and compliance with legal and Google requirements",
          "iOS and Android app localization"
        ],
        technologies: ["Scala", "Java", "PostgreSQL", "Redis", "Angular", "JavaScript", "HTML", "CSS", "C++", "Swift", "Kotlin", "AndroidX", "Backbone", "Vue.js", "Vuex", "Python", "BigQuery", "Elasticsearch", "Google Cloud Platform", "WebRTC", "Microsoft 365", "Flow", "Retrofit"]
      }
    ],
    ctaHeadline: "Want to build an award-winning app?",
    ctaText: "We turn bold ideas into pixel-perfect, scalable, and smooth digital products. Partner with our world-class engineers, AI specialists, and UX designers to boost your engineering ROI and product outcomes.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "30",
    slug: "job-search-website-ai-data-systems",
    title: "AI, data systems, and custom applications for the #1 job search website globally",
    industry: "Human Capital Management",
    tags: ["AI Studio", "Design Studio", "Quality Studio"],
    client: "Global Job Search Platform",
    year: "2024",
    placeholderBg: "from-purple-600/20 via-pink-600/20 to-indigo-600/20",
    image: "/our-work/webp-format-images/AI, data systems, and custom applications for the job search website globally.webp",
    summary: "The world's biggest job search platform engages AgileEngine to drive 15+ digital projects ranging from app modernization to the development of custom data and AI solutions. The impact of our work spans customer-facing web applications and enterprise tools that streamline procurement, knowledge sharing, and other internal processes.",
    overview: "User-facing and enterprise apps",
    challenge: "Managing 15+ parallel digital projects spanning AI, data engineering, QA, and UX without sacrificing quality or velocity.",
    solution: "Dedicated specialized teams covering AI engineering, data pipelines, accessibility, and enterprise tooling.",
    industriesList: ["Recruiting", "Human resources", "Search engines", "Advertising", "Workforce management", "Employee management", "Data analytics"],
    servicesList: ["Full-stack development", "Mobile development", "Software testing", "QA automation", "UX/UI design", "Data engineering", "Prototyping", "UI development", "DevOps", "AI engineering", "Architecture"],
    solutionsList: ["Enterprise application", "API", "Data pipeline", "Data governance", "Data visualization", "AI", "Machine learning models", "UI architecture", "Product architecture", "B2B application", "Web application", "Test automation", "UX/UI design"],
    aiTools: ["ChatGPT", "Cursor", "Copilot"],
    outcomesHighlights: [
      "15+ projects supported with dedicated app development, AI, data, UI/UX, and QA experts",
      "10x speed and 50% performance improvement yielded by data system rearchitecture",
      "Up to 75% reduction of in-house engineers' workloads",
      "1.5 months to fully build an API central to the modernization of a key enterprise tool",
      "Up to 95% test coverage achieved on projects"
    ],
    results: [
      "15+ projects supported simultaneously with dedicated specialists",
      "10x speed and 50% performance improvement from data system rearchitecture",
      "Up to 95% test coverage achieved"
    ],
    technologies: ["React.js", "Node.js", "Python", "Django", "Flask", "HTML5", "Selenium", "Vibranium", "Pytest", "JavaScript", "Webpack", "SQL", "Java", "Scala", "Hadoop", "HQL", "Apache Spark", "Airflow", "Docker", "Google BigQuery", "Snowflake", "MySQL", "Git", "Unix", "Salesforce"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "AgileEngine's deliverables cover chatbots, job search improvements, and solutions for candidate screening, virtual interviewing, resume management, reporting, and more. Our dedicated teams enabled the company to standardize user-facing design and UI technology and facilitated the release of business-critical functionality like virtual hiring. Leveraging our engineering services, the client was able to fully build an enterprise tool API in under 1.5 months and fully redesign another feature-rich internal tool.",
        keyDeliverables: [
          "Engineering support for 15+ products and internal tools, including a chatbot, scheduling, virtual interviews, advanced search, candidate screening, job application via SMS, and resume editor",
          "Request management tool covering 50+ flows related to procurement, marketing, etc.",
          "Virtual job fair application cutting time-to-hire for entry-level positions to roughly 2 hours",
          "Modular, extensible platform for sales and marketing reports fully redesigned from a Google Apps Script site to a custom solution integrated with Salesforce",
          "Automatically populated knowledge used by 4500+ of the client's employees",
          "Internal tool API built from the ground up in under 1.5 months",
          "Full WCAG AA compliance achieved for four projects"
        ],
        technologies: ["React.js", "Node.js", "Python", "Django", "Flask", "HTML5", "Selenium", "Vibranium", "Pytest", "JavaScript", "Webpack", "SQL", "Java", "Scala", "Hadoop", "HQL", "Apache Spark", "Airflow", "Docker", "Google BigQuery", "Snowflake", "MySQL", "Git", "Unix", "Salesforce"]
      }
    ],
    ctaHeadline: "Want to build an award-winning app?",
    ctaText: "We turn bold ideas into pixel-perfect, scalable, and smooth digital products. Partner with our world-class engineers, AI specialists, and UX designers to boost your engineering ROI and product outcomes.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "31",
    slug: "reporting-analytics-starbucks-obey",
    title: "Reporting, analytics, and performance management solutions vendor to Starbucks and Obey",
    industry: "Technology & Software",
    tags: ["Quality Studio"],
    client: "Business Analytics SaaS",
    year: "2024",
    placeholderBg: "from-emerald-600/20 via-green-600/20 to-teal-700/20",
    image: "/our-work/webp-format-images/Reporting, analytics, and performance management solutions vendor to Starbucks and Obey.webp",
    summary: "A business analytics and performance management SaaS trusted by Starbucks and Obey partnered with AgileEngine to overhaul its quality engineering strategy and deliver a modern embedded analytics platform recognized by Dresner.",
    overview: "Establishing unbeatable quality + embedded analytics solutions recognized by Dresner",
    challenge: "Outdated QA strategy causing slow releases and low test coverage across a complex BI platform.",
    solution: "Complete QA overhaul with test automation, BDD, and migration to a modern toolset, plus an embedded analytics platform.",
    industriesList: ["Accounting", "Analytics", "Business Intelligence", "Consulting"],
    servicesList: ["Full-stack development", "UI/UX design", "QA and software testing", "PM/PO"],
    solutionsList: ["Enterprise performance management", "Financial reporting", "Enterprise software"],
    outcomesHighlights: [
      "Test coverage maximized to 90%",
      "Total regression time reduced from 3 months to 3 weeks",
      "Automation ROI improved by 5 times",
      "Successful migration to a new QA toolset",
      "Embedded analytics platform built atop two existing products, delivered on time"
    ],
    results: [
      "Test coverage maximized to 90%",
      "Total regression time cut from 3 months to 3 weeks",
      "Automation ROI improved 5x"
    ],
    technologies: ["React", "TypeScript", "Redux", "Blueprint", "Apache ECharts", "AG Grid", "Java", "Spring Boot", "InVision", "Figma", "Jira", "Aha", "Scrum", "SAFe", "Selenium", "Maven", "Selenide", "TestNG", "Allure Report"],
    solutionsSections: [
      {
        title: "Quality Studio solutions",
        description: "Our QA team helped the company address crucial challenges caused by an outdated software quality strategy. We optimized manual and automated QA resources and sped up releases. Additionally, our experts facilitated metrics collection to provide a summary of current project health and boosted automation ROI.",
        keyDeliverables: [
          "Test coverage maximized to 90%",
          "Test management tool to collect metrics and build traceability between TCs and features",
          "Total regression time reduction from 3 months to 3 weeks",
          "Automation ROI improvement by 5 times",
          "Migration to a new QA toolset",
          "Integration testing implementation",
          "Performance test strategies implementation"
        ],
        technologies: ["Java", "Selenium", "Maven", "Selenide", "TestNG", "Allure Report"]
      },
      {
        title: "Project overview",
        description: "Our main contributions include solutions for binning and data staging, as well as the migration of the product to a modern architecture. The AgileEngine team also ensured the on-time delivery of a new embedded analytics platform built on top of the client's two existing products.",
        keyDeliverables: [
          "Package for embedding components into customers' applications",
          "Interactive and highly customizable dashboards with multiple BI features",
          "Public API for customers' usage in their applications on top of Embed API",
          "End-user-facing features, including new visualizations, theming and white-labeling, report scheduling, etc.",
          "Reporting apps enabling the creation and sharing of high-volume analysis",
          "Binning and data staging, database-agnostic access language, database-agnostic calculated expressions language",
          "Integration with data sources like Snowflake, Redshift, BigQuery, Salesforce, Oracle, MySQL, and SQLServer via JDBC",
          "Migration to a modern architecture"
        ],
        technologies: ["React", "TypeScript", "Redux", "Blueprint", "Apache ECharts", "AG Grid", "Java", "Spring Boot", "InVision", "Figma", "Jira", "Aha", "Scrum", "SAFe", "Selenium", "Maven", "Selenide", "TestNG", "Allure Report"]
      }
    ],
    ctaHeadline: "Want to build an award-winning app?",
    ctaText: "We turn bold ideas into pixel-perfect, scalable, and smooth digital products. Partner with our world-class engineers, AI specialists, and UX designers to boost your engineering ROI and product outcomes.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "32",
    slug: "agritech-platform-world-economic-forum",
    title: "AgriTech platform featured by the World Economic Forum",
    industry: "Agriculture",
    tags: ["Mobile", "Backend", "Front-end"],
    client: "WEF-Featured AgriTech",
    year: "2024",
    placeholderBg: "from-lime-600/20 via-emerald-600/20 to-yellow-600/20",
    image: "/our-work/webp-format-images/AgriTech platform featured by the World Economic Forum.webp",
    summary: "An AgriTech platform featured by the World Economic Forum engages AgileEngine across a wide range of web and mobile applications. The solutions developed by our team transform farming with IoT, AI, and data functionality like satellite imagery, soil analysis, and resources management.",
    overview: "Smart tech for sustainable, data-driven agriculture",
    challenge: "Delivering complex satellite imagery and IoT analytics to farmers across US, Canada, Brazil, and India.",
    solution: "Mobile and web apps with vehicle tracking, data visualization, Realm database, and continuous deployment.",
    industriesList: ["Agricultural technology AgriTech", "Digital agriculture", "Big data", "Analytics"],
    servicesList: ["Mobile development", "UI development", "QA and software testing"],
    solutionsList: ["Mobile application", "Web application", "Farm management", "Data visualization", "CI/CD", "Cloud", "B2B application"],
    outcomesHighlights: [
      "The AgriTech solutions developed by our team, popular among farmers in the US, Canada, and Brazil, contributed to the company's expansion into the Indian market",
      "4.6-star rating on the App Store and 4.6 stars on Precision AG Reviews earned by the apps we helped build"
    ],
    results: [
      "Market expansion from US, Canada, Brazil into India",
      "4.6-star rating on App Store and Precision AG Reviews",
      "Significant growth in engineering productivity enabling faster mission-critical releases"
    ],
    technologies: ["TypeScript", "React.js", "Node.js", "React Native", "React-router", "Redux", "Redux-Saga", "Redux-Persist", "Google Maps API", "Three.js", "MapBox", "Leaflet", "Realm", "Firebase", "Jest", "Git", "Python", "Django", "MySQL"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "Our experts contributed to the software engineering and QA/AQA workstreams, driving the development of complete apps and functionality like vehicle tracking, data visualization, and localization. The client reported significant growth in engineering productivity thanks to engaging AgileEngine, an improvement which enabled the company to ship mission-critical solutions faster, strengthening its market positions.",
        keyDeliverables: [
          "Web and mobile apps that provide soil analysis data to end-users",
          "Front-end development for a web application for satellite imagery and analysis",
          "Mobile UI development for an all-in-one farm management platform providing data on soil growth, rests, yield, and more",
          "Component architecture optimization and development of new components",
          "Working with Realm database for mobile",
          "Continuous deployment with regular app releases",
          "Map objects maintenance",
          "Mobile application testing (functional, regression)",
          "API testing (Charles, Swagger API)",
          "Test documentation"
        ],
        technologies: ["TypeScript", "React.js", "Node.js", "React Native", "React-router", "Redux", "Redux-Saga", "Redux-Persist", "Google Maps API", "Three.js", "MapBox", "Leaflet", "Realm", "Firebase", "Jest", "Git", "Python", "Django", "MySQL"]
      }
    ],
    ctaHeadline: "Want to build an award-winning app?",
    ctaText: "We turn bold ideas into pixel-perfect, scalable, and smooth digital products. Partner with our world-class engineers, AI specialists, and UX designers to boost your engineering ROI and product outcomes.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "33",
    slug: "ai-powered-adtech-adage-100",
    title: "AI-powered AdTech trusted by AdAge 100 brands",
    industry: "Marketing & Advertising",
    tags: ["AI Studio", "Data Studio", "Backend", "Front-end"],
    client: "Programmatic Advertising SaaS",
    year: "2024",
    placeholderBg: "from-indigo-600/20 via-purple-500/20 to-sky-500/20",
    image: "/our-work/webp-format-images/AI-powered AdTech trusted by AdAge 100 brands.webp",
    summary: "A programmatic advertising SaaS trusted by AdAge 100 brands like Microsoft, Audible, and Verizon leverages our engineering solutions to modernize its technology platform and products. The solutions introduced by AgileEngine bring enhanced performance and GenAI functionality to business-critical directions like campaign audit, analytics, and optimization.",
    overview: "Transforming AdTech with microservices, AI, and more",
    challenge: "Slow time-to-spend for incoming ad creatives and a monolithic architecture unable to handle premium publisher traffic spikes.",
    solution: "Microservices rearchitecture, ad audit system from scratch, and GenAI/ML solutions for optimization and categorization.",
    industriesList: ["AdTech", "Advertising", "Marketing", "B2B", "SaaS"],
    servicesList: ["AI engineering", "Data engineering", "Full-stack development", "UI development", "Backend development"],
    solutionsList: ["AI", "Data pipeline", "B2B application", "UI architecture", "Product architecture", "API", "System optimization"],
    outcomesHighlights: [
      "Time-to-spend for incoming creatives sped up from 2 days to 1 hour",
      "State-of-the-art algorithms unavailable on the AWS platform developed in-house"
    ],
    results: [
      "Time-to-spend for incoming creatives reduced from 2 days to 1 hour",
      "Monolith API replaced with microservices handling CNN/BBC/Buzzfeed-scale traffic",
      "In-house GenAI/ML models for ad optimization, categorization, and metadata generation"
    ],
    technologies: ["Python", "AWS", "Amazon Sagemaker", "Pytorch", "Golang", "TypeScript", "PHP", "Symfony", "Laravel", "Node.js", "Express.js", "React.js", "Angular.js", "Vue.js", "Java", "Spring", "CloudFormation", "Docker", "MySQL", "PostgreSQL", "Kafka", "RabbitMQ", "Elasticsearch", "Helm", "Chrome Headless", "MongoDB", "Grafana", "Prometheus", "Kubernetes"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "The ad audit application built by AgileEngine sped up the client's time-to-spend for incoming creatives from days to approximately one hour. Our engineers also rearchitected the company's core system and API, enabling it to handle traffic spikes at the scale of premium publishers like CNN, BBC, and Buzzfeed. Building on this foundation, our AI Studio introduced multiple solutions based on leading-edge GenAI and ML technologies like RAG, LMMs, computer vision, and more.",
        keyDeliverables: [
          "Advertisement audit system implemented from scratch, reducing the time-to-spend for incoming creatives",
          "GenAI and ML solutions for ad optimization, categorization, metadata generation, and more",
          "Ad audit app UI and other web applications built from scratch with a focus on extensibility and scalability",
          "Main API decentralization into microservices replacing a monolithic legacy architecture and enabling more effective management of traffic spikes",
          "Features for backend microservices written in PHP, Node.js, and Java",
          "Flagship web app migration from Angular.js to React.js",
          "Company-wide standard for technical specifications reducing scope creep",
          "Driving the client's product from a prototype to a stable release"
        ],
        technologies: ["Python", "AWS", "Golang", "TypeScript", "PHP", "Symfony", "Laravel", "Node.js", "Express.js", "React.js", "Angular.js", "Java", "Spring", "Docker", "MySQL", "PostgreSQL", "Kafka", "RabbitMQ", "Kubernetes"]
      },
      {
        title: "AI Studio deliverables",
        description: "The AI/ML systems delivered by AgileEngine utilize object detection models and image clustering algorithms, bringing computer vision to ad analytics and optimization. Our experts took ownership of model design, training, and optimization while also handling the infrastructure needed to run AI/ML tools.",
        keyDeliverables: [
          "Computer vision models detecting overlaid graphics and text, clustering images belonging to the same scene, and searching for specific objects in videos",
          "RAG (Retrieval Augmented Generation) service leveraging LMMs (Large Multimodal Models) and embeddings to categorize web ads based on the IAB Ad Product Taxonomy",
          "Proof-of-concept pipelines for connected TV content analysis complete with recognition of emotion from speech, audio tagging, and facial analysis",
          "In-house AI/ML models training, optimization, and deployment with R&D experiments involving state-of-the-art models leveraging the AWS infrastructure",
          "In-house dataset manager and evaluation pipelines supported by MySQL and Github Actions, expediting AI solutions development",
          "PoC of a markers system storing diverse data extracted from video content, enabling flexible querying and search",
          "Data cleaning and labeling — including the dedicated processing of Spanish language content yielding focused datasets used in the markers system",
          "Collaboration with the client's product team on planning and the architecture/design of machine learning solutions",
          "Design and analysis of metrics for the evaluation of product features and their impact"
        ],
        technologies: ["Python", "Amazon Sagemaker", "Pytorch", "AWS", "MySQL", "MongoDB", "Grafana", "Prometheus", "Elasticsearch"]
      }
    ],
    ctaHeadline: "Want to build an award-winning app?",
    ctaText: "We turn bold ideas into pixel-perfect, scalable, and smooth digital products. Partner with our world-class engineers, AI specialists, and UX designers to boost your engineering ROI and product outcomes.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "34",
    slug: "flagship-product-france-most-funded-startup",
    title: "Enhancing the flagship product of the most-funded startup in France",
    industry: "Logistics & Delivery · Retail & Ecommerce",
    tags: ["Backend", "Front-end"],
    client: "France's Most-Funded Startup",
    year: "2024",
    placeholderBg: "from-blue-600/20 via-indigo-600/20 to-teal-500/20",
    image: "/our-work/webp-format-images/Enhancing the flagship product of the most-funded startup in France.webp",
    summary: "The most-funded startup in France engaged our nearshore software engineers to extend its runway while scaling and modernizing its core digital platform. Our collaboration with the company exceeded the traditional remote team extension model. While working with the startup, our full-stack engineers introduced architecture-level improvements and business-critical features fueling its expansion to new geos and a new business model.",
    overview: "Rapid food delivery at a massive scale",
    challenge: "Scaling a food delivery platform from local French operations to multi-country, multi-model B2B expansion.",
    solution: "High-load delivery system, architecture enhancements, B2B admin panel, and personalized recommendations engine.",
    industriesList: ["Delivery", "E-commerce", "Food delivery", "Same day delivery", "Logistics"],
    servicesList: ["Full-stack development", "UI development", "CI/CD"],
    solutionsList: ["Enterprise application", "Web application", "B2B application", "Dashboard", "Cloud", "Personalization", "Product recommendations"],
    outcomesHighlights: [
      "The enhanced platform enabled our client to scale beyond their local market, launching operations in other countries",
      "The administrative solutions delivered by our team enabled a shift from the B2C operations, streamlining our client's adoption of the B2B model",
      "Thanks to a more performant technology platform and improved UX, the company saw an increase in traffic from customers"
    ],
    results: [
      "Platform scaled to international markets beyond France",
      "B2B model adoption streamlined via new admin solutions",
      "Significant increase in customer traffic from improved platform performance"
    ],
    technologies: ["Node.js", "Koa.js", "React.js", "Redux", "Elasticsearch", "PostgreSQL", "Sequelize", "Docker", "Jenkins"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "The solution our experts worked on caters to foodies and fans of healthy food with a platform enabling fast delivery of affordable meals. AgileEngine created a high-load delivery system connecting this platform to thousands of restaurants in France and the EU. This system enables order processing and distribution, calculates optimal delivery routes, and suggests personalized product offers based on user history and preferences.",
        keyDeliverables: [
          "High-load delivery system that handles order processing and distribution between kitchens across city districts and calculates routes for couriers",
          "Full-cycle development of the client's flagship product",
          "Architecture enhancements for the client's existing product and the development of new features",
          "B2B admin panel for restaurants",
          "Personalized recommendations algorithm and solution",
          "UI services for back office workers",
          "Order packaging optimization solution"
        ],
        technologies: ["Node.js", "Koa.js", "React.js", "Redux", "Elasticsearch", "PostgreSQL", "Sequelize", "Docker", "Jenkins"]
      }
    ],
    ctaHeadline: "Want to build an award-winning app?",
    ctaText: "We turn bold ideas into pixel-perfect, scalable, and smooth digital products. Partner with our world-class engineers, AI specialists, and UX designers to boost your engineering ROI and product outcomes.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "35",
    slug: "cybersecurity-platform-qa-nbc-crn",
    title: "QA for a cybersecurity platform featured by NBC and CRN",
    industry: "Technology & Software",
    tags: ["Quality Studio"],
    client: "US Cybersecurity Accelerator",
    year: "2024",
    placeholderBg: "from-teal-600/20 via-cyan-600/20 to-blue-700/20",
    image: "/our-work/webp-format-images/QA for a cybersecurity platform featured by NBC and CRN.webp",
    summary: "Our client is America's premier market-centric cybersecurity accelerator featured by The Washington Post, NBC, and CRN and recognized as an Oracle Partner Network Silver-level member. The company automates cybersecurity and compliance workflows via a powerful incident response platform. Our QA/AQA experts helped ensure that this platform and our client's other digital products meet and exceed the high standards of the cybersecurity industry.",
    overview: "BDD and full QA coverage introduced from scratch",
    challenge: "No existing testing strategy or automated coverage for a high-stakes cybersecurity incident response platform.",
    solution: "Full QA strategy, manual test cases, and automated tests built from scratch with BDD and CI/CD integration.",
    industriesList: ["Cybersecurity", "B2B", "SaaS", "Cloud security", "Enterprise software"],
    servicesList: ["QA and software testing"],
    solutionsList: ["Test strategy", "Test automation", "CI/CD"],
    outcomesHighlights: [
      "After engaging our team, the company won multiple awards — including a Network Products Guide IT World Award and a Golden Bridge Award — and was recognized as a Red Hot Cyber company",
      "In addition to taking ownership of the company's software testing efforts, our experts helped improve the collaboration between its development, QA, and management teams"
    ],
    results: [
      "Won Network Products Guide IT World Award, Golden Bridge Award, and Red Hot Cyber recognition",
      "Complete QA process built from scratch covering all business-critical functionality",
      "Improved collaboration between development, QA, and management teams"
    ],
    technologies: ["Selenium", "Protractor", "Puppeteer", "Watir", "Appium", "Jasmine", "Cucumber", "SpecFlow", "Jenkins", "TeamCity", "CircleCI", "C#", "Ruby", "JavaScript"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "While working with the client, our QA team developed the company's testing strategy, manual testing cases, and automated tests from scratch, fully covering all business-critical functionality. Our engagement with the client spans backend, API, and UI testing and focuses on behavior-driven development integrated with a streamlined continuous integration process.",
        keyDeliverables: [
          "Development and implementation of the complete software testing process",
          "Manual test cases for core applications and automated tests written from scratch",
          "Functional and non-functional testing",
          "UI, backend, API, and mobile testing"
        ],
        technologies: ["Selenium", "Protractor", "Puppeteer", "Watir", "Appium", "Jasmine", "Cucumber", "SpecFlow", "Jenkins", "TeamCity", "CircleCI", "C#", "Ruby", "JavaScript"]
      }
    ],
    ctaHeadline: "Want to build an award-winning app?",
    ctaText: "We turn bold ideas into pixel-perfect, scalable, and smooth digital products. Partner with our world-class engineers, AI specialists, and UX designers to boost your engineering ROI and product outcomes.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "36",
    slug: "modern-ux-ui-hr-screening-platform",
    title: "Modern UX/UI for a fast-growing HR screening platform",
    industry: "Human Capital Management",
    tags: ["Design Studio"],
    client: "Verified First",
    year: "2024",
    placeholderBg: "from-pink-500/20 via-rose-500/20 to-purple-600/20",
    image: "/our-work/webp-format-images/Modern UXUI for a fast-growing HR screening platform.webp",
    summary: "Ranking among the fastest-growing US businesses featured on the Inc. 5000 list, Verified First improves hiring outcomes for enterprises. The company's SaaS platform provides convenient access to thousands of drug screening facilities, minimizes paperwork, and speeds up background verification. Our team introduced strategic improvements to the UX/UI of this platform, making it more modern and intuitive.",
    overview: "Prototype, information architecture, and UX improvements",
    challenge: "An outdated HR platform UX creating friction across complex policy training, ticket management, and misconduct reporting flows.",
    solution: "Lean UX-driven redesign of information architecture, prototype for anonymous reporting, and streamlined policy management UI.",
    industriesList: ["Human resources", "SaaS", "B2B", "Workforce management", "Employee management", "Enterprise software"],
    servicesList: ["UX/UI design", "Prototyping"],
    solutionsList: ["Information architecture", "Enterprise application"],
    outcomesHighlights: [
      "The AgileEngine team delivered the complete scope of services within part-time engagement and under a 3-month deadline",
      "4.8-star rating on Capterra, 4.8 stars on Software Advice, and 4.8 stars on AppExchange earned by the improved product"
    ],
    results: [
      "Complete scope delivered under a 3-month deadline at part-time engagement",
      "4.8-star rating on Capterra, Software Advice, and AppExchange"
    ],
    technologies: ["Sketch", "InVision"],
    solutionsSections: [
      {
        title: "Design Studio",
        description: "Our design experts revamped the client's HR tool that enables employers to create healthier work environments, eliminate toxic behavior, and significantly reduce talent turnover. The tool offers a secure reporting app, allowing companies to quickly identify, resolve, and act upon cases involving misconduct or harassment. While working on the solution, our design team streamlined a diverse set of UX scenarios and functionality, including policy training, mailing lists, help resources, and ticket management. Our team leveraged Lean UX to pinpoint key areas for improvement based on user feedback, achieving a measurable impact on the overall product experience.",
        keyDeliverables: [
          "Revision and research-driven UX improvements for the client's HR tool",
          "Clarifying the information architecture of the policy and ticket management features",
          "Prototype for anonymous issue reporting with the client's data inputs"
        ],
        technologies: ["Sketch", "InVision"]
      }
    ],
    ctaHeadline: "Want to build an award-winning app?",
    ctaText: "We turn bold ideas into pixel-perfect, scalable, and smooth digital products. Partner with our world-class engineers, AI specialists, and UX designers to boost your engineering ROI and product outcomes.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "37",
    slug: "kantox-web-app-bnp-paribas",
    title: "Kantox: web app bringing new clients to a BNP Paribas subsidiary",
    industry: "Financial Services",
    tags: ["Front-end"],
    client: "Kantox / BNP Paribas",
    year: "2024",
    placeholderBg: "from-emerald-600/20 via-teal-600/20 to-sky-600/20",
    image: "/our-work/webp-format-images/Kantox web app bringing new clients to a BNP Paribas subsidiary.webp",
    summary: "Kantox provides FX management solutions to 5,000+ clients, including brands like L'Occitane and BNP Paribas. A considerable part of this user base has been won over thanks to the client-facing solutions developed by AgileEngine. Our remote experts have helped extend the company's engineering capabilities, improving its solutions for international payments, currency exposure management, and FX transaction automation.",
    overview: "Migration to a modern single-page application",
    challenge: "Outdated multi-page platform with inconsistent UI hindering client acquisition in 158 global markets.",
    solution: "Migrated to SPA architecture, established a PatternLab-based design system, and modernized the full front-end stack.",
    industriesList: ["Fintech", "Enterprise software", "Financial services", "Payments", "Foreign exchange (FX)"],
    servicesList: ["UI development"],
    solutionsList: ["Enterprise application", "Web application", "UI architecture"],
    outcomesHighlights: [
      "Improved client-facing software helped Kantox expand its customer base from 2,000 clients in 20 countries to more than 5,100 clients in 158 countries",
      "Our joint efforts enabled Kantox to win multiple awards, including the TMI Awards for the Best Risk Management Solution of 2018, Deloitte's Technology Fast 500 listing in 2016–2018, and Deloitte's Technology Fast 50 UK listing in 2018"
    ],
    results: [
      "Customer base grew from 2,000 clients in 20 countries to 5,100+ in 158 countries",
      "TMI Award for Best Risk Management Solution 2018",
      "Deloitte Technology Fast 500 listing 2016–2018"
    ],
    technologies: ["Backbone.js", "Grunt", "Webpack", "CoffeeScript", "PatternLab", "BEM", "Node.js", "Ember.js", "HTML5", "CSS", "Haml"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "Kantox has chosen AgileEngine as its technology partner to enrich its development capabilities with the right tech expertise and enhance its key solutions. With our expert assistance, the company migrated its platform to a new technology stack, improved the UI architecture of its flagship product, and streamlined its front-end development process.",
        keyDeliverables: [
          "New web application development based on existing platform functionality",
          "Migration to a single-page application architecture",
          "Separate UI repo set up with styles based on PatternLab",
          "Support of old apps written in Backbone",
          "UI elements implementation according to new project design, under BEM guidelines",
          "Pixel-perfect styling and migration to data-separated Haml templates",
          "New CSS style guide for the whole project with new attractive designs"
        ],
        technologies: ["Backbone.js", "Grunt", "Webpack", "CoffeeScript", "PatternLab", "BEM", "Node.js", "Ember.js", "HTML5", "CSS", "Haml"]
      }
    ],
    ctaHeadline: "Want to build an award-winning app?",
    ctaText: "We turn bold ideas into pixel-perfect, scalable, and smooth digital products. Partner with our world-class engineers, AI specialists, and UX designers to boost your engineering ROI and product outcomes.",
    ctaButtonText: "Book a free consultation"
  },
  {
    id: "38",
    slug: "digital-media-solutions-webbys-winner",
    title: "Digital media solutions for a Webby's winner",
    industry: "Media & Entertainment",
    tags: ["Backend", "Front-end"],
    client: "Sports Media Giant",
    year: "2024",
    placeholderBg: "from-purple-600/20 via-indigo-600/20 to-rose-500/20",
    image: "/our-work/webp-format-images/Digital media solutions for a Webby's winner.webp",
    summary: "AgileEngine is a trusted technology partner of a media giant with 120M+ monthly engagements, 22M+ Instagram followers, and 17M+ X subscribers. Our team has built tools that support and optimize the company's website, streamlining content delivery and ensuring a superb user experience.",
    overview: "Main website support and optimization",
    challenge: "Scaling content delivery across AMP, Facebook Instant Articles, and Apple News while maintaining sub-1-second mobile load times.",
    solution: "Full-stack development of data aggregation services, admin tools, and multi-platform content delivery integrations.",
    industriesList: ["Digital media", "Entertainment"],
    servicesList: ["Full-stack development", "UI development", "Backend development"],
    solutionsList: ["Web application", "Administration tool", "Data aggregation", "Enterprise application", "Integration"],
    outcomesHighlights: [
      "Improved marketing and data solutions helped the client drive engagement on mobile, reaching 15 million downloads and averaging 230 minutes per user each month",
      "The client won a Webby Award for Sports (Apps, Mobile, and Voice), became a Sports Emmys nominee, and earned a 4.8-star rating on Influenster"
    ],
    results: [
      "15 million mobile app downloads with 230 minutes average monthly engagement per user",
      "Webby Award for Sports (Apps, Mobile, and Voice), Sports Emmys nominee",
      "4.8-star rating on Influenster"
    ],
    technologies: ["JavaScript", "Ruby on Rails", "React.js", "PostgreSQL", "MySQL", "Kafka", "Redis", "RabbitMQ"],
    solutionsSections: [
      {
        title: "Project overview",
        description: "As one of the fastest-growing sports publishers, the company needs to maintain a strong presence across digital channels. Our full-stack development experts converted the client's content to mobile formats for AMP, Facebook Instant Articles, and Apple News. The resulting solution ensured load times of less than 1 second on mobile, significantly enhancing the user experience. Our team also developed a data aggregation service with a modern UI, enabling scheduling and customization of data flow for marketing experiments, data extraction, and synchronization. Additionally, our experts built the administration tools supporting the main website.",
        keyDeliverables: [
          "Internal tools enabling marketing experiments as well as data extraction and synchronization",
          "Administration tools that support the main website",
          "Backend development with Ruby on Rails, Kafka, RabbitMQ, Redis, PostgreSQL, and MySQL",
          "UI functionality development with React",
          "Integration with external platforms",
          "API development",
          "Content delivery optimization for Google Accelerated Mobile Pages, Facebook Instant News, and Apple News",
          "Integration of the content platform with Salesforce, Leanplum, and Interana"
        ],
        technologies: ["JavaScript", "Ruby on Rails", "React.js", "PostgreSQL", "MySQL", "Kafka", "Redis", "RabbitMQ"]
      }
    ],
    ctaHeadline: "Want to build an award-winning app?",
    ctaText: "We turn bold ideas into pixel-perfect, scalable, and smooth digital products. Partner with our world-class engineers, AI specialists, and UX designers to boost your engineering ROI and product outcomes.",
    ctaButtonText: "Book a free consultation"
  }
];

export function getWorkBySlug(slug: string): OurWorkItem | undefined {
  return ourWorkItems.find((item) => item.slug === slug);
}

export function getAllWorkSlugs(): string[] {
  return ourWorkItems.map((item) => item.slug);
}
