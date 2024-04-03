export default {
  name: 'news',
  type: 'document',
  title: 'News',
  fields: [
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
