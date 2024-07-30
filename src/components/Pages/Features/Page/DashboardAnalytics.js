import React from 'react'
import Hero from '../../../Section/Hero'
import TextCenter from '../../../Section/TextCenter'
import ReviewSection from '../../../Section/ReviewSection'
import ThreeCardRoundedImageSection from '../Assets/ThreeCardRoundedImageSection'
import RequestDemoSection from '../Assets/RequestDemoSection'
import OneImageTextCard from '../Assets/OneImageTextCard'

export default function DashboardAnalytics() {


    // ThreeCardRoundedImageSection
    const customItems = [
        {
            image: '/images/Review_Insights-ENG.webp',
            title: 'Review Insights',
            description: "Machine learning sorts all of your reviews and categorizes customer sentiment by our default options — or your own custom review topics — so you can monitor any changes to customer satisfaction in the areas that are most important to your business.",
            link: '/'
        },
        {
            image: '/images/Review_Tags.webp',
            title: 'Review Tags',
            description: 'Organize your reviews with the tag identifiers that work best for you, like location, sales agent, or vendor. Use them to create highly targeted website widgets on specific pages, or to dig even deeper into your review analytics and insights by key topics.',
            link: '/'
        },
        {
            image: '/images/Service_Reviews_Pink.webp',
            title: 'Platform Safeguards',
            description: 'Our custom fraud-detection software and full-time Content Integrity Team help protect your brand and our platform from fake reviews and keep things running smoothly.',
            link: '/'
        }
    ];

    return (
        <div className='bg-Creem'>
            <Hero bgColor="bg-[#F95A93]" textColor="text-[#4D021C]" subTitle="Dashboard and Analytics" title={`Stay on top of your review data`} paragraph={`We’ll crunch the numbers behind your reviews, giving you the insights needed to get the most out of your customer feedback and build a customer-centric business.`} imgUrl="Dashboard_and_Analytics_-_Jumbotron.webp"
                button="Get a demo"
            />

            <TextCenter bgColor="bg-[#F9D6E2]" textColor="text-[#4D021C]" title="TrustReview gets over 4 million new reviews every month - that’s a lot of content to analyze!"
                subTitle="Did you know?"
            />

            <div className="bg-Creem">
                <div className="container py-8">
                    <ReviewSection
                        isImageFirst={false}
                        bgColor='bg-[#FCFBF3]'
                        textColor='text-[#1C1C1C]'
                        subTitle="Dashboard"
                        title='Your HQ for review performance'
                        description={`Get at-a-glance performance metrics and engage with customers all in one place. Monitor review invitation performance and tweak your strategy accordingly to collect more feedback — because more reviews mean more opportunity for ROI.`}
                        imageUrl='/images/1-our_HQ_for_review_performance_-_Dashboard_and_Analytics_page.webp'
                    />
                </div>
            </div>
            <div className="bg-Creem">
                <div className="container py-8">
                    <ReviewSection
                        isImageFirst={true}
                        bgColor='bg-[#FCFBF3]'
                        textColor='text-[#1C1C1C]'
                        subTitle="Performance Data"
                        title='Dig into your review data'
                        description="Gauge customer satisfaction in your reviews over time to keep your customers happy. See analytics segmented by review tags to understand performance in areas that best support your business strategy."
                        imageUrl='/images/2-Dig_into_your_review_data_-_Dashboard_and_Analytics_page.webp'
                    />
                </div>
            </div>
            <div className="bg-Creem">
                <div className="container py-8">
                    <ReviewSection
                        isImageFirst={false}
                        bgColor='bg-[#FCFBF3]'
                        textColor='text-[#1C1C1C]'
                        subTitle="Organic Reach"
                        title='See exactly how your reviews impact search'
                        description={`View the impressions, position, and click-through rate your business profile page gets in Google results, and track changes over time. Get the full picture on how your customers find you by viewing the top search terms used.`}
                        imageUrl='/images/3-See_exactly_how_your_reviews_impact_search_-_Dashboard_and_Analytics_page.webp'
                    />
                </div>
            </div>

            <div className="bg-[#F95A93]">
                <div className="container ">
                    <ReviewSection
                        isImageFirst={true}
                        bgColor='bg-[#F95A93]'
                        textColor='text-[#4D021C]'
                        subTitle="TrustReview Analytics"
                        title='Track and improve your performance on TrustReview'
                        description="Are your customers happier today than yesterday? TrustReview Analytics includes a collection of dashboards to track changes in your performance including ratings, star distribution, number of reviews, and TrustScore."
                        imageUrl='/images/4-Track_and_improve_your_performance_on_TrustReview_-_Dashboard_and_Analytics_page.webp'
                    />
                </div>
            </div>

            <div className="bg-Creem">
                <OneImageTextCard
                    imageSrc="/images/Case-image-min (3).webp"
                    description={`“My favorite feature on TrustReview - as far as a data nerd - I’d have to say the Dashboard and also the statistics module. It’s a place you can very quickly tap into what’s going on with your feedback and not only have a lot of stats and understanding at your fingertips... but it also makes it really easy to dial in to exactly what’s happening.”
                    `}
                    text="Nathan Reid, uShip"
                />
            </div>


            {/* This may also interest you section */}
            <div className="bg-Creem">
                <ThreeCardRoundedImageSection textColor="text-[#1C1C1C]" items={customItems} align="text-left" />
            </div>


            <RequestDemoSection bgColor="bg-[#F95A93]" textColor="text-[#4D021C]" title='Dig in to your review data today' Reason="Sign up for a free demo" />

        </div>
    )
}
