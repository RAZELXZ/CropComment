import FeedbackList from "../feedback/FeedbackList";
import Header from "./Header";
import { TFeedbackItem } from "../../lib/type";

type ContainerProps = {
  isLoading: boolean;
  feedbackItems: TFeedbackItem[];
  handleAddToList: (text: string) => void;
};

const Container = ({
  feedbackItems,
  isLoading,
  handleAddToList,
}: ContainerProps) => {
  return (
    <main className="container">
      <Header handleAddToList={handleAddToList} />
      <FeedbackList feedbackItems={feedbackItems} isLoading={isLoading} />
    </main>
  );
};

export default Container;
