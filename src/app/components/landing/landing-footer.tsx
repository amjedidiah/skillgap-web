import Image from "next/image";
import ScrollLink from "@/components/shared/scroll-link";
import { isAppLive, socialMediaLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import ShouldRender from "@/components/shared/should-render";
import CustomLink from "@/components/shared/custom-link";
import FooterContainer from "@/components/shared/footer-container";

const useFulLinks = [
  {
    title: "Company",
    links: [
      {
        label: "How It Works",
        href: "howItWorks",
        isSamePage: true,
      },
      {
        label: "FAQs",
        href: "faqs",
        isSamePage: true,
      },
    ],
  },
  {
    title: "Policy",
    links: [
      // {
      //   label: "Terms & conditions",
      //   href: "/terms",
      // },
      // {
      //   label: "Referee Terms",
      //   href: "",
      // },
      {
        label: "App Rules",
        href: "/policy/?section=appRules",
        isSamePage: false,
      },
      {
        label: "Code of Conduct",
        href: "/policy/?section=codeOfConduct",
        isSamePage: false,
      },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        label: "admin@skillgap.co",
        href: "mailto:admin@skillgap.co",
        isExternal: true,
      },
      {
        label: "+234 90 3972 8166",
        href: "tel:+2349039728166",
        isExternal: true,
      },
    ],
  },
];

export default function LandingFooter() {
  const showLastColumn = isAppLive || Boolean(socialMediaLinks.length);

  return (
    <FooterContainer className="lg:py-14">
      <div
        className={cn(
          "grid gap-6 lg:gap-10 xl:gap-[88px] sm:grid-cols-[144px,1fr]",
          {
            "lg:grid-cols-[80px,1fr,207px]": showLastColumn,
            "lg:grid-cols-[80px,1fr]": !showLastColumn,
          }
        )}
      >
        <ScrollLink to="home">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="rounded-lg xl:rounded-xl lg:w-[75px]"
          />
        </ScrollLink>
        <div className="flex max-sm:flex-col sm:justify-between gap-5 lg:gap-8 xl:gap-[88px]">
          {useFulLinks.map(({ title, links }) => (
            <div key={title} className="flex flex-col gap-3 lg:gap-6 w-fit">
              <h4 className="text-black-100 text-xl lg:text-2xl font-semibold -tracking-[0.24px]">
                {title}
              </h4>
              <div className="flex flex-col gap-2 lg:gap-4">
                {links.map((item) => (
                  <p
                    key={item.label}
                    className="text-grey text-lg lg:text-xl -tracking-[0.2px]"
                  >
                    <CustomLink {...item} />
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <ShouldRender condition={showLastColumn}>
          <div className="flex flex-col-reverse sm:max-lg:flex-row-reverse lg:flex-col sm:justify-between sm:max-lg:items-center gap-3 sm:max-lg:col-span-2">
            {isAppLive && (
              <div className="flex flex-col sm:max-lg:flex-row-reverse sm:flex-1 gap-3">
                <Image
                  src="/images/app-store-download.png"
                  alt="App Store download"
                  width={207}
                  height={70}
                  className="max-lg:w-48"
                />
                <Image
                  src="/images/play-store-download.png"
                  alt="Play store download"
                  width={207}
                  height={70}
                  className="max-lg:w-48"
                />
              </div>
            )}
            {Boolean(socialMediaLinks.length) && (
              <div className="flex gap-4 lg:gap-6 xl:gap-8 items-center">
                {socialMediaLinks.map(({ Icon, name, href }) => (
                  <span key={name}>
                    <a href={href} className="text-2xl" target="_blank">
                      <span className="hidden">{name}</span>
                      <Icon />
                    </a>
                  </span>
                ))}
              </div>
            )}
          </div>
        </ShouldRender>
      </div>
    </FooterContainer>
  );
}
