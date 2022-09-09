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
        name: 'imagesGallery',
        title: 'Images gallery',
        type: 'array',
        of: [{ type: 'image' }]
       }

    ]
  }