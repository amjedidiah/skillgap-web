import { cn } from "@/lib/utils";
import Link from "next/link";
import ScrollLink from "@/components/shared/scroll-link";
import DownloadAppButton from "@/components/shared/download-app-button";

type Props = {
  isOpen: boolean;
};

export default function PolicyHeaderNav({ isOpen }: Props) {
  return (
    <ul
      className={cn(
        {
          "max-md:hidden": !isOpen,
          "max-md:fixed right-0 left-0 top-[104px] max-md:bg-white max-md:py-4 max-md:px-6 max-md:flex-col max-md:items-end max-md:shadow-md":
            isOpen,
        },
        "flex md:flex-row-reverse items-center justify-center gap-4 lg:gap-8"
      )}
    >
      <li>
        <Link
          href="/"
          className="-tracking-[0.16px] text-grey pointer-events-auto"
          scroll={false}
        >
          Website Home
        </Link>
      </li>
      <li>
        <ScrollLink
          to="appRules"
          className="-tracking-[0.16px] text-grey pointer-events-auto md:hidden"
        >
          App Rules
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="codeOfConduct"
          className="-tracking-[0.16px] text-grey pointer-events-auto md:hidden"
        >
          Code of Conduct
        </ScrollLink>
      </li>
      <DownloadAppButton className="md:hidden py-[10px]" />
    </ul>
  );
}
