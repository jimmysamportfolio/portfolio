import { Vector3 } from 'three'

export type SectionId = 'about' | 'projects' | 'achievements' | 'hobbies' | 'contact'

export interface AsteroidConfig {
  id: SectionId
  label: string
  position: [number, number, number]
  scale: number
  color: string
  rotationSpeed: number
}

export const ASTEROIDS: AsteroidConfig[] = [
  {
    id: 'about',
    label: 'About',
    position: [-4, 2, 0],
    scale: 0.8,
    color: '#a78bfa',
    rotationSpeed: 0.3,
  },
  {
    id: 'projects',
    label: 'Projects',
    position: [4, 1.5, -1],
    scale: 0.9,
    color: '#818cf8',
    rotationSpeed: 0.25,
  },
  {
    id: 'achievements',
    label: 'Achievements',
    position: [-3, -2, 1],
    scale: 0.75,
    color: '#c4b5fd',
    rotationSpeed: 0.35,
  },
  {
    id: 'hobbies',
    label: 'Hobbies',
    position: [3.5, -1.5, 0.5],
    scale: 0.7,
    color: '#a5b4fc',
    rotationSpeed: 0.28,
  },
  {
    id: 'contact',
    label: 'Contact',
    position: [0, -3, -0.5],
    scale: 0.65,
    color: '#ddd6fe',
    rotationSpeed: 0.32,
  },
]

export const CAMERA_POSITION = new Vector3(0, 0, 10)
export const BLACK_HOLE_POSITION = new Vector3(0, 0, -2)

export const PROJECTS = [
  {
    title: 'AI Agent Platform',
    description: 'A platform for building and deploying autonomous AI agents with RAG capabilities.',
    tech: ['Python', 'LangChain', 'FastAPI', 'React'],
    link: '#',
    github: '#',
  },
  {
    title: 'RAG Document Assistant',
    description: 'Intelligent document Q&A system using retrieval-augmented generation.',
    tech: ['TypeScript', 'Next.js', 'OpenAI', 'Pinecone'],
    link: '#',
    github: '#',
  },
  {
    title: 'Smart Expense Tracker',
    description: 'AI-powered expense tracking with automatic categorization and insights.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'TensorFlow'],
    link: '#',
    github: '#',
  },
]

export const ACHIEVEMENTS = [
  {
    title: 'BizTech Product Manager',
    date: '2024 - Present',
    description: 'Leading product development and strategy for UBC\'s largest business and technology organization.',
    impact: '500+ members',
  },
  {
    title: 'Hackathon Winner',
    date: '2024',
    description: 'First place at DubHacks for AI-powered accessibility solution.',
    impact: '200+ participants',
  },
  {
    title: 'Tech Lead - BizTech Blueprint',
    date: '2023',
    description: 'Organized flagship tech conference connecting students with industry leaders.',
    impact: '300+ attendees',
  },
]

export const HOBBIES = [
  { name: 'Coding', icon: 'Code2' },
  { name: 'Gaming', icon: 'Gamepad2' },
  { name: 'Photography', icon: 'Camera' },
  { name: 'Hiking', icon: 'Mountain' },
  { name: 'Reading', icon: 'BookOpen' },
  { name: 'Music', icon: 'Music' },
]

export const SOCIAL_LINKS = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  email: 'hello@example.com',
}
