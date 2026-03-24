import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

/**
 * Personal Bio schema object. Used for displaying personal biography information.
 */

export const servicesSection = defineType({
  name: 'servicesSection',
  title: 'Services Section',
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
        name: 'cta',
        title: 'Services CTA',
        type: 'number',
        description: 'Services section CTA',
    }),
    defineField({
        name: 'services',
        title: 'Services',
        type: 'array',
        of: [{type: 'object', fields: [
            defineField({
                name: 'name',
                title: 'Service Name',
                type: 'string',
                description: 'Service name',
            }),
            defineField({
                name: 'description',
                title: 'Service Description',
                type: 'text',
                description: 'Service description',
            }),
            defineField({
                name: 'icon',
                title: 'Service Icon',
                type: 'string',
                description: 'Service icon (e.g., fa-paint-brush)',
            }),
        ]}],
        description: 'Services section services',
    })
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subheading',
    },
    prepare({title}) {
      return {
        title: title || 'Untitled Skills Grid',
        subtitle: 'Skills Grid',
      }
    },
  },
})
