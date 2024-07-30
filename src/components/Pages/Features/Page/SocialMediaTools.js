import React from 'react'
import Hero from '../../../Section/Hero'
import TextCenter from '../../../Section/TextCenter'
import ReviewSection from '../../../Section/ReviewSection'
import ThreeCardRoundedImageSection from '../Assets/ThreeCardRoundedImageSection'
import RequestDemoSection from '../Assets/RequestDemoSection'
import FourCardTextSection from '../Assets/FourCardTextSection'
import OneImageTextCard from '../Assets/OneImageTextCard'

export default function SocialMediaTools() {
    const features = [
        {
            title: 'Targeted TrustBox',
            description: 'Show customers the most relevant reviews for them. The Targeted TrustBox displays only your tagged reviews on your site.',
            link: '/',
        },
        {
            title: 'Responsive design',
            description: "All TrustBoxes are responsive. They adapt to fit different screen sizes and can be configured to different height and width attributes for your page.",
            link: '/',
        },
        {
            title: 'Product Attribute Ratings',
            description: 'Attribute Ratings give your customers a more detailed view of your products, making it easier for them to choose what to buy.',
            link: '/',
        }
    ];

     const customSteps = [
        {
            icon: '/images/Icon_12.svg',
            title: '1. Find a great review',
            description: "Any review or portion of a review can be turned into a testimonial image in minutes"
        },
        {
            icon: '/images/ICON_-_Choose_a_background_image.svg',
            title: '2. Choose a background image',
            description: 'Select an image from our catalogue or upload your own background image'
        },
        {
            icon: '/images/ICON_-_Select_a_size_and_filters.svg',
            title: '3. Select a size and filters',
            description: 'Choose a template size for Instagram, Facebook, or Twitter, and customize it with filters'
        },
        {
            icon: '/images/ICON_-_Download_the_image.svg',
            title: '4. Download the image',
            description: 'You can share your testimonial image anywhere: social media, blogs, emails, etc.'
        }
    ];

    const customItems = [
        {
            title: 'Marketing Assets',
            description: "The power of TrustReview reviews goes far beyond the boundaries of your website. With TrustReview Marketing Assets, you can add credibility and improve the performance of TV Ads, display ads, retargeting ads, brochures and print media, packaging and delivery boxes.",
            link: '/'
        },
        {
            image: '/images/TP_widgets_Orange.webp',
            title: 'TrustReview Widgets',
            description: 'Display TrustReview reviews on your site with TrustReview widgets. With a cut and paste of code, you can increase conversion and sales by sharing TrustReview reviews on your site, email signatures, and newsletters.',
            link: '/'
        },
        {
            image: '/images/Review_SEO_Pink.webp',
            title: 'Review SEO',
            description: 'Climb to the top of search. Make your brand more visible in both paid and organic search, and drive more traffic to your site with TrustReview reviews.',
            link: '/'
        }
    ];
   

    return (
        <div className='bg-Creem'>
            <Hero bgColor="bg-[#2EDA8D]" textColor="text-[#032A1D]" subTitle="Social Media Tools" title={`Stand out in social - effortlessly`} paragraph={`Let your customers speak on your behalf and be a trusted brand on every social network`} imgUrl="Social_Media_Tools_-_Jumbotron.webp" button="Get a demo" />

            <TextCenter bgColor="bg-[#D4FAEC]" textColor="text-[#032A1D]" title="91% of millennials trust online reviews as much as a personal recommendation" subTitle="Did you know?" link="BrightLocal consumer review survey" />

            <div className="bg-Creem">
                <div className="container py-8">
                    <ReviewSection
                        isImageFirst={false}
                        bgColor='bg-[#FCFBF3]'
                        textColor='text-[#1C1C1C]'
                        subTitle="Review Image Generator"
                        title='Social is noisy - make your reviews loud'
                        description={`Turn your best reviews into attention-grabbing images fit for every social channel. The Image Generator does all the designing for you, saving you time, effort and much needed resource.`}
                        imageUrl='/images/1-Social_is_noisy_-_make_your_reviews_loud_-_Social_Media_Tools_page.webp'
                    />
                </div>
            </div>
            <div className="bg-[#2EDA8D]">
                <div className="container py-8">
                    <ReviewSection
                        isImageFirst={true}
                        bgColor='bg-[#2EDA8D]'
                        textColor='text-[#1C1C1C]'
                        subTitle="Hootsuite Integration"
                        title='Connect to your social apps'
                        description="Make TrustReview reviews a regular part of your social media strategy. Share, monitor, and respond to reviews directly from Hootsuite."
                        imageUrl='/images/3-Connect_to_your_social_apps_-_Social_Media_Tools_page.webp'
                    />
                </div>
            </div>
           
            {/* how it work section  */}
            <FourCardTextSection bgColor="bg-[#FFF]" title="How our Image Generator works" steps={customSteps} />

            <div className="bg-Creem">
                <OneImageTextCard
                    imageSrc="/images/Case-image-min (2).webp"
                    description={`“I absolutely love the new TrustReview image generator and have used it frequently on social media to help advertise our business. I’ve found that there is no better way of showing off our ‘excellent’ TrustReview rating on social media!”`}
                    // buttonText='Read case study'
                    text="Lorraine Dallmeier
                    Director of FormulaBotanica.com"
                />
            </div>

 
            {/* This may also interest you section */}
            <div className="bg-Creem">
                <ThreeCardRoundedImageSection textColor="text-[#032A1D]" items={customItems} align="text-left" />
            </div>


            <RequestDemoSection bgColor="bg-Green" textColor="text-[#032A1D]" title='Start sharing reviews on your social pages today' Reason="Request a demo" />

        </div>
    )
}
