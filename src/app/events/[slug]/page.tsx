import { EVENTS_CONFIG } from "@/lib/events-config";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { EventPageContent } from "./page-content";

export async function generateStaticParams() {
  return EVENTS_CONFIG.map((post) => ({
    slug: post.route,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = (await params).slug;
  const event = EVENTS_CONFIG.find((e) => e.route === slug);

  return {
    title: event?.title,
    description: event?.description,
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const data = EVENTS_CONFIG.find((e) => e.route === slug);

  if (!data) notFound();
  return <EventPageContent event={data} />;
}
