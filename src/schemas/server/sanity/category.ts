import { client } from '@/src/shared/lib/sanity';

export async function getListCategory() {
  const query = `*[_type == 'category'] | order(_createdAt desc) {
      _id,
      name,
      description,
      "created_at": _createdAt,
      "updated_at": _updatedAt,
      }`;
  const data = await client.fetch(query);
  return data;
}
