import HashtagItem from "./HashtagItem";

type HashtagProps = {
  companies: string[];
};

const HashtagList = ({ companies }: HashtagProps) => {
  return (
    <ul className="hashtags">
      {companies.map((c) => (
        <HashtagItem company={c} />
      ))}
    </ul>
  );
};

export default HashtagList;
