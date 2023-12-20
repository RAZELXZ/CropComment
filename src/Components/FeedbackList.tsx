import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";

const FeedbackList = () => {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isloading, setIsloading] = useState(false);

  const commentFetching = async () => {
    setIsloading(true);
    try {
      const responce = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );
      if (!responce.ok) {
        throw new Error();
      }
      const data = await responce.json();
      setFeedbackItems(data.feedbacks);
    } catch (error) {
      console.log(error);
    }
    setIsloading(false);
  };

  useEffect(() => {
    commentFetching();
  }, []);
  return (
    <ol className="feedback-list">
      {isloading && <Spinner />}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
};

export default FeedbackList;
