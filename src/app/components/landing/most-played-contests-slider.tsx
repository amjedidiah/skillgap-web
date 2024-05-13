import Image from "next/image";
import Marquee from "react-fast-marquee";

const mostPlayedContestSubCategories = [
  {
    name: "clash-royale",
    src: "https://res.cloudinary.com/dv3jszmrc/image/upload/v1715622261/image-7_ehjetk.png",
  },
  {
    name: "fortnite",
    src: "https://res.cloudinary.com/dv3jszmrc/image/upload/v1715622263/image-8_lrmnim.png",
  },
  {
    name: "apex",
    src: "https://res.cloudinary.com/dv3jszmrc/image/upload/v1715622265/image-9_jvpwyq.png",
  },
  {
    name: "clash-royale",
    src: "https://res.cloudinary.com/dv3jszmrc/image/upload/v1715622261/image-7_ehjetk.png",
  },
  {
    name: "fortnite",
    src: "https://res.cloudinary.com/dv3jszmrc/image/upload/v1715622263/image-8_lrmnim.png",
  },
  {
    name: "apex",
    src: "https://res.cloudinary.com/dv3jszmrc/image/upload/v1715622265/image-9_jvpwyq.png",
  },
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
      className="my-6 lg:my-[37px] overflow-scroll min-w-[100vw]"
    >
      {mostPlayedContestSubCategories.map(({ name, src }, i) => (
        <Image
          key={`${name}-${i}`}
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
