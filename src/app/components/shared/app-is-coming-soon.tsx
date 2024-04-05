import { cn } from "@/lib/utils";

type Props = {
  center?: boolean;
};

export default function AppIsComingSoon({ center }: Props) {
  return (
    <p
      className={cn(
        "w-fit text-lil-dark-blue text-sm -tracking-[0.14px] py-[10px] px-4 rounded-3xl bg-lil-dark-blue-100 font-semibold",
        {
          "mx-auto": center,
        }
      )}
    >
      App is coming soon
    </p>
  );
}
