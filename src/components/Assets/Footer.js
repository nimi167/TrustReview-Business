import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer({ bgColor }) {
    const [selected, setSelected] = useState("US");
    return (
        <>
            <footer className={`bg-${bgColor} py-16`}>
                <div className="container">
                    <Link className="navbar-brand me-lg-5" to="/"><img src="/images/logo-white.svg" alt="" style={{ height: "30px" }} /> </Link>
                </div>
                <div className="container mt-3">
                    <div className="grid grid-cols-2 gap-8 px-0 py-6 lg:py-8 lg:grid-cols-5">
                        <div>
                            <h2 className="mb-6 text-lg text-Creem">About us</h2>
                            <ul className="text-Creem3 dark:text-gray-400 text-sm">
                                <li className="mb-4"><Link to="/" className="hover:underline">How TrustReview-Business works</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">Our story</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">What we believe</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">Jobs</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">Blog</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">Press</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">TrustReview-Business Legal</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">Investor Relations</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg text-Creem ">Review community</h2>
                            <ul className="text-Creem3 dark:text-gray-400 text-sm ">
                                <li className="mb-4"><Link to="/" className="hover:underline">Join the community</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">Leave a review</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">Search for a company</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg text-Creem ">Businesses</h2>
                            <ul className="text-Creem3 dark:text-gray-400 text-sm ">
                                <li className="mb-4"><Link to="/" className="hover:underline">Features</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">Pricing</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">Partners</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">Agency partners</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">Become a partner</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">Find us on Capterra</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">Find us on G2</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg text-Creem ">Resources</h2>
                            <ul className="text-Creem3 dark:text-gray-400 text-sm ">
                                <li className="mb-4"><Link to="/" className="hover:underline">Business Blog</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">Webinars and Videos</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">Guides and Reports</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">Customer Stories</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">Developers</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">Tech blog</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">System status</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg text-Creem ">Contact</h2>
                            <ul className="text-Creem3 dark:text-gray-400 text-sm ">
                                <li className="mb-4"><Link to="/" className="hover:underline">Contact Sales</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">Help Center</Link></li>
                                <li className="mb-4"><Link to="/" className="hover:underline">Our offices</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:flex justify-between">
                        <div>
                            <h2 className="mb-6 text-lg text-Creem">Choose country</h2>
                            <div className="p-0 m-0 bg-white rounded-md">
                                <ReactFlagsSelect selected={selected} className="py-2 w-100 min-w-[280px]" onSelect={(code) => { setSelected(code);}} />
                            </div>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg text-Creem text-right">Follow us on</h2>
                            <ul className="flex  justify-between text-Creem3 dark:text-gray-400 text-sm ">
                                <li className="mx-2">
                                    <Link to="https://www.facebook.com/TrustReview/" target="_blank" className="hover:text-SBlue" ><FaFacebook size={18} /></Link>
                                </li>
                                <li className="mx-2">
                                    <Link to="https://x.com/TrustReview" target="_blank" className="hover:text-SBlue" ><FaTwitter size={18} /></Link>
                                </li>
                                <li className="mx-2">
                                    <Link to="https://www.linkedin.com/company/TrustReview/" target="_blank" className="hover:text-SBlue"><FaLinkedin size={18} />
                                    </Link>
                                </li>
                                <li className="mx-2">
                                    <Link to="https://www.youtube.com/c/TrustReviewreviews" target="_blank" className="hover:text-SBlue" ><FaYoutube size={18}/></Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="px-0 py-6 text-Creem text-sm flex flex-wrap gap-4">
                        <div><Link to="/" className="hover:underline">Terms and Conditions</Link></div>
                        <div><Link to="/" className="hover:underline">Privacy Policy</Link></div>
                        <div><Link to="/" className="hover:underline">Company Guidelines</Link></div>
                        <div><Link to="/" className="hover:underline">Trademark Guidelines</Link></div>
                        <div><Link to="/" className="hover:underline">Cookie preferences</Link></div>
                        <div><Link to="/" className="hover:underline">Cookie prefrences</Link></div>
                        <div><Link to="/" className="hover:underline">Modern Slavery Statement</Link></div>
                    </div>
                    <div className="px--0 py-6">
                        <span className="text-sm text-Creem3 dark:text-gray-300 sm:text-center">
                            © 2024 <Link href="https://flowbite.com/">TrustReview, Inc</Link>.All Rights Reserved.</span>
                    </div>
                </div>
            </footer>
        </>
    );
}
