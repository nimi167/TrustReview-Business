import React, { useEffect, useRef, useState } from "react";
import NewLable from "../../NewLable";
import { IoIosArrowForward } from "react-icons/io";
import TrueSvg from "./js";
import FalseSvg from "./FalseSvg";
import PlusSvg from "./PlusSvg";
export default function Pricing() {
  const [width, setWidth] = useState("100%");
  const [height, setHeight] = useState("23rem");
  const [innerHeight, setInnerHeight] = useState("500px");
  const [showMiddleSection, setShowMiddleSection] = useState(true);
  const [padding, setPadding] = useState("py-8 mb-[170px]");
  const contentRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const [secondAccordian, setSecondAccordian] = useState(false);
  const toggleSecondAccordion = () => setSecondAccordian(!secondAccordian);
  ;
  const [thirdAccordian, setThirdAccordian] = useState(false);
  const toggleThirdAccordion = () => setThirdAccordian(!thirdAccordian);
  const [fourthAccordian, setFourthAccordian] = useState(false);
  const toggleFourthAccordion = () => setFourthAccordian(!fourthAccordian);
  const [fifthAccordian, setFifthAccordian] = useState(false);
  const toggleFifthAccordion = () => setFifthAccordian(!fifthAccordian);
  const [sixthAccordian, setSixthAccordian] = useState(false);
  const toggleSixthAccordion = () => setSixthAccordian(!sixthAccordian);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1 && window.innerWidth >= 1250) {
        setWidth("1260px");
        setPadding("pt-0 pb-10");
        setHeight("15.5rem");
        setInnerHeight("14rem");
        setShowMiddleSection(false);
      } else {
        setWidth("100%");
        setPadding("py-8 mb-[170px]");
        setHeight("23rem");
        setInnerHeight("500px");
        setShowMiddleSection(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // how its work section for FourCardTextSection component
  const customSteps = [
    {
      icon: "/images/Base_price_icon.svg",
      title: "Choose your plan",
      description:
        "Work out which of our plans and add-ons are the best fit for your business ambitions.",
    },
    {
      icon: "/images/Domains_icon.svg",
      title: "Confirm your domains",
      description:
        "Let us know all of the domains you own that you want to include in your plan. ",
    },
    {
      icon: "/images/Traffic_icon.svg",
      title: "Assess website traffic",
      description:
        "We gauge your site's traffic to forecast the reach and impact of your reviews.",
    },
    {
      icon: "/images/Price_icon.svg",
      title: "Receive a quote",
      description:
        "We create personalized pricing that reflects your specific needs and goals.",
    },
  ];

  const [timeLeft, setTimeLeft] = useState(30); // Set initial time to 30 seconds

  useEffect(() => {
    if (timeLeft === 0) return;
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div className="bg-Creem">
      <div
        className={`bg-Creem transition-all duration-300 ${padding} `}
        style={{ transition: "all 0.3s ease-in-out" }}
      >
        <div
          className="bg-Creem1 rounded-[3rem] mx-auto "
          style={{
            width: width,
            height: height,
            transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
          }}
        >
          <div className="container  flex h-full">
            <div className="flex justify-center items-center ">
              <div>
                <h2
                  className={`text-[40px] leading-[48px] font-bold mb-8 max-w-[600px] ${
                    height === "15.5rem" && "ps-8 "
                  } mt-7`}
                  style={{ transition: "padding 0.3s ease-in-out" }}
                >
                  The right plan for your business
                </h2>
              </div>
            </div>
            <div className=" w-full flex">
              {["Enterprise", "Advanced", "Premium", "Plus"].map(
                (plan, index) => (
                  <div
                    key={index}
                    className="rounded-[3rem] w-1/4 bg-white mx-1 mt-3 border grow border-black px-3  pb-3 overflow-hidden"
                    style={{
                      height: innerHeight,
                      transition: "height 0.3s ease-in-out",
                    }}
                  >
                    <div className="max-w-sm bg-white h-full overflow-hidden relative">
                      {plan === "Advanced" && (
                        <>
                          <div className="absolute top-0 left-1/2 transform -translate-x-1/2  right-0 flex justify-center items-center bg-[#D4FAEC] border-2 border-t-0 border-Green rounded-b-full py-1 w-32 ">
                            <svg
                              width="11"
                              height="11"
                              viewBox="0 0 11 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{
                                height: "14px",
                                width: "14px",
                                marginRight: "3px",
                              }}
                            >
                              <path
                                d="M11 4.20388H6.79947L5.50203 0L4.20052 4.20388L0 4.19962L3.40177 6.80038L2.10026 11L5.50203 8.40349L8.89974 11L7.60227 6.80038L11 4.20388Z"
                                fill="#04DA8D"
                              ></path>
                              <path
                                d="M7.89413 7.75158L7.60219 6.80078L5.50195 8.40389L7.89413 7.75158Z"
                                fill="#126849"
                              ></path>
                            </svg>
                            <span className="text-[12px]">Most Popular</span>
                          </div>
                        </>
                      )}

                      <div className="grid grid-rows-[auto,1fr,auto] gap-2 h-full">
                        <div className="border-b pb-2 border-black">
                          <h2 className="text-xl pt-10 font-bold">{plan}</h2>
                          {plan === "Enterprise" && (
                            <p className="text-sm font-medium mt-11 text-[#9E9E9E]">Contact us for pricing</p>
                          )}
                          {plan === "Advanced" && (
                            <>
                              <p className="text-sm font-medium mt-3">
                                Starting at{" "}
                                <span className="text-2xl ml-2 font-bold">
                                  $1,059
                                </span>
                              </p>
                              <p className="text-sm font-medium text-[#9E9E9E]">
                                per month | per domain
                              </p>
                            </>
                          )}
                          {plan === "Premium" && (
                            <>
                              <p className="text-sm font-medium mt-3">
                                Starting at{" "}
                                <span className="text-2xl ml-2 font-bold">
                                  $629
                                </span>
                              </p>
                              <p className="text-sm font-medium text-[#9E9E9E]">
                                Contact us for pricing
                              </p>
                            </>
                          )}
                          {plan === "Plus" && (
                            <>
                              <p className="text-sm font-medium mt-3">
                                Starting at{" "}
                                <span className="text-2xl ml-2 font-bold">
                                  $259
                                </span>
                              </p>
                              <p className="text-sm font-medium text-[#9E9E9E]">
                                Contact us for pricing
                              </p>
                            </>
                          )}
                        </div>
                        <div
                          className={`middle-section ${
                            showMiddleSection ? "opacity-100" : "opacity-0"
                          }`}
                          style={{ transition: "padding 0.3s ease-in-out" }}
                        >
                          {plan === "Enterprise" && (
                            <>
                              <p className="text-[13.5px] font-light mt-2">
                                <NewLable />
                                Generative AI tools
                              </p>
                              <p className="text-[13.5px] font-light my-5">
                                <span className="font-semibold">Unlimited</span>{" "}
                                user logins
                              </p>
                              <p className="text-[13.5px] font-light my-5">
                                <span className="font-semibold">Unlimited</span>{" "}
                                invitations
                              </p>
                              <p className="text-[13.5px] font-light my-5">
                                Future-proof your success with unlimited
                                reviews, API access, cutting-edge AI tools, and
                                the most in-depth insights into your customers
                                and industry.
                              </p>
                            </>
                          )}
                          {plan === "Advanced" && (
                            <>
                              <p className="text-[13.5px] font-light mt-2">
                                Ability to customize
                              </p>
                              <p className="text-[13.5px] font-light my-5">
                                <span className="font-semibold">20</span> User
                                logins
                              </p>
                              <p className="text-[13.5px] font-light my-5">
                                <span className="font-semibold">5000</span>{" "}
                                monthly invitations
                              </p>
                              <p className="text-[13.5px] font-light my-5">
                                Power your growth and improve your customer experience with more invitations, options to customize, and sentiment analysis.</p>
                            </>
                          )}
                          {plan === "Premium" && (
                            <>
                              <p className="text-[13.5px] font-light mt-2">Full website widget library</p>
                              <p className="text-[13.5px] font-light my-5"><span lassName="font-semibold">10</span> User logins</p>
                              <p className="text-[13.5px] font-light my-5">
                                <span className="font-semibold">500</span>{" "}
                                monthly invitations
                              </p>
                              <p className="text-[13.5px] font-light my-5">Expand your reach with a suite of showcasing tools that increase your visibility and drive conversion.</p>
                            </>
                          )}
                          {plan === "Plus" && (
                            <>
                              <p className="text-[13.5px] font-light mt-2"><span className="font-semibold">8</span> widgets</p>
                              <p className="text-[13.5px] font-light my-5"><span className="font-semibold">3</span> User logins</p>
                              <p className="text-[13.5px] font-light my-5"><span className="font-semibold">200</span>{" "}monthly invitations
                              </p>
                              <p className="text-[13.5px] font-light my-5">
                                Build trust faster with more review invitations and begin driving awareness with a collection of showcasing tools.</p>
                            </>
                          )}
                        </div>
                        <div
                          className={`pt-2 ${
                            height === "15.5rem" ? "mb-5" : "mb-1"
                          } mt-auto`}
                          style={{ transition: "padding 0.3s ease-in-out" }}
                        >
                          <button className="w-full bg-Green text-sm font-medium rounded-full py-[10px] hover:bg-Green">
                            Book a demo
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="overflow-hidden my-1">
          <div
            className={`bg-Creem1 cursor-pointer flex justify-between items-center ${
              isOpen ? "rounded-t-[20px]" : "rounded-full"
            }`}
            onClick={toggleAccordion}
          >
            <h2
              className={`text-md ps-4 py-2 w-[400px] font-semibold text-gray-900 bg-[#D4FAEC] 
                        ${
                          isOpen
                            ? "rounded-full rounded-bl-none"
                            : "rounded-full"
                        }`}
            >
              Features to collect reviews and build trust
            </h2>
            <div
              className={`transition-transform duration-300 me-5 ${
                isOpen && "rotate-90"
              }`}
            >
              <IoIosArrowForward size={23} />
            </div>
          </div>
          <div
            ref={contentRef}
            className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-[1000px]" : "max-h-0"}`}>
            <div className="px-4 py-3 bg-Creem">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">
                  <NewLable />
                  Al-assisted review responses
                </div>
                <div className="col-span-1 text-center flex justify-center items-center"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">
                  Customizable review invitations
                </div>
                <div className="col-span-1 text-center flex justify-center items-center"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-Creem">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Automated monthly review invitations</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray">Unlimited</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray">5000</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray">500</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray">200</div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white  rounded-b-[20px]">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Invite past customers in first 90 days</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray">Unlimited</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray">5000</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray">500</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray">200</div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden my-1">
          <div
            className={`bg-Creem1 cursor-pointer flex justify-between items-center ${
              secondAccordian ? "rounded-t-[20px]" : "rounded-full"
            }`}
            onClick={toggleSecondAccordion}
          >
            <h2 className={`text-md ps-4 py-2 w-[400px] font-semibold text-gray-900 bg-[#D4FAEC] 
                        ${ secondAccordian ? "rounded-full rounded-bl-none" : "rounded-full"}`}
            >Marketing tools to help you grow</h2>
            <div className={`transition-transform duration-300 me-5 ${secondAccordian && "rotate-90"}`}><IoIosArrowForward size={23}/></div>
          </div>
          <div ref={contentRef} className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${secondAccordian?"max-h-[1000px]" : "max-h-0"}`}
          >
            <div className="px-4 py-3 bg-Creem">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Website review widgets</div>
                <div className="col-span-1 text-center flex justify-center items-center text-sm">
                  Full widget library to display reviews, your rating, and review count</div>
                <div className="col-span-1 text-center flex justify-center items-center text-sm">
                  Full widget library to display reviews, your rating, and review count</div>
                <div className="col-span-1 text-center flex justify-center items-center text-sm">
                  Full widget library to display reviews, your rating, and review count</div>
                <div className="col-span-1 text-center flex justify-center items-center text-sm">
                  8 widgets to display your star rating and review count</div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Custom website widgets </div>
                <div className="col-span-1 text-center flex justify-center items-center"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-Creem">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Email review widgets</div>
                <div className="col-span-1 text-center flex justify-center items-center"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Targeted review showcasing</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-Creem">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold"><NewLable />Profile page promotions</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><FalseSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold"><NewLable />Ad-free profile on TrustReview.com</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-Creem">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Customize your profile page</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Competitor module</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-Creem">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Social media sharing tools</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white  rounded-b-[20px]">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Downloadable marketing assets</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden my-1">
          <div className={`bg-Creem1 cursor-pointer flex justify-between items-center ${thirdAccordian ? "rounded-t-[20px]" : "rounded-full"
            }`} onClick={toggleThirdAccordion} >
            <h2 className={`text-md ps-4 py-2 w-[400px] font-semibold text-gray-900 bg-[#D4FAEC] ${thirdAccordian ? "rounded-full rounded-bl-none": "rounded-full"}`}>Analytics & insights to guide improvements</h2>
            <div className={`transition-transform duration-300 me-5 ${thirdAccordian && "rotate-90"}`}><IoIosArrowForward size={23} /></div>
          </div>
          <div ref={contentRef} className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${thirdAccordian ? "max-h-[1000px]" : "max-h-0"}`}>
            <div className="px-4 py-3 bg-Creem">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold"><NewLable />Market & competitive insights</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light">Full access</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light">Basic access</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light">Basic access</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light"><FalseSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold"><NewLable />Review spotlight</div>
                <div className="col-span-1 text-center flex justify-center items-center"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
              </div>
            </div>

            <div className="px-4 py-3 bg-Creem">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold"><NewLable />Sentiment analysis</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light">Full access</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light">Basic access</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light">Basic access</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light"><FalseSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Custom review tagging</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-Creem">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">TrustScore forecast</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light">Custom forecasts</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light">Custom forecasts</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light">Default Forecast</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light"><FalseSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Export performance data</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light">All data</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light">All data</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light">All data</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light">Overview only</div>
              </div>
            </div>
            <div className="px-4 py-3 bg-Creem">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Performance data & analytics</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white rounded-b-[20px]">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Profile page engagement data & analytics</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden my-1">
          <div className={`bg-Creem1 cursor-pointer flex justify-between items-center ${fourthAccordian ? "rounded-t-[20px]" : "rounded-full"
            }`} onClick={toggleFourthAccordion}>
            <h2 className={`text-md ps-4 py-2 w-[400px] font-semibold text-gray-900 bg-[#D4FAEC] ${fourthAccordian? "rounded-full rounded-bl-none": "rounded-full"}`}>Admin & Support</h2>
            <div className={`transition-transform duration-300 me-5 ${ fourthAccordian && "rotate-90" }`}><IoIosArrowForward size={23}/>
            </div>
          </div>
          <div ref={contentRef} className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${fourthAccordian ? "max-h-[1000px]" : "max-h-0"}`}>
            <div className="px-4 py-3 bg-Creem">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Expert implementation and strategic support</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><FalseSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Dedicated Customer Success Manager</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-Creem">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Phone support</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><FalseSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Live chat</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-Creem">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">User logins</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light">Unlimited</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light">20</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light">10</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light">3</div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white  rounded-b-[20px]">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Additional business domains</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light">Unlimited</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light">Unlimited</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light">Unlimited</div>
                <div className="col-span-1 text-center flex justify-center items-center text-md font-light">Up to 3</div>
              </div>
            </div>
            <div className="px-4 py-3 bg-Creem">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Single sign on</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><FalseSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><FalseSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><FalseSvg /></div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden my-1">
          <div className={`bg-Creem1 cursor-pointer flex justify-between items-center ${fifthAccordian ? "rounded-t-[20px]" : "rounded-full"
            }`} onClick={toggleFifthAccordion} >
            <h2 className={`text-md ps-4 py-2 w-[400px] font-semibold text-gray-900 bg-[#D4FAEC] ${fifthAccordian? "rounded-full rounded-bl-none": "rounded-full"}`}>Integrations</h2>
            <div className={`transition-transform duration-300 me-5 ${fifthAccordian && "rotate-90"}`}><IoIosArrowForward size={23} /></div>
          </div>
          <div
            ref={contentRef}
            className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
              fifthAccordian ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <div className="px-4 py-3 bg-Creem">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">
                  Helpdesk & customer support integrations
                </div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><TrueSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">
                  Marketing integrations
                </div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><TrueSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-Creem">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">
                  eCommerce integrations
                </div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden my-1">
          <div
            className={`bg-Creem1 cursor-pointer flex justify-between items-center ${
              sixthAccordian ? "rounded-t-[20px]" : "rounded-full"
            }`}
            onClick={toggleSixthAccordion}
          >
            <h2
              className={`text-md ps-4 py-2 w-[400px] font-semibold text-gray-900 bg-[#FDDCC5] 
                        ${
                          sixthAccordian
                            ? "rounded-full rounded-bl-none"
                            : "rounded-full"
                        }`}
            >
              Purchasable add-on modules
            </h2>
            <div
              className={`transition-transform duration-300 me-5 ${
                sixthAccordian && "rotate-90"
              }`}
            >
              <IoIosArrowForward size={23} />
            </div>
          </div>
          <div
            ref={contentRef}
            className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
              sixthAccordian ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <div className="px-4 py-3 bg-Creem">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Connect</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><TrueSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><PlusSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><PlusSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">
                  Salesforce integration
                </div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><PlusSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><PlusSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><FalseSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-Creem">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Product reviews</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><PlusSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><PlusSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><PlusSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><PlusSvg /></div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white  rounded-b-[20px]">
              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 font-semibold">Location reviews</div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><PlusSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center text-Gray"><PlusSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><PlusSvg /></div>
                <div className="col-span-1 text-center flex justify-center items-center"><PlusSvg /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* how it work section  */}
      <div className={`bg-Creem pb-6 pt-6 lg:pt-10 lg:pb-8`}>
        <div className="container">
          <div className="font-semibold text-3xl lg:text-[32px] mb-8 text-center">How our pricing works</div>
          <div className={`grid grid-cols-1 lg:grid-cols-4 gap-4`}>
            {customSteps.map((step, index) => (
              <div key={index} className={`bg-Creem rounded-lg p-7 pb-2 my-2 text-center flex flex-col`} >
                <img src={step.icon} alt={step.title} className="h-10 mb-4 object-contain" />
                <h2 className="text-lg font-semibold mb-2">{step.title}</h2>
                <p className="text-[16px] leading-6 font-light mb-4"> {step.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center my-5">
            <button className="border border-Blue py-3 px-9 rounded-full text-Blue font-semibold hover:bg-SBlue hover:text-black transition-all duration-30000">
              Questions? Contact us
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full  pt-10 pb-8 mt-8 sm:mx-auto sm:max-w-[800px] sm:rounded-lg ">
        <div className="mx-auto ">
          <div>
            <h2 className="mt-5 text-lg font-bold tracking-tight md:text-4xl">
              Frequenty asked questions
            </h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-[800px] divide-y divide-neutral-200">
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-light text-lg ">
                  <span> How does TrustReview work?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  TrustReview opens the door to authentic conversations between businesses and consumers. You can start right away with our free plan — no credit card required — to gather, manage and promote genuine insights from your customers. And when your ambitions start to grow, we have a plan that's right for you.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-light text-lg ">
                  <span>How long will I have access to my Free TrustReview account?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" ><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Your TrustReview Free account offers 50 review invitations every month. Once you've reached this limit, you'll have to
                  wait until the next month to send more — unless you choose to upgrade to a paid plan. But rest assured, your access will 
                  continue uninterrupted.</p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-light text-lg ">
                  <span>Are there any costs when I decide to set up my business to use TrustReview?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" ><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  None whatsoever. You can begin your TrustReview journey and and start building trust with more customers without any commitment.</p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-light text-lg ">
                  <span>
                    {" "}Do you provide training when I sign up for the Free account? What happens afterwards?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" ><path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Our Free plan includes unlimited access to our Support Center.
                  Need more hands-on help? Reach out to our support team here or
                  upgrade any time for hands on Customer Support.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-light text-lg ">
                  <span> Do I have to pay when I sign up for TrustReview?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" > <path d="M6 9l6 6 6-6"></path> </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Signing up for a Free account is exactly that — completely free. This means there’s nothing stopping you claiming your Company Profile Page and getting started collecting customer reviews with access to a small selection of our tools. And when you’re ready for more, just request a demo to find out what you need.</p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-light text-lg ">
                  <span>How much does it cost to upgrade to a paid plan?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" ><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Our paid plans starts at $259 per month, plus the cost of any additional modules that you want to add. We tailor our pricing
                  to fit your specific needs, ensuring you get the most out of TrustReview. For a personalized quote, talk to our sales team any time.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-light text-lg ">
                  <span>What happens to my company's reviews if I stop using your service?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" ><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Nothing at all! Your reviews stay on your TrustReview profile page, making sure that your company's feedback history stays
                  available to you.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-light text-lg ">
                  <span>How long am I bound to a plan?</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" > <path d="M6 9l6 6 6-6"></path> </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  Our initial contract term is 12 months, prepaid. This is because we’re confident you’ll want to continue after you see the difference that having TrustReview in your corner makes, and the value it brings to your business.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
