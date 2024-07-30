import React, { useState } from 'react'
import LogoSlider from '../Assets/LogoMarquee';
import { HiArrowLongRight } from "react-icons/hi2";
import IntegrationSection from '../Section/IntegrationSection';

export default function HomePage() {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <div className="bg-Green">
        <div className="container py-4">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-1/2 lg:pe-10 flex items-center">
              <div className="p-4 max-w-[576px] mx-auto text-center md:text-left">
                <div className="font-bold text-DarkGreen text-[32px] lg:text-[40px] leading-[38px] lg:leading-[48px] my-2">
                  Real reviews, trusted by millions, to help drive revenue for your business
                </div>
                <div className="font-semibold text-DarkGreen text-[20px] lg:text-[24px] leading-[33px] my-3">
                  Attract and keep customers with TrustReview-Business review platform.
                </div>
                <button className="rounded-full px-10 py-4 text-[18px] leading-[25px] font-medium mt-3 bg-ThemeBlack hover:bg-[#3d3d3d] text-white transition ease-out duration-300">
                  Book a demo
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:ps-20 flex justify-center">
              <img src="/images/landingHero.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-Creem1 py-2">
        <div className="container mx-auto pb-8 ">
          <div className="font-semibold text-lg my-8 text-center">See what customers are saying about your business:</div>
          <div className="flex justify-center items-center bg-white py-1 ps-4 pe-2 rounded-full border border-black w-full max-w-xl mx-auto">
            <div className="flex w-full max-w-xl">
              <input type="text" className='text-[15px] font-[500] w-full my-2 outline-none ps-4' placeholder="Website URL" value={searchText} onChange={handleChange} />
              <button type="submit" className="bg-black hover:bg-DarkGray text-white py-3 px-14 rounded-full my-2">Check</button>
            </div>
          </div>
          <div className=" text-md mt-8 text-Gray opacity-60 text-center">* ex. www.trustreview.com</div>
        </div>
      </div>

      <div className="bg-Creem pb-6 pt-6 lg:pt-10 lg:pb-20 text-center">
        <div className="container">
          <div className="font-semibold text-3xl lg:text-[32px] mb-10">Why consumers rely on TrustReview</div>
          <div className="md:flex justify-between">
            <div className="max-w-[550px] mx-auto lg:w-2/6 mb-16 lg:mb-0">
              <div className="font-semibold text-3xl lg:text-[40px] mt-3 mb-5">+238m</div>
              <div className="font-light text-[16px] mt-1 pe-4">reviews in total written across +980,000 domains.</div>
            </div>
            <div className="max-w-[550px] mx-auto lg:w-2/6 mb-16 lg:mb-0">
              <div className="font-semibold text-3xl lg:text-[40px] mt-3 mb-5">71%</div>
              <div className="font-light text-[16px] mt-1 pe-4">of US consumers surveyed in 2022 agree that a good TrustReview score makes them more likely to buy from a brand.</div>
            </div>
            <div className="max-w-[550px] mx-auto lg:w-2/6 mb-16 lg:mb-0">
              <div className="font-semibold text-3xl lg:text-[40px] mt-3 mb-5">+46m</div>
              <div className="font-light text-[16px] mt-1 pe-4">reviews were written on TrustReview in 2022.</div>
            </div>
          </div>
        </div>

        <div className="my-16">
          <LogoSlider />
        </div>

        <div className="container ">
          <div className="text-start">
            <div className="lg:flex">
              <div className='lg:w-2/5 border bg-Creem1 pt-2 sm:pt-5 pb-6 sm:pb-24 px-5 sm:px-8 m-4 rounded-[40px]'>
                <div className="font-bold text-ThemeBlack text-[25px] sm:text-[32px] lg:text-[40px] leading-[30px] sm:leading-[38px] lg:leading-[48px] my-2">
                  Salesforce integration
                </div>
                <div className="font-light text-ThemeBlack  leading-[22px] my-5">
                  Seamlessly integrate Salesforce with TrustReview and turn your CRM into a reliable hub for trusted review data.
                </div>
                <button className="rounded-full px-8 py-3 text-[18px] leading-[25px] font-medium mt-3 bg-ThemeBlack hover:bg-[#3d3d3d] text-white transition ease-out duration-300">
                  Find out more
                </button>
              </div>
              <div className='lg:w-3/5 border bg-Creem1 py-5 px-8 m-4 rounded-[40px]'>
                <div className="font-bold text-ThemeBlack text-[32px] lg:text-[40px] leading-[38px] lg:leading-[48px] my-2 max-w-[500px]">
                  TrustReview joins the Coalition of Trust
                </div>
                <div className="font-light text-ThemeBlack  leading-[22px] my-5 max-w-[500px]">
                  TrustReview, Amazon, Booking.com, Expedia Group, Glassdoor and Tripadvisor have formed the Coalition for Trusted Reviews. A shared commitment to protecting the integrity of online consumer reviews worldwide.
                </div>
                <button className="rounded-full px-8 py-3 text-[18px] leading-[25px] font-medium mt-3 bg-ThemeBlack hover:bg-[#3d3d3d] text-white transition ease-out duration-300">
                  Read more
                </button>
              </div>
            </div>

            <div className="lg:flex">
              <div className='lg:w-3/5 border bg-Creem1 py-5 px-8 m-4 rounded-[40px]'>
                <div className="font-bold text-ThemeBlack text-[32px] lg:text-[40px] leading-[38px] lg:leading-[48px] my-2 max-w-[500px]">
                  Find the right Pricing plan for your business
                </div>
                <div className="font-light text-ThemeBlack  leading-[22px] my-5 max-w-[500px]">
                  Whether you’re a new business or a household name, we have a range of plans to help you reach more customers than ever before.
                </div>
                <button className="rounded-full px-8 py-3 text-[18px] leading-[25px] font-medium mt-3 bg-ThemeBlack hover:bg-[#3d3d3d] text-white transition ease-out duration-300">
                  View our pricing plans
                </button>
              </div>
              <div className='lg:w-2/5 border bg-Green pt-5 pb-24 px-8 m-4 rounded-[40px]'>
                <div className="font-bold text-ThemeBlack text-[32px] lg:text-[40px] leading-[38px] lg:leading-[48px] my-2">
                TrustReview Marketing widgets
                </div>
                <div className="font-light text-ThemeBlack  leading-[22px] my-5">
                  73.6% of TrustReview visitors say they are more likely to make a purchase from a website that's displaying TrustReview reviews on-site.
                </div>
                <button className="rounded-full px-8 py-3 text-[18px] leading-[25px] font-medium mt-3 bg-ThemeBlack hover:bg-[#3d3d3d] text-white transition ease-out duration-300">
                  Learn more
                </button>
              </div>

            </div>
          </div>

          {/* integration section  */}
          <IntegrationSection />

          <section className="p-6  my-10">
            <div className="p-4 mx-auto text-center">
              <h2 className="text-[40px] font-bold">Get inspired</h2>
            </div>

            <div className="flex flex-wrap justify-between">
              <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-1rem)] mb-4 md:mb-0 mr-0 md:mr-2 lg:mr-4 bg-white rounded-2xl">
                <a href="/">
                  <img className="rounded-t-2xl w-full h-[230px] object-cover" src="/images/companies_logo/02_3.webp" alt="" />
                </a>
                <div className="p-7 text-left">
                  <a href="/">
                    <h5 className="mb-2 text-xl font-semibold tracking-tight">Too. Much. Choice.</h5>
                  </a>
                  <a href="/" className="inline-flex items-center pt-2 pb-4 text-md font-light text-center text-blue-700">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-1rem)] mb-4 md:mb-0 mr-0 md:mr-2 lg:mr-4 bg-white rounded-2xl">
                <a href="/">
                  <img className="rounded-t-2xl w-full h-[230px] object-cover" src="/images/companies_logo/Growth-Scale_v2.gif" alt="" />
                </a>
                <div className="p-7 text-left">
                  <a href="/">
                    <h5 className="mb-2 text-xl font-semibold tracking-tight">Too. Much. Choice.</h5>
                  </a>
                  <a href="/" className="inline-flex items-center pt-2 pb-4 text-md font-light text-center text-blue-700">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-[calc(33.33%-1rem)] bg-white rounded-2xl">
                <a href="/">
                  <img className="rounded-t-2xl w-full h-[230px] object-cover" src="/images/companies_logo/Screenshot_2022-11-16_at_19.10.33.webp" alt="" />
                </a>
                <div className="p-7 text-left">
                  <a href="/">
                    <h5 className="mb-2 text-xl font-semibold tracking-tight">Too. Much. Choice. </h5>
                  </a>
                  <a href="/" className="inline-flex items-center pt-2 pb-4 text-md font-light text-center text-blue-700">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
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
    </>
  )
}
