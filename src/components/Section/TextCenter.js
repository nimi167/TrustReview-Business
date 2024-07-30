import React from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'

export default function TextCenter({ bgColor, textColor, title, subTitle, link, text, width = "max-w-[780px]" }) {
    return (
        <>
            <div className={`${bgColor}`}>
                <div className="container py-16">
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="w-full lg:pe-10 flex items-center">
                            <div className={`p-4 ${width === "full" ? "max-w-full" : "max-w-[780px]"} mx-auto text-center md:text-left`}>
                                <p className={`text-md font-semibold ${textColor} mb-2 mt-2`}>
                                    {subTitle}
                                </p>
                                <h1 className={`text-[32px] leading-[38px] font-bold ${textColor} mb-6`}>
                                    {title}
                                </h1>
                                {link &&
                                    <div className=" text-md mt-2 text-center">
                                        <a href="/" className="flex items-center pt-2 pb-4 text-md font-normal text-center underline hover:no-underline transition group">
                                            <span className='mr-2'>{link}</span>
                                            <HiArrowLongRight size={21} className="transform duration-300 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                }
                                {text && <p className={`text-[16px] leading-[32px] font-light ${textColor} mb-6`}>
                                    {text}
                                </p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
