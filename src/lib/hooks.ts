import { useEffect, useState } from "react";
import { TFeedbackItem } from "./type";

export const usefeedbackhooks = () => {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isloading, setIsloading] = useState(false);

  const handleAddToList = (text: string) => {
    const companyName = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);
    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      daysAgo: 0,
      companyName: companyName,
      upvoteCount: 0,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };
    setFeedbackItems([...feedbackItems, newItem]);
  };

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

  return {
    feedbackItems: feedbackItems,
    isloading: isloading,
    handleAddToList: handleAddToList,
  };
};
