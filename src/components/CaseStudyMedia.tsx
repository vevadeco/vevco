import Image from "next/image";

export function Shot({
  src,
  alt,
  width,
  height,
  caption,
  size = "full",
  crop,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  size?: "full" | "small";
  crop?: "top-strip";
}) {
  return (
    <figure className={size === "small" ? "max-w-xl" : "w-full"}>
      {crop === "top-strip" ? (
        <div className="relative aspect-[12/1] overflow-hidden rounded-2xl border border-border bg-white">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover object-top"
          />
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={
            size === "small"
              ? "(max-width: 768px) 100vw, 36rem"
              : "(max-width: 768px) 100vw, 768px"
          }
          className="h-auto w-full rounded-2xl border border-border bg-white"
        />
      )}
      {caption ? (
        <figcaption className="mt-2 text-sm text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function Walkthrough({ id, title }: { id: string; title: string }) {
  return (
    <iframe
      src={`https://player.vimeo.com/video/${id}`}
      title={title}
      loading="lazy"
      allow="fullscreen; picture-in-picture"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
      className="aspect-video w-full rounded-2xl border border-border bg-black"
    />
  );
}
