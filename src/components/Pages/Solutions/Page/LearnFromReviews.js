import React from 'react'
import Hero from '../../../Section/Hero'
import RequestADemo from '../../../Section/RequestADemo'
import ReviewSection from '../../../Section/ReviewSection';
import GetInspired from '../../../Section/GetInspired';
import ViewOurPricing from '../../../Section/ViewOurPricing';

export default function LearnFromReviews() {
    const reviews = [
        {
            isImageFirst: false,
            bgColor: 'bg-[#F9D6E2]',
            textColor: 'text-[#4D021C]',
            title: 'The stats you need, all in one place',
            description: 'Your business dashboard provides a snapshot of key performance metrics like your star rating, reviews, invitation history, and more.',
            linkText: 'Your dashboard',
            linkHref: '/',
            imageUrl: '/images/1-The_stats_you_need__all_in_one_place_-_Learn_from_reviews_page.webp',
        },
        {
            isImageFirst: true,
            bgColor: 'bg-[#FC91B9]',
            textColor: 'text-[#4D021C]',
            title: "Understand your analytics",
            description: 'Monitor trends in your ratings and get tips to improve your review strategy. Whatever questions you have about your performance, you’ll find the answers here.',
            linkText: 'Analytics tools',
            linkHref: '/',
            imageUrl: '/images/2-Understand_your_analytics_-_Learn_from_reviews_page.webp',
        },
        {
            isImageFirst: false,
            bgColor: 'bg-[#F95A93]',
            textColor: 'text-[#4D021C]',
            title: 'Read your customers’ minds with Review Insights',
            description: "Analyze topics and trends within your reviews using AI-powered tools. Monitor customer sentiment across geographic regions or against your competitors.",
            linkText: 'Review Insights',
            linkHref: '/',
            imageUrl: '/images/3-Read_your_customers_minds_-_Learn_from_reviews_page.webp',
        },
    ];

    // get inspired section
    const cardData = [
        {
            imageSrc: '/images/Screenshot_2022-11-17_at_10.14.44.webp',
            title: 'How Staysure uses the power of AI to build customer trust',
            link: '/'
        },
        {
            imageSrc: '/images/designer-at-desk.webp',
            title: "How social proof helps Looka shine as a new brand in a new industry",
            link: '/'
        },
        {
            imageSrc: '/images/Switch.webp',
            title: 'The importance of social proof in FinTech',
            link: '/'
        }
    ];

    return (
        <div className='bg-Creem'>
            <Hero bgColor="bg-[#F95A93]" textColor="text-[#4D021C]" subTitle="Grow with reviews" title="Elevate your brand and drive sales" paragraph="Reviews on TrustReview can broaden your organic reach." imgUrl="svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTI1MCA5MzgiIHdpZHRoPSIxMjUwIiBoZWlnaHQ9IjkzOCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgc2xpY (1).svg" />

            <RequestADemo title="Supercharge customer loyalty, retention, and LTV" paragraph="From high-level performance data to deep analysis of customer sentiment, our analytics tools help you improve your customers’ experiences." btnText="Book a demo" />

            <div className="container bg-Creem ">
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

            {/* view out Pricing input email section  */}
            <ViewOurPricing bgColor="bg-[#F95A93]" textColor="text-[#4D021C]" title="Ready to unlock the full potential of reviews?" />

        </div>
    )
}
