import { cn } from "@/lib/utils";
import { RiListOrdered } from "react-icons/ri";

type Props = {
  center?: boolean;
};

const waitlistLink = "https://forms.gle/P1EdvrdAThYWxso26";

export default function AppIsComingSoon({ center }: Props) {
  return (
    <div
      className={cn("flex flex-col gap-2", {
        "items-center": center,
      })}
    >
      <p className="w-fit text-lil-dark-blue text-sm -tracking-[0.14px] py-[10px] px-4 rounded-3xl bg-lil-dark-blue-100 font-semibold">
        App is coming soon
      </p>
      <a href={waitlistLink} className="rounded-[2rem]" target="_blank">
        <button className="w-fit flex items-center gap-[10px] py-3 px-6 rounded-[2rem] border border-lil-dark-blue text-lil-dark-blue -tracking-[0.16px]">
          <span>
            <RiListOrdered />
          </span>
          <span>Join waitlist</span>
        </button>
      </a>
    </div>
  );
}
