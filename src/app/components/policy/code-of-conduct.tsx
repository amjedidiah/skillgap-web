import PolicySection from "@/components/policy/policy-section";

const list = [
  {
    title:
      "We want to create a completely non toxic user friendly ecosystem where gamers/athletes can get rewarded doing what they love best",
  },
  { title: "We have zero tolerance for racism or verbal abuse" },
  { title: "No dishonesty, or providing of false info" },
  { title: "No advertising in messages or chat box" },
  { title: "Creation of multiple accounts is also not allowed" },
];

export default function CodeOfConduct() {
  return (
    <PolicySection
      id="codeOfConduct"
      title="Code of Conduct"
      subTitle="At Skillgap:"
      list={list}
    />
  );
}
