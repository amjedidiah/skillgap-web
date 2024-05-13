import SectionHeader from "@/components/shared/section-header";
import MostPlayedContestsSlider from "@/components/landing/most-played-contests-slider";

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
        <MostPlayedContestsSlider />
      </div>
    </section>
  );
}
