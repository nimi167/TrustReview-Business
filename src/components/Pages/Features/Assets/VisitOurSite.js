import React from 'react'

export default function VisitOurSite({ bgColor = "bg-[#422613]", textColor = "text-[#FC7A1B]", title, BlueBtn,BlackBtn }) {
    return (
        <>
            <div className={`${bgColor} ${textColor} `}>
                <div className="container py-16">
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="w-full lg:pe-10 flex items-center">
                            <div className={`p-4  max-w-[780px] mx-auto text-center md:text-left`}>
                                <h1 className={`text-[40px] leading-[48px] font-bold  mb-6`}>{title}</h1>
                                {BlueBtn &&
                                    <div className="flex justify-center">
                                        <button className='bg-Blue hover:bg-DarkBlue text-white transition py-3 px-8 rounded-full'>{BlueBtn}</button>
                                    </div>
                                }
                                {BlackBtn &&
                                    <div className="flex justify-center">
                                        <button className='bg-ThemeBlack hover:bg-[#3d3d3d] text-white transition duration-300 py-3 px-8 rounded-full'>{BlackBtn}</button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
