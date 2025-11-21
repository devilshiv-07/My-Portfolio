import { 
  SiC, SiCplusplus, SiPython, SiJavascript, SiMysql, SiHtml5, SiCss3,
  SiNextdotjs, SiTailwindcss, SiReact, SiExpress, SiNodedotjs,
  SiMongodb, SiGithub, SiVercel, SiPostman, SiFramer
} from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'

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
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'SQL', icon: SiMysql, color: '#4479A1' },
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', icon: SiCss3, color: '#1572B6' },
    ]
  },
  {
    category: 'Frameworks',
    color: 'from-purple-500 to-pink-500',
    darkColor: 'from-purple-400 to-pink-400',
    gradientColors: {
      light: 'from-purple-500 to-pink-500',
      dark: 'from-purple-400 to-pink-400'
    },
    skills: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'GSAP', icon: null, color: '#88CE02', customIcon: 'G' },
      { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ]
  },
  {
    category: 'Libraries',
    color: 'from-green-500 to-emerald-500',
    darkColor: 'from-green-400 to-emerald-400',
    gradientColors: {
      light: 'from-green-500 to-emerald-500',
      dark: 'from-green-400 to-emerald-400'
    },
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'ShadCN UI', icon: null, color: '#000000', customIcon: 'SC' },
      { name: 'Vapi', icon: null, color: '#6366F1', customIcon: 'V' },
      { name: 'Redux Toolkit', icon: null, color: '#764ABC', customIcon: 'RT' },
    ]
  },
  {
    category: 'Authentication / Backend Services',
    color: 'from-indigo-500 to-purple-500',
    darkColor: 'from-indigo-400 to-purple-400',
    gradientColors: {
      light: 'from-indigo-500 to-purple-500',
      dark: 'from-indigo-400 to-purple-400'
    },
    skills: [
      { name: 'Clerk', icon: null, color: '#0A0A0A', customIcon: 'C' },
    ]
  },
  {
    category: 'Databases',
    color: 'from-yellow-500 to-orange-500',
    darkColor: 'from-yellow-400 to-orange-400',
    gradientColors: {
      light: 'from-yellow-500 to-orange-500',
      dark: 'from-yellow-400 to-orange-400'
    },
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Convex', icon: null, color: '#FF4A00', customIcon: 'CX' },
      { name: 'Redis', icon: null, color: '#DC382D', customIcon: 'R' },
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
      { name: 'Vercel', icon: SiVercel, color: '#000000' },
      { name: 'Render', icon: null, color: '#46E3B7', customIcon: 'R' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'VS Code', icon: null, color: '#007ACC', customIcon: 'VS' },
      { name: 'Cursor', icon: null, color: '#000000', customIcon: 'C' },
    ]
  },
]

