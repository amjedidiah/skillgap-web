import AppRules from "@/components/policy/app-rules";
import CodeOfConduct from "@/components/policy/code-of-conduct";
import PolicyHeader from "@/components/policy/policy-header";
import PolicyNavigator from "@/components/policy/policy-navigator";
import FooterContainer from "@/components/shared/footer-container";
import { Fragment } from "react";

export default function Policy() {
  return (
    <Fragment>
      <PolicyHeader />
      <div className="container grid md:grid-cols-[auto,1fr] gap-10 lg:gap-20 relative h-fit mt-[104px]">
        <PolicyNavigator className="max-md:hidden" />
        <section className="h-full">
          <div id="home" />
          <AppRules />
          <CodeOfConduct />
        </section>
      </div>
      <FooterContainer />
    </Fragment>
  );
}
