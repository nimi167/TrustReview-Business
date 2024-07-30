import React from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';

const ReviewSection = ({ isImageFirst, subTitle, title, description, description2, linkText, linkHref, imageUrl, bgColor, textColor, button, outlineBbutton, list }) => {
    return (
        <div className={`rounded-2xl flex flex-col lg:flex-row justify-between p-5 my-5 ${bgColor} ${textColor}`}>
            <div className={`flex flex-col lg:flex-row justify-between ${isImageFirst ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2 lg:pe-10 flex items-center order-2 lg:order-1">
                    <div className="ps-10 max-w-[576px] mx-auto text-center md:text-left">
                        {subTitle && <div className="font-semibold text-sm lg:text-sm my-3">{subTitle}</div>}
                        {title&&<div className="font-bold text-3xl lg:text-4xl my-2">{title}</div>}
                        <div className="font-light text-md mt-6 mb-4">{description}</div>
                        {description2 &&
                            <>
                                <div className="border border-[#9A9A9A] w-24 my-10 "></div>
                                <div className="font-light text-md mt-6 mb-4">{description2}</div>
                            </>
                        }
                        {linkText &&
                            <a href={linkHref} className="flex items-center pt-2 pb-4 text-md font-semibold text-center underline hover:no-underline transition group">
                                <span className='mr-2'>{linkText}</span>
                                <HiArrowLongRight size={21} className="transform duration-300 transition-transform group-hover:translate-x-1" />
                            </a>
                        }
                        {button && <button className='bg-ThemeBlack hover:bg-[#3d3d3d] text-white py-3 px-8 rounded-full'>{button}</button>}
                        {outlineBbutton && <button className='border border-black font-semibold py-3 px-8 rounded-full'>{outlineBbutton}</button>}

                        {list &&
                            <>
                                <div className="flex items-center mb-2">
                                    <span className='bg-Green py-1 flex justify-center items-center rounded-full'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-2 w-2 text-black mx-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                    <p className='ml-3 font-light'>
                                        <h2 className="font-semibold ">Tailored suggestions</h2>
                                        Generate personalized responses quickly, considering review
                                        details like length and sentiment.
                                    </p>
                                </div>
                                <div className="flex items-center mb-2">
                                    <span className='bg-Green py-1 flex justify-center items-center rounded-full'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-2 w-2 text-black mx-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                    <p className='ml-3 font-light'>
                                        <h2 className="font-semibold ">Control and customize</h2>
                                        Each AI-generated response is editable, so you approve and send them only when they meet your standards.
                                    </p>
                                </div>
                                <div className="flex items-center mb-2">
                                    <span className='bg-Green py-1 flex justify-center items-center rounded-full'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-2 w-2 text-black mx-1"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                    <p className='ml-3 font-light'>
                                        <h2 className="font-semibold ">Smart learning</h2>
                                        The more you customize, the better the AI will understand and adapt to your brand’s unique voice.
                                    </p>
                                </div>
                            </>
                        }
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:ps-20 flex justify-center order-1 lg:order-2">
                    <img src={imageUrl} className='max-h-[500px] object-contain' alt="" />
                </div>
            </div>
        </div>
    );
};

export default ReviewSection;