import React, { useState } from 'react'
import IntegrationSlider from '../Assets/IntegrationSlider';
import CompanyCard from '../Assets/CompanyCard';
import { IoIosSearch } from "react-icons/io";
import Share from '../../../Assets/Icons/Share';

export default function Integrations() {
    const data = [
        {
            imgUrl: 'Adobe.webp',
            title: 'Adobe Commerce',
            description:
                'No other platform gives you the power to create unique and engaging shopping experiences. Enjoy rich, out-of-the-box features, an unlimite...',
        },
        {
            imgUrl: 'BigCommerce.webp',
            title: 'BigCommerce',
            description:
                'BigCommerce is a cloud eCommerce platform for established and rapidly-growing businesses. It combines enterprise functionality, an open...',
        },
        {
            imgUrl: 'digidesk.webp',
            title: 'DigiDesk',
            description:
                'Enhance the customer experience with DigiDesk\'s powerful range of integrated digital solutions; spanning multi-channel Customer Satisfactio...',
        },
        {
            imgUrl: 'dotdigital.webp',
            title: 'Dotdigital',
            description:
                'Dotdigital is a leading cross-channel marketing automation technology that allows users to engage customers across all touchpoints...',
        },
        {
            imgUrl: 'eDesk.webp',
            title: 'eDesk',
            description:
                'eDesk is the leading eCommerce helpdesk for multichannel sellers, integrating with the world\'s leading marketplaces, social channels and...',
        },
        {
            imgUrl: 'emarsys.webp',
            title: 'Emarsys',
            description:
                'Emarsys empowers marketers around the world to create truly personalized omnichannel experiences for their customers...',
        }

    ];

    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleFilterChange = (event) => {
        const filter = event.target.value;
        if (event.target.checked) {
            setSelectedFilters([...selectedFilters, filter]);
        } else {
            setSelectedFilters(
                selectedFilters.filter((f) => f !== filter),
            );
        }
    };

    const filteredData = data.filter((item) => {
        return selectedFilters.every((filter) =>
            item.description.includes(filter),
        );
    });

    return (
        <>
            <div className="bg-Green">
                <div className="container py-4">
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div className="w-full lg:w-1/2  flex items-center">
                            <div className="p-4 text-center md:text-left">
                                <div className="font-bold text-DarkGreen text-[32px] lg:text-[40px] leading-[38px] lg:leading-[48px] my-2">
                                    Find a TrustReview integration
                                </div>
                                <div className="font-semibold text-DarkGreen text-[20px] lg:text-[24px] leading-[33px] my-3">
                                    Connect TrustReview to your tech stack with simple integrations that make it easy to collect, showcase, respond to, and learn from reviews.
                                </div>
                                <div className="flex justify-center md:justify-start">
                                    <button className="rounded-xl px-10 py-4 text-[18px] leading-[25px] font-medium mt-3 bg-ThemeBlack hover:bg-[#3d3d3d] text-white transition ease-out duration-300">Browse integrations</button>
                                    <button className="border-2 border-black ms-2 rounded-xl px-10 py-4 text-[18px] leading-[25px] font-semibold mt-3 bg-white  transition ease-out duration-300">Build an integration</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 lg:ps-20 flex justify-center">
                            <img src="/images/integration image green.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-Creem">
                <div className="container mx-auto py-8 ">
                    <IntegrationSlider />
                </div>

                <div className="container flex">
                    <div className="w-1/4 ">
                        <div className=" p-4 rounded-md h-full">
                            <h2 className="text-sm font-semibold mb-4">Collections</h2>
                            <div className="space-y-3">
                                <label className="flex items-center">
                                    <input type="checkbox" value="Collect Reviews" onChange={handleFilterChange} />
                                    <span className="ml-2 text-sm">Collect Reviews</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" value="Learn from Reviews" onChange={handleFilterChange} />
                                    <span className="ml-2 text-sm">Learn from Reviews</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" value="Showcase Reviews" onChange={handleFilterChange} />
                                    <span className="ml-2 text-sm">Showcase Reviews</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" value="Respond to Reviews" onChange={handleFilterChange} />
                                    <span className="ml-2 text-sm">Respond to Reviews</span>
                                </label>
                            </div>

                            <h2 className="text-sm font-semibold my-4">Categories</h2>
                            <div className="space-y-3">
                                <label className="flex items-center">
                                    <input type="checkbox" value="Data and Analytics" onChange={handleFilterChange} />
                                    <span className="ml-2 text-sm">Data and Analytics</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" value="Conversion" onChange={handleFilterChange} />
                                    <span className="ml-2 text-sm">Conversion</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" value="Helpdesk" onChange={handleFilterChange}/>
                                    <span className="ml-2 text-sm">Helpdesk</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" value="ECommerce Platform" onChange={handleFilterChange}/>
                                    <span className="ml-2 text-sm">ECommerce Platform</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" value="Location Management" onChange={handleFilterChange}/>
                                    <span className="ml-2 text-sm">Location Management</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" value="Marketing Automation" onChange={handleFilterChange}/>
                                    <span className="ml-2 text-sm">Marketing Automation</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" value="Payments" onChange={handleFilterChange}/>
                                    <span className="ml-2 text-sm">Payments</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" value="Personalization" onChange={handleFilterChange}/>
                                    <span className="ml-2 text-sm">Personalization</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" value="Reputation Management" onChange={handleFilterChange}/>
                                    <span className="ml-2 text-sm">Reputation Management</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" value="Search" onChange={handleFilterChange}/>
                                    <span className="ml-2 text-sm">Search</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" value="Shipping" onChange={handleFilterChange}/>
                                    <span className="ml-2 text-sm">Shipping</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" value="Social Media" onChange={handleFilterChange}/>
                                    <span className="ml-2 text-sm">Social Media</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" value="Trust and Security" onChange={handleFilterChange}/>
                                    <span className="ml-2 text-sm">Trust and Security</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" value="UGC" onChange={handleFilterChange}/>
                                    <span className="ml-2 text-sm">UGC</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" value="Website Builder" onChange={handleFilterChange}/>
                                    <span className="ml-2 text-sm">Website Builder</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" value="CRM" onChange={handleFilterChange}/>
                                    <span className="ml-2 text-sm">CRM</span>
                                </label>
                            </div>
                            <p className='text-sm mt-5'>Can't find the right integration?</p>
                            <p className='text-sm mt-2 flex justify-center items-center text-Blue underline hover:no-underline'><Share/> Request an integration</p>
                        </div>
                    </div>
                    <div className="w-3/4 ">
                        <div className="border border-gray-300 bg-white rounded px-3 flex items-center">
                            <span><IoIosSearch /></span>
                            <input type="text" className="outline-none py-2 px-3 w-full text-sm" placeholder="Search by name, service, or phrases"
                            />
                        </div>
                        <div className="mt-10">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {filteredData.map((item) => (
                                    <CompanyCard imageUrl={`/images/companies_logo/${item.imgUrl}`} title={item.title} description={item.description} />
                                ))}
                            </div>
                            <div className="flex justify-center items-center w-full mt-2 mb-10">
                                <button className='bg-white rounded-md border border-gray-300 py-2 px-4 text-sm font-light'>Load more results</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-Green">
                <div className="container py-20">
                    <div className="p-4 text-center">
                        <div className="font-bold text-DarkGreen text-[32px] lg:text-[40px] leading-[38px] lg:leading-[48px] my-2">
                            Don't see what you're looking for?
                        </div>
                        <div className="flex justify-center ">
                            <button className="rounded-xl px-10 py-4 text-[18px] leading-[25px] font-medium mt-3 bg-ThemeBlack hover:bg-[#3d3d3d] text-white transition ease-out duration-300">Request an integration</button>
                            <button className="border-2 border-black ms-2 rounded-xl px-10 py-4 text-[18px] leading-[25px] font-semibold mt-3 bg-white  transition ease-out duration-300">Build an integration</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
