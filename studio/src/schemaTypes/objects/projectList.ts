import {defineField, defineType} from 'sanity'
import {ThListIcon} from '@sanity/icons'

export const projectList = defineType({
  name: 'projectList',
  title: 'Project List',
  type: 'object',
  icon: ThListIcon,
  fields: [
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{type: 'object', fields: [
        defineField({
          name: 'projectName',
          title: 'Project Name',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Project Description',
          type: 'text',
        }),
        defineField({
          name: 'image',
          title: 'Project Image',
          type: 'image',
        }),
        defineField({
          name: 'link',
          title: 'Project Link',
          type: 'link',
        }),
        defineField({
          name: 'gallery',
          title: 'Project Gallery',
          type: 'array',
          of: [{type: 'image'}],
        }),
      ]}],
    }),
  ],
  preview: {
    select: {
      projects: 'projects',
    },
    prepare({projects}) {
      return {
        title: projects.length > 0 ? projects[0].projectName : 'Untitled Project List',
      }
    },
  },
})