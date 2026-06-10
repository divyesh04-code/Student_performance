import React, { useState } from 'react';
import galleryVips from '../assets/images/gallery-vips.jpg';
import students from '../assets/images/students.png';
import stdLearning from '../assets/images/stdLearning.png';
import founder from '../assets/images/founder.png';
import president from '../assets/images/president.png';
import trustee from '../assets/images/trustee.png';
import teamMember from '../assets/images/teamMember.png';
import teachers from '../assets/images/teachers.png';
import { GiArrowScope } from "react-icons/gi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import Map from './common/Map';




const statsData = [
    {
        id: 1,
        number: "1090+",
        label: "Our Teachers",
        icon: (
            <LiaChalkboardTeacherSolid className="text-5xl" />

        )
    },
    {
        id: 2,
        number: "120+",
        label: "Our Students",
        // Student with graduation cap SVG
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6" />
                <path d="M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
        )
    },
    {
        id: 3,
        number: "1090+",
        label: "Total Video Lessons",
        // Video/Monitor SVG
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <path d="M8 21h8" />
                <path d="M12 17v4" />
                <path d="M10 9l5 3-5 3z" />
            </svg>
        )
    },
    {
        id: 4,
        number: "1090+",
        label: "Our Online Courses",
        // Book / Courses SVG
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <path d="M12 6v8" />
                <path d="M8 10h8" />
            </svg>
        )
    }
];

