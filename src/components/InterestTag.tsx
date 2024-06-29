import React, { useState } from 'react';

interface Interest {
  interest: string;
  active: boolean;
}

const InterestItem: React.FC<Interest> = ({ interest, active }) => {
  const [isActive, setIsActive] = useState(active);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`border-2 m-3 text-sky-500 border-gray-300 p-2 rounded-lg hover:border-sky-500 cursor-pointer interest-item ${isActive ? 'bg-green-500 text-white' : ''}`}
      onClick={handleClick}
    >
      <div className="flex items-center space-x-2">
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 plus-icon ${isActive ? 'hidden' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 minus-icon ${isActive ? '' : 'hidden'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </span>
        <span>{interest}</span>
      </div>
    </div>
  );
};

export default InterestItem;
