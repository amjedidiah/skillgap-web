import { isAppLive } from "@/lib/constants";
import { cn } from "@/lib/utils";
import CustomLink from "@/components/shared/custom-link";

const navLinks = [
  {
    label: "Home",
    href: "home",
  },
  {
    label: "How it works",
    href: "howItWorks",
  },
  {
    label: "FAQs",
    href: "faqs",
  },
  {
    label: "Policy",
    href: "/policy",
    isSamePage: false,
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
      {navLinks.map((item) => (
        <li
          key={item.href}
          className="-tracking-[0.16px] text-grey pointer-events-auto"
        >
          <CustomLink {...item} />
        </li>
      ))}
    </ul>
  );
}
