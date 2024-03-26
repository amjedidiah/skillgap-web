import LandingHeader from "@/components/landing/landing-header";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <LandingHeader />
      <main>
        <section id="home" />
        <section id="howItWorks" />
        <section id="faqs" />
      </main>
    </Fragment>
  );
}
