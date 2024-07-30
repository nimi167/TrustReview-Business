import React from 'react';

const FourCardTextSection = ({ bgColor = "bg-white", title = "How it works", steps }) => {
  return (
    <div className={`${bgColor} pb-6 pt-6 lg:pt-10 lg:pb-8`}>
      <div className="container">
        <div className="font-semibold text-3xl lg:text-[32px] mb-8 text-center">{title}</div>
        <div className={`grid grid-cols-1 lg:grid-cols-${steps.length === 4 ? 4 : 3} gap-4`}>
          {steps.map((step, index) => (
            <div key={index} className={`${bgColor} rounded-lg p-7 pb-2 my-2`}>
              <img src={step.icon} alt={step.title} className="h-10 mb-4 object-contain" />
              <h2 className="text-lg font-semibold mb-2">{step.title}</h2>
              <p className="text-[16px] leading-6 font-light mb-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourCardTextSection;
