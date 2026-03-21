export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
  
    fields: [
      {
        name: 'logo',
        type: 'image',
        title: 'Site Logo',
        options: { hotspot: true },
      },
  
      {
        name: 'footerText',
        type: 'text',
        title: 'Footer Text',
      },
  
      {
        name: 'socialLinks',
        type: 'array',
        of: [{ type: 'socialLink' }],
      },
    ],
  }
  