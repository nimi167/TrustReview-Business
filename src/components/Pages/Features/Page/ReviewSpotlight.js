import React from 'react'
import Hero from '../../../Section/Hero'
import TextCenter from '../../../Section/TextCenter'
import ReviewSection from '../../../Section/ReviewSection'
import ThreeCardRoundedImageSection from '../Assets/ThreeCardRoundedImageSection'

export default function ReviewSpotlight() {

    // ThreeCardRoundedImageSection
    const customItems = [
        {
            image: '/images/Service_Reviews_Pink.webp',
            // subTitle: "Flag and report reviews",
            title: 'Review insights',
            description: "Unlock deeper customer insights and elevate your understanding of key feedback trends and customer sentiments",
            link: '/'
        },
        {
            image: '/images/Analytics_yellow.webp',
            // subTitle: "Review Tags",
            title: 'Dashboard and analytics',
            description: 'Gain key insights into customer feedback, to monitor and optimize customer interactions, and enhance your business growth.',
            link: '/'
        },
        {
            image: '/images/Review_Tags.webp',
            // subTitle: "Customer engagement",
            title: 'Review tagging',
            description: 'Sharpen your response strategies by using tags to quickly categorize feedback and streamline your review management.',
            link: '/'
        }
    ];

    return (
        <div className='bg-Creem'>
            <Hero bgColor="bg-[#2EDA8D]" textColor="text-[#032A1D]" subTitle="Review spotlight" title={`Pinpoint the real opportunities for improvement`} paragraph={`Streamline your review management with AI technology that monitors what your customers are saying, saving you from going through every review by hand.`} imgUrl="ENG_-_AI_Review_Spotlight_-_Green.webp"
            />

            <TextCenter bgColor="bg-[#D4FAEC]" textColor="text-[#032A1D]" title="Your weekly review spotlight highlights key areas to improve your business based on themes in your customer feedback."
                subTitle="Did you know?"
            />

            <div className="bg-Creem">
                <div className="container py-8">
                    <ReviewSection
                        isImageFirst={false}
                        bgColor='bg-[#FCFBF3]'
                        textColor='text-[#1C1C1C]'
                        subTitle="Automated insights"
                        title='All the heavy lifting’s done for you'
                        description={`Review spotlight harnesses generative AI to quickly summarize the content of your recent customer reviews and identify the common themes that run through them.`}
                        imageUrl='/images/Automated_insights.webp'
                    />
                </div>
            </div>
            <div className="bg-Creem">
                <div className="container py-8">
                    <ReviewSection
                        isImageFirst={true}
                        bgColor='bg-[#FCFBF3]'
                        textColor='text-[#1C1C1C]'
                        subTitle="Actions identifed"
                        title='Plot a course to customer satisfaction'
                        description="Receive weekly and monthly reports with summaries and recommended actions, showing you how to proactively address the needs of your customers."
                        imageUrl='/images/Actions_identifed.webp'
                    />
                </div>
            </div>
           

            <div className="bg-[#2EDA8D]">
                <div className="container ">
                    <ReviewSection
                        isImageFirst={false}
                        bgColor='bg-[#2EDA8D]'
                        textColor='text-[#032A1D]'
                        subTitle="Voice of the customer"
                        title='In their own words'
                        description="View up to five representative quotes per theme, directly linked to original reviews, and gain deeper insight into the key sentiments being shared by your customers."
                        imageUrl='/images/Voice_of_the_customer.webp'
                    button="Learn more"
                    />
                </div>
            </div>

            <div className="bg-Creem">
                <ThreeCardRoundedImageSection textColor="text-[#1C1C1C]" items={customItems} align="text-left" />
            </div>
        </div>
    )
}
