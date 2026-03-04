import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export function getPageContent(slug: string) {
  const fullPath = path.join(contentDirectory, 'pages', `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { data, content };
}

export async function getPageContentWithHtml(slug: string) {
  const { data, content } = getPageContent(slug);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return { data, contentHtml };
}

export function getCollectionItems(collection: string) {
  const dir = path.join(contentDirectory, collection);
  if (!fs.existsSync(dir)) return [];
  const filenames = fs.readdirSync(dir);
  const items = filenames
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const fullPath = path.join(dir, name);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      return {
        slug: name.replace(/\.md$/, ''),
        data,
        content,
      };
    });
  return items;
}

export async function getCollectionItemsWithHtml(collection: string) {
  const items = getCollectionItems(collection);
  const itemsWithHtml = await Promise.all(
    items.map(async (item) => {
      const processedContent = await remark().use(html).process(item.content);
      return {
        ...item,
        contentHtml: processedContent.toString(),
      };
    })
  );
  return itemsWithHtml;
}

export function getCollectionItem(collection: string, slug: string) {
  const fullPath = path.join(contentDirectory, collection, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug, data, content };
}

export async function getCollectionItemWithHtml(collection: string, slug: string) {
  const { slug: s, data, content } = getCollectionItem(collection, slug);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return { slug: s, data, contentHtml };
}
