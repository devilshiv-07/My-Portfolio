import MAQSoftwareLogo from '../assets/Experience/MAQ_Software_Logo.png'
import NectedLogo from '../assets/Experience/Nected_Logo.png'
import AgilityAILogo from '../assets/Experience/Agility_AI_Intern_Logo.png'
import AIFactorLogo from '../assets/Experience/AI_Factor_Intern_Logo.png'
import ToLetLogo from '../assets/Experience/To-let_Intern_Logo.jpeg'

export const experiencesData = [
  {
    id: 'maq-software',
    company: 'MAQ Software',
    role: 'Software Engineer',
    type: 'Full-time',
    period: 'Aug 2026 - Present',
    duration: 'Present',
    location: 'Noida, Uttar Pradesh, India',
    logo: MAQSoftwareLogo,

    brief:
      'Building enterprise-grade Agentic AI and RAG solutions using LangChain, LangGraph, Microsoft Agent Framework, ChromaDB, and MCP.',

    description:
      'As a Software Engineer at MAQ Software, I work on enterprise AI solutions focused on Retrieval-Augmented Generation, multi-agent systems, and intelligent automation. I build RAG pipelines covering chunking, embeddings, hybrid search, and re-ranking, and develop CRM-grounded AI agents with conversational memory. I also design multi-agent workflows using LangGraph and Microsoft Agent Framework with tool calling and sequential/concurrent execution. My work includes architecting enterprise agents that integrate SharePoint, Azure DevOps, and D365 through MCP while incorporating AI evaluation, retrieval-quality checks, and access-control filtering.',

    responsibilities: [
      'Built RAG pipelines using LangChain and Microsoft Agent Framework covering chunking, embeddings, semantic search, keyword search, hybrid retrieval, and re-ranking with ChromaDB',

      'Developed a CRM-grounded Sales Intelligence Agent with conversational memory for context-aware responses',

      'Designed multi-agent systems using LangGraph and Microsoft Agent Framework with tool calling and sequential/concurrent workflows',

      'Architected an enterprise Client Delivery Agent integrating SharePoint, Azure DevOps, and D365 through MCP',

      'Implemented retrieval-quality checks and AI evaluation mechanisms to improve reliability of enterprise AI systems',

      'Worked on access-control filtering and data privacy mechanisms for enterprise agent workflows',

      'Developed scalable AI workflows with a focus on reliable tool execution, grounded responses, and enterprise data integration'
    ],

    techStack: [
      'Python',
      'LangChain',
      'LangGraph',
      'Microsoft Agent Framework',
      'RAG',
      'LLMs',
      'ChromaDB',
      'MCP',
      'Embeddings',
      'Hybrid Search',
      'Re-ranking',
      'Multi-Agent Systems',
      'Tool Calling',
      'AI Evaluation',
      'SharePoint',
      'Azure DevOps',
      'D365'
    ],

    achievements: [
      'Built enterprise RAG pipelines with hybrid search and re-ranking',

      'Developed a CRM-grounded Sales Intelligence Agent with conversational memory',

      'Designed multi-agent workflows using LangGraph and Microsoft Agent Framework',

      'Architected an enterprise Client Delivery Agent integrating multiple enterprise systems through MCP'
    ]
  },

  {
    id: 'nected',
    company: 'Nected (SocioVerse Tech Pvt. Ltd.)',
    role: 'Software Development Engineer Intern',
    type: 'Internship',
    period: 'Mar 2026 - Jul 2026',
    duration: '5 months',
    location: 'Gurgaon, Haryana, India',
    logo: NectedLogo,

    brief:
      'Worked on the production frontend and marketing website of Nected, focusing on performance optimization, reusable architecture, A/B testing, SEO, and production fixes.',

    description:
      'As a Software Development Engineer Intern at Nected, I worked on the production frontend of a no-code decision-automation platform and its Webflow marketing website. I optimized page rendering by separating API-dependent components from static content, delivered multiple production pages, and worked extensively on Core Web Vitals and frontend performance. I also built a centralized DynamicField input wrapper to replace multiple single-purpose form components and designed a new Sign-in/Sign-up experience for A/B testing. Alongside feature development, I handled production hotfixes involving state management, rendering, SEO, and frontend integration issues.',

    responsibilities: [
      'Optimized home page rendering by isolating API-dependent components from static content, improving initial page loading performance',

      'Led delivery of 3 live production pages including Pricing, Product Comparison, and Tool Overview',

      'Maintained 90+ PageSpeed Insights scores with LCP under 2.5s and CLS under 0.1',

      'Built a centralized DynamicField input wrapper that replaced multiple single-purpose form components across the application',

      'Designed and implemented a new Sign-in/Sign-up page for A/B testing which subsequently became the sole production experience',

      'Shipped 5+ production hotfixes across the no-code decision-automation platform and Webflow marketing website',

      'Resolved state-management and rendering defects with same-day turnaround',

      'Worked on SEO, responsive UI, Core Web Vitals, and frontend performance optimization',

      'Collaborated with the marketing and engineering teams to deliver production-ready features and pages'
    ],

    techStack: [
      'React.js',
      'TypeScript',
      'JavaScript',
      'Webflow',
      'REST APIs',
      'Dynamic Forms',
      'A/B Testing',
      'SEO',
      'Core Web Vitals',
      'Git',
      'GitHub'
    ],

    achievements: [
      'Delivered 3 live production pages on nected.ai',

      'Sustained 90+ PageSpeed Insights scores with LCP under 2.5s and CLS under 0.1',

      'Built a reusable DynamicField architecture replacing multiple form components',

      'Designed and shipped a new authentication experience through A/B testing',

      'Resolved 5+ production hotfixes involving state management and rendering issues'
    ]
  },

  {
    id: 'agility-ai',
    company: 'Agility AI Pvt. Ltd.',
    role: 'Software Development Engineer Intern',
    type: 'Internship',
    period: 'Aug 2025 - Feb 2026',
    duration: '7 months',
    location: 'Remote, India',
    logo: AgilityAILogo,

    brief:
      'Delivered 4 production platforms including Invoicely, Edumaniax, HRMS, and Test Paper Generator using the MERN stack with TypeScript.',

    description:
      'As a Software Development Engineer Intern at Agility AI, I worked across four production platforms including Invoicely, Edumaniax, HRMS, and Test Paper Generator. I contributed to frontend architecture, reusable component development, state management, API integration, debugging, and performance optimization. I worked in Agile sprints with a team of 6+ engineers and built reusable React and Tailwind CSS components with Redux Toolkit state management. I also focused on strict TypeScript typing, SEO improvements, and resolving production issues across multiple products.',

    responsibilities: [
      'Delivered 4 production platforms — Invoicely, Edumaniax, HRMS, and Test Paper Generator — using the MERN stack with TypeScript',

      'Built a reusable React and Tailwind CSS component library with Redux Toolkit state management',

      'Developed 20+ modular UI components adopted across multiple products',

      'Resolved 15+ critical production bugs across different applications',

      'Implemented strict TypeScript typing to improve code reliability and reduce runtime issues',

      'Worked on on-page SEO and frontend performance optimization',

      'Collaborated with 6+ engineers in Agile sprints and contributed to production releases',

      'Worked across frontend, backend, API integration, debugging, and feature development'
    ],

    techStack: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redux Toolkit',
      'Tailwind CSS',
      'REST APIs',
      'Git',
      'Agile'
    ],

    achievements: [
      'Delivered 4 production platforms',

      'Built 20+ reusable modular UI components',

      'Resolved 15+ critical production bugs',

      'Improved application performance by 25%',

      'Improved load speed by 20%',

      'Reduced runtime errors by 40%'
    ]
  },

  {
    id: 'ai-factor',
    company: 'AI Factor',
    role: 'Full-stack Developer',
    type: 'Internship',
    period: 'Jun 2025 - Aug 2025',
    duration: '3 months',
    location: 'Hyderabad, Telangana, India',
    logo: AIFactorLogo,

    brief:
      'Worked on the production analytics dashboard and Shopify application, building real-time analytics, chatbot functionality, and authentication systems.',

    description:
      'During my internship at AI Factor, I worked on the main production dashboard, a live analytics interface connected directly to the landing page. I built and optimized multiple sections of the Next.js and TypeScript web application while ensuring smooth real-time updates. I also contributed to the Shopify application by developing a chatbot widget integrated into Shopify stores, implementing live usage tracking, analytics, role-based authentication, and access control.',

    responsibilities: [
      'Worked on the main production dashboard and live analytics interface',

      'Built and optimized multiple sections of the Next.js and TypeScript web application',

      'Developed a functional chatbot widget integrated into Shopify stores',

      'Implemented live usage tracking and dynamically displayed analytics on the dashboard',

      'Implemented role-based authentication and access control',

      'Worked on frontend performance, UI consistency, and integration workflows',

      'Collaborated with the engineering team on production features and improvements'
    ],

    techStack: [
      'Next.js',
      'TypeScript',
      'React',
      'Shopify',
      'Authentication',
      'API Integration',
      'Real-time Analytics'
    ],

    achievements: [
      'Built and optimized the production analytics dashboard',

      'Developed a functional Shopify chatbot widget',

      'Implemented real-time usage tracking and analytics',

      'Worked on role-based authentication and access control'
    ]
  },

  {
    id: 'to-let',
    company: 'To-Let Globe',
    role: 'Frontend Developer',
    type: 'Internship',
    period: 'Apr 2025 - Jul 2025',
    duration: '4 months',
    location: 'Lucknow, Uttar Pradesh, India',
    logo: ToLetLogo,

    brief:
      'Built responsive and dynamic user interfaces using React.js, Tailwind CSS, and JavaScript while collaborating remotely with the development team.',

    description:
      'As a Frontend Developer Intern at To-Let Globe, I worked on building responsive and dynamic user interfaces using modern web technologies. I collaborated remotely with the development team on real-time web solutions and frontend integration, focusing on performance, mobile responsiveness, reusable components, and seamless user experiences.',

    responsibilities: [
      'Built responsive and dynamic user interfaces using React.js, Tailwind CSS, and JavaScript',

      'Collaborated remotely with the development team on real-time web solutions and frontend integration',

      'Designed and implemented reusable components with a focus on performance and mobile responsiveness',

      'Worked on state management, routing, and API integration',

      'Participated actively in sprint reviews and collaborative development tasks',

      'Worked with Git and professional development workflows'
    ],

    techStack: [
      'React.js',
      'Tailwind CSS',
      'JavaScript',
      'Cloudinary',
      'Notistack',
      'Git',
      'API Integration'
    ],

    achievements: [
      'Achieved an Outstanding Rating in performance',

      'Actively participated in sprint reviews and collaborative development',

      'Gained practical experience with Git and professional development workflows',

      'Completed the internship with strong feedback and formal appreciation from company leadership'
    ]
  }
]