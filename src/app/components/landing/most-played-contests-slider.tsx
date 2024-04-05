import Image from "next/image";
import Marquee from "react-fast-marquee";

const mostPlayedContestSubCategories = [
  { name: "clash-royale", src: "/images/most-played/image-7.png" },
  { name: "fortnite", src: "/images/most-played/image-8.png" },
  { name: "apex", src: "/images/most-played/image-9.png" },
  { name: "clash-royale", src: "/images/most-played/image-7.png" },
  { name: "fortnite", src: "/images/most-played/image-8.png" },
  { name: "apex", src: "/images/most-played/image-9.png" },
];

export default function MostPlayedContestsSlider() {
  return (
    <Marquee
      autoFill
      pauseOnHover
      pauseOnClick
      speed={100}
      gradient
      gradientColor="rgba(255,218,68,1)"
      className="py-6 lg:py-[37px] overflow-scroll min-w-[100vw]"
    >
      {mostPlayedContestSubCategories.map(({ name, src }) => (
        <Image
          key={name}
          src={src}
          alt={name}
          width={382}
          height={390}
          className="max-lg:w-[231px] shadow-lg mx-3"
        />
      ))}
      <div className="flex-shrink-0 basis-1/6 2xl:basis-1/2 h-20" />
    </Marquee>
  );
}