import React from 'react';

const ReadingPane = () => {
  return (
    <div className="w-3/4 p-6 overflow-y-scroll">
      <h1 className="text-2xl font-bold mb-4">Prompt: Monetization Paths</h1>
      <p className="text-gray-700 mb-2">
        List 5 monetization paths for AI chat tools like Claude. Include pros, cons, and real-world examples.
      </p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Send to Claude</button>
    </div>
  );
};

export default ReadingPane;
