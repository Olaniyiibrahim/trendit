import React from 'react';
// Using react-icons for the logos and icons
import { FaWallet, FaInfoCircle, FaUsers, FaMoneyBillWave, FaStar, FaBolt } from 'react-icons/fa';

const ReadyToEarnSection = () => {
    // Gradient matching the deep blue/purple background
    const gradientBg = "bg-gradient-to-br from-blue-700 to-purple-600";
    
    // Data for the three main stats
    const statsData = [
        { 
            value: "50,000+", 
            label: "Active Users", 
            subtext: "Earning daily across Africa", 
            Icon: FaUsers 
        },
        { 
            value: "$2M+", 
            label: "Total Paid Out", 
            subtext: "In USDT and gift cards", 
            Icon: FaMoneyBillWave 
        },
        { 
            value: "4.8★", 
            label: "User Rating", 
            subtext: "Trusted by our community", 
            Icon: FaStar 
        },
    ];

    return (
        <div className={`p-12 md:p-16 text-white ${gradientBg} font-sans`}>
            <div className="max-w-6xl mx-auto text-center">
                {/* 2. Main Title and Subtext */}
                <h1 className="text-5xl font-extrabold mb-4 leading-tight">
                    Ready to Start <span className='text-[#FDBA74]'> Earning?</span>
                </h1>
                <p className="text-lg mb-8 text-center max-w-2xl opacity-90">
                    Join thousands to users across Africa who are already money with simple socdia tasks. 
                    No experience required, just your smartphone and a few minutes ovew day.
                </p>

                {/* 3. CTA Buttons */}
                <div className="flex items-center justify-center space-x-4 mb-16">
                    <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition flex items-center">
                        <FaWallet className="mr-2" /> Start Earning Today
                    </button>
                    <button className="bg-transparent border border-white/50 text-white font-semibold py-3 px-6 rounded-full hover:bg-white/10 transition flex items-center">
                        <FaInfoCircle className="mr-2" /> Learn More
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {statsData.map((stat, index) => (
                        <div 
                            key={index} 
                            // Card background gradient matching the main background (but lighter)
                            className="p-8 rounded-xl bg-white/10 backdrop-blur-sm shadow-xl flex flex-col items-center text-center transition hover:bg-white/20"
                            style={{ background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))' }}
                        >
                            <stat.Icon className="text-4xl mb-3" />
                            <p className="text-4xl font-extrabold mb-1">{stat.value}</p>
                            <p className="text-lg font-semibold mb-1">{stat.label}</p>
                            <p className="text-sm opacity-70">{stat.subtext}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-10 pt-4 border-white/30 text-sm opacity-80">
                    <p className='text-center'>Questions? Need help getting started?</p>
                    <p className='mt-5 text-left'>
                        <span className="underline cursor-pointer text-[#FDBA74] opacity-70 hover:opacity-100 transition">a Contact our support team hover </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReadyToEarnSection;