/**
 * Shared TypeScript type definitions for the AAII LA website
 */

/**
 * Represents a meeting/webinar in the AAII LA chapter
 */
export interface Meeting {
  id: string
  title: string
  slug: string
  date: string
  status: string
  category: string
  thumbnailId?: string
  backgroundImage?: string
  topics: number
  filename: string
}

/**
 * Represents a member testimonial
 */
export interface Testimonial {
  quote: string
  author: string
}

/**
 * Represents a frequently asked question
 */
export interface FAQ {
  question: string
  link: string
  answer?: string
}

/**
 * Represents an icon box feature
 */
export interface IconBox {
  icon: string
  title: string
  description: string
}

/**
 * Represents a featured topic (flip card)
 */
export interface Topic {
  title: string
  subtitle: string
  description: string
  image: string
  link: string
}

/**
 * Represents a statistic for the statistics section
 */
export interface Statistic {
  target: number
  label: string
  description: string
  duration?: number
}
