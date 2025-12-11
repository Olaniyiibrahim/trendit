import React from 'react';
// Importing a comprehensive list of icons based on all images
import { 
    // Header/Stats (remain.png)
    FaUsers, FaMoneyBillWave, FaTasks, FaStar, FaClock, FaHeadset, FaShieldAlt,
    // How It Works (image_d2c52f.png)
    FaUserPlus, FaLink, FaCheckSquare, FaWallet,
    // Ways to Earn Points (image_d2c52f.png)
    FaHeart, FaCommentAlt, FaShareAlt, FaUserTie, FaVideo,
    // Withdraw Process (another section.png)
    FaCreditCard, FaRegCheckCircle, 
    // Features (rad.png & another section.png)
    FaGlobe, FaChartBar, FaGift, FaMobileAlt, FaBriefcase, FaCrown,
    // Footer (footer.png)
    FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn
} from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa6'; // Using Fa6 for a different bookmark icon if needed

// --- Data Definitions ---

const taskData = [
    { title: "Like Posts", points: "5-15 points", time: "5-10 seconds", icon: FaHeart, color: 'red' },
    { title: "Leave Comments", points: "15-35 points", time: "1-2 minutes", icon: FaCommentAlt, color: 'green' },
    { title: "Share Content", points: "15-40 points", time: "1 minute", icon: FaShareAlt, color: 'blue' },
    { title: "Follow Accounts", points: "9-25 points", time: "10 seconds", icon: FaUserTie, color: 'purple' },
    { title: "Watch Videos", points: "10-25 points", time: "2-3 minutes", icon: FaVideo, color: 'teal' },
    { title: "Rate & Review", points: "25-50 points", time: "2-5 minutes", icon: FaStar, color: 'orange' },
];

const featuresData = [
    { title: "Reach Across Africa", description: "Access thousands of social media users across the continent.", Icon: FaGlobe, color: 'blue' },
    { title: "Cost-Effective Marketing", description: "Pay only for completed tasks with transparent pricing.", Icon: FaCheckSquare, color: 'blue' },
    { title: "Real-Time Analytics", description: "Track engagement metrics and campaign performance instantly.", Icon: FaChartBar, color: 'blue' },
    { title: "Verified Promoters", description: "Work with authenticated users for genuine engagement.", Icon: FaShieldAlt, color: 'blue' },
    { title: "Earn USDT", description: "Get paid in cryptocurrency for your social media activities", Icon: FaWallet, color: 'purple' },
    { title: "Gift Card Rewards", description: "Redeem points for popular gift cards and vouchers", Icon: FaGift, color: 'purple' },
    { title: "Flexible Schedule", description: "Work anytime, anywhere at your own pace", Icon: FaClock, color: 'purple' },
    { title: "Mobile Friendly", description: "Complete tasks easily from your smartphone", Icon: FaMobileAlt, color: 'purple' },
];

// --- Helper Functions for Tailwind Styling ---

const getTaskColorClasses = (type) => {
    switch (type) {
        case 'red': return { iconBg: 'bg-red-500', bg: 'bg-red-50', text: 'text-red-500' };
        case 'green': return { iconBg: 'bg-green-500', bg: 'bg-green-50', text: 'text-green-500' };
        case 'blue': return { iconBg: 'bg-blue-500', bg: 'bg-blue-50', text: 'text-blue-500' };
        case 'purple': return { iconBg: 'bg-indigo-500', bg: 'bg-indigo-50', text: 'text-indigo-500' };
        case 'teal': return { iconBg: 'bg-teal-500', bg: 'bg-teal-50', text: 'text-teal-500' };
        case 'orange': return { iconBg: 'bg-orange-500', bg: 'bg-orange-50', text: 'text-orange-500' };
        default: return { iconBg: 'bg-gray-500', bg: 'bg-gray-50', text: 'text-gray-500' };
    }
};

const getFeatureColorClasses = (type) => {
    if (type === 'blue') {
        return {
            bg: 'bg-blue-50', iconBg: 'bg-blue-600',
        };
    }
    return {
        bg: 'bg-purple-50', iconBg: 'bg-purple-600',
    };
};

