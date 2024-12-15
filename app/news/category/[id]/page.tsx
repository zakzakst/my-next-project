import NewsList from "@/app/_components/NewsList";
import Category from "@/app/_components/Category";
import Pagination from "@/app/_components/Pagination";
import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import { NEWS_LIST_LIMIT } from "@/app/_contents";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const category = await getCategoryDetail(id).catch(notFound);

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });

  return (
    <>
      <p>
        <Category category={category} /> の一覧
      </p>
      <NewsList news={news} />
      <Pagination
        totalCount={totalCount}
        basePath={`/news/category/${category.id}`}
      />
    </>
  );
}
