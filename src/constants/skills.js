import {
  SiPython,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiReacthookform,
  SiReactquery,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGithub,
  SiVercel,
  SiPostman,
} from 'react-icons/si'

import { FaGitAlt } from 'react-icons/fa'

// Custom skill icons
import LangChainIcon from '../assets/Skills_Icons/LangChain_Icon.webp'
import LangGraphIcon from '../assets/Skills_Icons/LangGraph_Icon.png'
import MicrosoftAgentFrameworkIcon from '../assets/Skills_Icons/Microsoft_Agent_Framework_Icon.png'
import ChromaDBIcon from '../assets/Skills_Icons/ChromaDB_Icon.webp'
import MCPIcon from '../assets/Skills_Icons/MCP_Icon.webp'
import JotaiIcon from '../assets/Skills_Icons/Jotai_Icon.png'
import WebflowIcon from '../assets/Skills_Icons/Webflow_Icon.svg'
import AzureDevOpsIcon from '../assets/Skills_Icons/Azure_DevOps_Icon.webp'

export const skillsData = [
  {
    category: 'Languages',
    color: 'from-blue-500 to-cyan-500',
    darkColor: 'from-blue-400 to-cyan-400',
    gradientColors: {
      light: 'from-blue-500 to-cyan-500',
      dark: 'from-blue-400 to-cyan-400'
    },
    skills: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'SQL', icon: SiMysql, color: '#4479A1' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    ]
  },

  {
    category: 'Generative & Agentic AI',
    color: 'from-violet-500 to-fuchsia-500',
    darkColor: 'from-violet-400 to-fuchsia-400',
    gradientColors: {
      light: 'from-violet-500 to-fuchsia-500',
      dark: 'from-violet-400 to-fuchsia-400'
    },
    skills: [
      { name: 'LLMs', icon: null, color: '#8B5CF6' },
      { name: 'RAG', icon: null, color: '#A855F7' },
      { name: 'Multi-Agent Systems', icon: null, color: '#D946EF' },
      { name: 'Tool Calling', icon: null, color: '#C026D3' },
      { name: 'MCP', icon: MCPIcon, color: '#6366F1', isImage: true },
      { name: 'Prompt Engineering', icon: null, color: '#7C3AED' },
      { name: 'Embeddings', icon: null, color: '#8B5CF6' },
      { name: 'Semantic Search', icon: null, color: '#A855F7' },
      { name: 'Hybrid Search', icon: null, color: '#C026D3' },
      { name: 'Re-ranking', icon: null, color: '#DB2777' },
      { name: 'AI Evaluation', icon: null, color: '#E11D48' },
    ]
  },

  {
    category: 'AI Frameworks & Vector DBs',
    color: 'from-emerald-500 to-teal-500',
    darkColor: 'from-emerald-400 to-teal-400',
    gradientColors: {
      light: 'from-emerald-500 to-teal-500',
      dark: 'from-emerald-400 to-teal-400'
    },
    skills: [
      {
        name: 'LangChain',
        icon: LangChainIcon,
        color: '#1C3C3C',
        isImage: true
      },
      {
        name: 'LangGraph',
        icon: LangGraphIcon,
        color: '#1C3C3C',
        isImage: true
      },
      {
        name: 'Microsoft Agent Framework',
        icon: MicrosoftAgentFrameworkIcon,
        color: '#0078D4',
        isImage: true
      },
      {
        name: 'ChromaDB',
        icon: ChromaDBIcon,
        color: '#FF6B6B',
        isImage: true
      },
    ]
  },

  {
    category: 'Frontend',
    color: 'from-cyan-500 to-blue-500',
    darkColor: 'from-cyan-400 to-blue-400',
    gradientColors: {
      light: 'from-cyan-500 to-blue-500',
      dark: 'from-cyan-400 to-blue-400'
    },
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Redux Toolkit', icon: SiRedux, color: '#764ABC' },
      { name: 'Jotai', icon: JotaiIcon, color: '#000000', isImage: true },
      {
        name: 'React Hook Form',
        icon: SiReacthookform,
        color: '#EC5990'
      },
      {
        name: 'TanStack Query',
        icon: SiReactquery,
        color: '#FF4154'
      },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Webflow', icon: WebflowIcon, color: '#4353FF', isImage: true },
    ]
  },

  {
    category: 'Backend & Architecture',
    color: 'from-green-500 to-emerald-500',
    darkColor: 'from-green-400 to-emerald-400',
    gradientColors: {
      light: 'from-green-500 to-emerald-500',
      dark: 'from-green-400 to-emerald-400'
    },
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'REST APIs', icon: null, color: '#10B981' },
      { name: 'Microservices', icon: null, color: '#059669' },
      { name: 'JWT', icon: null, color: '#000000' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'CI/CD', icon: null, color: '#6366F1' },
    ]
  },

  {
    category: 'Databases & Caching',
    color: 'from-yellow-500 to-orange-500',
    darkColor: 'from-yellow-400 to-orange-400',
    gradientColors: {
      light: 'from-yellow-500 to-orange-500',
      dark: 'from-yellow-400 to-orange-400'
    },
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    ]
  },

  {
    category: 'Tools & Platforms',
    color: 'from-red-500 to-rose-500',
    darkColor: 'from-red-400 to-rose-400',
    gradientColors: {
      light: 'from-red-500 to-rose-500',
      dark: 'from-red-400 to-rose-400'
    },
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Azure DevOps', icon: AzureDevOpsIcon, color: '#0078D7', isImage: true },
      { name: 'Vercel', icon: SiVercel, color: '#000000' },
    ]
  },

  {
    category: 'Engineering Fundamentals',
    color: 'from-orange-500 to-red-500',
    darkColor: 'from-orange-400 to-red-400',
    gradientColors: {
      light: 'from-orange-500 to-red-500',
      dark: 'from-orange-400 to-red-400'
    },
    skills: [
      { name: 'Data Structures & Algorithms', icon: null, color: '#F97316' },
      { name: 'OOP', icon: null, color: '#EA580C' },
      { name: 'System Design', icon: null, color: '#DC2626' },
      { name: 'DBMS', icon: null, color: '#B91C1C' },
      { name: 'Web Vitals', icon: null, color: '#F59E0B' },
      { name: 'Agile / Scrum', icon: null, color: '#EF4444' },
    ]
  },
]