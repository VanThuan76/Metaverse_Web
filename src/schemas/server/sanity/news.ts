import { client } from '@/src/shared/lib/sanity';

export async function getListNews(queryParams?: string) {
  const query = `*[_type == 'news'${queryParams ? ` && ${queryParams}` : ''}] | order(_createdAt desc) {
    "category": {
      "name": category->{name}.name,
      "ref": category._ref
    },
    title,
    description,
    "slug": slug.current,
    title_image,
    content,
    "created_at": _createdAt,
    "updated_at": _updatedAt,
  }`;
  const data = await client.fetch(query);
  return data;
}

export async function getNewsArticleBySlug(slug: string) {
  const query = `*[_type == 'news' && slug.current == '${slug}'] {
        title,
        description,
        "slug": slug.current,
        title_image,
        content
      }[0]`;
  const data = await client.fetch(query);
  return data;
}

export async function getImageDoc(refImage: string) {
  const query = `*[_id == "${refImage}"][0]`;
  const data = await client.fetch(query);
  return data;
}
