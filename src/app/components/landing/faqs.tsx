"use client";
import SectionHeader from "@/components/shared/section-header";
import FAQCard from "@/components/landing/faq-card";
import { MouseEventHandler, memo, useState } from "react";

const faqs = [
  {
    id: "definition",
    question: "What is skillgap?",
    answer:
      "Skillgap is Africa's biggest e-sports or sports platform facilitating skill based p2p contests for gamers and athletes interested in competing for money. Skillgap is the go to app for skill tests on all platforms pc, console, mobile and physical events. Skillgap connects you with the best talent willing to wager on the go!",
  },
  {
    id: "secure",
    question: "Is this site secure?",
    answer:
      "We take security very seriously at skillgap.co. We have a team of professionals making sure all data are encrypted and user info remains protected. Our database is highly secure. All credit card transactions are very much secure",
  },
  {
    id: "signup",
    question: "How do I signup?",
    answer: "You can sign up by simply downloading our app on iOS or Android",
  },
  {
    id: "signup-cost",
    question: "Does it cost anything to sign up at skillgap.co?",
    answer: "Nope! Sign up is free",
  },
  {
    id: "age-restriction",
    question: "How old must I be to use skillgap?",
    answer:
      "You have to be at least 18 to play on skillgap.co. This is our policy",
  },
  {
    id: "pro-player",
    question: "Do I need to be a pro player to benefit from this platform?",
    answer:
      "No you don't. Players of all skill levels compete using the skillgap app. Finding your skill level is very easy",
  },
  {
    id: "support",
    question: "What video games & sports does skillgap support?",
    answer:
      "We support all competitive games/sports to name a few EAfc24,NBA24,UFC5,COD,TEKKEN,MORTAL KOMBAT, APEX,IMESSGAME GAMES,CHESS,TABLE TENNIS, FOOTBALL,ARM WRESTLING etc",
  },
  {
    id: "null-offering",
    question: "I want to play a game you don’t offer on skillgap?",
    answer: "Feel free to let us know what games you would like us to add",
  },
  {
    id: "multiple-accounts",
    question: "Can I have more than one account?",
    answer: "No our policy goes against the creation of multiple accounts",
  },
  {
    id: "deposits",
    question: "How do I make deposits?",
    answer: "Click on deposit in app and follow the instructions listed",
  },
  {
    id: "withdrawals",
    question: "How do I make withdrawals?",
    answer:
      "Click on withdrawals in app and funds will be moved from your in-app wallet directly to your provided bank account",
  },
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
