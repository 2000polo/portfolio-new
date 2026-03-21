import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

/**
 * Personal Bio schema object. Used for displaying personal biography information.
 */

export const personalBio = defineType({
  name: 'personalBio',
  title: 'Personal Bio',
  type: 'object',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'paragraph',
      title: 'Paragraph',
      type: 'text',
      description: 'Personal biography paragraph (unlimited length)',
    }),
  ],
  preview: {
    select: {
      paragraph: 'paragraph',
    },
    prepare({paragraph}) {
      return {
        title: paragraph ? paragraph.substring(0, 50) + (paragraph.length > 50 ? '...' : '') : 'Untitled Personal Bio',
        subtitle: 'Personal Bio',
      }
    },
  },
})
