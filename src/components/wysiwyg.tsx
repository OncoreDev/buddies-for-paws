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
          image: ({ value }) =>
            value?.asset?.url ? (
              <img
                src={value.asset.url}
                alt={value.alt || ""}
                className="my-6 w-full rounded-lg"
              />
            ) : null,
        },
      }}
    />
  );
};
