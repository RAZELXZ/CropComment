import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../../lib/type";
import { useState } from "react";

type FeedbackItemProps = { feedbackItem: TFeedbackItem };

const FeedbackItem = ({ feedbackItem }: FeedbackItemProps) => {
  const [opened, setOpened] = useState(false);
  const [upvote, setUpvote] = useState(feedbackItem.upvoteCount);

  const handleUpvote = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setUpvote((prev) => ++prev);
    e.currentTarget.disabled = true;
    e.stopPropagation();
  };
  return (
    <li
      onClick={() => setOpened(!opened)}
      className={`feedback ${opened ? "feedback--expand" : ""}`}
    >
      <button onClick={handleUpvote}>
        <TriangleUpIcon />
        <span>{upvote}</span>
      </button>

      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>

      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>

      <p>{feedbackItem.daysAgo === 0 ? "NEW" : feedbackItem.daysAgo + "d"}</p>
    </li>
  );
};

export default FeedbackItem;
