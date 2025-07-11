// App.jsx
import React, { useState, useEffect, useRef } from "react";
import ChatBubble from "./components/ChatBubble";
import QueryForm from "./components/QueryForm";
import PDFModal from "./components/PDFModal";

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const messagesEndRef = useRef(null);

  const handleSubmit = (query) => {
    setIsLoading(true);

    setMessages((prev) => [...prev, { type: "user", text: query }]);

    setTimeout(() => {
      const mockResponse = {
        answer:
          "Yes, in a motor accident claim under Section 166 of the Motor Vehicles Act, 1988, where the deceased was self-employed and aged 54–55 years at the time of death, the claimant is entitled to an addition towards future prospects.",
        citation: {
          text:
            "\u201c...as the age of the deceased at the time of accident was held to be about 54–55 years, being self-employed, 10% of annual income should have been awarded on account of future prospects.\u201d",
          link: "/Dani_Devi_v_Pritam_Singh.pdf"
        },
        summary: [
          { label: "Category", value: "Self-employed" },
          { label: "Age", value: "54–55 years" },
          { label: "Future Prospects Addition", value: "10% of the annual income" }
        ]
      };

      setMessages((prev) => [
        ...prev,
        {
          type: "assistant",
          text: mockResponse.answer,
          citation: mockResponse.citation,
          summary: mockResponse.summary
        }
      ]);

      setIsLoading(false);
    }, 1500);
  };

  const handleCitationClick = (link) => {
    setPdfUrl(link);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="flex flex-col w-full max-w-2xl h-screen bg-white shadow rounded-xl overflow-hidden">
        <div className="bg-gray-200 px-6 py-4 border-b text-xl font-bold">
          Lexi Legal Assistant
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4">
          {messages.map((msg, index) => (
            <ChatBubble
              key={index}
              type={msg.type}
              text={msg.text}
              citation={msg.citation}
              summary={msg.summary}
              onCitationClick={handleCitationClick}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t p-4 bg-white sticky bottom-0">
          <QueryForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
      </div>

      <PDFModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        pdfUrl={pdfUrl}
      />
    </div>
  );
}

export default App;
