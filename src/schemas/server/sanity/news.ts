import { client } from '@/src/shared/lib/sanity';

export async function getListNews() {
  const query = `*[_type == 'news'] | order(_createdAt desc) {
        title,
        description,
        "slug": slug.current,
        title_image,
        content
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
