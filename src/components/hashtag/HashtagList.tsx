import HashtagItem from "./hashtagItem";

type HashtagListProps = {
  companyList: string[];
  handleSelectCompany: (company: string) => void;
};

export default function HashtagList({
  companyList,
  handleSelectCompany,
}: HashtagListProps) {
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          onSelectCompany={handleSelectCompany}
        />
      ))}
    </ul>
  );
}
