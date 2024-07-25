import React, { ReactNode } from "react";

type IImageCard = {
  src: string;
  href?: string;
  alt?: string;
  platform?: {
    name: string;
    url: string;
    svg?: ReactNode;
  };
  creator?: {
    name: string;
    url: string;
  };
};

export default function ImageCard({
  src,
  href,
  alt,
  platform,
  creator,
}: IImageCard) {
  return (
    <div className="image-card group relative flex flex-col w-full rounded-xl overflow-hidden hover:cursor-pointer ">
      <a href={href} target="_blank" className="w-full h-full">
        <img src={src} className="object-cover h-[100%] w-[100%]" alt={alt} />

        <div className="absolute top-0 left-0 h-full w-full opacity-0 transition-opacity duration-100 bg-secondary bg-opacity-40 z-0 rounded-xl group-hover:opacity-100"></div>
      </a>
      {platform?.svg && (
        <div className="absolute top-4 left-4 bg-white bg-opacity-30 rounded-full p-3">
          <a href={platform?.url} target="_blank">
            {platform.svg}
          </a>
        </div>
      )}
      <div className="absolute bottom-2 right-2 px-2 py-1 rounded-full">
        {creator && platform && (
          <a
            href={creator?.url}
            target="_blank"
            className="underline text-blue-300"
          >
            {creator?.name}
          </a>
        )}
      </div>
    </div>
  );
}
