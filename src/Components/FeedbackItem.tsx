import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../lib/type";

type FeedbackItemProps = { feedbackItem: TFeedbackItem };

const FeedbackItem = ({ feedbackItem }: FeedbackItemProps) => {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvoteCount}</span>
      </button>

      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>

      <div>
        <p>{feedbackItem.companyName}</p>
        <p>{feedbackItem.text}</p>
      </div>

      <p>{feedbackItem.daysago}</p>
    </li>
  );
};

export default FeedbackItem;
