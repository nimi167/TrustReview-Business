

import React, { useState } from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';

const ViewOurPricing = ({
    bgColor,
    textColor,
    title,
}) => {
    const [searchText, setSearchText] = useState('');

    const handleChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <div className={`${bgColor} py-14`}>
            <div className="container mx-auto pb-8">
                <div className={`text-[40px] leading-[48px] font-bold my-8 text-center ${textColor}`}>{title}</div>
                <div className="flex justify-center items-center bg-white py-1 ps-4 pe-2 rounded-full w-full max-w-xl mx-auto">
                    <div className="flex w-full max-w-xl">
                        <input
                            type="email"
                            className='text-[15px] font-[500] w-full my-2 outline-none ps-4'
                            placeholder="Email address"
                            value={searchText}
                            onChange={handleChange}
                        />
                        <button type="submit" className="bg-Blue hover:bg-DarkBlue text-white font-light py-[14px] px-5 rounded-full my-2 transition">Request&nbsp;demo</button>
                    </div>
                </div>
                <div className="text-md mt-4 text-center">
                    <a href="/" className="flex justify-center items-center pt-2 pb-4 text-md font-semibold text-center underline hover:no-underline transition group">
                        <span className={`mr-2 ${textColor}`}>View our pricing plans</span>
                        <HiArrowLongRight size={21} className="transform duration-300 transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ViewOurPricing;
