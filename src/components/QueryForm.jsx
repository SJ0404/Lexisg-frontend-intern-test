import React, { useState } from "react";

const QueryForm = ({ onSubmit, isLoading }) => {
  const [query, setQuery] = useState("");

  const handleSend = () => {
    if (query.trim()) {
      onSubmit(query);
      setQuery("");
    }
  };

  return (
    <div className="flex gap-2">
      <textarea
        rows={2}
        className="flex-1 border border-gray-300 rounded p-2 text-sm resize-none"
        placeholder="Ask a legal question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
      />
      <button
        onClick={handleSend}
        disabled={isLoading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {isLoading ? "..." : "Send"}
      </button>
    </div>
  );
};

export default QueryForm;
