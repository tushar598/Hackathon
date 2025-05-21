import { useState } from "react";
import { X } from "lucide-react";

const FeedbackModal = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rating === null) {
      alert("Please select a rating");
      return;
    }

    alert(
      "Thank you for your feedback!\nWe appreciate your input and will use it to improve our service."
    );

    setRating(null);
    setComment("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-gray-900 border border-cyan-800/50 rounded-lg p-6 max-w-md w-full relative">
        <button
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-cyan-400 mb-6">Your Feedback</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-white mb-2">
              How would you rate your experience?
            </label>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRating(value)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg transition-all ${
                    rating === value
                      ? "bg-cyan-500 text-white scale-110"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="feedback-comment" className="block text-white mb-2">
              Comments (optional)
            </label>
            <textarea
              id="feedback-comment"
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:border-cyan-500"
              placeholder="Tell us what you think..."
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-300 hover:text-white mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-500 transition-colors"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackModal;
