import React from 'react'

import Cta from '@/app/components/Cta'
import Info from '@/app/components/InfoSection'
import Hero from '@/app/components/Hero'
import SkillsGrid from '@/app/components/SkillsGrid'
import PersonalBio from '@/app/components/PersonalBio'
import {dataAttr} from '@/sanity/lib/utils'
import SocialMediaBanner from '@/app/components/socialMediaBanner'
import ServiceSection from '@/app/components/ServiceSection'  
import LatestPortfolioSection from '@/app/components/LatestPortfolioSection'
import ExperienceSection from './experienceSection'
import LatestBlogsSection from './LatestBlogsSection'
import ProjectList from './ProjectList'
import BannerSectionVarient1 from './BannerSectionVarient1'
import BannerSectionVarient2 from './BannerSectionVarient2'

type BlocksType = {
  [key: string]: React.FC<any>
}

type BlockType = {
  _type: string
  _key: string
}

type BlockProps = {
  index: number
  block: BlockType
  pageId: string
  pageType: string
}

const Blocks: BlocksType = {
  hero: Hero,
  skillsGrid: SkillsGrid,
  callToAction: Cta,
  infoSection: Info,
  personalBio: PersonalBio,
  socialMediaBanner: SocialMediaBanner,
  servicesSection: ServiceSection,
  latestPortfolio: LatestPortfolioSection, 
  experienceSection: ExperienceSection,
  latestBlogsSection: LatestBlogsSection,
  projectList: ProjectList,
  bannerSectionVarient1: BannerSectionVarient1,
  bannerSectionVarient2: BannerSectionVarient2,
}

/**
 * Used by the <PageBuilder>, this component renders a the component that matches the block type.
 */
export default function BlockRenderer({block, index, pageId, pageType}: BlockProps) {
  // Block does exist
  if (typeof Blocks[block._type] !== 'undefined') {
    return (
      <div
        key={block._key}
        data-sanity={dataAttr({
          id: pageId,
          type: pageType,
          path: `pageBuilder[_key=="${block._key}"]`,
        }).toString()}
      >
        {React.createElement(Blocks[block._type], {
          key: block._key,
          block: block,
          index: index,
        })}
      </div>
    )
  }
  // Block doesn't exist yet
  return React.createElement(
    () => (
      <div className="w-full bg-gray-100 text-center text-gray-500 p-20 rounded">
        A &ldquo;{block._type}&rdquo; block hasn&apos;t been created
      </div>
    ),
    {key: block._key},
  )
}
