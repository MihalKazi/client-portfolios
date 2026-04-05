export const investigation = {
  name: 'investigation',
  title: 'Investigations & Case Files',
  type: 'document',
  fields: [
    {
      name: 'fileId',
      title: 'File ID (e.g. "FILE-892")',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Status (e.g. "Active Monitoring" or "Declassified")',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
    },
    {
      name: 'link',
      title: 'Project Link URL',
      type: 'url',
    }
  ],
}