function About() {
    const tabs = [
        'About Us', 'From Founder', 'From President', 'Trustees',
        'Principals Desk', 'Advisors', 'Academic Team', 'Administrative staff'
    ];

    const [activeTab, setActiveTab] = useState('About Us');
    return (
        <div className="w-full font-sans">

            {/* ABOUT PAGE HERO SECTION (With Background Image) */}
            <section
                className="relative w-full py-24 md:py-32 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${galleryVips})` }}
            >
                {/* Dark black Overlay Filter */}
                {/* Isse image thodi dark ho jayegi taaki safed (white) text aasaani se padha ja sake */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content Container (z-10 ensure karta hai ki text overlay ke upar rahe) */}
                <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md">
                        About Us
                    </h1>

                    {/* Paragraph Text */}
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-4xl drop-shadow-sm">
                        Knowledge is power and education is the premise of progress, in every society, in every family. LPS School, being one of the pillars of education is dedicated to instill quality education with unprecedented encouragement in students.
                    </p>
                    <button className="mt-6 md:mt-8 mx-auto md:mx-0 bg-gradient-to-r from-[#00b4d8] to-[#3b479a] text-white px-6 md:px-8 py-3 md:py-3.5 rounded hover:shadow-xl transition-all font-semibold flex items-center text-base md:text-lg cursor-pointer">
                        Read More <span className="ml-2 font-bold">→</span>
                    </button>
                </div>
            </section>

            {/* About US */}
            <section className="bg-white py-10 md:py-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2">

                        {/* 3. We loop through our array to create the buttons dynamically */}
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                type="button"
                                // 4. When a button is clicked, we update the state with its name
                                onClick={() => setActiveTab(tab)}
                                className={`px-3 sm:px-4 md:px-5 cursor-pointer py-1.5 sm:py-2 md:py-2.5 rounded-full text-[10px] xs:text-xs sm:text-sm font-medium transition-colors ${activeTab === tab
                                    ? 'bg-[#3E3F95] text-white font-bold opacity-100' // Apply this if active
                                    : 'bg-white text-[#B0B0B0] border border-[#E0E0E0] hover:border-[#D0D0D0] hover:text-[#909090]' // Apply this if inactive
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}

                    </div>

                </div>

                {/* NEW CONTENT SECTION: Only shows when 'About Us' tab is active */}
                {activeTab === 'About Us' && (
                    // Added `max-w-6xl mx-auto` right here to bring the whole grid to the middle
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">

                        {/* Left Column: Image Grid & Badge */}
                        <div className="grid grid-cols-2 gap-4 h-full">
                            {/* Tall Image (Left) */}
                            <div className="row-span-2">
                                <img
                                    src={students}
                                    alt="Students on stairs"
                                    className="w-full h-full object-cover rounded-3xl min-h-[350px]"
                                />
                            </div>
                            {/* Top Right Image */}
                            <div>
                                <img
                                    src={stdLearning}
                                    alt="Students walking"
                                    className="w-full h-48 sm:h-64 object-cover rounded-3xl"
                                />
                            </div>
                            {/* Bottom Right Black Badge */}
                            <div className="bg-black text-white rounded-[2rem] p-4 sm:p-6 flex items-center justify-center">
                                <div className="flex items-center">
                                    <span className="text-4xl sm:text-5xl font-bold">25+</span>
                                    <span className="text-xs sm:text-sm border-l border-gray-600 pl-3 ml-3 leading-tight">
                                        Years of<br />Experience
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Text Content */}
                        <div className="flex flex-col items-start px-2 sm:px-0">
                            {/* Target Icon (SVG) */}
                            <div className="text-[#3E3F95] mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <circle cx="12" cy="12" r="6"></circle>
                                    <circle cx="12" cy="12" r="2"></circle>
                                    <line x1="22" y1="2" x2="15" y2="9"></line>
                                    <polygon points="22 2 18 2 22 6 22 2"></polygon>
                                </svg>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3F95] mb-6">
                                About Us
                            </h2>

                            <p className="text-gray-400 font-medium text-base md:text-lg mb-5 leading-relaxed">
                                We aim to become an educational hub of excellence and quality where wisdom, values, creativity and leadership traits are encouraged in such a way that can make a student ready for life.
                            </p>

                            <p className="text-gray-400 font-medium text-base md:text-lg mb-8 leading-relaxed">
                                We aim to become an educational hub of excellence and quality where wisdom, values, creativity and leadership traits are encouraged.
                            </p>

                            <button className="bg-gradient-to-r from-[#00b4d8] to-[#3b479a] text-white px-8 py-3 rounded-md hover:shadow-lg transition-all font-semibold flex items-center cursor-pointer">
                                Read More <span className="ml-2">→</span>
                            </button>
                        </div>

                    </div>
                )}

            </section >

            {/* Stats Banner */}
            <section className="bg-[#3E3F95] py-10 w-full mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Using flex for desktop and grid for mobile. 
                    lg:divide-x divide-white/20 creates the faint white separator lines! 
                */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 lg:divide-x divide-white/20">

                        {statsData.map((stat) => (
                            <div key={stat.id} className="flex items-center justify-center lg:justify-start gap-4 px-4 lg:px-10">

                                {/* Icon Container */}
                                <div className="text-white flex-shrink-0">
                                    {stat.icon}
                                </div>

                                {/* Text Container */}
                                <div className="flex flex-col text-white">
                                    <span className="text-3xl font-bold tracking-wide">
                                        {stat.number}
                                    </span>
                                    <span className="text-sm sm:text-base font-light text-gray-200 mt-1">
                                        {stat.label}
                                    </span>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>
            </section>


            {/* WHY CHOOSE US SECTION */}
            <section className="bg-[#f8f9fc] py-16 md:py-24 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    {/* Section Headings */}
                    <h3 className="text-sm md:text-base font-bold text-gray-800 tracking-wide mb-3">
                        Why Choose Us
                    </h3>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0a1128] leading-tight mb-16 max-w-4xl mx-auto">
                        Unlock Your Potential with Our Expert Lab Course collection Today
                    </h2>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">

                        {/* Card 1 */}
                        <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                            {/* Target Icon */}
                            <div className="text-[#3E3F95] mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <circle cx="12" cy="12" r="6"></circle>
                                    <circle cx="12" cy="12" r="2"></circle>
                                    <path d="M22 2L15 9"></path>
                                </svg>
                            </div>
                            {/* The image didn't have a title for this card, but you can add an <h4> here if needed */}
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium mt-2">
                                We want our students to care for others and treat everyone with due respect.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                            {/* Growth/Hands Icon */}
                            <div className="text-[#3E3F95] mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2v8"></path>
                                    <path d="m8 6 4-4 4 4"></path>
                                    <path d="M18 10h-2"></path>
                                    <path d="M8 10H6"></path>
                                    <path d="M4 14v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"></path>
                                    <path d="M20 14A8 8 0 0 0 4 14"></path>
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-[#3E3F95] mb-4">
                                Our Vision
                            </h4>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
                                We aim to become an educational hub of excellence and quality where wisdom.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                            {/* Brain/Gear Icon */}
                            <div className="text-[#3E3F95] mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 3a6 6 0 0 0-6 6c0 1.5.5 2.8 1.3 4l1.2 1.8A4 4 0 0 1 9 17v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1a4 4 0 0 1 .5-2.2l1.2-1.8A6 6 0 0 0 12 3z"></path>
                                    <path d="M9 21h6"></path>
                                    <path d="M12 11v4"></path>
                                    <path d="M12 7h.01"></path>
                                    <path d="M19 12h2"></path>
                                    <path d="M3 12h2"></path>
                                    <path d="M16.5 6.5 18 5"></path>
                                    <path d="M7.5 6.5 6 5"></path>
                                </svg>
                            </div>
                            <h4 className="text-xl font-semibold text-[#3E3F95] mb-4">
                                Our Approach
                            </h4>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
                                At our school, we believe that every child is unique and has the potential to succeed.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* FOUNDER MESSAGE SECTION */}
            <section className="bg-white py-16 md:py-24 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left Side: Icon and Text */}
                        <div className="flex flex-col items-start order-2 lg:order-1">

                            <div className="inline-flex items-center justify-center text-[#3E3F95] mb-4 p-3 bg-blue-50 rounded-2xl">
                                <GiArrowScope className="text-5xl" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3F95] mb-6 leading-tight">
                                From Founder
                            </h2>

                            <p className="text-gray-500 font-small text-base md:text-lg mb-6 leading-relaxed">
                                We're extremely elated that you have chosen our school for your children's future. As we rightly believe the main purpose of our institution is not limited to bookish knowledge but also adding good values such as compassion, integrity, truthfulness, wisdom and excellence.
                            </p>

                            <p className="text-gray-500 font-small text-base md:text-lg leading-relaxed mb-8">
                                At LBS Group of Education, we support holistic development of your child which immensely covers academics, life-skills, sports education and not to mention scores of co-curricular activities. Our constant aim is to maintain the quality in education in our state-of-the-art institution. In fact, we ourselves have evolved over the years by learning and experimenting in more than many ways only to bring unique approach in providing education with a difference.
                            </p>

                            <button className="bg-gradient-to-r from-[#00b4d8] to-[#3b479a] text-white px-8 py-3 rounded-md hover:shadow-lg transition-all font-semibold flex items-center cursor-pointer">
                                Read More <span className="ml-2">→</span>
                            </button>
                        </div>

                        {/* Right Side: Image with Joint Name Plate */}
                        <div className="relative order-1 lg:order-2 flex justify-center">
                            {/* We created a common wrapper for image and text to make them look joint */}
                            <div className="relative w-full max-w-md flex flex-col shadow-2xl rounded-[3rem] overflow-hidden border-8 border-white bg-[#3E3F95]">

                                {/* Main Image - Individual rounding/border removed, handled by wrapper */}
                                <img
                                    src={founder}
                                    alt="Founder"
                                    className="w-full h-auto object-cover"
                                />

                                {/* Joint Name Plate - bg-white changed to blue and position changed to joint */}
                                <div className="w-full px-8 py-6 text-center">
                                    {/* Change text color to white */}
                                    <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                                        SHAILESH BHAI SAVANI CHAIRMAN
                                    </h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* NEW SECTION: Image Left, Text Right (e.g., From President / Trustee) */}
            <section className="bg-gray-50 py-16 md:py-24 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left Side: Image with Joint Name Plate */}
                        {/* We removed lg:order-2 so it naturally comes first on the left side */}
                        <div className="relative order-1 flex justify-center">
                            <div className="relative w-full max-w-md flex flex-col shadow-2xl rounded-[3rem] overflow-hidden border-8 border-white bg-[#3E3F95]">

                                <img
                                    src={president} 
                                    alt="President or Trustee"
                                    className="w-full h-auto object-cover"
                                />

                                <div className="w-full px-8 py-6 text-center">
                                    <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                                        SHAILESH BHAI SAVANI PRESIDENT
                                    </h4>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Icon and Text */}
                        {/* order-2 ensures it stays on the right side on desktop and bottom on mobile */}
                        <div className="flex flex-col items-start order-2">

                            <div className="inline-flex items-center justify-center text-[#3E3F95] mb-4 p-3 bg-blue-50 rounded-2xl">
                                <GiArrowScope className="text-5xl" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3F95] mb-6 leading-tight">
                                From President
                            </h2>

                            <p className="text-gray-500 font-medium text-base md:text-lg mb-6 leading-relaxed">
                                Welcome to our organization. It is my privilege to serve as President and to work alongside a dedicated team committed to excellence, integrity, and continuous growth.
                            </p>

                            <p className="text-gray-500 font-medium text-base md:text-lg leading-relaxed mb-8">
                                Our journey is guided by a clear vision—to create meaningful impact through innovation, collaboration, and responsibility.
                            </p>

                            <button className="bg-gradient-to-r from-[#00b4d8] to-[#3b479a] text-white px-8 py-3 rounded-md hover:shadow-lg transition-all font-semibold flex items-center cursor-pointer">
                                Read More <span className="ml-2">→</span>
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* Trustee SECTION */}
            <section className="bg-white py-16 md:py-24 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left Side: Icon and Text */}
                        <div className="flex flex-col items-start order-2 lg:order-1">

                            <div className="inline-flex items-center justify-center text-[#3E3F95] mb-4 p-3 bg-blue-50 rounded-2xl">
                                {/* Added text-5xl to make the icon significantly larger */}
                                <GiArrowScope className="text-5xl" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-[#3E3F95] mb-6 leading-tight">
                                Trustee
                            </h2>

                            <p className="text-gray-500 font-small text-base md:text-lg mb-6 leading-relaxed">
                                The Board of Trustees provides strategic guidance and oversight to ensure the organization's mission, vision, and values are upheld. With diverse experience and a strong commitment to ethical leadership, the Trustees play a vital role in shaping long-term goals and policies.
                            </p>

                            <p className="text-gray-500 font-small text-base md:text-lg leading-relaxed mb-8">
                                Their collective wisdom, dedication, and responsibility help strengthen governance, promote transparency, and support sustainable growth.
                            </p>

                            <button className="bg-gradient-to-r from-[#00b4d8] to-[#3b479a] text-white px-8 py-3 rounded-md hover:shadow-lg transition-all font-semibold flex items-center cursor-pointer">
                                Read More <span className="ml-2">→</span>
                            </button>
                        </div>

                        {/* Right Side: Image with Joint Name Plate */}
                        <div className="relative order-1 lg:order-2 flex justify-center">
                            {/* We created a common wrapper for image and text to make them look joint */}
                            <div className="relative w-full max-w-md flex flex-col shadow-2xl rounded-[3rem] overflow-hidden border-8 border-white bg-[#3E3F95]">

                                {/* Main Image - Individual rounding/border removed, handled by wrapper */}
                                <img
                                    src={trustee}
                                    alt="Trustee"
                                    className="w-full h-90 object-cover object-top"
                                />

                                {/* Joint Name Plate - bg-white changed to blue and position changed to joint */}
                                <div className="w-full px-8 py-6 text-center">
                                    {/* Change text color to white */}
                                    <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                                        SHAILESH BHAI SAVANI CHAIRMAN
                                    </h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ACADEMIC TEAM SECTION */}
            <section className="bg-[#f8f9fc] py-16 md:py-24 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Section Header: Title on Left, Button on Right */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                        <div>
                            <h3 className="text-[#0a1128] font-bold text-lg mb-2">
                                Academic Team
                            </h3>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0a1128] max-w-2xl leading-tight">
                                Meet Our Expert and Passionate Teaching Faculty
                            </h2>
                        </div>
                        <button className="bg-gradient-to-r from-[#00b4d8] to-[#3b479a] text-white px-8 py-3.5 rounded-md hover:shadow-lg transition-all font-semibold flex items-center whitespace-nowrap cursor-pointer">
                            Read More <span className="ml-2">→</span>
                        </button>
                    </div>

                    {/* Team Members Grid */}
                    {/* lg:grid-cols-4 sets it to 4 columns on desktop, 1 on mobile, 2 on tablets */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        
                        {/* We use an array map to easily generate 4 cards. 
                            You can later replace this with real data from an API or array */}
                        {[
                            { name: "Shaileshbhai Savani", exp: "5 year" },
                            { name: "Chaitali Vagnani", exp: "5 year" },
                            { name: "Shaileshbhai Savani", exp: "5 year" },
                            { name: "Chaitali Vagnani", exp: "5 year" }
                        ].map((member, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-3xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 hover:-translate-y-2 transition-transform duration-300"
                            >
                                {/* Image Container with Light Gray Background */}
                                <div className="bg-[#f2f4f7] rounded-2xl h-64 flex items-end justify-center overflow-hidden pt-6">
                                    <img 
                                        src={teamMember} // <-- Replace with your imported image variable
                                        alt={member.name} 
                                        className="w-[85%] h-full object-contain object-bottom"
                                    />
                                </div>
                                
                                {/* Text Information */}
                                <div className="text-center mt-6 mb-3">
                                    <h4 className="text-lg font-bold text-[#0a1128]">
                                        {member.name}
                                    </h4>
                                    <p className="text-gray-500 text-sm font-medium mt-1">
                                        Experience: {member.exp}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>


            {/* ACADEMIC TEAM SECTION */}
            <section className="bg-[#f8f9fc] py-16 md:py-24 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Section Header: Title on Left, Button on Right */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                        <div>
                            <h3 className="text-[#0a1128] font-bold text-lg mb-2">
                                Academic Team
                            </h3>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0a1128] max-w-2xl leading-tight">
                                Meet Our Expert and Passionate Teaching Faculty
                            </h2>
                        </div>
                        <button className="bg-gradient-to-r from-[#00b4d8] to-[#3b479a] text-white px-8 py-3.5 rounded-md hover:shadow-lg transition-all font-semibold flex items-center whitespace-nowrap cursor-pointer">
                            Read More <span className="ml-2">→</span>
                        </button>
                    </div>

                    {/* Team Members Grid */}
                    {/* lg:grid-cols-4 sets it to 4 columns on desktop, 1 on mobile, 2 on tablets */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        
                        {/* We use an array map to easily generate 4 cards. 
                            You can later replace this with real data from an API or array */}
                        {[
                            { name: "Shaileshbhai Savani", exp: "5 year" },
                            { name: "Chaitali Vagnani", exp: "5 year" },
                            { name: "Shaileshbhai Savani", exp: "5 year" },
                            { name: "Chaitali Vagnani", exp: "5 year" }
                        ].map((member, index) => (
                            <div 
                                key={index} 
                                className="bg-white rounded-3xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 hover:-translate-y-2 transition-transform duration-300"
                            >
                                {/* Image Container with Light Gray Background */}
                                <div className="bg-[#f2f4f7] rounded-2xl h-64 flex items-end justify-center overflow-hidden pt-6">
                                    <img 
                                        src={teachers} // <-- Replace with your imported image variable
                                        alt={member.name} 
                                        className="w-[85%] h-full object-contain object-bottom"
                                    />
                                </div>
                                
                                {/* Text Information */}
                                <div className="text-center mt-6 mb-3">
                                    <h4 className="text-lg font-bold text-[#0a1128]">
                                        {member.name}
                                    </h4>
                                    <p className="text-gray-500 text-sm font-medium mt-1">
                                        Experience: {member.exp}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </div >
    );
}
export default About;