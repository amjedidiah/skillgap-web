import PolicySectionList from "@/components/policy/policy-section-list";

type PolicySectionListItem = {
  title: string;
  items?: string[];
};

type Props = {
  id: string;
  title: string;
  subTitle?: string;
  list: PolicySectionListItem[];
};

export default function PolicySection({ id, title, subTitle, list }: Props) {
  return (
    <article className="flex flex-col gap-4 py-10" id={id}>
      <hgroup className="flex flex-col gap-2">
        <h2 className="flex text-xl lg:text-2xl">{title}</h2>
        {subTitle && <h4>{subTitle}</h4>}
      </hgroup>
      <ol className="flex flex-col gap-2 list-decimal">
        {list.map(({ title, items }) => (
          <li className="text-medium ml-4" key={title}>
            <p>{title}</p>
            {items && <PolicySectionList items={items} />}
          </li>
        ))}
      </ol>
    </article>
  );
}
