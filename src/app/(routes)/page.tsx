import HowItWorks from "@/components/landing/how-it-works";
import LandingHeader from "@/components/landing/landing-header";
import LandingJumbo from "@/components/landing/landing-jumbo";
import MostPlayedContent from "@/components/landing/most-played-content";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <LandingHeader />
      <main className="pt-[104px]">
        <LandingJumbo />
        <HowItWorks />
        <MostPlayedContent />
        <section id="faqs" />
      </main>
    </Fragment>
  );
}
