import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function FAQ() {
  const [activeTab, setActiveTab] = useState('BASIC QUESTION');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = {
    'BASIC QUESTION': [
      {
        question: 'What Are The Main Advantage of Reunir?',
        answer: 'Reunir offers comprehensive investment tools, real-time analytics, secure transactions, and personalized investment strategies to help you grow your wealth efficiently.'
      },
      {
        question: 'Is It Free of Charge to Open an Account?',
        answer: 'Yes, opening an account with Reunir is completely free. We believe in making investment opportunities accessible to everyone without any upfront costs.'
      },
      {
        question: 'How Secure User Account and Personal Data?',
        answer: 'We use bank-level encryption, multi-factor authentication, and regular security audits to ensure your account and personal data remain protected at all times.'
      },
      {
        question: 'How Many Account Can I Open on The Site?',
        answer: 'You can open one primary account. However, you can create multiple investment portfolios within your account to manage different investment strategies.'
      }
    ],
    'INVESTING QUESTION': [
      {
        question: 'What is the minimum investment amount?',
        answer: 'You can start investing with as little as $50, making it accessible for beginners to start their investment journey.'
      },
      {
        question: 'What types of investments are available?',
        answer: 'We offer a diverse range including mutual funds, stocks, ETFs, and fixed income products to suit different risk profiles.'
      }
    ],
    'WITHDRAWAL QUESTION': [
      {
        question: 'How long do withdrawals take?',
        answer: 'Withdrawals typically process within 1-3 business days, depending on your bank and the withdrawal method chosen.'
      },
      {
        question: 'Are there any withdrawal fees?',
        answer: 'Most withdrawals are free, but certain expedited processing options may incur minimal fees.'
      }
    ],
    'REFERAL PROGRAM': [
      {
        question: 'How does the referral program work?',
        answer: 'Earn rewards when you refer friends who open an account and make their first investment. Both you and your friend receive bonuses.'
      },
      {
        question: 'What are the referral rewards?',
        answer: 'You can earn up to $50 per successful referral, plus additional bonuses when your referrals reach certain investment milestones.'
      }
    ]
  };

  return (
    <div className='w-full max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>

      <div className='text-center mb-12'>
        <span className='inline-block px-4 py-2 text-black text-2xl font-semibold mb-2'>
          Got Any Questions
        </span>
        <h1 className='text-4xl md:text-5xl font-bold text-orange-600 mb-4'>
          We've Got Answers
        </h1>
      </div>

      <div className='flex flex-wrap justify-center gap-2 mb-12'>
        {Object.keys(faqData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-full shadow-lg border border-gray-300 font-semibold transition-all duration-300 ${
              activeTab === tab
                ? 'bg-orange-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className='mx-auto space-y-4'>
        {faqData[activeTab]?.map((item, index) => (
          <div
            key={index}
            className='bg-white rounded shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md'
          >
            <button
              onClick={() => toggleItem(index)}
              className='w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none'
            >
              <h3 className='text-lg font-semibold text-gray-900 pr-4'>
                {item.question}
              </h3>
              <div className='bg-gray-200 p-2 rounded-full flex justify-center items-center'>
              <div className='flex-shrink-0 w-6 h-6 text-blue-600'>
                {openItems[index] ? (
                  <FaChevronUp className="w-full h-full" />
                ) : (
                  <FaChevronDown className="w-full h-full" />
                )}
              </div>
              </div>
            </button>

            {openItems[index] && (
              <div className='px-6 pb-5'>
                <div className='w-12 h-1 bg-blue-100 rounded mb-4'></div>
                <p className='text-gray-600 leading-relaxed'>
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;