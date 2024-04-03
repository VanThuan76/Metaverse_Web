export default {
  name: 'news',
  type: 'document',
  title: 'Tin tức',
  fields: [
    {
      name: 'category',
      type: 'reference',
      title: 'Danh mục',
      to: [{type: 'category'}],
    },
    {
      name: 'title',
      type: 'string',
      title: 'Tiêu đề bài viết',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Đường dẫn bài viết',
      options: {
        source: 'title',
      },
    },
    {
      name: 'title_image',
      type: 'image',
      title: 'Hình ảnh',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Mô tả',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Nội dung',
      of: [
        {
          type: 'block',
        },
        {
          name: 'video',
          type: 'object',
          title: 'Video',
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'Video URL',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
        {
          type: 'image',
          title: 'Hình ảnh nội dung',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Hình ảnh nội dung',
            },
          ],
        },
      ],
    },
  ],
}
