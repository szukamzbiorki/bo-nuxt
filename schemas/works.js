export default {
    name: 'work',
    type: 'document',
    title: 'Work',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'size',
        type: 'string',
        title: 'Size'
      },
      {
        name: 'medium',
        type: 'string',
        title: 'Medium'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'menuslot',
        type: 'string',
        title: 'Menuslot',
        description: "please provide which menu slot this is assigned to"
      },
      {
        name: 'imagesGallery',
        title: 'Images gallery',
        type: 'array',
        of: [{ type: 'image' }]
       }

    ]
  }