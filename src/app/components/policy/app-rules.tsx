import PolicySection from "@/components/policy/policy-section";

const list = [
  {
    title: "Reporting results",
    items: [
      "After a contest is created, players have a 2-hour time frame to play the match.",
      "Should a match go unreported after 2hours it will be considered a no contest. It will not reflect on the players record. Funds will also be returned to the players accounts",
      "Immediately a match result is reported by one user the other user has 30 minutes to verify this or open a dispute. Failure to do this will result in the system automatically handling verification.",
      "If you report a score before the match has ended a dispute will be opened",
    ],
  },
  {
    title: "Disputes",
    items: [
      "At skillgap.co we want to make contests as transparent as possible, to do this we have an organized support team handling disputes",
      "Anytime a dispute is opened players must present evidence to back their claims, such as videos & images",
      "Leave the contest immediately you notice a rule has been broken",
      "Any user providing fake information in disputes will receive a penalty or ban",
    ],
  },
  {
    title: "Disconnections",
    items: [
      "No forfeit win will be avoided for a disconnection in an online contest",
      "Immediately you notice lags exit the contest as prior to an advantage from your opponent",
      "If you exit the match halfway in you will lose the contest,it is advisable to play with the best possible network.",
      "For offline modes a disconnection will result in players playing out the remaining time left with mutual advantage",
    ],
  },
  {
    title: "Draws",
    items: [
      "In situations contests end in a draw(eg a FIFA match) players should go into extra time or simple restart the match",
      "This applies to both offline and online modes",
    ],
  },
];

export default function AppRules() {
  return <PolicySection id="appRules" title="App Rules" list={list} />;
}
