import { CollectionConfig } from 'payload/types'

const Posts: CollectionConfig = {
  slug: 'posts',
  // auth: true,
  // admin: {
  //   useAsTitle: 'email',
  // },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      
      required: true,
    },
  ],
}

export default Posts
