'use client'

import { useState } from 'react'

interface SkillNode {
  name: string
  level: number
  description: string
  subSkills?: SkillNode[]
}

interface SkillTreeProps {
  skills: SkillNode[]
  title: string
}

export default function SkillTree({ skills, title }: SkillTreeProps) {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set())

  const toggleNode = (skillName: string) => {
    const newExpanded = new Set(expandedNodes)
    if (newExpanded.has(skillName)) {
      newExpanded.delete(skillName)
    } else {
      newExpanded.add(skillName)
    }
    setExpandedNodes(newExpanded)
  }

  const renderSkillNode = (skill: SkillNode, depth: number = 0) => {
    const isExpanded = expandedNodes.has(skill.name)
    const hasSubSkills = skill.subSkills && skill.subSkills.length > 0

    return (
      <div className="relative" style={{ marginLeft: `${depth * 1.5}rem` }}>
        <div 
          className={`modern-card cursor-pointer transition-all duration-300 ${
            isExpanded ? 'bg-primary/5 dark:bg-primary/10' : ''
          }`}
          onClick={() => hasSubSkills && toggleNode(skill.name)}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold gradient-text">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
                <div 
                  className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
            {hasSubSkills && (
              <button 
                className={`transform transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
          </div>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{skill.description}</p>
        </div>
        {hasSubSkills && isExpanded && (
          <div className="mt-4 space-y-4">
            {skill.subSkills!.map((subSkill, index) => (
              <div key={index} className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />
                {renderSkillNode(subSkill, depth + 1)}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="modern-card p-6">
      <h2 className="modern-subheading mb-8 gradient-text">{title}</h2>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            {renderSkillNode(skill)}
          </div>
        ))}
      </div>
    </div>
  )
} 