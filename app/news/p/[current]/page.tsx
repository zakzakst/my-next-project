import { notFound } from "next/navigation";
import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_contents";

type Props = {
  params: {
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const { current } = await params;
  const currentInt = parseInt(current, 10);

  if (Number.isNaN(currentInt) || currentInt < 1) {
    notFound();
  }

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (currentInt - 1),
  });

  if (news.length === 0) {
    notFound();
  }

  return (
    <>
      <NewsList news={news} />
      <Pagination totalCount={totalCount} current={currentInt} />
    </>
  );
}
