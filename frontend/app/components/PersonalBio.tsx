'use client'

import { useRef } from 'react'
import useSplitTextAnimation from '@/app/lib/hooks/useSplitTextAnimation'

export default function PersonalBio({ block }: { block: { paragraph: string } }) {
  const bioRef = useRef<HTMLHeadingElement>(null)

  useSplitTextAnimation(bioRef)

  return (
    <section>
      {block.paragraph && (
        <div className="container mb-12 md:mb-24">
          <h2
            ref={bioRef}
            className="bio alan-sans-800 text-3xl md:text-5xl"
          >
            {block.paragraph}
          </h2>
        </div>
      )}
    </section>
  )
}