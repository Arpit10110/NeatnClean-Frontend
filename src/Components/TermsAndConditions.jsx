import { useState } from 'react';

const TermsAndConditions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What cleaning products and methods do you use?",
      answer: "We always use professional cleaning products and methods to ensure the best results for your home or office."
    },
    {
      question: "Is 100% stain removal guaranteed?",
      answer: "However, 100% stain removal is not guaranteed — results depend on the type and age of the stain or material."
    },
    {
      question: "What should I tell your team before cleaning?",
      answer: "Please inform our team about any delicate surfaces or special care areas before cleaning to ensure proper handling."
    },
    {
      question: "Is NeatNclean responsible for existing damage?",
      answer: "NeatNclean is not responsible for pre-existing damage or discoloration that was present before our service."
    },
    {
      question: "How long do I have to report service issues?",
      answer: "Any service issues should be reported within 24 hours of completion so we can address them promptly."
    }
  ];

  return (
    <div className=" w-[85%] mb-[5rem]  mx-auto p-4">
       <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">
        Terms & Conditions
      </h2>

      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-white"
          >
            {/* Question Header */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200 text-left"
            >
              <div className="flex items-start gap-3 flex-1">
                <h3 className="text-base font-semibold text-gray-800 leading-relaxed">
                  {faq.question}
                </h3>
              </div>
              <svg
                className={`w-5 h-5 text-gray-600 flex-shrink-0 ml-2 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Answer Content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <div className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-200">
                <div className="flex items-start gap-3 ml-8">
                
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;
