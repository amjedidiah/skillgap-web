import { SGChessKnight, SGMinus, SGPlus } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

type Props = {
  id: string;
  question: string;
  answer: string;
  activeFAQ: string;
  onToggleActiveFAQ: MouseEventHandler<HTMLSpanElement>;
};

export default function FAQCard({
  id,
  question,
  answer,
  activeFAQ,
  onToggleActiveFAQ,
}: Props) {
  const isActiveFAQ = activeFAQ === id;

  return (
    <div
      className={cn("flex flex-col gap-[9px] lg:w-[976px]", {
        "p-4 pr-6 bg-light-purple": !isActiveFAQ,
        "pl-[17px] py-[18px] pr-[27px] border-black border-4 bg-purple shadow-faq-active":
          isActiveFAQ,
      })}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          {!isActiveFAQ && (
            <span className="bg-unknown-300 rounded-full w-8 h-8 inline-flex justify-center items-center">
              <SGChessKnight />
            </span>
          )}
          <p
            className={cn("text-xl font-semibold", {
              "text-black-100": !isActiveFAQ,
              "text-white": isActiveFAQ,
            })}
          >
            {question}
          </p>
        </div>
        <span
          onClick={onToggleActiveFAQ}
          data-id={id}
          className="cursor-pointer p-1"
        >
          {isActiveFAQ ? <SGMinus /> : <SGPlus />}
        </span>
      </div>
      {isActiveFAQ && answer && (
        <p className="text-light-purple -tracking-[0.16px] max-w-[852px]">
          {answer}
        </p>
      )}
    </div>
  );
}
