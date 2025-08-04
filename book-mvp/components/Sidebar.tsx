import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-100 p-4">
      <h2 className="text-lg font-bold mb-2">Suggest Prompts</h2>
      <div className="space-y-2">
        <div className="bg-white p-2 rounded shadow">
          <strong>Monetization Paths</strong>
          <p className="text-xs text-gray-600">Last used: 2d ago</p>
        </div>
        <div className="bg-white p-2 rounded shadow">
          <strong>Claude vs ChatGPT (edu)</strong>
          <p className="text-xs text-gray-600">Last used: 1w ago</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
