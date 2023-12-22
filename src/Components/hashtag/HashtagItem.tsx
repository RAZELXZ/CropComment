import { usefeedbackhooks } from "../../lib/hooks";

type HashtagItemProps = {
  company: string;
};
const HashtagItem = ({ company }: HashtagItemProps) => {
  const { onSetselected } = usefeedbackhooks();
  return (
    <li key={company}>
      <button onClick={() => onSetselected(company)}>{company}</button>
    </li>
  );
};

export default HashtagItem;
