import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { scroller } from "react-scroll";

export default function useScrollToSection() {
  const searchParams = useSearchParams();
  const urlSection = searchParams.get("section");
  const [section, setSection] = useState(urlSection);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    if (section)
      setTimeout(() => {
        scroller.scrollTo(section, {
          smooth: true,
          offset: -104,

          isDynamic: true,
        });

        setScrolled(true);
      }, 0);
  }, [section]);

  useEffect(() => {
    if (scrolled) {
      router.push(pathname, { scroll: false });
      setTimeout(() => setScrolled(false), 1500);
    }
  }, [pathname, router, scrolled]);

  useEffect(handleScroll, [handleScroll, section]);
}
