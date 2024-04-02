import Image from "next/image";
import SectionHeader from "@/components/shared/section-header";

const mostPlayedContestSubCategories = [
  { name: "clash-royale", src: "/images/most-played/image-7.png" },
  { name: "fortnite", src: "/images/most-played/image-8.png" },
  { name: "apex", src: "/images/most-played/image-9.png" },
  { name: "clash-royale", src: "/images/most-played/image-7.png" },
  { name: "fortnite", src: "/images/most-played/image-8.png" },
  { name: "apex", src: "/images/most-played/image-9.png" },
];

export default function MostPlayedContests() {
  return (
    <section className="py-10 lg:pt-14 lg:pb-7 bg-yellow-2 flex flex-col gap-7 lg:gap-10 overflow-hidden">
      <div className="container">
        <SectionHeader
          title="Most Played Contests"
          className="text-black-100"
          pad
        />
      </div>
      <div className="container overflow-x-visible">
        <div className="flex gap-6 items-center py-6 lg:py-[37px] overflow-scroll min-w-[100vw]">
          {mostPlayedContestSubCategories.map(({ name, src }) => (
            <div
              className="most-played-image-container flex-shrink-0 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-[382px] shadow-lg relative"
              key={name}
            >
              <div className="cover absolute w-full h-full" />
              <Image src={src} alt={name} width={382} height={390} />
            </div>
          ))}
          <div className="flex-shrink-0 basis-1/6 2xl:basis-1/2 h-20" />
        </div>
      </div>
    </section>
  );
}
