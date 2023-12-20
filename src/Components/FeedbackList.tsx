import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import { TFeedbackItem } from "../lib/type";

type FeedbackListProps = {
  isLoading: boolean;
  feedbackItems: TFeedbackItem[];
};

const FeedbackList = ({ isLoading, feedbackItems }: FeedbackListProps) => {
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
};

export default FeedbackList;
