import { SGFacebook, SGLogo, SGTwitch, SGX, SGYouTube } from "@/lib/icons";
import Image from "next/image";
import ScrollLink from "@/components/shared/scroll-link";

const currentYear = new Date().getFullYear();
const useFulLinks = [
  {
    title: "Company",
    links: [
      {
        label: "How It Works",
        href: "howItWorks",
      },
      {
        label: "FAQs",
        href: "faqs",
      },
    ],
  },
  {
    title: "Policies",
    links: [
      {
        label: "Terms & conditions",
        href: "",
      },
      {
        label: "Referee Terms",
        href: "",
      },
      {
        label: "App Rules",
        href: "",
      },
      {
        label: "Code of Conduct",
        href: "",
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
  return (
    <footer className="py-10 lg:py-14">
      <div className="container flex flex-col gap-9 lg:gap-[46px]">
        <div className="grid gap-8 3xl:bg-red-500 xl:grid-cols-[auto,auto,207px]">
          <SGLogo />
          <div className="grid sm:grid-cols-3 xl:gap-[88px]">
            {useFulLinks.map(({ title, links }) => (
              <div key={title} className="flex flex-col gap-5 lg:gap-6">
                <h4 className="text-black-100 text-xl lg:text-2xl font-semibold -tracking-[0.24px]">
                  {title}
                </h4>
                <div className="flex flex-col gap-3 lg:gap-4">
                  {links.map(({ label, href, ...rest }) => (
                    <p
                      key={label}
                      className="text-grey text-lg lg:text-xl -tracking-[0.2px]"
                    >
                      {"isExternal" in rest ? (
                        <a href={href}>{label}</a>
                      ) : (
                        <ScrollLink to={href}>{label}</ScrollLink>
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 lg:gap-[14px]">
            <Image
              src="/images/app-store-download.png"
              alt="Twitter"
              width={207}
              height={70}
            />
            <Image
              src="/images/play-store-download.png"
              alt="Twitter"
              width={207}
              height={70}
            />
            <div className="flex gap-4 lg:gap-6 xl:gap-8 items-center justify-between">
              <span>
                <SGX />
              </span>
              <span>
                <SGYouTube />
              </span>
              <span>
                <SGFacebook />
              </span>
              <span>
                <SGTwitch />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-light-grey text-center py-4 lg:py-[22px] relative after:absolute after:left-0 after:right-0 after:-top-2 after:h-[1px] after:bg-black">
          <p className="text-black-100 text-lg lg:text-xl font-semibold">
            All rights reserved. ©{currentYear} Skillgap.co
          </p>
        </div>
      </div>
    </footer>
  );
}
