import { isAppLive } from "@/lib/constants";
import { useCallback, useMemo } from "react";

export default function useAppDownloadLink() {
  const deviceType = useMemo(() => {
    if (typeof window === "undefined") return;

    const userAgent = navigator.userAgent.toLowerCase();
    if (/android/i.test(userAgent)) return "android";
    if (/iphone|ipad|ipod/i.test(userAgent)) return "ios";

    return undefined;
  }, []);

  const handleDownloadApp = useCallback(
    (type = deviceType) => {
      if (!isAppLive) return;

      const appDownloadLink =
        type === "android"
          ? "https://play.google.com/store/apps/details?id=com.sg_app"
          : "https://apps.apple.com/sg/app/singapore-covid-19-tracker/id1575660310";

      window.open(appDownloadLink, "_blank");
    },
    [deviceType]
  );

  return { handleDownloadApp };
}
