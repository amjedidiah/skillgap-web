"use client";
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

export default function LandingHeaderNav() {
  return (
    <ul className="flex items-center justify-center gap-4 lg:gap-8 row-start-2 col-span-2">
      {navLinks.map(({ title, href }) => (
        <li key={title}>
          <Link
            to={href}
            className="font-medium -tracking-[0.16px] text-grey cursor-pointer"
            activeClass="text-lil-dark-blue"
            smooth
            spy
            offset={104}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
