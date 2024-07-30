import React, { useState } from 'react'
import Hero from '../../../Section/Hero'
import RequestADemo from '../../../Section/RequestADemo'
import { HiArrowLongRight } from "react-icons/hi2";
import ReviewSection from '../../../Section/ReviewSection';
import GetInspired from '../../../Section/GetInspired';

export default function AttractNewCustomers() {
    const [searchText, setSearchText] = useState('');

    const handleChange = (event) => {
        setSearchText(event.target.value);
    };


    // reviews card data
    const reviews = [
        {
            isImageFirst: false,
            bgColor: 'bg-[#D4FAEC]',
            textColor: 'text-DarkGreen',
            title: 'Drive website conversions with review widgets',
            description: 'Business customers using Trustscores or review content on their websites and in marketing campaigns can see up to a 23% increase in website conversions. Showcase your most recent and relevant customer reviews across your website and emails with our extensive library of dynamic widgets.',
            linkText: 'View our pricing plans',
            linkHref: '/',
            imageUrl: '/images/1-Sell_more_with_review_widgets_-_Attract_new_customers_page.webp',
        },
        {
            isImageFirst: true,
            bgColor: 'bg-[#82EDC6]',
            textColor: 'text-DarkGreen',
            title: 'Generate sales with product reviews',
            description: 'Climb the ranks as search engines index your product review content. Take social proof to the next level with real customer photos and videos alongside robust product reviews, enticing shoppers to click “Buy”.',
            linkText: 'Product reviews',
            linkHref: '/',
            imageUrl: '/images/2-Earn_more_sales_with_product_reviews_-_Attract_new_customers_page.webp',
        },
        {
            isImageFirst: false,
            bgColor: 'bg-[#2EDA8D]',
            textColor: 'text-DarkGreen',
            title: 'Create co-branded TrustReview ads',
            description: 'US consumers were 88% more likely click through on a TrustReview co-branded ad when it contains an authentic review. Save time and money with downloadable templates to transform your customer feedback into standout promotional materials.',
            linkText: 'Marketing assets',
            linkHref: '/',
            imageUrl: '/images/3-Create_co-branded_TrustReview_ads_-_Attract_new_customers_page.webp',
        },
        {
            isImageFirst: true,
            bgColor: 'bg-[#032A1D]',
            textColor: 'text-[#2EDA8D]',
            title: 'Social media content in seconds',
            description: 'Turn your reviews into bold, feed-ready images and videos in seconds.',
            linkText: 'Social media tools',
            linkHref: '/',
            imageUrl: '/images/4-Social_media_content_in_seconds_-_Attract_new_customers_page.webp',
        },
    ];

    // get inspired section
    const cardData = [
        {
            imageSrc: '/images/companies_logo/02_3.webp',
            title: 'Too. Much. Choice.',
            link: '/'
        },
        {
            imageSrc: '/images/companies_logo/Growth-Scale_v2.gif',
            title: "Trustworthy reviews: How do TrustReview's competitors stack up?",
            link: '/'
        },
        {
            imageSrc: '/images/companies_logo/Screenshot_2022-11-16_at_19.10.33.webp',
            title: '6 Ways to grow your brand with brand purpose',
            link: '/'
        }
    ];

    return (
        <div className='bg-Creem'>
            <Hero bgColor="bg-Green" textColor="text-DarkGreen" subTitle="Attract new customers" title="Earn trust at every touch point" paragraph="Use review content on your website to see conversions increase up to 23%" imgUrl="attract-new-customers.png" />

            <RequestADemo title="Why share reviews beyond your profile page?" paragraph="Your future customers are looking for authentic reviews before they make a purchase. Showing them TrustReview reviews gives them the confidence they need to buy — and gives you the sales you need to grow." btnText="Request a demo" />

            <div className="container bg-Creem">
                {reviews.map((review, index) => (
                    <ReviewSection
                        key={index}
                        isImageFirst={review.isImageFirst}
                        bgColor={review.bgColor}
                        textColor={review.textColor}
                        title={review.title}
                        description={review.description}
                        linkText={review.linkText}
                        linkHref={review.linkHref}
                        imageUrl={review.imageUrl}
                    />
                ))}


                <GetInspired cards={cardData} />

            </div>
            <div className="bg-Green py-10">
                <div className="container mx-auto pb-8 ">
                    <div className="font-semibold text-4xl my-8 text-center">Ready to unlock the full potential of reviews?</div>
                    <div className="flex justify-center items-center bg-white py-1 ps-4 pe-2 rounded-full  w-full max-w-xl mx-auto">
                        <div className="flex w-full max-w-xl">
                            <input type="email" className='text-[15px] font-[500] w-full my-2 outline-none ps-4' placeholder="Email address" value={searchText} onChange={handleChange} />
                            <button type="submit" className="bg-Blue hover:bg-DarkBlue text-white font-light py-[14px] px-5 rounded-full my-2 transition">Request&nbsp;demo</button>
                        </div>
                    </div>
                    <div className=" text-md mt-8 text-center">
                        <a href="/" className="flex justify-center items-center pt-2 pb-4 text-md font-semibold text-center underline hover:no-underline transition group">
                            <span className='mr-2'>View our pricing plans</span>
                            <HiArrowLongRight size={21} className="transform duration-300 transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </div>


        </div>
    )
}
