import Link from "next/link";
import ScrollLink from "@/components/shared/scroll-link";

type Rest =
  | {
      isExternal: boolean;
    }
  | {
      isSamePage: boolean;
    };

type Props = {
  href: string;
  label: string;
} & Rest;

export default function LandingFooterLink({ href, label, ...rest }: Props) {
  if ("isExternal" in rest) return <a href={href}>{label}</a>;

  if ("isSamePage" in rest && rest.isSamePage)
    return <ScrollLink to={href}>{label}</ScrollLink>;

  return <Link href={href}>{label}</Link>;
}
