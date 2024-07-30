import React from 'react';

const Card = ({ imageSrc, title, link }) => {
  return (
    <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-1rem)] mb-4 md:mb-0 mr-0 md:mr-2 lg:mr-4 bg-white rounded-2xl">
      <a href={link}>
        <img className="rounded-t-2xl w-full h-[230px] object-cover" src={imageSrc} alt={title} />
      </a>
      <div className="p-7 text-left">
        <a href={link}>
          <h5 className="mb-2 text-xl font-semibold tracking-tight">{title}</h5>
        </a>
        <a href={link} className="inline-flex items-center pt-2 pb-4 text-md font-light text-center text-blue-700">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
