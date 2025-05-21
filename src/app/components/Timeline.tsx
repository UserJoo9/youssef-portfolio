'use client'

import { useState } from 'react'

interface TimelineItem {
  title: string
  subtitle: string
  date: string
  description: string
  tags?: string[]
  achievements?: string[]
}

interface TimelineProps {
  items: TimelineItem[]
  title: string
}

export default function Timeline({ items, title }: TimelineProps) {
  const [activeItem, setActiveItem] = useState<number | null>(null)

  return (
    <div className="modern-card p-6">
      <h2 className="modern-subheading mb-8 gradient-text">{title}</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />
        
        <div className="space-y-8">
          {items.map((item, index) => (
            <div 
              key={index}
              className="relative pl-12 group"
              onMouseEnter={() => setActiveItem(index)}
              onMouseLeave={() => setActiveItem(null)}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-2 border-primary flex items-center justify-center transform -translate-x-1/2 transition-transform duration-300 group-hover:scale-125">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className={`modern-card transition-all duration-300 ${
                activeItem === index ? 'transform -translate-x-2 shadow-xl' : ''
              }`}>
                <div className="p-6">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl font-semibold gradient-text">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">{item.subtitle}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                      {item.date}
                    </span>
                  </div>
                  
                  <p className="mt-4 text-gray-600 dark:text-gray-300">{item.description}</p>
                  
                  {item.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 rounded-full text-sm bg-secondary/10 text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.achievements && (
                    <div className="mt-4 space-y-2">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <div 
                          key={achievementIndex}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                        >
                          <svg className="w-5 h-5 text-accent mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 