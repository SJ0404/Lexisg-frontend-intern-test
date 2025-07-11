import React from "react";

const AnswerCard = ({ answer, citations, onCitationClick }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow mb-6">
      <p className="text-gray-800 text-sm leading-relaxed">
        {answer}
      </p>

      <h3 className="font-semibold mt-6 mb-2 text-gray-700">Citation:</h3>
      {citations.map((c, idx) => (
        <div
          key={idx}
          className="border-l-4 border-blue-500 bg-gray-50 p-4 italic text-sm text-gray-700 rounded"
        >
          {c.text}{" "}
          <button
            onClick={onCitationClick}
            className="ml-2 underline text-blue-600 hover:text-blue-800"
          >
            View PDF
          </button>
        </div>
      ))}

      <div className="mt-4 text-xs text-gray-500">
        [Based on Dani Devi v. Pritam Singh, Para 7; Citing <em>Pranay Sethi</em> and <em>Sarla Verma</em>]
      </div>
    </div>
  );
};

export default AnswerCard;
