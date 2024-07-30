import React from 'react'
import Hero from '../../../Section/Hero'
import RequestADemo from '../../../Section/RequestADemo'
import ReviewSection from '../../../Section/ReviewSection';
import GetInspired from '../../../Section/GetInspired';
import ViewOurPricing from '../../../Section/ViewOurPricing';

export default function ManageReviews() {
    const reviews = [
        {
            isImageFirst: false,
            bgColor: 'bg-[#FDDCC5]',
            textColor: 'text-[#422613]',
            title: 'Get instant notifications',
            description: 'Receive a review, answer questions, and say thanks within the platform.',
            linkText: 'Respond to reviews',
            linkHref: '/',
            imageUrl: '/images/1-Get_instant_notifications_-_Manage_reviews_page.webp',
        },
        {
            isImageFirst: true,
            bgColor: 'bg-[#FDAB6E]',
            textColor: 'text-[#422613]',
            title: 'Connect to your helpdesk',
            description: 'We integrate with Zendesk, Freshdesk, Slack, and Hootsuite so your teams can monitor and respond to TrustReview reviews without changing their workflows.',
            linkText: 'See integrations',
            linkHref: '/',
            imageUrl: '/images/2-Connect_to_your_helpdesk_-_Manage_reviews_page.webp',
        },
        {
            isImageFirst: false,
            bgColor: 'bg-[#FC7A1B]',
            textColor: 'text-[#422613]',
            title: 'Resolve issues fast',
            description: 'Easily identify an unknown reviewer or flag reviews with our platform tools, designed for you to resolve issues quickly.',
            linkText: 'Platform tools',
            linkHref: '/',
            imageUrl: '/images/3-Resolve_issues_fast_-_Manage_reviews_page.webp',
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
            imageSrc: '/images/Screenshot_2022-11-16_at_18.11.18.webp',
            title: 'How Google Shopping and TrustReview work together to support rapid business growth',
            link: '/'
        }
    ];

    return (
        <div className='bg-Creem'>
            <Hero bgColor="bg-[#FC7A1B]" textColor="text-[#422613]" subTitle="Attract new customers" title="Earn trust at every touch point"  paragraph="Use review content on your website to see conversions increase up to 23%" imgUrl="svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTI1MCA5MzgiIHdpZHRoPSIxMjUwIiBoZWlnaHQ9IjkzOCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgc2xpY2UiI.svg" />

            <RequestADemo title="End-to-end review management" paragraph="Your future customers are looking for authentic reviews before they make a purchase. Showing them TrustReview reviews gives them the confidence they need to buy — and gives you the sales you need to grow." btnText="Book a demo" />

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
            <ViewOurPricing bgColor="bg-[#FC7A1B]" textColor="text-[#422613]" title="Ready to unlock the full potential of reviews?" />

        </div>
    )
}
