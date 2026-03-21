import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const latestBlogsSection = defineType({
  name: 'latestBlogsSection',
  title: 'Latest Blogs Section',
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
        name: 'blogs',
        title: 'Blogs',
        type: 'array',
        of: [{type: 'object', fields: [
            defineField({
                name: 'name',
                title: 'Blog Name',
                type: 'string',
                description: 'Name of the blog',
            }),
            defineField({
                name: 'blogTeaser',
                title: 'Blog Teaser',
                type: 'text',
                description: 'Teaser for the blog card',
            }),
            defineField({
                name: 'blogCardImage',
                title: 'Blog Card Image',
                type: 'image',
                description: 'Blog card image',
            }),
        ]}],
        description: 'Blog card section',
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
