import FeedbackItem from "./FeedbackItem";

const feedbackItem = {
  upvoteCount: 593,
  badgeLetter: "B",
  companyName: "ByteGrad",
  text: "text test test",
  dayago: 4,
};

const feedbackItems = [feedbackItem];
const FeedbackList = () => {
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
};

export default FeedbackList;
