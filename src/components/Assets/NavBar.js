import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
export default function NavBar() {
    const { isAuthenticated, logout } = useAuth();
    return (
        <>
            <header className="sticky top-0 bg-ThemeBlack w-full z-[1000] flex justify-center">
                <div className="container py-5 flex relative justify-between">
                    <input type="checkbox" name="check" id="check" />
                    <div className="logo-container">
                        <Link className="navbar-brand me-lg-5" to="/"><img src="/images/Business_logo.png" alt=""/></Link>
                    </div>
                    <div className="nav-btn">
                        <div className="nav-links">
                            <ul>
                                <li className="nav-link" style={{ "--i": ".6s" }}>
                                    <Link to="/">←&nbsp;For&nbsp;consumers</Link>
                                </li>
                                <li className="nav-link" style={{ "--i": ".85s" }}>
                                    <Link to="/">Solutions <MdKeyboardArrowDown size={20} /></Link>
                                    <div className="dropdown  ">
                                        <ul className='dropdown-bg-1  text-[14px] ps-7 w-[240px] shadow-xl bg-red '>
                                            <li className="dropdown-link my-3">
                                                <Link to="/solutions/attract-new-customers" className='hover:font-medium'>Attract New Customers</Link>
                                            </li>
                                            <li className="dropdown-link my-3">
                                                <Link to="/solutions/manage-reviews" className='hover:font-medium'>Manage Reviews</Link>
                                            </li>
                                            <li className="dropdown-link my-3">
                                                <Link to="/solutions/grow-with-reviews" className='hover:font-medium'>Grow with Reviews</Link>
                                            </li>
                                            <li className="dropdown-link my-3">
                                                <Link to="/solutions/learn-from-reviews" className='hover:font-medium'>Learn from Reviews</Link>
                                            </li>
                                            <li className="dropdown-link  my-3">
                                                <Link to="/partners/integrations" className='hover:font-medium'>Integrations</Link>
                                            </li>
                                            <div className="arrow"></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-link" style={{ "--i": "1.1s" }}>
                                    <Link to="/">Features <MdKeyboardArrowDown size={20} /></Link>
                                    <div className="dropdown">
                                        <ul className='dropdown-bg-1  text-[13px] px-7 w-[450px] shadow-xl bg-white '>
                                            <div className="lg:flex justify-between mb-4">
                                                <div className="lg:w-[180px] mr-4">
                                                    <div className="text-[16px] textWhite font-medium border-b-2 mt-7 lg:mt-0 border-[Gray] lg:border-gray-200">Get Reviews</div>
                                                    <li className="dropdown-link my-3">
                                                        <Link to="/features/service-reviews" className='hover:font-medium'>Service Reviews</Link>
                                                    </li>
                                                    <li className="dropdown-link my-3">
                                                        <Link to="/features/product-reviews" className='hover:font-medium'>Product Reviews</Link>
                                                    </li>
                                                    <li className="dropdown-link my-3">
                                                        <Link to="/features/location-reviews" className='hover:font-medium'>Location Reviews</Link>
                                                    </li>
                                                    <li className="dropdown-link my-3">
                                                        <Link to="/features/review-invitations" className='hover:font-medium'>Review Invitations</Link>
                                                    </li>
                                                </div>
                                                <div className="lg:w-[190px]">
                                                    <div className="text-[16px] textWhite font-medium border-b-2 mt-7 lg:mt-0 border-[Gray] lg:border-gray-200">Manage Reviews</div>
                                                    <li className="dropdown-link my-3">
                                                        <Link to="/features/profile-page-customization" className='hover:font-medium'>Profile Page</Link>
                                                    </li>
                                                    <li className="dropdown-link my-3">
                                                        <Link to="/features/respond-to-reviews" className='hover:font-medium'>Respond to Reviews</Link>
                                                    </li>
                                                    <li className="dropdown-link my-3">
                                                        <Link to="/features/flag-report-reviews" className='hover:font-medium'>Flag and Report Reviews</Link>
                                                    </li>
                                                    <li className="dropdown-link my-3">
                                                        <Link to="/features/platform-safeguards" className='hover:font-medium'>Platform Safeguards</Link>
                                                    </li>
                                                </div>
                                            </div>
                                            <div className="lg:flex justify-between">
                                                <div className="lg:w-[180px] mr-4">
                                                    <div className="text-[16px] textWhite font-medium border-b-2 mt-7 lg:mt-0 border-[Gray] lg:border-gray-200">Showcase Reviews</div>
                                                    <li className="dropdown-link my-3">
                                                        <Link to="/features/review-seo" className='hover:font-medium'>Review SEO</Link>
                                                    </li>
                                                    <li className="dropdown-link my-3">
                                                        <Link to="/features/trustbox-widgets" className='hover:font-medium'>TrustReview widgets</Link>
                                                    </li>
                                                    <li className="dropdown-link my-3">
                                                        <Link to="/features/social-media-tools" className='hover:font-medium'>Social Media Tools</Link>
                                                    </li>
                                                    <li className="dropdown-link my-3">
                                                        <Link to="/features/marketing-assets" className='hover:font-medium'>Marketing Assets</Link>
                                                    </li>
                                                </div>
                                                <div className="lg:w-[190px]">
                                                    <div className="text-[16px] textWhite font-medium border-b-2 mt-7 lg:mt-0 border-[Gray] lg:border-gray-200">Analyze Reviews</div>
                                                    <li className="dropdown-link my-3">
                                                        <Link to="/features/review-spotlight" className='hover:font-medium'>Review Spotlight</Link>
                                                    </li>
                                                    <li className="dropdown-link my-3">
                                                        <Link to="/features/market-insights" className='hover:font-medium'>Market Insights</Link>
                                                    </li>
                                                    <li className="dropdown-link my-3">
                                                        <Link to="/features/review-insights" className='hover:font-medium'>Review Insights</Link>
                                                    </li>
                                                    <li className="dropdown-link my-3">
                                                        <Link to="/features/dashboard-analytics" className='hover:font-medium'>Dashboard and Analytics</Link>
                                                    </li>
                                                    <li className="dropdown-link my-3">
                                                        <Link to="/features/review-tagging" className='hover:font-medium'>Review Tagging</Link>
                                                    </li>
                                                </div>
                                            </div>
                                            <div className="arrow"></div>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-link" style={{ "--i": "1.35s" }} >
                                    <Link to="/pricing">Pricing</Link>
                                </li>
                                <li className="nav-link" style={{ "--i": "1.5s" }}>
                                    <Link to="/">Resources  <MdKeyboardArrowDown size={20} /></Link>
                                    <div className="dropdown p-5">
                                        <ul className='dropdown-bg-1 text-[13px] px-7 w-[230px] shadow-xl bg-white'>
                                            <li className="dropdown-link my-3">
                                                <Link to="/" className='hover:font-medium'>Blog</Link></li>
                                            <li className="dropdown-link my-3">
                                                <Link to="/" className='hover:font-medium'>Customer Stories</Link>
                                            </li><li className="dropdown-link my-3">
                                                <Link to="/" className='hover:font-medium'>Guides and Reports</Link></li>
                                            <li className="dropdown-link my-3">
                                                <Link to="/" className='hover:font-medium'>Webinars and Videos</Link>
                                            </li>
                                            <li className="dropdown-link my-3">
                                                <Link to="/" className='hover:font-medium'>Industries</Link>
                                            </li>
                                            <li className="dropdown-link  my-3">
                                                <Link to="/" className='hover:font-medium'>Help Center</Link>
                                            </li>
                                            <div className="arrow"></div>
                                        </ul>
                                    </div>
                                </li>

                                {isAuthenticated ?
                                    <div className="flex justify-center items-center flex-1 mb-20 lg:mb-0 mt-5 lg:mt-0 nav-link" style={{ "--i": "1.8s" }}>
                                        <div className="blueBtn transition-all duration-300 font-medium px-5 py-3 rounded-full " onClick={logout}>&nbsp;&nbsp;&nbsp;Log out&nbsp;&nbsp;&nbsp;</div>
                                    </div>
                                    :
                                    <>
                                        <li className="nav-link border border-transparent hover:border-white rounded-full px-3 mr-2 transition-all" style={{ "--i": "1.65s" }} ><Link to="/signin">Log&nbsp;in</Link></li>
                                        <div className="flex justify-center items-center flex-1 mb-20 lg:mb-0 mt-5 lg:mt-0 nav-link" style={{ "--i": "1.8s" }}>
                                            <Link to="/signup" className="blueBtn font-medium px-5 py-3 rounded-full">&nbsp;&nbsp;&nbsp;Create free account&nbsp;&nbsp;&nbsp;</Link>
                                        </div>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="hamburger-menu-container">
                        <div className="hamburger-menu">
                            <div></div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
