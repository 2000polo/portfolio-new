import {Image} from 'next-sanity/image'
import {getImageDimensions} from '@sanity/asset-utils'
import {stegaClean} from '@sanity/client/stega'

import {urlForImage} from '@/sanity/lib/utils'

/** Minimal Sanity image shape for `urlForImage` / `getImageDimensions`. */
type SanityImageField = {
  asset?: {_ref?: string}
  alt?: string
  _type?: string
}

/** Local type until Sanity TypeGen includes `skillsGrid` on `Page.pageBuilder`. */
type SkillsGridSkill = {
  name?: string
  description?: string
  icon?: SanityImageField
  level?: string
  category?: string
}

type SkillsGridBlock = {
  _type: 'skillsGrid'
  _key?: string
  heading?: string
  subheading?: string
  description?: string
  skills?: SkillsGridSkill[]
}

type SkillsGridProps = {
  block: SkillsGridBlock
  index: number
}

const levelColors = {
  beginner: 'bg-blue-100 text-blue-800',
  intermediate: 'bg-green-100 text-green-800',
  advanced: 'bg-yellow-100 text-yellow-800',
  expert: 'bg-purple-100 text-purple-800',
}

const categoryColors = {
  frontend: 'border-blue-500',
  backend: 'border-green-500',
  fullstack: 'border-purple-500',
  devops: 'border-orange-500',
  design: 'border-pink-500',
  other: 'border-gray-500',
}

export default function SkillsGrid({block}: SkillsGridProps) {
  const skills = block.skills || []

  return (
    <section className="container my-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {block.heading && (
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {block.heading}
            </h2>
          )}

          {block.subheading && (
            <p className="text-xl sm:text-2xl text-gray-600 mb-4 font-light">
              {block.subheading}
            </p>
          )}

          {block.description && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {block.description}
            </p>
          )}
        </div>

        {/* Skills Grid */}
        {skills.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill: SkillsGridSkill, index: number) => {
              if (!skill) return null

              const icon = skill.icon?.asset?._ref
                ? {
                    src: urlForImage(skill.icon)?.url() as string,
                    // Runtime shape matches Sanity image; TypeGen types are stricter than our local block type.
                    dimensions: getImageDimensions(skill.icon as Parameters<typeof getImageDimensions>[0]),
                    alt: stegaClean(skill.icon?.alt) || skill.name || 'Skill icon',
                  }
                : null

              const level = skill.level as keyof typeof levelColors
              const category = skill.category as keyof typeof categoryColors

              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-xl border-2 ${
                    category ? categoryColors[category] : 'border-gray-300'
                  } p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  {/* Icon */}
                  {icon && (
                    <div className="mb-4 flex items-center justify-center w-16 h-16 mx-auto bg-gray-50 rounded-lg">
                      <Image
                        className="object-contain"
                        width={icon.dimensions.width}
                        height={icon.dimensions.height}
                        alt={icon.alt}
                        src={icon.src}
                      />
                    </div>
                  )}

                  {/* Skill Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  {skill.description && (
                    <p className="text-gray-600 text-sm mb-4 text-center line-clamp-3">
                      {skill.description}
                    </p>
                  )}

                  {/* Level Badge */}
                  {level && (
                    <div className="flex justify-center mb-2">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          levelColors[level] || 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </span>
                    </div>
                  )}

                  {/* Category */}
                  {category && (
                    <div className="text-center">
                      <span className="text-xs text-gray-500 uppercase tracking-wide">
                        {category}
                      </span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

