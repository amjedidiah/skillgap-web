import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  showName?: boolean;
};

export default function AdminUserCard({ showName = false }: Props) {
  return (
    <div
      className={cn("flex items-center gap-2", {
        "md:rounded-lg md:py-[5px] md:px-4 md:bg-white min-w-fit": showName,
      })}
    >
      <Image
        src="/images/wisdom.png"
        width={48}
        height={48}
        alt="wisdom"
        className="rounded-full"
      />
      {showName && (
        <span className="max-md:hidden text-grey text-sm font-semibold leading-5 -tracking-[0.14px]">
          Wisdom Umanah
        </span>
      )}
    </div>
  );
}
