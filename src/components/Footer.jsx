import React from 'react';
import logoImage from '../assets/images/logo.png';
import appStoreBadges from '../assets/images/app-store-badges.png';
import { 
    FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, 
    FaTelegramPlane, FaTwitter, FaYoutube, 
    FaFacebookF, FaInstagram, FaGooglePlay, FaApple 
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#fbfcfe] border-t-[3px] border-[#3b479a] pt-16">
            <div className="container mx-auto px-6 md:px-10 max-w-[1500px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16">
                
                {/* Column 1 */}
                <div className="flex flex-col items-start">
                    <img src={logoImage} alt="LPS Logo" className="w-40" />
                    <h4 className="text-[#3b479a] font-bold text-lg mb-4 -mt-6">Fees Pay</h4>
                    <button className="bg-gradient-to-r from-[#00a8e8] to-[#3b479a] text-white px-6 py-2.5 rounded-md hover:shadow-lg transition-all font-semibold shadow-md cursor-pointer">
                        Pay School Fees
                    </button>
                </div>

                {/* Column 2 */}
                <div>
                    <h3 className="text-xl font-bold text-[#3b479a] mb-6">About</h3>
                    <p className="text-gray-500 text-sm leading-relaxed pr-4">
                        LPS School is truly an extraordinary place of learning. Our talented staff provides each student with a rigorous standards, high academic.
                    </p>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="text-xl font-bold text-[#3b479a] mb-6">Services</h3>
                    <ul className="space-y-4 text-gray-500 text-sm">
                        <li><a href="#" className="hover:text-[#00a8e8] transition-colors">Admissions</a></li>
                        <li><a href="#" className="hover:text-[#00a8e8] transition-colors">Our Staff</a></li>
                        <li><a href="#" className="hover:text-[#00a8e8] transition-colors">Our Values</a></li>
                        <li><a href="#" className="hover:text-[#00a8e8] transition-colors">Education</a></li>
                        <li><a href="#" className="hover:text-[#00a8e8] transition-colors">Gallery</a></li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h3 className="text-xl font-bold text-[#3b479a] mb-6">Contact Info</h3>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <FaMapMarkerAlt className="mt-1 mr-3 text-[#3b479a] text-lg flex-shrink-0" />
                            <div>
                                <h4 className="text-[#3b479a] font-semibold text-sm mb-1">Katagram School Address</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">Uday nagar - 1, gotala vadi.<br/>Near Pipalas char rasta,<br/>katargam road, surat-4 Gujrat</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaPhoneAlt className="mt-1 mr-3 text-[#3b479a] text-base flex-shrink-0" />
                            <div>
                                <h4 className="text-[#3b479a] font-semibold text-sm mb-1">Contact Us</h4>
                                <p className="text-gray-500 text-sm">+91-6357470004</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaEnvelope className="mt-1 mr-3 text-[#3b479a] text-base flex-shrink-0" />
                            <div>
                                <h4 className="text-[#3b479a] font-semibold text-sm mb-1">Email</h4>
                                <p className="text-gray-500 text-sm">Info.k@lpsavani.in</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 5 */}
                <div>
                    <h3 className="text-xl font-bold text-[#3b479a] mb-6">Social Connected</h3>
                    <div className="flex space-x-3 mb-8">
                        <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#3b479a] hover:bg-[#3b479a] hover:text-white transition-all shadow-sm"><FaTelegramPlane /></a>
                        <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#3b479a] hover:bg-[#3b479a] hover:text-white transition-all shadow-sm"><FaTwitter /></a>
                        <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#3b479a] hover:bg-[#3b479a] hover:text-white transition-all shadow-sm"><FaYoutube /></a>
                        <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#3b479a] hover:bg-[#3b479a] hover:text-white transition-all shadow-sm"><FaFacebookF /></a>
                        <a href="#" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#3b479a] hover:bg-[#3b479a] hover:text-white transition-all shadow-sm"><FaInstagram /></a>
                    </div>
                    <h3 className="text-xl font-bold text-[#3b479a] mb-6">Download</h3>
                    <div className="w-48 hover:scale-105 transition-transform duration-300">
                        <a href="#"><img src={appStoreBadges} alt="Download" className="w-full h-auto object-contain rounded-lg" /></a>
                    </div>
                </div>

            </div>
            
            {/* Copyright */}
            <div className="bg-[#2d3250] py-6">
                <div className="container mx-auto px-6 md:px-10 max-w-[1500px] flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
                    <p>©2026 LPSgroupofeducation. All rights reserved.</p>
                    <p className="mt-2 md:mt-0 font-medium tracking-wide">LPS Group of Education</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;