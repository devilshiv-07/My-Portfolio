import { 
  SiC, SiCplusplus, SiPython, SiJavascript, SiMysql, SiHtml5, SiCss3,
  SiNextdotjs, SiTailwindcss, SiReact, SiExpress, SiNodedotjs,
  SiMongodb, SiGithub, SiVercel, SiPostman, SiFramer, SiMui, SiChakraui, SiBootstrap,
  SiVite, SiReactrouter, SiAxios, SiReactquery, SiMongoose, SiTypescript,
  SiCloudinary, SiRazorpay, SiJsonwebtokens
} from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'

// Import custom skill icons
import GSAPIcon from '../assets/Skills_Icons/GSAP_Icon.svg'
import ShadCNIcon from '../assets/Skills_Icons/ShadCN_Icon.png'
import VapiIcon from '../assets/Skills_Icons/Vapi_Icon.svg'
import ReduxToolkitIcon from '../assets/Skills_Icons/Redux_Toolkit_Icon.svg'
import ClerkIcon from '../assets/Skills_Icons/Clerk_Icon.jpg'
import ConvexIcon from '../assets/Skills_Icons/Convex_Icon.png'
import RedisIcon from '../assets/Skills_Icons/Redis_Icon.svg'
import RenderIcon from '../assets/Skills_Icons/Render_Icon.avif'
import VSCodeIcon from '../assets/Skills_Icons/VS_Code_Icon.webp'
import CursorIcon from '../assets/Skills_Icons/Cursor_Icon.png'

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
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'SQL', icon: SiMysql, color: '#4479A1' },
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', icon: SiCss3, color: '#1572B6' },
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
      { name: 'React Router', icon: SiReactrouter, color: '#CA4245' },
      { name: 'React Query', icon: SiReactquery, color: '#FF4154' },
      { name: 'Axios', icon: SiAxios, color: '#5A29E4' },
      { name: 'Mongoose', icon: SiMongoose, color: '#880000' },
      { name: 'Material UI', icon: SiMui, color: '#007FFF' },
      { name: 'Chakra UI', icon: SiChakraui, color: '#319795' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'ShadCN UI', icon: ShadCNIcon, color: '#000000', isImage: true },
      { name: 'Vapi', icon: VapiIcon, color: '#6366F1', isImage: true },
      { name: 'Redux Toolkit', icon: ReduxToolkitIcon, color: '#764ABC', isImage: true },
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
      { name: 'GSAP', icon: GSAPIcon, color: '#88CE02', isImage: true },
      { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
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
      { name: 'Clerk', icon: ClerkIcon, color: '#0A0A0A', isImage: true },
      { name: 'Convex', icon: ConvexIcon, color: '#FF4A00', isImage: true },
      { name: 'JWT', icon: SiJsonwebtokens, color: '#000000' },
      { name: 'Cloudinary', icon: SiCloudinary, color: '#3448C5' },
      { name: 'Razorpay', icon: SiRazorpay, color: '#0C2451' },
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
      { name: 'Redis', icon: RedisIcon, color: '#DC382D', isImage: true },
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
      { name: 'Render', icon: RenderIcon, color: '#46E3B7', isImage: true },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'VS Code', icon: VSCodeIcon, color: '#007ACC', isImage: true },
      { name: 'Cursor', icon: CursorIcon, color: '#000000', isImage: true },
    ]
  },
]

