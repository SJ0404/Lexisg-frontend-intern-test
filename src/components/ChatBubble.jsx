import React from "react";

const ChatBubble = ({ type, text, citation, onCitationClick }) => {
  const isUser = type === "user";

  return (
    <div className={`flex ${isUser ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[75%] p-4 rounded-lg shadow ${
          isUser
            ? "bg-gray-200 text-gray-800 rounded-bl-none"
            : "bg-white text-gray-900 border rounded-br-none"
        }`}
      >
        <p className="text-sm whitespace-pre-wrap">{text}</p>

        {citation && (
          <div
            className="mt-2 text-sm italic text-blue-600 underline cursor-pointer"
            onClick={() => onCitationClick(citation.link)}
          >
            {citation.text} (Para 7 of the document)
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBubble;
