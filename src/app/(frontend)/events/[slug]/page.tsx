import { sanityFetch } from "@/sanity/lib/live";
import { EVENT_QUERY } from "@/sanity/lib/queries";
import { toPlainText } from "@portabletext/react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventPageContent } from "./page-content";

export function generateStaticParams() {
  return [];
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const { data } = await sanityFetch({ query: EVENT_QUERY, params: { slug } });

  return {
    title: data?.title,
    description: toPlainText(data?.description ?? []),
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const { data } = await sanityFetch({ query: EVENT_QUERY, params: { slug } });
  if (!data) notFound();

  return <EventPageContent event={data} />;
}
