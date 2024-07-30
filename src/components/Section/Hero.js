import React from 'react'

export default function Hero({ bgColor, textColor, title, subTitle, paragraph, imgUrl, button }) {
    return (
        <>
            <div className={`${bgColor}`}>
                <div className="container py-4">
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="w-full lg:w-1/2 lg:pe-10 flex items-center">
                            <div className="p-4 max-w-[576px] mx-auto text-center md:text-left">
                                <p className={`text-md font-semibold ${textColor} mb-2 mt-2`}>
                                    {subTitle}
                                </p>
                                <h1 className={`text-[40px] leading-[48px] font-bold ${textColor} mb-6`}>
                                    {title}
                                </h1>
                                <p className={`text-2xl font-semibold ${textColor} mb-6`}>
                                    {paragraph}
                                </p>
                                {button && <button className='bg-ThemeBlack hover:bg-[#3d3d3d] text-white py-4 px-10 rounded-full'>{button}</button>}
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 lg:ps-20 flex justify-center">
                            <img src={`/images/${imgUrl}`} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
