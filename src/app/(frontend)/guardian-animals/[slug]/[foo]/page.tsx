import { sanityFetch } from "@/sanity/lib/live";
import { JOURNEY_QUERY } from "@/sanity/lib/queries";
import { JOURNEY_UPDATE_QUERYResult } from "@/sanity/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { JourneyUpdatePageContent } from "./page-content";

export function generateStaticParams() {
  return [];
}

type Props = {
  params: Promise<{ slug: string; foo: string }>;
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
  const { slug, foo } = await params;
  const { data } = await sanityFetch({
    query: JOURNEY_QUERY,
    params: { slug },
  });
  if (!data) notFound();
  if (!data.latestUpdates || data.latestUpdates.length === 0) {
    notFound();
  }
  const update = data.latestUpdates.find(
    (update) => foo === update.slug?.current,
  ) as JOURNEY_UPDATE_QUERYResult | undefined;
  if (!update) notFound();

  return <JourneyUpdatePageContent journey={data} update={update} />;
}
