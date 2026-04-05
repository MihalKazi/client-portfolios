export const header = {
  name: 'header',
  title: 'Hero / Header Details',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Main Name (e.g. "MINHAJ AMAN.")',
      type: 'string',
    },
    {
      name: 'fileNumber',
      title: 'File Number (e.g. "MA-01")',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Status (e.g. "Active")',
      type: 'string',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
    },
    // --- NEW: This adds the list of roles to your dashboard! ---
    {
      name: 'roles',
      title: 'Cycling Roles (Current / Ongoing things)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'meta', title: 'Meta (e.g., "Current // Research Focus")', type: 'string' },
            { name: 'title', title: 'Role Title (e.g., "Digital Rights Researcher")', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' }
          ]
        }
      ]
    }
  ],
}