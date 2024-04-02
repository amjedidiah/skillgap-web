import SectionHeader from "@/components/shared/section-header";
import HowItWorksCard from "@/components/landing/how-it-works-card";

const howItWorkSteps = [
  {
    title: "Download App",
    content:
      "Once the app is downloaded on your device you simply register or create an account and fund your account to be able to create contests",
    hasAction: true,
  },
  {
    title: "Create or Join Contest",
    content:
      "Post a challenge or contest on the arena or send invites privately using your unique skillgap ID then wait for a challenger to accept your contest",
  },
  {
    title: "Win and Withdraw Funds",
    content:
      "Compete offline or play online on your preferred consoles or devices, report your score after the contest and receive your winning prize",
  },
];

export default function HowItWorks() {
  return (
    <section id="howItWorks" className="py-12 lg:py-14">
      <div className="flex flex-col container gap-10 lg:gap-12">
        <SectionHeader title="How It Works" className="text-black" />
        {howItWorkSteps.map((item, i) => (
          <HowItWorksCard key={item.title} count={i + 1} {...item} />
        ))}
      </div>
    </section>
  );
}
