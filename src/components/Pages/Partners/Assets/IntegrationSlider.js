import React from 'react'
import Slider from "react-slick";
import CompanyCard from './CompanyCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// vertical card for IntegrationSlider homePage slider

export default function IntegrationSlider() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        arrows: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 3.1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: true
                }
            },
            {
                breakpoint: 742,
                settings: {
                    slidesToShow: 2.3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: true
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };
    return (
        <div>
            <div className="row overflow-hidden">
                <Slider {...settings}>
                    <div className="col-3 pr-2">
                        <CompanyCard imageUrl="/images/companies_logo/salesforce.webp" title="Salesforce" description="We bring companies & customers together in the #1 CRM platform. Sharing the news, events, and innovation you need." />
                    </div>
                    <div className="col-3 px-2">
                        <CompanyCard imageUrl="/images/companies_logo/zendesk.webp" title="Zendesk" description="Zendesk is a service-first CRM company that builds support, sales, and customer engagement software designed to foster better customer..." />
                    </div>
                    <div className="col-3 px-2">
                        <CompanyCard imageUrl="/images/companies_logo/docDigit.webp" title="Dotdigital" description="Dotdigital is a leading cross-channel marketing automation technology that allows users to engage customers across all touchpoints,..." />
                    </div>
                    <div className="col-3 pl-2">
                        <CompanyCard imageUrl="/images/companies_logo/sproutsocial.webp" title="Sprout Social" description="Sprout Social empowers brands to deliver smarter, faster business impact with comprehensive social media management solutions." />
                    </div>
                </Slider>
            </div>
        </div>
    );
}