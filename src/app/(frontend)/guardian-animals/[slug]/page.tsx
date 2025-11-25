import { sanityFetch } from "@/sanity/lib/live";
import { JOURNEY_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { JourneyPageContent } from "./page-content";

export function generateStaticParams() {
  return [];
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const { data } = await sanityFetch({
    query: JOURNEY_QUERY,
    params: { slug },
  });

  return {
    title: `Meet ${data?.title} - Guardian Animals`,
  };
}

export default async function GuardianPage({ params }: Props) {
  const { slug } = await params;
  const { data } = await sanityFetch({
    query: JOURNEY_QUERY,
    params: { slug },
  });
  if (!data) notFound();

  return <JourneyPageContent journey={data} />;
}
