// src/sanity/schemaTypes/methodology.js
export const methodology = {
  name: 'methodology',
  title: 'Methodology & Skills',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'Category ID (e.g., "MTH-01")',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Category Title (e.g., "Research Methods")',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Display Order (e.g. 1, 2, 3)',
      type: 'number',
      description: 'Used to sort the categories from left to right',
    },
    {
      name: 'items',
      title: 'Skill Items',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add individual skills or methods here',
    }
  ],
}