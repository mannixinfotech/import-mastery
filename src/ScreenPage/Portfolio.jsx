import React from "react";

const Portfolio = () => {
  return (
    <div>
      <div className="relative">
        <div>
          <img src="./portfoliobanner.jpg" alt="/" className="md:h-96 w-full "/>
        </div>
        <div className="absolute  rounded-md"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h2 className="md:text-3xl mb-2 text-xl text-white"> </h2>
        </div>
      </div>
      {/* _____ */}
      
<div className="md:p-12 p-5">
<p className="text-2xl font-bold text-center">We Support You?</p>
    <div className="grid grid-cols-1 md:grid-cols-3 pt-4">
      <div className="mx-auto my-auto">
        <img src="support1.png" alt="/" className="h-56"/>
      </div>
      <div>
      <ul className="pt-8 list-disc list-inside md:text-center mx-auto max-w-xl">
    <li className="text-lg text-white mb-4">
      How To Choose Top Selling Products?
    </li>
    <li className="text-lg text-white mb-4">
      How To Import Products Without Any Risk?
    </li>
    <li className="text-lg text-white mb-4">
      How and Where Sell Products?
    </li>
    <li className="text-lg text-white mb-4">
      100% Guarantee of products Quality?
    </li>
    <li className="text-lg text-white mb-4">
      How to purchase from direct factories?
    </li>
    <li className="text-lg text-white mb-4">
      No any Commission Agents
    </li>
    <li className="text-lg text-white mb-4">
      No requirement of any Specific Place
    </li>
    <li className="text-lg text-white mb-4">
      No requirement any documents
    </li>
    <li className="text-lg text-white mb-4">
      No requirement of any Supportive person
    </li>
    <li className="text-lg text-white mb-4">
      There is no education criteria
    </li>
    <li className="text-lg text-white mb-4">
      Guaranteed profit margin up to 80% TO 100%
    </li>
    <li className="text-lg text-white mb-4">
      No registration fee
    </li>
  </ul>
      </div>
      <div className="mx-auto my-auto">
        <img src="./support2.png
" alt="/" className="h-56"/>
      </div>
    </div>
</div>

      <div>
        
    </div>
      {/* ____ */}
    </div>
  );
};

export default Portfolio;
