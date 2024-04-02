"use client";
import SectionHeader from "@/components/shared/section-header";
import FAQCard from "./faq-card";
import { MouseEventHandler, memo, useState } from "react";

const faqs = [
  { id: "secure", question: "Is this site secure?", answer: "" },
  {
    id: "signup-cost",
    question: "Does it cost anything to sign up at skillgap.co?",
    answer: "",
  },
  {
    id: "definition",
    question: "What is skillgap?",
    answer:
      "Skillgap is Africa's biggest e-sports or sports platform facilitating skill based p2p contests for gamers and athletes interested in competing for money. Skillgap is the go to app for skill tests on all platforms pc, console, mobile and physical events. Skillgap connects you with the best talent willing to wager on the go!",
  },
  {
    id: "pro-player",
    question: "Do I need to be a pro player to benefit from this platform?",
    answer: "",
  },
  {
    id: "support",
    question: "What video games & sports does skillgap support?",
    answer: "",
  },
  {
    id: "null-offering",
    question: "I want to play a game you don’t offer on skillgap?",
    answer: "",
  },
  {
    id: "multiple-accounts",
    question: "Can I have more than one account?",
    answer: "",
  },
  { id: "deposits", question: "How do i make deposits?", answer: "" },
  { id: "withdrawals", question: "How do I make withdrawals?", answer: "" },
];

const FAQs = () => {
  const [activeFAQ, setActiveFAQ] = useState("");

  const handleSetActiveFAQ: MouseEventHandler<HTMLSpanElement> = (event) => {
    const { id } = event.currentTarget.dataset;
    if (!id) return;

    if (activeFAQ === id) return setActiveFAQ("");
    setActiveFAQ(id);
  };

  return (
    <section id="faqs">
      <div className="container">
        <SectionHeader
          title="Frequently Asked Questions"
          className="bg-black-100 text-white"
          pad
        />
      </div>
      <div className="py-10 lg:py-[88px] bg-purple">
        <div className="container flex flex-col items-center gap-4">
          {faqs.map((item) => (
            <FAQCard
              key={item.id}
              activeFAQ={activeFAQ}
              onToggleActiveFAQ={handleSetActiveFAQ}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(FAQs);
