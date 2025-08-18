import { sanityFetch } from "@/sanity/lib/live";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsPageContent } from "./page-content";
import { NEWS_QUERY } from "@/sanity/lib/queries";

export function generateStaticParams() {
  return [];
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const { data } = await sanityFetch({ query: NEWS_QUERY, params: { slug } });

  return {
    title: data?.title,
  };
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const { data } = await sanityFetch({ query: NEWS_QUERY, params: { slug } });
  if (!data) notFound();

  return <NewsPageContent news={data} />;
}
