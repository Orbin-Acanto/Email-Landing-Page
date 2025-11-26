"use client";

import React from "react";

interface ServiceItem {
  title: string;
  description: string;
  images: string[];
  subDescription?: string;
  bullet?: string[];
  subDescription2?: string;
}

interface ServiceSectionProps {
  items: ServiceItem[];
}

const ServiceCard: React.FC<{
  item: ServiceItem;
  isImageLeft: boolean;
}> = ({ item, isImageLeft }) => {
  const imageSrc = item.images?.[0];

  return (
    <div
      className={`flex flex-col ${
        isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-0 lg:items-stretch`}
    >
      <div className="relative w-full lg:w-1/2">
        <div className="relative min-h-[260px] h-full overflow-hidden bg-black">
          {imageSrc && (
            <img
              src={imageSrc}
              className="h-full w-full object-cover"
              alt={item.title}
            />
          )}
        </div>
      </div>

      <div className="flex w-full items-center bg-gray-50 lg:w-1/2">
        <div className="w-full px-8 py-8 lg:px-16 lg:py-16">
          <h2 className="mb-6 text-3xl md:text-3xl lg:text-4xl xl:text-[2.8rem] text-gray-900 font-custom">
            {item.title}
          </h2>

          <p
            className="text-base leading-relaxed text-gray-600 lg:text-lg"
            dangerouslySetInnerHTML={{ __html: item.description }}
          />

          {item.subDescription && (
            <p
              className="mt-4 text-base leading-relaxed text-gray-600 lg:text-lg"
              dangerouslySetInnerHTML={{ __html: item.subDescription }}
            />
          )}

          {item.bullet && item.bullet.length > 0 && (
            <ul className="mt-4 mb-4 list-disc list-inside space-y-1 text-base leading-relaxed text-gray-600 lg:text-lg">
              {item.bullet.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          )}

          {item.subDescription2 && (
            <p className="mt-2 mb-0 text-base leading-relaxed text-gray-600 lg:text-lg">
              {item.subDescription2}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export const ServiceSection: React.FC<ServiceSectionProps> = ({ items }) => {
  return (
    <section className="w-full">
      {items.map((item, index) => {
        const isImageLeft = index % 2 === 0;
        return (
          <ServiceCard key={index} item={item} isImageLeft={isImageLeft} />
        );
      })}
    </section>
  );
};
