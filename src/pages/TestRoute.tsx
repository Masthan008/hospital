import React from 'react';

const TestRoute = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">Test Route Working!</h1>
        <p className="text-gray-600">If you can see this, the routing is working correctly.</p>
        <p className="mt-4 text-sm text-gray-500">Path: /test-route</p>
      </div>
    </div>
  );
};

export default TestRoute;
