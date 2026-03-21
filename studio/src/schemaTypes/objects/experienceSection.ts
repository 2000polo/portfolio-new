import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const experienceSection = defineType({
    name: 'experienceSection',
    title: 'Experience Section',
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
            name: 'expCards',
            title: 'Experience Cards',
            type: 'array',
            of: [{type: 'object', fields: [
                defineField({
                    name: 'cardTitle',
                    title: 'Card Title',
                    type: 'string',
                    description: 'Card title for expeirence card'
                }),
                defineField({
                    name: 'quantityRepresentation',
                    title: 'Quantity Representation',
                    type: 'string',
                }),
                defineField({
                    name: 'description',
                    title: 'Exp Item description',
                    type: 'string'
                })
            ]}],
            
            description: 'Services section CTA',
        }),
        defineField({
            name: 'organisations',
            title: 'Organisations',
            type: 'array',
            of: [{type: 'object', fields: [
                defineField({
                    name: 'organisationLogo',
                    title: 'Organisation Logo',
                    type: 'image',
                }),
                defineField({
                    name: 'websiteLink',
                    title: 'Website Link',
                    type: 'url',
                })
            ]}]
        }),
        defineField({
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{type: 'object', fields: [
                defineField({
                    name: 'technologyName',
                    title: 'Technology Name',
                    type: 'string',
                    description: 'Technology name',
                }),
                defineField({
                    name: 'techIcon',
                    title: 'Technology Icon',
                    type: 'image',
                    description: 'Technology icon',
                })
            ]}],
        })
    ],
    preview: {
        select: {
        title: 'heading',
        subtitle: 'subheading',
        },
        prepare({title}) {
        return {
            title: title || 'Experience Section',
            subtitle: 'add the experience details like skill and org.',
        }
        },
    },
})
