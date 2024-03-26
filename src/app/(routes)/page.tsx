import LandingHeader from "@/components/landing/landing-header";
import LandingJumbo from "@/components/landing/landing-jumbo";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <LandingHeader />
      <main className="pt-[104px]">
        <LandingJumbo />
        <section id="howItWorks" />
        <section id="faqs" />
      </main>
    </Fragment>
  );
}
