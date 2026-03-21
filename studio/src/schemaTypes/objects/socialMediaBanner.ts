import {defineField, defineType} from 'sanity'
import {ThListIcon} from '@sanity/icons'

export const socialMediaBanner = defineType({
  name: 'socialMediaBanner',
  title: 'Social Media Banner',
  type: 'object',
  icon: ThListIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Social Media Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              title: 'Social Media Link',
              type: 'url',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'category',
              media: 'icon',
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1).error('At least one skill is required'),
    }),
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

