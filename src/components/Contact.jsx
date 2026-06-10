import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: 'Address',
      content: '123 Education Street, City, State 12345',
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: 'Phone',
      content: '+91 1234567890',
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'Email',
      content: 'info@krishschool.com',
    },
  ]

  return (
    <div>
      {/* Hero Section - background image with dark overlay, centered content */}
      <section className="relative text-white py-16 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              'url(gallery-vips.jpg)',
            backgroundPosition: 'center 25%', // ⬆️ thoda upar
          }}
          aria-hidden
        />

        <div className="absolute inset-0 bg-black/60" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[280px] md:min-h-[320px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-[1171px] w-full"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white leading-relaxed mb-8">
            </p>

          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {/* Address Card */}
            <div className="flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-2xl sm:rounded-[30px]" style={{ boxShadow: '0px 12.98px 18.97px 0px rgba(0, 0, 0, 0.07)' }}>
              <div className="mb-3 sm:mb-4 flex items-center justify-center" style={{
                width: "56px",
                height: "56px",
                borderRadius: "18.4px",
                backgroundColor: "#3E4096"
              }}>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">ADDRESS</h3>
              <p 
                className="text-xs sm:text-sm"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  lineHeight: "140%",
                  letterSpacing: "0%",
                  color: "#9F9F9F",
                  textAlign: "center"
                }}
              >
                LPS School, 44, Varsha Society 2, Varachha, Surat, Gujarat - 395006
              </p>
            </div>

            {/* Working Hours Card */}
            <div className="flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-2xl sm:rounded-[30px]" style={{ boxShadow: '0px 12.98px 18.97px 0px rgba(0, 0, 0, 0.07)' }}>
              <div className="mb-3 sm:mb-4 flex items-center justify-center" style={{
                width: "56px",
                height: "56px",
                borderRadius: "18.4px",
                backgroundColor: "#3E4096"
              }}>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">WORKING HOURS</h3>
              <p 
                className="text-xs sm:text-sm mb-2"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  lineHeight: "140%",
                  letterSpacing: "0%",
                  color: "#9F9F9F",
                  textAlign: "center"
                }}
              >
                Mon - Sat: 7:00 a.m- 6:00 p.m
              </p>
              <p 
                className="text-xs sm:text-sm"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  lineHeight: "140%",
                  letterSpacing: "0%",
                  color: "#9F9F9F",
                  textAlign: "center"
                }}
              >
                Sunday: 9:00 a.m- 1:00 p.m
              </p>
            </div>

            {/* Phone Card */}
            <div className="flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-2xl sm:rounded-[30px]" style={{ boxShadow: '0px 12.98px 18.97px 0px rgba(0, 0, 0, 0.07)' }}>
              <div className="mb-3 sm:mb-4 flex items-center justify-center" style={{
                width: "56px",
                height: "56px",
                borderRadius: "18.4px",
                backgroundColor: "#3E4096"
              }}>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">PHONE</h3>
              <p 
                className="text-xs sm:text-sm mb-2"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  lineHeight: "140%",
                  letterSpacing: "0%",
                  color: "#9F9F9F",
                  textAlign: "center"
                }}
              >
                Reception - +91- 6357470001
              </p>
              <p 
                className="text-xs sm:text-sm mb-2"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  lineHeight: "140%",
                  letterSpacing: "0%",
                  color: "#9F9F9F",
                  textAlign: "center"
                }}
              >
                Addmission - +91-6357470002
              </p>
              <p 
                className="text-xs sm:text-sm"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  lineHeight: "140%",
                  letterSpacing: "0%",
                  color: "#9F9F9F",
                  textAlign: "center"
                }}
              >
                Fees Enquiry - +91-6357470003
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 sm:p-6 bg-white rounded-2xl sm:rounded-[30px]" style={{ boxShadow: '0px 12.98px 18.97px 0px rgba(0, 0, 0, 0.07)' }}>
              <div className="mb-3 sm:mb-4 flex items-center justify-center" style={{
                width: "56px",
                height: "56px",
                borderRadius: "18.4px",
                backgroundColor: "#3E4096"
              }}>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">EMAIL</h3>
              <p 
                className="text-xs sm:text-sm mb-2"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  lineHeight: "140%",
                  letterSpacing: "0%",
                  color: "#9F9F9F",
                  textAlign: "center"
                }}
              >
                Info@lpsavani.in
              </p>
              <p 
                className="text-xs sm:text-sm"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  lineHeight: "140%",
                  letterSpacing: "0%",
                  color: "#9F9F9F",
                  textAlign: "center"
                }}
              >
                Info.k@lpsavani.in
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#F8FAFC] py-8 sm:py-12 md:py-16 lg:py-20">
  {/* Heading */}
  <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
    <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight sm:leading-[50px] tracking-[0.2px] text-[#252B42]">
      Contact Us
    </h2>
    <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-[16px] text-[#737373]">
      Have questions? Reach out to us today.
    </p>
  </div>

  {/* Main Box */}
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6">
    
    {/* Left Image */}
   <div className="w-full lg:w-[493px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[672px] rounded-2xl sm:rounded-3xl lg:rounded-[40px] overflow-hidden order-2 lg:order-1">
  <img
    src="gallery-karate.jpg"
    alt="Contact"
    className="w-full h-full object-cover"
  />
</div>

    {/* Right Form Card */}
    <div className="w-full lg:w-[662px] min-h-[500px] lg:h-[672px] bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg order-1 lg:order-2">
      <form className="space-y-6">

        {/* First & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
         <div>
  <label className="block mb-2 text-sm sm:text-base font-medium text-[#3E4096]">
    First Name
  </label>
  <input
    type="text"
    placeholder="Enter First Name"
    className="w-full h-[44px] sm:h-[48px] rounded-lg border border-[#E6E6E6] px-3 sm:px-4 outline-none text-sm sm:text-base"
  />
</div>

          <div>
            <label className="block mb-2 text-sm sm:text-base font-medium text-[#3E4096]">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="w-full h-[44px] sm:h-[48px] rounded-lg border border-[#3E4096] px-3 sm:px-4 outline-none text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Email & Subject */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label className="block mb-2 text-sm sm:text-base font-medium text-[#3E4096]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full h-[44px] sm:h-[48px] rounded-lg border border-[#3E4096] px-3 sm:px-4 outline-none text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm sm:text-base font-medium text-[#3E4096]">
              Subject
            </label>
            <input
              type="text"
              placeholder="Enter Your Subject"
              className="w-full h-[44px] sm:h-[48px] rounded-lg border border-[#3E4096] px-3 sm:px-4 outline-none text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Number */}
        <div>
          <label className="block mb-2 text-sm sm:text-base font-medium text-[#3E4096]">
            Number
          </label>
          <input
            type="text"
            placeholder="Contact Number"
            className="w-full h-[44px] sm:h-[48px] rounded-lg border border-[#E6E6E6] px-3 sm:px-4 outline-none text-sm sm:text-base"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 text-sm sm:text-base font-medium text-[#3E4096]">
            Message
          </label>
         <textarea
  rows="4"
  placeholder="Enter Your Message"
  className="
    w-full
    border
    border-[#E1E1E1]
    rounded-lg
    sm:rounded-[10px]
    px-3
    sm:px-4
    py-2
    sm:py-3
    text-sm
    sm:text-base
    outline-none
    focus:ring-2
    focus:ring-[#3E3F95]
  "
></textarea>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 gap-4">
         <p
  className="
    text-xs
    sm:text-sm
    md:text-[14px]
    leading-[20px]
    text-[#E1E1E1]
    font-poppins
  "
>
  All fields are obligatory
</p>
         <button
  type="submit"
  className="
    w-full
    sm:w-[199.28px]
    h-[50px]
    sm:h-[59px]
    rounded-[4.15px]
    bg-gradient-to-r
    from-[#00C3FF]
    to-[#333493]
    text-white
    font-medium
    text-sm
    sm:text-base
    flex
    items-center
    justify-center
    transition
    hover:opacity-90
  "
>
  Submit
</button>

        </div>

      </form>
    </div>
  </div>
</section>

{/* Google Map Section */}
<section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

  

    {/* Map */}
    <div className="w-full h-[300px] sm:h-[400px] md:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps?q=Surat,Gujarat&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>

  </div>
</section>




    </div>
  )
}

export default Contact