import Motivations from "@/components/landing/motivations";
import LandingHeader from "@/components/landing/landing-header";
import LandingJumbo from "@/components/landing/landing-jumbo";
import MostPlayedContests from "@/components/landing/most-played-contests";
import { Fragment } from "react";
import HowItWorks from "@/components/landing/how-it-works";
import FAQs from "@/components/landing/faqs";

export default function Home() {
  return (
    <Fragment>
      <LandingHeader />
      <main className="pt-[104px]">
        <LandingJumbo />
        <Motivations />
        <MostPlayedContests />
        <HowItWorks />
        <FAQs />
      </main>
    </Fragment>
  );
}
