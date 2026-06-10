import { useState } from 'react';
import { faqData } from './data';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function FAQSection() {

    const [openFaq, setOpenFaq] = useState(0);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="bg-white rounded-[2rem] p-10 shadow">

            <h2 className="text-4xl font-extrabold text-[#2d3250] mb-8">
                Frequently Asked Questions
            </h2>

            <div className="space-y-4">

                {faqData.map((faq, index) => (
                    <div key={index} className="border rounded-xl">

                        <button
                            onClick={() => toggleFaq(index)}
                            className="w-full flex justify-between items-center p-5"
                        >
                            <span>{faq.question}</span>

                            {openFaq === index ?
                                <FaChevronUp /> :
                                <FaChevronDown />
                            }
                        </button>

                        {openFaq === index && (
                            <div className="px-5 pb-5 text-gray-500">
                                {faq.answer}
                            </div>
                        )}

                    </div>
                ))}

            </div>

        </div>
    );
}

export default FAQSection;