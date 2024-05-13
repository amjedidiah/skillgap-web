import { SGSearch } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { useCallback, useState } from "react";

export default function DashboardHeaderForm() {
  const [isSearching, setIsSearching] = useState(false);
  const toggleIsSearching = useCallback(
    () => setIsSearching((prev) => !prev),
    []
  );

  return (
    <form className="relative">
      <div
        className={cn(
          "p-3 md:p-4 flex gap-4 lg:gap-10 xl:gap-12 bg-white rounded-[32px] md:w-[401px] max-md:ml-auto",
          {
            "rounded-b-none": isSearching,
          }
        )}
      >
        <span>
          <SGSearch />
        </span>
        <input
          type="search"
          name="search"
          id="search"
          aria-label="Search"
          placeholder="Search"
          className="flex-1 placeholder:text-grey text-sm leading-5 -tracking-[0.14px] outline-none shadow-none max-md:hidden"
          onClick={toggleIsSearching}
        />
      </div>
      <div
        className={cn(
          "absolute bg-white left-0 right-0 p-3 md:p-4 flex flex-col gap-4",
          {
            hidden: !isSearching,
          }
        )}
      >
        <ul>
          <li className="uppercase font-semibold text-sm">players</li>
        </ul>

        <hr />

        <ul>
          <li className="uppercase font-semibold text-sm">disputes</li>
        </ul>
      </div>
    </form>
  );
}
