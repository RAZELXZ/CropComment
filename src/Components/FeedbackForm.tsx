import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/constains";

type FeedbackFromProps = {
  onAddToList: (text: string) => void;
};
const FeedbackForm = ({ onAddToList }: FeedbackFromProps) => {
  const [text, setText] = useState("");
  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }
    setText(newText);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddToList(text);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <textarea
        id="feedback-textarea"
        placeholder=""
        spellCheck={false}
        maxLength={MAX_CHARACTERS}
        value={text}
        onChange={handleChange}
      />
      <label htmlFor="feedback-textarea">
        Enter your feeback here, remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
