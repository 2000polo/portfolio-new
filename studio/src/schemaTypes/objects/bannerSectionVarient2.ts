import {defineField, defineType} from 'sanity'
import {ThListIcon} from '@sanity/icons'

export const bannerSectionVarient2 = defineType({
  name: 'bannerSectionVarient2',
  title: 'Banner Section Varient 2',
  type: 'object',
  icon: ThListIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
  preview: {
    select: {
      heading: 'heading',
      description: 'description',
      image: 'image',
    },
    prepare({heading, description, image}) {
      return {
        title: heading ? heading.substring(0, 50) + (heading.length > 50 ? '...' : '') : 'Untitled Banner Section Varient 1',
        subtitle: description ? description.substring(0, 50) + (description.length > 50 ? '...' : '') : 'Untitled Banner Section Varient 1',
        media: image,
      }
    },
  },
})