// --- Main Component ---
const RatingPart = () => {

    // Custom colors/gradients based on image analysis
    const darkNavy = "bg-[#181a20]"; 
    const heroBg = "bg-gradient-to-r from-blue-700 to-purple-600";
    const conversionRateBg = "bg-gradient-to-r from-blue-600 to-purple-500";
    
    // Footer data
    const platformLinks = ["How It Works", "Pricing", "Features", "Security"];
    const supportLinks = ["Help Center", "Contact Us", "FAQ", "Community"];
    const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"];

    // Testimonial data from remain.png
    const testimonials = [
        { name: "Adewale Okafor", title: "Business Owner", quote: "Trendit helped us reach over 10,000 potential customers in just one month. The engagement quality is amazing and our sales have increased by 40%." },
        { name: "Kwana Asante", title: "Social Media Promoter", quote: "I earn an extra $250 monthly just by doing what I already love - engaging on social media. The payment system is reliable and fast." },
        { name: "Fatima Hassan", title: "Campaign Manager", quote: "The analytics dashboard gives us incredible insights into our campaigns. We can track every engagement and optimize our strategy in real time." },
    ];

    return (
        <div>
            {/* 7. Withdraw Your Earnings Section (another section.png) */}
            <div className="py-20 bg-white">
                <div className={`max-w-4xl mx-auto rounded-xl p-6 mb-12 text-white ${conversionRateBg}`}>
                    <h3 className="text-center text-xl font-bold mb-4">Points Conversion Rates</h3>
                    <div className="grid grid-cols-3 gap-4 text-center items-center">
                        <div className="bg-white/10 p-4 rounded-lg h-[100px] md:px-[80px]"><span className='font-bold text-white'>1,000 Points </span> = $1 USDT</div>
                        <div className="bg-white/10 p-4 rounded-lg h-[100px] md:px-[80px]"><span className='font-bold text-white'>5,000 Points</span> = $5 Gift Card</div>
                        <div className="bg-white/10 p-4 rounded-lg h-[100px] md:px-[80px]"><span className='font-bold text-white'>10,000 Points</span> = $10 USDT</div>
                    </div>
                </div>

        <div className="max-w-6xl mx-auto px-4 text-center">

                    {/* Payout Options Grid */}
        <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-3">
                <span className="text-green-600">Withdraw</span>
                <span className="text-gray-900"> Your Earnings</span>
            </h1>
            <p className="text-gray-600">
            Multiple payout options to suit your needs. Fast, secure, and reliable withdrawals.
            </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* USDT Card - Featured */}
          <div className="bg-white rounded-2xl border-2 border-blue-500 p-6 shadow-sm">
            <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
             Most Popular
            </span>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">USDT (Crypto)</h3>
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-600 text-sm">Minimum</span>
              <span className="text-green-600 font-semibold text-sm">1,000 points ($1)</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-600 text-sm">Processing</span>
              <span className="text-gray-900 font-semibold text-sm">Instant</span>
            </div>
            <p className="text-gray-500 text-sm">
              Direct transfer to your crypto wallet
            </p>
          </div>

          {/* Amazon Gift Cards */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Amazon Gift Cards</h3>
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-600 text-sm">Minimum</span>
              <span className="text-green-600 font-semibold text-sm">5,000 points ($5)</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-600 text-sm">Processing</span>
              <span className="text-gray-900 font-semibold text-sm">24 hours</span>
            </div>
            <p className="text-gray-500 text-sm">
              Valid for Amazon purchases worldwide
            </p>
          </div>

          {/* iTunes Gift Cards */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">iTunes Gift Cards</h3>
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-600 text-sm">Minimum</span>
              <span className="text-green-600 font-semibold text-sm">5,000 points ($5)</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-600 text-sm">Processing</span>
              <span className="text-gray-900 font-semibold text-sm">24 hours</span>
            </div>
            <p className="text-gray-500 text-sm">
              For App Store and iTunes purchases
            </p>
          </div>

          {/* Google Play Cards */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Google Play Cards</h3>
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-600 text-sm">Minimum</span>
              <span className="text-green-600 font-semibold text-sm">5,000 points ($5)</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-600 text-sm">Processing</span>
              <span className="text-gray-900 font-semibold text-sm">24 hours</span>
            </div>
            <p className="text-gray-500 text-sm">
              For Google Play Store purchases
            </p>
          </div>

          {/* Retail Gift Cards */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Retail Gift Cards</h3>
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-600 text-sm">Minimum</span>
              <span className="text-green-600 font-semibold text-sm">10,000 points ($10)</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-600 text-sm">Processing</span>
              <span className="text-gray-900 font-semibold text-sm">48 hours</span>
            </div>
            <p className="text-gray-500 text-sm">
              Walmart, Target, and local stores
            </p>
          </div>

          {/* Mobile Airtime */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile Airtime</h3>
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-600 text-sm">Minimum</span>
              <span className="text-green-600 font-semibold text-sm">3,000 points ($3)</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-600 text-sm">Processing</span>
              <span className="text-gray-900 font-semibold text-sm">Instant</span>
            </div>
            <p className="text-gray-500 text-sm">
              Top up for all major networks
            </p>
          </div>
        </div>
        </div>

                    {/* Withdrawal Process */}
        <div className="mt-12 shadow-md py-6 rounded-xl">
                        <h3 className="text-2xl font-bold text-gray-800">Withdrawal Process</h3>
                        <p className='mb-5  text-gray-400 font-light'>Simple 3-step process to get your money</p>
                        <div className="flex justify-between max-w-2xl mx-auto">
                            <div className="w-1/3 text-center">
                                <FaWallet className="text-4xl text-blue-600 mx-auto mb-2" />
                                <p className="font-semibold">1. Check Balance</p>
                            </div>
                            <div className="w-1/3 text-center">
                                <FaCreditCard className="text-4xl text-purple-600 mx-auto mb-2" />
                                <p className="font-semibold">2. Choose Method</p>
                            </div>
                            <div className="w-1/3 text-center">
                                <FaRegCheckCircle className="text-4xl text-green-600 mx-auto mb-2" />
                                <p className="font-semibold">3. Receive Payment</p>
                            </div>
                        </div>
                        <button className="inline-block bg-green-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-700 transition mt-8 shadow-lg">
                            Start Earning Now
                        </button>
                    </div>
                </div>
            </div>
            <div className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-2 text-gray-800">Why Choose <span className="text-purple-600">Trendit?</span></h2>
                    <p className="text-gray-600 mb-12">
                        Discover the benefits that make our platform the best choice for businesses and promoters
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        {/* Business Owners Column */}
                        <div>
                            <p className="flex flex-col items-center font-bold text-gray-800 mb-4">
                                <FaBriefcase className="mr-2 text-blue-600 w-10 h-10" /> Business Owners
                            </p>
                            <div className="space-y-4">
                                {featuresData.slice(0, 4).map((feature, index) => {
                                    const { bg, iconBg } = getFeatureColorClasses(feature.color);
                                    const IconComponent = feature.Icon; 
                                    return (
                                        <div key={index} className={`flex items-start p-4 rounded-xl ${bg}`}>
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center mr-3 text-white text-xl`}>
                                                <IconComponent className="w-5 h-5" /> 
                                            </div>
                                            <div>
                                                <h3 className="text-md font-semibold text-gray-800">{feature.title}</h3>
                                                <p className="text-xs text-gray-600">{feature.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Employees/Promoters Column */}
                        <div>
                            <p className="flex flex-col items-center font-bold text-gray-800 mb-4">
                                <FaCrown className="mr-2 text-purple-600 w-10 h-10" /> Employees
                            </p>
                            <div className="space-y-4">
                                {featuresData.slice(4, 8).map((feature, index) => {
                                    const { bg, iconBg } = getFeatureColorClasses(feature.color);
                                    const IconComponent = feature.Icon; 
                                    return (
                                        <div key={index} className={`flex items-start p-4 rounded-xl ${bg}`}>
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center mr-3 text-white text-xl`}>
                                                <IconComponent className="w-5 h-5" /> 
                                            </div>
                                            <div>
                                                <h3 className="text-md font-semibold text-gray-800">{feature.title}</h3>
                                                <p className="text-xs text-gray-600">{feature.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default RatingPart;