type Props = { items: string[] };

export default function PolicySectionList({ items }: Props) {
  return (
    <ul className="list-disc gap-2">
      {items.map((item, i) => (
        <li className="ml-8" key={`item-${i}`}>
          {item}
        </li>
      ))}
    </ul>
  );
}
