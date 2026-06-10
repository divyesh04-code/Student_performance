import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import girlImage from '../assets/images/girl.png';
import singlesImage from '../assets/images/singles.png';
import scoresImage from '../assets/images/scores.png';
import classroomBg from '../assets/images/classroomBg.jpg';
import { SiGoogleclassroom } from "react-icons/si";
import {
    FaDesktop, FaBars, FaTimes, FaChevronDown, FaChevronUp,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaTelegramPlane,
    FaTwitter,
    FaYoutube,
    FaFacebookF,
    FaInstagram,
    FaGooglePlay,
    FaApple
} from "react-icons/fa";
import { ImLab } from "react-icons/im";
import galleryKarate from '../assets/images/gallery-karate.jpg';
import galleryParents from '../assets/images/gallery-parents.jpg';
import galleryAward from '../assets/images/gallery-award.jpg';
import galleryKargil from '../assets/images/gallery-kargil.jpg';
import galleryYoga from '../assets/images/gallery-yoga.jpg';
import galleryVips from '../assets/images/gallery-vips.jpg';

function Home() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // FAQ Accordion ke liye State. '0' ka matlab hai pehla question default open rahega.
    const [openFaq, setOpenFaq] = useState(0);

    // FAQ Data Array
    const faqData = [
        {
            question: "The language materials include objects",
            answer: "I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
            question: "The language materials include objects",
            answer: "This is a placeholder answer for the second question. You can replace this with your actual text."
        },
        {
            question: "The Sensorial materials isolate a defining quality?",
            answer: "This is a placeholder answer for the third question. You can replace this with your actual text."
        },
        {
            question: "Our goals are to encourage and nurture?",
            answer: "This is a placeholder answer for the fourth question. You can replace this with your actual text."
        }
    ];

    // Accordion Toggle Function
    const toggleFaq = (index) => {
        // Agar same question par click kiya toh band kar do, warna naya open karo
        setOpenFaq(openFaq === index ? null : index);
    };

    // Data array for the 9 facility cards
    const facilitiesData = [
        {
            title: "Classroom",
            desc: "Our well-designed classrooms are perfectly embellished with proper room for ventilation and natural light.",
            icon: <SiGoogleclassroom className="w-7 h-7" />
        },
        {
            title: "Computer Lab",
            desc: "Our computer lab has extensive range of equipment that rightly fulfills the need of our day-to-day work.",
            icon: <FaDesktop className="w-6 h-6" />
        },
        {
            title: "Laboratory",
            desc: "A well-organized laboratory is a vital source of practical learning for students. Our laboratory is designed.",
            icon: <ImLab className="w-6 h-6" />


        },
        {
            title: "Science Lab",
            desc: "LPS is well-known for instilling discipline and enriching every aspect of a student's life. At LPS, we believe in teaching our students .."
        },
        {
            title: "Playground",
            desc: "A fun-filled opportunity with an array of outdoor games and activities, our playground offers enough"
        },
        {
            title: "Library",
            desc: "Our library offers access to a variety of resources with new knowledge and personal development."
        },
        {
            title: "Chemistry Lab",
            desc: "Learning chemistry is an absolute fun at our school. The overall setting, equipment and environmen"
        },
        {
            title: "Biology Lab",
            desc: "The biology lab is well-structured and equipped with all the necessary tools and equipment. This lab"
        },
        {
            title: "Physics Lab",
            desc: "Conducting experiments in a lab is the fundamental of effective learning. Our school applies the same"
        }
    ];

    return (
        <div className="bg-white font-sans flex flex-col min-h-screen">

           

            {/* 3. Main Hero Section */}
            <main className="container mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">

                {/* Left Side: Image & Floating Elements */}
                <div className="w-full lg:w-1/2 relative flex justify-center">
                    <div className="relative p-2 md:p-4 inline-block animate-float w-full max-w-[414px]">

                        {/* Main Student Image - Fixed for responsiveness */}
                        <div className="bg-[#f0eaff] rounded-3xl overflow-hidden w-full aspect-[414/451] relative">
                            <img
                                src={girlImage}
                                alt="Smiling Student"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Stat Card 1 (Left Pink Card) */}
                        {/* Fixed: Moved slightly inside on mobile (-left-2) and outside on desktop (md:-left-12) */}
                        <div className="absolute top-1/2 -left-2 md:-left-12 transform -translate-y-1/2 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl p-3 shadow-xl w-20 md:w-24 h-16 md:h-20 text-white z-20">
                            <div className="text-[8px] md:text-[10px] uppercase font-bold mb-1">
                                <img src={singlesImage} alt="Singles" className="w-8 md:w-auto" />
                            </div>
                            <div className="text-lg md:text-xl font-bold flex items-center">
                                18 <span className="text-xs md:text-sm ml-1">↑</span>
                            </div>
                        </div>

                        {/* Floating Stat Card 2 (Right Global Statistic) */}
                        {/* Fixed: Adjusted right position for mobile */}
                        <div className="absolute bottom-10 -right-2 md:bottom-16 md:-right-16 bg-white rounded-2xl shadow-2xl p-3 md:p-4 w-32 md:w-40 z-10 hidden sm:block">
                            <div className="text-[9px] md:text-[10px] text-gray-500 text-center mb-2 md:mb-3 font-semibold">Global Statistic</div>
                            <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full border-4 md:border-8 border-purple-500 border-r-orange-400 border-b-pink-400 animate-[spin_8s_linear_infinite]"></div>
                                <div className="relative text-[10px] md:text-xs font-bold text-gray-700">23%</div>
                            </div>
                        </div>

                        {/* Floating Stat Card 3 (Bottom Left Latest Scores Image) */}
                        {/* Stays hidden on very small mobile screens, visible on md and up */}
                        <div className="absolute -bottom-8 -left-6 md:-bottom-10 md:-left-12 z-20 hidden md:block">
                            <img
                                src={scoresImage}
                                alt="Latest Scores"
                                className="w-40 md:w-50 h-auto rounded-2xl shadow-2xl"
                            />
                        </div>

                    </div>
                </div>

                {/* Right Side: Typography & Content */}
                <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 text-center md:text-left mt-8 md:mt-0">
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-[#3b479a] text-lg md:text-xl font-extrabold mb-2 tracking-wide">About Us</h3>
                        <div className="w-16 h-[5px] bg-[#00b4d8]"></div>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2d3250] leading-tight">
                        We are LPS based school
                    </h1>
                    <div className="text-gray-500 space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed pr-0 lg:pr-12">
                        <p>
                            For the last 25 years, we have been at the forefront of shaping the lives of hundreds of thousands of students by running our institutions at Varacha and Katargam in Surat.
                        </p>
                        <p>
                            Our school readily combines a modern outlook with traditional values so as to maintain a happy and respectful rapport between students and staff.
                        </p>
                    </div>
                    <button className="mt-6 md:mt-8 mx-auto md:mx-0 bg-gradient-to-r from-[#00b4d8] to-[#3b479a] text-white px-6 md:px-8 py-3 md:py-3.5 rounded hover:shadow-xl transition-all font-semibold flex items-center text-base md:text-lg cursor-pointer">
                        Read More <span className="ml-2 font-bold">→</span>
                    </button>
                </div>
            </main>

            {/* 4. Education for a Bright Future Banner */}
            <section
                className="relative bg-cover bg-center py-32 mt-10"
                style={{ backgroundImage: `url(${classroomBg})` }}
            >
                {/* Dark Overlay Filter */}
                <div className="absolute inset-0 backdrop-blur-sm"></div>
                <div className="absolute inset-0 bg-black/70"></div>

                {/* Text Content */}
                <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl flex flex-col items-center space-y-6">

                    <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight font-serif tracking-wide">
                        Education for a Bright Future.
                    </h2>

                    <p className="text-gray-200 text-lg md:text-xl max-w-2xl">
                        A modern learning environment where education meets innovation, inspiring every student to succeed.
                    </p>

                    {/* Apply Now Button with Icon */}
                    <button className="mt-6 bg-[#00b4d8] text-white px-8 py-3.5 rounded-md hover:bg-blue-600 transition-colors font-semibold flex items-center gap-2 cursor-pointer text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg>
                        Apply Now
                    </button>

                </div>
            </section>


            {/* 5. Features / Facilities Section */}
            {/* Added a smaller max-width (max-w-7xl) to bring the cards closer to the center */}
            <section className="container mx-auto px-6 py-20 max-w-7xl">
                {/* CSS Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Card 1: School Library */}
                    {/* Added hover:-translate-y-2 for an upward hover animation */}
                    <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                        {/* Icon Circle */}
                        <div className="w-20 h-20 rounded-full border border-blue-200 flex items-center justify-center mb-6 text-[#00b4d8]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-extrabold text-gray-900 mb-3">School Library</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">The student and teacher handbooks</p>
                    </div>

                    {/* Card 2: Bus Schedule */}
                    <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                        {/* Icon Circle */}
                        <div className="w-20 h-20 rounded-full border border-blue-200 flex items-center justify-center mb-6 text-[#3b479a]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-extrabold text-gray-900 mb-3">Bus Schedule</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">The theme is carried over into family</p>
                    </div>

                    {/* Card 3: School Calendar */}
                    <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                        {/* Icon Circle */}
                        <div className="w-20 h-20 rounded-full border border-blue-200 flex items-center justify-center mb-6 text-[#00b4d8]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-extrabold text-gray-900 mb-3">School Calendar</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">All students had to bring at least.</p>
                    </div>

                    {/* Card 4: School Fees */}
                    <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                        {/* Icon Circle */}
                        <div className="w-20 h-20 rounded-full border border-blue-200 flex items-center justify-center mb-6 text-[#3b479a]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-extrabold text-gray-900 mb-3">School Fees</h3>
                        <p className="text-sm text-gray-500 leading-relaxed">Create a happy environment for your child in which they can thrive.</p>
                    </div>

                </div>
            </section>

            {/* 6. Education of Tomorrow Section */}
            {/* Background color full width rakha hai */}
            <section className="py-24 bg-[#fcfcfc]">

                {/* Is div mein max-w-7xl lagaya hai taki content center mein rahe */}
                <div className="container mx-auto px-6 max-w-7xl">

                    {/* Heading Area */}
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#2d3250] mb-6 leading-tight">
                            The Education of Tomorrow, Rooted in Tradition Invite You
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            Our purpose is to provide a safe, happy environment for your child where they are able to be themselves and thrive while acquiring the educational foundation needed to achieve this.
                        </p>
                    </div>

                    {/* Grid Area - 1 col on mobile, 2 on tablet, 3 on large screens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Using React .map() to loop through our array */}
                        {facilitiesData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-[1.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 flex flex-col items-start text-left cursor-pointer"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 bg-[#eef2fa] rounded-full flex items-center justify-center mb-6 text-[#3b479a]">
                                    {item.icon}
                                </div>

                                {/* Card Title */}
                                <h3 className="text-xl font-bold text-[#2d3250] mb-4">
                                    {item.title}
                                </h3>

                                {/* Card Description */}
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                    {item.desc}
                                </p>

                                {/* Read More Link */}
                                <a href="#" className="text-[#3b479a] font-bold text-sm hover:text-blue-500 transition-colors">
                                    Read More
                                </a>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* 7. Gallery Section */}
            <section className="container mx-auto px-6 py-20 max-w-7xl">

                {/* Heading Area */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#2d3250] mb-4">
                        Gallery
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                        Information for teachers and students, parenting information and education news.
                    </p>
                </div>

                {/* Masonry Layout Grid: 1 col on mobile, 3 cols on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Column 1 (Left) */}
                    <div className="flex flex-col gap-6">
                        {/* Karate Image (Short) */}
                        {/* Yahan 'relative' aur 'cursor-pointer' add kiya hai */}
                        <div className="rounded-[2rem] overflow-hidden group relative shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <img
                                src={galleryKarate}
                                alt="Karate Class"
                                className="w-full h-[250px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Overlay Div - Hover par show hoga */}
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-xl font-bold tracking-wide">Karate Practice</h3>
                            </div>
                        </div>

                        {/* Parents/Kids Image (Tall) */}
                        <div className="rounded-[2rem] overflow-hidden group relative shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <img
                                src={galleryParents}
                                alt="Parents and Kids Event"
                                className="w-full h-[450px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Overlay Div */}
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-xl font-bold tracking-wide">Parents Meet</h3>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 (Middle) */}
                    <div className="flex flex-col gap-6">
                        {/* Award Image (Medium) */}
                        <div className="rounded-[2rem] overflow-hidden group relative shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <img
                                src={galleryAward}
                                alt="Award Ceremony"
                                className="w-full h-[350px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-xl font-bold tracking-wide">Award Ceremony</h3>
                            </div>
                        </div>

                        {/* Kargil Vijaydiwas Image (Medium) */}
                        <div className="rounded-[2rem] overflow-hidden group relative shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <img
                                src={galleryKargil}
                                alt="Kargil Vijaydiwas"
                                className="w-full h-[350px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-xl font-bold tracking-wide text-center px-4">Kargil Vijay Diwas</h3>
                            </div>
                        </div>
                    </div>

                    {/* Column 3 (Right) */}
                    <div className="flex flex-col gap-6">
                        {/* Yoga Image (Tall) */}
                        <div className="rounded-[2rem] overflow-hidden group relative shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <img
                                src={galleryYoga}
                                alt="Yoga Day"
                                className="w-full h-[450px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-xl font-bold tracking-wide">Yoga Session</h3>
                            </div>
                        </div>

                        {/* VIPs Image (Short) */}
                        <div className="rounded-[2rem] overflow-hidden group relative shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
                            <img
                                src={galleryVips}
                                alt="School Event Guests"
                                className="w-full h-[250px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-xl font-bold tracking-wide">Chief Guests</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 8. Internship CTA Banner Section */}
            <section className="bg-[#f8f9fc] py-20 mt-12">
                <div className="container mx-auto px-6 max-w-4xl flex flex-col items-center text-center">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3b479a] mb-6 tracking-tight">
                        Want to be an intern with us and you are a student?
                    </h2>

                    {/* Paragraph / Subtitle */}
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
                        Ut rutrum tincidunt justo convallis dignissim. Proin maximus sagittis tempor. Vivamus ornare ligula nec lacus cursus, quis faucibus leo gravida.
                    </p>

                    {/* Gradient Button */}
                    <button className="bg-gradient-to-r from-[#00a8e8] to-[#3b479a] text-white px-8 py-3.5 rounded-md hover:shadow-[0_8px_20px_rgba(59,71,154,0.3)] hover:-translate-y-1 transition-all duration-300 font-semibold flex items-center cursor-pointer text-lg">
                        Read More <span className="ml-2 font-bold">→</span>
                    </button>

                </div>
            </section>

            {/* 9. FAQ and Contact Section */}
            {/* Yahan maine ek top border blue line di hai */}
            <section className="py-20 bg-[#f8f9fc] border-t-2 border-[#00b4d8]">
                <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Left Column: Frequently Asked Questions */}
                    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-start">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2d3250] mb-8">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-4">
                            {faqData.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`border rounded-xl transition-all duration-300 ${openFaq === index ? 'border-gray-200 shadow-sm' : 'border-gray-300'
                                        }`}
                                >
                                    {/* Question Header (Clickable) */}
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex justify-between items-center p-5 text-left focus:outline-none cursor-pointer"
                                    >
                                        <span className="font-semibold text-[#2d3250] pr-4">{faq.question}</span>
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white transition-colors ${openFaq === index ? 'bg-[#00b4d8]' : 'bg-[#3b479a]'
                                            }`}>
                                            {openFaq === index ? <FaChevronUp className="w-3 h-3" /> : <FaChevronDown className="w-3 h-3" />}
                                        </div>
                                    </button>

                                    {/* Answer Body (Shows only if openFaq matches index) */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-48 opacity-100 mb-5 px-5' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <p className="text-gray-500 text-sm leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-start">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2d3250] mb-2">
                            Contact Us
                        </h2>
                        <p className="text-gray-500 mb-8 text-sm md:text-base">
                            Contact professionals for guidance
                        </p>

                        <form className="space-y-6 flex-grow flex flex-col">

                            {/* Input 1: Active Style (Blue border) */}
                            <div className="relative">
                                <label className="absolute -top-2.5 left-3 bg-white px-1 text-[11px] text-[#00b4d8] font-semibold">Your Name</label>
                                <input
                                    type="text"
                                    defaultValue="|"
                                    className="w-full border border-[#00b4d8] rounded-md px-4 py-3.5 text-sm focus:outline-none"
                                />
                            </div>

                            {/* Input 2: Email */}
                            <div className="relative mt-2">
                                <label className="absolute -top-2.5 left-3 bg-white px-1 text-[11px] text-gray-400 font-semibold">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="w-full border border-gray-300 rounded-md px-4 py-3.5 text-sm focus:outline-none focus:border-[#00b4d8]"
                                />
                            </div>

                            {/* Input 3: Subject */}
                            <div className="relative">
                                <label className="absolute -top-2.5 left-3 bg-white px-1 text-[11px] text-gray-400 font-semibold">Your Subject</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Subject"
                                    className="w-full border border-gray-300 rounded-md px-4 py-3.5 text-sm focus:outline-none focus:border-[#00b4d8]"
                                />
                            </div>

                            {/* Input 4: Message Textarea */}
                            <div className="relative flex-grow">
                                <label className="absolute -top-2.5 left-3 bg-white px-1 text-[11px] text-gray-400 font-semibold">Your Message</label>
                                <textarea
                                    placeholder="Type here..."
                                    rows="4"
                                    className="w-full border border-gray-300 rounded-md px-4 py-3.5 text-sm focus:outline-none focus:border-[#00b4d8] resize-none h-full min-h-[120px]"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button type="button" className="bg-gradient-to-r from-[#00a8e8] to-[#3b479a] text-white px-10 py-3 rounded-md hover:shadow-lg transition-all duration-300 font-medium cursor-pointer">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>

            

        </div >
    );
}

export default Home;