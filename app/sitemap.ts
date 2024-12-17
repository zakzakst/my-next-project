import { MetadataRoute } from "next";
import { getAllNewsList, getAllCategoryList } from "./_libs/microcms";

const buildUrl = (path?: string) => `http://localhost:3000${path ?? ""}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const newsContents = await getAllNewsList();
  const categoryContents = await getAllCategoryList();

  const newsUrls: MetadataRoute.Sitemap = newsContents.map((content) => ({
    url: buildUrl(`/news/${content.id}`),
    lastModified: content.revisedAt,
  }));
  const categoryUrls: MetadataRoute.Sitemap = categoryContents.map(
    (contents) => ({
      url: buildUrl(`/news/category/${contents.id}`),
      lastModified: contents.revisedAt,
    })
  );

  const now = new Date();

  return [
    {
      url: buildUrl(),
      lastModified: now,
    },
    {
      url: buildUrl("/members"),
      lastModified: now,
    },
    {
      url: buildUrl("/contact"),
      lastModified: now,
    },
    {
      url: buildUrl("/news"),
      lastModified: now,
    },
    ...newsUrls,
    ...categoryUrls,
  ];
}
