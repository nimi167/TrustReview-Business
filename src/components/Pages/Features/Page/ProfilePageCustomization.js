import React from 'react'
import Hero from '../../../Section/Hero'
import TextCenter from '../../../Section/TextCenter'
import ReviewSection from '../../../Section/ReviewSection'
import ThreeCardTextSection from '../Assets/ThreeCardTextSection'
import IntegrationSection from '../../../Section/IntegrationSection'
import ThreeCardRoundedImageSection from '../Assets/ThreeCardRoundedImageSection'
import RequestDemoSection from '../Assets/RequestDemoSection'
import FourCardTextSection from '../Assets/FourCardTextSection'
import OneImageTextCard from '../Assets/OneImageTextCard'

export default function ProfilePageCustomization() {

    // ThreeCardRoundedImageSection
    const customItems = [
        {
            image: '/images/Location_reviews_Pink.webp',
            // subTitle: "Service Reviews",
            title: 'Review SEO',
            description: "Effortlessly supercharge your SEO and elevate your brand's visibility and credibility in search results.",
            link: '/'
        },
        {
            image: '/images/Marketing_Assets_Yellow.webp',
            // subTitle: "Product Reviews",
            title: 'Social Media Tools',
            description: 'Maximize your social media impact with tools that make it easy to share reviews to boost engagement and build trust online.',
            link: '/'
        },
        {
            image: '/images/Social_Media_Tools_Orange.webp',
            // subTitle: "Location Reviews",
            title: 'Marketing assets',
            description: 'Elevate your marketing by showcasing trusted reviews across all your channels to increase credibility with customers.',
            link: '/'
        }
    ];
   

    return (
        <div className='bg-Creem'>
            <Hero bgColor="bg-[#FC7A1B]" textColor="text-[#422613]" subTitle="Profile page customization" title={`Give potential customers the best first impression`} paragraph={`Boost brand recognition and convert more effectively with a personalized profile that highlights your business to searching potential customers.`} imgUrl="ENG_-_Customise_Profile_Orange.webp"
             />

            <TextCenter bgColor="bg-[#FDDCC5]" textColor="text-[#422613]" title="More than 50 million people visit TrustReview every month, making your profile the perfect place to showcase your brand to prospective customers."
             subTitle="Did you know?"
             />

            <div className="bg-Creem">
                <div className="container py-8">
                    <ReviewSection
                        isImageFirst={false}
                        bgColor='bg-[#FCFBF3]'
                        textColor='text-[#1C1C1C]'
                        subTitle="Brand-aligned design"
                        title='Introduce your business with impact'
                        description={`Make a powerful first impression that truly represents your brand by customizing your profile.`}
                        imageUrl='/images/Brand-aligned_design.webp'
                    />
                </div>
            </div>
           

            <div className="bg-[#FC7A1B]">
                <div className="container ">
                    <ReviewSection
                        isImageFirst={true}
                        bgColor='bg-[#FC7A1B]'
                        textColor='text-[#422613]'
                        subTitle="Competitve edge"
                        title='Make sure your brand’s always center-stage'
                        description="Choose to hide any mention of competitors on your profile page, helping to ensure that your visitors stay focused solely on your offerings."
                        imageUrl='/images/Competitve_edge.webp'
                    />
                </div>
            </div>
            
            <div className="bg-Creem">
                <div className="container py-8">
                    <ReviewSection
                        isImageFirst={false}
                        bgColor='bg-[#FCFBF3]'
                        textColor='text-[#1C1C1C]'
                        subTitle="Enhanced visibility"
                        title='Get more eyes on your brand'
                        description="Boost your SEO and leverage TrustReview’s powerful domain authority, ranked in the top 1% of websites globally, to amplify your brand's online visibility."
                        imageUrl='/images/ENG_-_Review_SEO_1_-_Orange.webp'
                    />
                </div>
            </div>

            <div className="bg-[#422613]">
                <div className="container ">
                    <ReviewSection
                        isImageFirst={true}
                        bgColor='bg-[#422613]'
                        textColor='text-[#FC7A1B]'
                        subTitle="Promotional space"
                        title='Capture interest at key moments'
                        description="Use your profile to display current promotions and offers and transform it into a dynamic marketing tool that grabs customers' attention when they’re already thinking about purchasing."
                        imageUrl='/images/ENG_-__Create_Promotion_Stone_copy.webp'
                    />
                </div>
            </div>


            {/* This may also interest you section */}
            <div className="bg-Creem">
                <ThreeCardRoundedImageSection textColor="text-[#1C1C1C]" items={customItems} align="text-left" />
            </div>

        </div>
    )
}
