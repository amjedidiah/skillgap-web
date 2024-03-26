import { isAppLive } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Link } from "react-scroll";

const navLinks = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "How it works",
    href: "howItWorks",
  },
  {
    title: "FAQs",
    href: "faqs",
  },
];

type Props = {
  isOpen: boolean;
};

export default function LandingHeaderNav({ isOpen }: Props) {
  return (
    <ul
      className={cn(
        {
          "max-sm:hidden": !isOpen,
          "max-sm:fixed right-0 left-0 top-[104px] max-sm:bg-white max-sm:py-4 max-sm:px-6 max-sm:flex-col max-sm:items-end max-sm:shadow-md":
            isOpen,
          "sm:absolute sm:right-0 sm:left-0 sm:top-0 sm:bottom-0 pointer-events-none":
            isAppLive,
        },
        "flex items-center justify-center gap-4 lg:gap-8"
      )}
    >
      {navLinks.map(({ title, href }) => (
        <li key={title}>
          <Link
            to={href}
            className="-tracking-[0.16px] text-grey cursor-pointer pointer-events-auto"
            activeClass="text-lil-dark-blue"
            smooth
            spy
            offset={-104}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
