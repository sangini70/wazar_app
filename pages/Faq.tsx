import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { FAQ_DATA } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h1>
          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-slate-800">{faq.question}</span>
                  {openIndex === index ? <ChevronUp className="text-blue-500" /> : <ChevronDown className="text-gray-400" />}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 pt-2 bg-slate-50 border-t border-gray-100">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Faq;