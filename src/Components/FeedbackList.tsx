import { TriangleUpIcon } from "@radix-ui/react-icons";

const FeedbackList = () => {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>593</span>
        </button>

        <div>
          <p>Bxd</p>
        </div>

        <div>
          <p>ByteGrad</p>
          <p>lorem</p>
        </div>

        <p>4d</p>
      </li>
    </ol>
  );
};

export default FeedbackList;
