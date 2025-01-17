import React, { useState } from 'react';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const faqData = [
    { question: "How do I reset my password?", answer: "Click on 'Forgot Password' on the login page and follow the instructions." },
    { question: "How do I update my profile?", answer: "Go to your profile page, click on 'Edit Profile' and update your details." },
    { question: "How do I contact customer support?", answer: "You can contact us via the 'Contact Us' page or send an email to support@example.com." },
  ];

  const filteredFaq = faqData.filter(faq => faq.question.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#e0f7fa', padding: '20px' }}>
      <h1>Help</h1>
      <input
        type="text"
        placeholder="Search Help Topics"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          maxWidth: '600px',
          margin: '20px 0',
          borderRadius: '5px',
          border: '1px solid #00796b',
        }}
      />
      <h2>Frequently Asked Questions</h2>
      {filteredFaq.length > 0 ? (
        <ul>
          {filteredFaq.map((faq, index) => (
            <li key={index} style={{ marginBottom: '15px' }}>
              <h3 style={{ marginBottom: '5px' }}>{faq.question}</h3>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found for your search.</p>
      )}
      <h2>Contact Support</h2>
      <p>If you need further assistance, feel free to contact us:</p>
      <ul>
        <li>Email: <a href="mailto:support@example.com">support@example.com</a></li>
        <li>Phone: +1 (123) 456-7890</li>
        <li>Live Chat: Available on the bottom right corner of the page.</li>
      </ul>
    </div>
  );
};

export default Help;
