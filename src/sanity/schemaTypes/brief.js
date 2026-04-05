export const brief = {
  name: 'brief',
  title: 'Subject Brief (About Section)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Subject Brief',
    },
    {
      name: 'content',
      title: 'Brief Content',
      type: 'text',
      description: 'Write your about text here. To REDACT a word or phrase, wrap it in square brackets like this: I am based in [Dhaka, Bangladesh].',
    }
  ]
}