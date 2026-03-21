import {person} from './documents/person'
import {page} from './documents/page'
import {post} from './documents/post'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {hero} from './objects/hero'
import {skillsGrid} from './objects/skillsGrid'
import {personalBio} from './objects/personalBio'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import { socialMediaBanner } from './objects/socialMediaBanner'
import { servicesSection } from './objects/servicesSection'
import { latestPortfolio } from './objects/latestPortfolio'
import { experienceSection } from './objects/experienceSection'
import { latestBlogsSection } from './objects/latestBlogsSection'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  page,
  post,
  person,
  // Objects
  blockContent,
  infoSection,
  callToAction,
  hero,
  skillsGrid,
  personalBio,
  link,
  socialMediaBanner,
  servicesSection,
  latestPortfolio,
  experienceSection,
  latestBlogsSection,
]
