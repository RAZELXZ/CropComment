import { useEffect, useState } from "react";
import { TFeedbackItem } from "./type";

export const usefeedbackhooks = () => {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isloading, setIsloading] = useState(false);

  const handleAddToList = (text: string) => {
    const company = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);
    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      daysAgo: 0,
      company: company,
      upvoteCount: 0,
      badgeLetter: company.substring(0, 1).toUpperCase(),
    };
    setFeedbackItems([...feedbackItems, newItem]);
    comentSubmiting(newItem);
  };

  const comentSubmiting = async (newItem: TFeedbackItem) => {
    try {
      fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
        {
          method: "POST",
          body: JSON.stringify(newItem),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
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
