import React from 'react'
import Hero from '../../../Section/Hero'
import TextCenter from '../../../Section/TextCenter'
import ReviewSection from '../../../Section/ReviewSection'
import ThreeCardTextSection from '../Assets/ThreeCardTextSection'
import ThreeCardRoundedImageSection from '../Assets/ThreeCardRoundedImageSection'
import RequestDemoSection from '../Assets/RequestDemoSection'
import FourCardTextSection from '../Assets/FourCardTextSection'
import OneImageTextCard from '../Assets/OneImageTextCard'

export default function TrustboxWidgets() {

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

     // how its work section for FourCardTextSection component
     const customSteps = [
        {
            icon: '/images/ICON_-_Choose_your_TrustBox_widget.svg',
            title: '1. Choose your TrustBox widget',
            description: "Filters help you sort through the different TrustBox types, until you find what fits your site best."
        },
        {
            icon: '/images/ICON_-_Configure_your_TrustBox.svg',
            title: '2. Configure your TrustBox',
            description: 'Choose from light or dark versions, review filters, SEO options, and a suitable width and height for your site.'
        },
        {
            icon: '/images/ICON_-_Get_the_code.svg',
            title: '3. Get the code',
            description: 'With the click of a button, TrustReview generates the code for the TrustBox widget you’ve designed.'
        },
        {
            icon: '/images/ICON_-_Implement_your_TrustBox.svg',
            title: '4. Implement your TrustBox',
            description: 'If you’re using an eCommerce integration, you can drag-and-drop your widget onto your site. Otherwise, simply copy and paste the TrustBox HTML into the BODY of your site where you’d like the TrustBox to be displayed.'
        }
    ];

    // ThreeCardRoundedImageSection
    const customItems = [
        {
            image: '/images/Social_Media_Tools_Yellow.webp',
            title: 'Social Media Tools',
            description: "Share trust on every social network. Automatically share TrustReview reviews on your company’s Facebook page, and turn your best reviews into attention grabbing images that stand out on social media.",
            link: '/'
        },
        {
            image: '/images/Marketing_Assets_Orange.webp',
            title: 'Marketing Assets',
            description: 'The power of TrustReview reviews goes far beyond the boundaries of your website. With TrustReview Marketing Assets, you can add credibility and improve the performance of TV Ads, display ads, retargeting ads, brochures and print media, packaging and delivery boxes.',
            link: '/'
        },
        {
            image: '/images/Product_Reviews_Pink.webp',
            title: 'Product Reviews',
            description: 'Share product reviews throughout your site to create confidence wherever shoppers are thinking about making a purchase. Match them to the look and feel of your brand, and include customer photos and product attributes.',
            link: '/'
        }
    ];
   

    return (
        <div className='bg-Creem'>
            <Hero bgColor="bg-[#2EDA8D]" textColor="text-[#032A1D]" subTitle="TrustReview widgets" title={`Reviews in the right place at the right time`} paragraph={`Turn reviews into revenue by displaying them on your website — so shoppers have everything they need to reach the order confirmation page.`} imgUrl="TrustReview_widgets-_Jumbotron.webp" button="Get a demo" />

            <TextCenter bgColor="bg-[#D4FAEC]" textColor="text-[#032A1D]" title="73.6% of TrustReview visitors say they are more likely to make a purchase from a website that's displaying TrustReview reviews on-site." subTitle="Did you know?" link="* Based on internal survey to 4,027 TrustReview visitors in May 2018" width="full" />

            <div className="bg-Creem">
                <div className="container py-8">
                    <ReviewSection
                        isImageFirst={false}
                        bgColor='bg-[#FCFBF3]'
                        textColor='text-[#1C1C1C]'
                        subTitle="TrustBox Widgets"
                        title='Increase conversions and sales on your site'
                        description={`Boost your conversion rates, increase basket size, and reduce cart abandonment by putting TrustBox widgets on your site.`}
                        imageUrl='/images/1-Increase_conversions_and_sales_on_your_site_-_TrustReview_widgets_page.webp'
                    />
                </div>
            </div>
            <div className="bg-Creem">
                <div className="container py-8">
                    <ReviewSection
                        isImageFirst={true}
                        bgColor='bg-[#FCFBF3]'
                        textColor='text-[#1C1C1C]'
                        subTitle="Email Marketing TrustBoxes"
                        title='Show your true colors in every email'
                        description="Dynamic TrustReview widgets for your email signature and email marketing campaigns add a little extra credibility that can make a big difference."
                        imageUrl='/images/2-Show_your_true_colors_in_every_email_-_TrustReview_widgets_page.webp'
                    />
                </div>
            </div>
            <div className="bg-[#2EDA8D]">
                <div className="container py-8">
                    <ReviewSection
                        isImageFirst={false}
                        bgColor='bg-[#2EDA8D]'
                        textColor='text-[#1C1C1C]'
                        subTitle="Display API"
                        title='Create a custom review display'
                        description="Want to make something unique? With TrustReview’s API you can create a custom display of your TrustReview reviews on your site and make your stars shine."
                        imageUrl='/images/3-Create_a_custom_review_display_-_TrustReview_widgets_page.webp'
                        linkText="The result? Up to 35% more clicks to your site."

                    />
                </div>
            </div>
            
         

            {/* Additional Features section */}
            <ThreeCardTextSection bgColor="bg-[#032A1D]" textColor="text-[#2EDA8D]"  features={features} />


            {/* how it work section  */}
            <FourCardTextSection bgColor="bg-[#FFF]" steps={customSteps} />

            <div className="bg-Creem">
                <OneImageTextCard
                    imageSrc="/images/Protect_Line_case_study.webp"
                    description={`See how Protect Line earned a 14% increase in click-through rate on pages with TrustBoxes.`}
                    buttonText='Read case study'
                />
            </div>

            {/* This may also interest you section */}
            <div className="bg-Creem">
                <ThreeCardRoundedImageSection textColor="text-[#032A1D]" items={customItems} align="text-center" />
            </div>

            <RequestDemoSection bgColor="bg-Green" textColor="text-[#032A1D]" title='Put trusted reviews on your site today' Reason="Request a demo" />

        </div>
    )
}
