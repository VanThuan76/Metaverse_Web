export interface INews {
  category: { name: string; ref: string };
  slug: string;
  title_image: Titleimage;
  content: Content[];
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

interface Content {
  markDefs: any[];
  children: Child[];
  level: number;
  _type: string;
  style: string;
  _key: string;
  listItem: string;
}

interface Child {
  _type: string;
  marks: string[];
  text: string;
  _key: string;
}

interface Titleimage {
  asset: Asset;
  _type: string;
}

interface Asset {
  _ref: string;
  _type: string;
}
