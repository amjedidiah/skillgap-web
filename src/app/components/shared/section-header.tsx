import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

type Props = {
  title: string;
  pad?: boolean;
} & HTMLAttributes<HTMLHeadingElement>;

export default function SectionHeader({
  title,
  className,
  pad = false,
}: Props) {
  return (
    <div className="text-center flex justify-center">
      <h2
        className={cn(
          "text-2xl lg:text-[2rem] font-semibold lg:-tracking-[0.32px]",
          className,
          {
            "py-5 px-8": pad,
          }
        )}
      >
        {title}
      </h2>
    </div>
  );
}
