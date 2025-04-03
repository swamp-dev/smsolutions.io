// Theme colors
export const COLORS = {
  primary: '#00FF9D',
  dark: '#111111',
  light: '#FFFFFF',
  gray: '#6B7280',
  darkGray: '#1F2937',
  transparent: 'transparent',
} as const;

// Typography
export const FONTS = {
  sans: 'Inter var, system-ui, -apple-system, sans-serif',
} as const;

// Spacing
export const SPACING = {
  section: 'py-24',
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
} as const;

// Animation durations
export const ANIMATION = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
} as const;

// Breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;

// Navigation items
export const NAV_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'How We Work', href: '#how-we-work' },
  { name: 'Contact', href: '#contact' },
] as const;

// Service cards data
export const SERVICES = [
  {
    title: 'Custom Software Development',
    description: 'Tailored solutions that perfectly align with your business needs',
    icon: '💻',
  },
  {
    title: 'AI & Automation',
    description: 'Intelligent systems that streamline your operations',
    icon: '🤖',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable infrastructure that grows with your business',
    icon: '☁️',
  },
  {
    title: 'Digital Transformation',
    description: 'Modernize your business for the digital age',
    icon: '��',
  },
] as const; 