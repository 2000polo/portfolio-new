import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

/**
 * Personal Bio schema object. Used for displaying personal biography information.
 */

export const latestPortfolio = defineType({
  name: 'latestPortfolio',
  title: 'Latest Portfolio',
  type: 'object',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Services section heading',
    }),
    defineField({
        name: 'subheading',
        title: 'Subheading',
        type: 'string',
        description: 'Services section subheading',
    }),
    defineField({  
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Services section description',
    }),
    defineField({
        name: 'portfolioItems',
        title: 'Portfolio Items',
        type: 'array',
        of: [{type: 'object', fields: [
            defineField({
                name: 'name',
                title: 'Portfolio Item Name',
                type: 'string',
                description: 'Portfolio item name',
            }),
            defineField({
                name: 'description',
                title: 'Portfolio Item Description',
                type: 'text',
                description: 'Portfolio item description',
            }),
            defineField({
                name: 'image',
                title: 'Portfolio Item Image',
                type: 'image',
                description: 'Portfolio item image',
            }),
        ]}],
        description: 'Services section services',
    })
  ],
  preview: {
    select: {
      heading: 'heading',
      subheading: 'subheading',
    },
    prepare({heading, subheading}) {
      return {
        title: heading ? heading.substring(0, 50) + (heading.length > 50 ? '...' : '') : 'Untitled Services Section',
        subtitle: subheading ? subheading.substring(0, 50) + (subheading.length > 50 ? '...' : '') : 'Untitled Services Section',
      }
    },
  },
})
