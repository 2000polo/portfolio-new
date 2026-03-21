import {defineField, defineType} from 'sanity'
import {StarIcon} from '@sanity/icons'

/**
 * Hero section schema object. Used for creating hero sections with grid layout including main image, content section, case studies, and blogs sections.
 */

export const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  icon: StarIcon,
  fields: [
    // Main Image Section (left side, large)
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description: 'Large image displayed on the left side of the hero section',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImageActionTitle',
      title: 'Main Image Action Title',
      type: 'string',
      description: 'Title text for the action button overlay on main image (e.g., "Let\'s grow together - Learn with me")',
    }),
    defineField({
      name: 'mainImageActionDescription',
      title: 'Main Image Action Description',
      type: 'text',
      description: 'Description text for the action button overlay on main image',
    }),
    defineField({
      name: 'mainImageActionLink',
      title: 'Main Image Action Link',
      type: 'link',
      description: 'Link for the action button overlay on main image',
    }),
    // Main Content Section (right side, top)
    defineField({
      name: 'mainTitle',
      title: 'Main Title',
      type: 'text',
      description: 'Main title text (can be multi-line, e.g., "UI/UX &\\nDEVELOPMENT\\nWITH 4 YEARS EXPERIENCE")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainDescription',
      title: 'Main Description',
      type: 'text',
      description: 'Description text for the main content section',
    }),
    defineField({
      name: 'mainActionLink',
      title: 'Main Action Link',
      type: 'link',
      description: 'Link for the action button in the main content section',
    }),
    // Case Studies Section (bottom left)
    defineField({
      name: 'caseStudiesImage',
      title: 'Case Studies Image',
      type: 'image',
      description: 'Image for the case studies section',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'caseStudiesTitle',
      title: 'Case Studies Title',
      type: 'string',
      description: 'Title text for the case studies section (e.g., "UI/UX CASE STUDIES")',
    }),
    defineField({
      name: 'caseStudiesLink',
      title: 'Case Studies Link',
      type: 'link',
      description: 'Link for the case studies section',
    }),
    // Blogs Section (bottom right)
    defineField({
      name: 'blogsImage',
      title: 'Blogs Image',
      type: 'image',
      description: 'Image for the blogs section',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'blogsTitle',
      title: 'Blogs Title',
      type: 'string',
      description: 'Title text for the blogs section (e.g., "BLOGS & RESEARCH")',
    }),
    defineField({
      name: 'blogsLink',
      title: 'Blogs Link',
      type: 'link',
      description: 'Link for the blogs section',
    }),
  ],
  preview: {
    select: {
      mainTitle: 'mainTitle',
      mainImage: 'mainImage',
    },
    prepare({mainTitle, mainImage}) {
      return {
        title: mainTitle ? mainTitle.split('\n')[0] : 'Untitled Hero',
        subtitle: 'Hero Section',
        media: mainImage,
      }
    },
  },
})

