import React from 'react';
import { Link } from 'react-router-dom';

const PurchaseSuccessPopup = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-4">Payment successfully completed</h2>
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full block mx-auto" onClick={onClose}>Close</button>
        </Link>
      </div>
    </div>
  );
};

export default PurchaseSuccessPopup;
