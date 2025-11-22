import EdusityImage from '../assets/Frontend-Projects/Edusity-School-Website_Project-1.png'
import VidTubeImage from '../assets/Frontend-Projects/VidTube-Youtube-Clone_Project-2.png'
import GeminiImage from '../assets/Frontend-Projects/Gemini-Clone_Project-3.png'
import LazaRevImage from '../assets/Animation-Projects/LazaRev-Project1.png'
import GamingSiteImage from '../assets/Animation-Projects/GamingSite-Project2.png'
import AIFactorImage from '../assets/Animation-Projects/AI-Factor_Landing_Page-Project3.png'
import RestroPOSImage from '../assets/Full-Stack-Projects/Restro_Restaurant_POS_SYStem-Project1.png'
import BlogAppImage from '../assets/Full-Stack-Projects/Blog-App-Project2.png'

export const projectsData = [
  {
    category: 'Frontend Projects',
    projects: [
      {
        id: 'edusity',
        name: 'Edusity',
        subHeading: 'College Website UI',
        description: 'A modern and engaging college website with proper working buttons and responsive UI design.',
        image: EdusityImage,
        githubLink: 'https://github.com/devilshiv-07/College_website',
        liveLink: 'https://college-website-amber.vercel.app/',
        techStack: [
          'React',
          'Vite',
          'React Scroll',
          'Responsive Design',
          'Modern UI/UX'
        ],
        fullStackTopics: [
          'React Component Architecture',
          'Responsive Web Design',
          'Smooth Scrolling Navigation',
          'Modern UI/UX Principles',
          'Single Page Application (SPA)',
          'Component Reusability',
          'State Management',
          'CSS Styling and Layout'
        ],
        features: [
          'Fully responsive design for all devices',
          'Smooth scrolling navigation',
          'Engaging UI with proper button interactions',
          'Modern and professional design',
          'Optimized performance'
        ]
      },
      {
        id: 'vidtube',
        name: 'VidTube',
        subHeading: 'Youtube Clone',
        description: 'A fully functional YouTube clone with YouTube API integration, responsive design, and video playback features.',
        image: VidTubeImage,
        githubLink: 'https://github.com/devilshiv-07/Vid_app',
        liveLink: 'https://vid-app-two.vercel.app/',
        techStack: [
          'React',
          'React Router DOM',
          'YouTube API',
          'Moment.js',
          'Dotenv',
          'Responsive Design'
        ],
        fullStackTopics: [
          'API Integration (YouTube Data API)',
          'React Router for Navigation',
          'Dynamic Routing',
          'Environment Variables',
          'Date/Time Formatting',
          'Video Player Integration',
          'Search Functionality',
          'Responsive Grid Layouts',
          'State Management',
          'Component Lifecycle'
        ],
        features: [
          'YouTube API integration for real video data',
          'Video search functionality',
          'Video playback and details',
          'Responsive grid layout',
          'Dynamic routing for video pages',
          'Modern UI matching YouTube design'
        ]
      },
      {
        id: 'gemini-clone',
        name: 'Gemini Clone',
        subHeading: 'AI Chat Interface',
        description: 'A responsive Gemini AI clone interface with Google Generative AI integration for intelligent conversations.',
        image: GeminiImage,
        githubLink: 'https://github.com/devilshiv-07/Gemini-UI-clone-',
        liveLink: 'https://gemini-ui-clone-pi.vercel.app/',
        techStack: [
          'React',
          'Google Generative AI',
          'AI Integration',
          'Responsive Design'
        ],
        fullStackTopics: [
          'AI/ML Integration',
          'Google Generative AI SDK',
          'Chat Interface Development',
          'Real-time AI Responses',
          'Message History Management',
          'User Input Handling',
          'API Integration',
          'Responsive Chat UI',
          'State Management for Conversations'
        ],
        features: [
          'Google Generative AI integration',
          'Intelligent chat interface',
          'Real-time AI responses',
          'Conversation history',
          'Responsive design',
          'Modern chat UI'
        ]
      }
    ]
  },
  {
    category: 'Animation Projects',
    projects: [
      {
        id: 'lazarev',
        name: 'LazaRev',
        subHeading: 'Animated Website',
        description: 'An animated website created using GSAP with smooth transitions and engaging animations.',
        image: LazaRevImage,
        githubLink: 'https://github.com/devilshiv-07/Lazarev',
        liveLink: 'https://lazarev-two.vercel.app/',
        techStack: [
          'HTML',
          'CSS',
          'JavaScript',
          'GSAP'
        ],
        fullStackTopics: [
          'GSAP Animation Library',
          'Advanced CSS Animations',
          'JavaScript DOM Manipulation',
          'Scroll-triggered Animations',
          'Timeline Animations',
          'Transform and Transition Effects',
          'Performance Optimization',
          'Modern Web Animations'
        ],
        features: [
          'Smooth GSAP animations throughout',
          'Scroll-triggered animation effects',
          'Engaging user interactions',
          'Professional animation sequences',
          'Optimized performance'
        ]
      },
      {
        id: 'gaming-site',
        name: 'The Gaming Site',
        subHeading: 'Awwward Winning UI',
        description: 'A recreation of an Awwward winning website with amazing UI and lots of GSAP animations. Highly engaging and completely responsive.',
        image: GamingSiteImage,
        githubLink: 'https://github.com/devilshiv-07/Gaming_site',
        liveLink: 'https://thegamingsite.vercel.app/',
        techStack: [
          'React',
          'GSAP',
          '@gsap/react',
          'Tailwind CSS',
          'React Icons',
          'React Use',
          'Vite'
        ],
        fullStackTopics: [
          'Advanced GSAP Animations',
          'React with GSAP Integration',
          'Cursor Position Tracking',
          'Scroll-based Animations',
          'Complex Animation Sequences',
          'Responsive Design',
          'Performance Optimization',
          'Modern React Hooks',
          'Tailwind CSS Styling',
          'Interactive UI Components'
        ],
        features: [
          'Awwward-winning design recreation',
          'Extensive GSAP animations',
          'Cursor-based interactions',
          'Fully responsive design',
          'Highly engaging user experience',
          'Smooth scroll animations',
          'Modern and professional UI'
        ]
      },
      {
        id: 'ai-factor',
        name: 'AI Factor Landing Page',
        subHeading: 'Animated Landing Page',
        description: 'A modern landing page for AI Factor with GSAP animations, Redux state management, and engaging UI interactions.',
        image: AIFactorImage,
        githubLink: 'https://github.com/devilshiv-07/AI-Factor-LandingPage',
        liveLink: 'https://ai-factor-landing-page.vercel.app/',
        techStack: [
          'React',
          'GSAP',
          '@gsap/react',
          'Redux Toolkit',
          'React Redux',
          'React Router DOM',
          'Tailwind CSS',
          'Axios',
          'Notistack',
          'React Icons'
        ],
        fullStackTopics: [
          'GSAP Animation Integration',
          'Redux State Management',
          'Redux Toolkit',
          'React Router Navigation',
          'API Integration with Axios',
          'Toast Notifications',
          'Form Handling',
          'Responsive Design',
          'Modern React Patterns',
          'Component Architecture',
          'State Management Best Practices'
        ],
        features: [
          'Smooth GSAP animations',
          'Redux for state management',
          'API integration capabilities',
          'Toast notifications',
          'Responsive landing page design',
          'Modern UI/UX',
          'Optimized performance'
        ]
      }
    ]
  },
  {
    category: 'Full-Stack Projects',
    projects: [
      {
        id: 'restro-pos',
        name: 'Restro',
        subHeading: 'Restaurant POS System',
        description: 'A comprehensive Restaurant Management System with order management, table booking, payment processing, and real-time analytics. Full-stack application with secure authentication and payment integration.',
        image: RestroPOSImage,
        githubLink: 'https://github.com/devilshiv-07/Restaurant_POS_System',
        liveLink: 'https://restaurant-pos-system-omega.vercel.app/',
        techStack: [
          'React 19',
          'Node.js',
          'Express.js',
          'MongoDB',
          'Mongoose',
          'Redux Toolkit',
          'React Query',
          'JWT Authentication',
          'Razorpay API',
          'Tailwind CSS',
          'Framer Motion',
          'Axios',
          'bcrypt',
          'Notistack'
        ],
        fullStackTopics: [
          'Full-Stack Development',
          'RESTful API Design',
          'MongoDB Database Design',
          'JWT Authentication & Authorization',
          'Payment Gateway Integration (Razorpay)',
          'State Management with Redux Toolkit',
          'Server-Side Rendering Concepts',
          'API Integration with React Query',
          'Express.js Middleware',
          'Mongoose ODM',
          'Password Hashing with bcrypt',
          'CORS Configuration',
          'Error Handling & Validation',
          'Real-time Data Management',
          'Invoice Generation',
          'Dashboard Analytics',
          'Responsive Design',
          'Component Architecture'
        ],
        features: [
          'User authentication with JWT tokens',
          'Real-time table status tracking',
          'Comprehensive menu management',
          'Complete order lifecycle management',
          'Razorpay payment gateway integration',
          'Automated invoice generation',
          'Dashboard with real-time analytics',
          'Table reservation system',
          'Multiple payment methods (Online, Cash, Digital Wallet)',
          'Menu categorization (Starters, Main Course, Beverages, Desserts)',
          'Responsive mobile-first design',
          'Secure password hashing'
        ]
      },
      {
        id: 'blog-page',
        name: 'Blog Page',
        subHeading: 'Full-Stack Blog Application',
        description: 'A complete blog application with user authentication, post creation, pagination, like and view counts, category-wise searching, and image upload functionality using Cloudinary.',
        image: BlogAppImage,
        githubLink: 'https://github.com/devilshiv-07/BlogPage',
        liveLink: 'https://blog-page-one-kappa.vercel.app/',
        techStack: [
          'React 19',
          'Node.js',
          'Express.js',
          'MongoDB',
          'Mongoose',
          'Redux Toolkit',
          'React Query',
          'JWT Authentication',
          'Cloudinary',
          'Multer',
          'Tailwind CSS',
          'Framer Motion',
          'Axios',
          'bcrypt',
          'Notistack'
        ],
        fullStackTopics: [
          'Full-Stack Development',
          'RESTful API Design',
          'MongoDB Database Design',
          'JWT Authentication & Authorization',
          'Image Upload with Cloudinary',
          'File Upload with Multer',
          'State Management with Redux Toolkit',
          'Server-Side Rendering Concepts',
          'API Integration with React Query',
          'Express.js Middleware',
          'Mongoose ODM',
          'Password Hashing with bcrypt',
          'Pagination Implementation',
          'Search & Filter Functionality',
          'Like & View Count System',
          'Category Management',
          'CRUD Operations',
          'Error Handling & Validation',
          'Responsive Design',
          'Component Architecture'
        ],
        features: [
          'User authentication with JWT',
          'Create, read, update, and delete blog posts',
          'Image upload using Cloudinary',
          'Pagination for blog listings',
          'Like and view count tracking',
          'Category-wise blog searching',
          'User-friendly interface',
          'Responsive design',
          'Real-time data updates',
          'Secure file upload handling',
          'Toast notifications',
          'Modern UI with Framer Motion animations'
        ]
      }
    ]
  }
]

