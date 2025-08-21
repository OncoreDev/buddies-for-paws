import { PortableText } from "@portabletext/react";

interface WysiwygProps {
  content: any[];
}

export const Wysiwyg: React.FC<WysiwygProps> = ({ content }) => {
  return (
    <PortableText
      value={content ?? []}
      components={{
        block: {
          h1: ({ children }) => (
            <h1 className="font-cooper text-orange my-6 text-4xl font-bold">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="font-cooper text-orange my-5 text-3xl font-semibold">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="font-cooper text-orange my-4 text-2xl font-semibold">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="font-cooper text-orange my-3 text-xl font-semibold">
              {children}
            </h4>
          ),
          h5: ({ children }) => (
            <h5 className="font-cooper text-orange my-2 text-lg font-medium">
              {children}
            </h5>
          ),
          h6: ({ children }) => (
            <h6 className="font-cooper text-orange my-1 text-base font-medium">
              {children}
            </h6>
          ),
          normal: ({ children }) => <p className="my-3">{children}</p>,
          blockquote: ({ children }) => (
            <blockquote className="border-border my-4 border-l-4 pl-4 italic">
              {children}
            </blockquote>
          ),
        },
        list: {
          bullet: ({ children }) => (
            <ul className="my-4 list-inside list-disc space-y-2">{children}</ul>
          ),
          number: ({ children }) => (
            <ol className="my-4 list-inside list-decimal space-y-2">
              {children}
            </ol>
          ),
        },
        listItem: {
          bullet: ({ children }) => <li>{children}</li>,
          number: ({ children }) => <li>{children}</li>,
        },
        marks: {
          strong: ({ children }) => (
            <strong className="font-bold">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          link: ({ children, value }) => (
            <a
              href={value.href}
              className="text-orange underline"
              target={value.blank ? "_blank" : "_self"}
              rel="noreferrer"
            >
              {children}
            </a>
          ),
        },
        types: {
          image: ({ value }) => {
            if (!value?.asset?.url) return null;

            // Check orientation using metadata dimensions
            const isLandscape =
              value.asset.metadata?.dimensions?.width >
              value.asset.metadata?.dimensions?.height;

            return (
              <figure className="relative my-6 w-full">
                <div className="relative overflow-hidden rounded-lg">
                  {/* Blurred background */}
                  <div
                    className={`absolute inset-0 scale-105 bg-cover bg-center blur-lg filter ${
                      isLandscape ? "" : "h-[500px]"
                    }`}
                    style={{ backgroundImage: `url(${value.asset.url})` }}
                  />

                  {/* Main image */}
                  <img
                    src={value.asset.url}
                    alt={value.alt || ""}
                    className={`relative w-full rounded-lg object-contain ${
                      !isLandscape ? "max-h-[500px]" : ""
                    }`}
                  />
                </div>

                {value.credits && (
                  <figcaption className="text-muted-foreground relative z-10 mt-2 text-sm">
                    {value.credits}
                  </figcaption>
                )}
              </figure>
            );
          },
        },
      }}
    />
  );
};
