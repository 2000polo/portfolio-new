import {defineField, defineType} from 'sanity'
import {ThListIcon} from '@sanity/icons'

/**
 * Skills Grid schema object. Used for displaying skills in a card grid layout.
 */

export const skillsGrid = defineType({
  name: 'skillsGrid',
  title: 'Skills Grid',
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
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Skill Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'level',
              title: 'Proficiency Level',
              type: 'string',
              options: {
                list: [
                  {title: 'Beginner', value: 'beginner'},
                  {title: 'Intermediate', value: 'intermediate'},
                  {title: 'Advanced', value: 'advanced'},
                  {title: 'Expert', value: 'expert'},
                ],
              },
            }),
            defineField({
              name: 'category',
              title: 'Category',
              type: 'string',
              options: {
                list: [
                  {title: 'Frontend', value: 'frontend'},
                  {title: 'Backend', value: 'backend'},
                  {title: 'Full Stack', value: 'fullstack'},
                  {title: 'DevOps', value: 'devops'},
                  {title: 'Design', value: 'design'},
                  {title: 'Other', value: 'other'},
                ],
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

