export default {
    name: 'navItem',
    type: 'object',
    title: 'Navigation Item',
  
    fields: [
      { name: 'label', type: 'string', validation: Rule => Rule.required() },
  
      {
        name: 'link',
        type: 'reference',
        to: [{ type: 'page' }, { type: 'project' }, { type: 'post' }],
      },
    ],
  }
  