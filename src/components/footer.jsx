import React from 'react';
// Import icons (e.g., from react-icons/fa) for the social links
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHeart } from 'react-icons/fa';

const Footer = () => {
    // Data structures for the links
    const platformLinks = ["How It Works", "Pricing", "Features", "Security"];
    const supportLinks = ["Help Center", "Contact Us", "FAQ", "Community"];
    const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"];

    // Use a custom dark navy color similar to the image
    const darkNavy = "bg-[#181a20]"; // Customizing tailwind config might be needed for exact match

    return (
        <footer className={`${darkNavy} text-white py-12 px-4 md:px-12`}>
            <div className="max-w-7xl mx-auto">
                {/* Top Section: Logo/Description and Link Columns */}
                <div className="flex flex-col md:flex-row justify-between">
                    
                    {/* 1. Logo and Description Column */}
                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        {/* Logo/Brand Name */}
                        <div className="flex items-center mb-4">
                            {/* Gradient Square Icon - Use a div with gradient background */}
                            <div className="w-8 h-8 rounded-md mr-2" style={{ background: 'linear-gradient(45deg, #a78bfa, #8b5cf6)' }}></div>
                            <span className="text-xl font-bold text-white">Trendit</span>
                        </div>
                        
                        {/* Description */}
                        <p className="text-sm text-gray-400 leading-relaxed mb-6">
                            Connecting businesses with social media promoters across Africa. Grow your brand and earn rewards through authentic engagement.
                        </p>
                        
                        {/* Social Icons */}
                        <div className="flex space-x-3">
                            {/* Social Button Structure */}
                            {['facebook', 'twitter', 'instagram', 'linkedin'].map((iconName) => (
                                <a 
                                    key={iconName}
                                    href={`#${iconName}`} 
                                    className="p-2 border border-gray-700 rounded-lg text-gray-400 hover:bg-gray-700 transition"
                                    aria-label={`Link to ${iconName}`}
                                >
                                    {/* Replace with actual FaIcon component */}
                                    {/* Example: <FaFacebookF className="w-4 h-4" /> */}
                                    {iconName[0].toUpperCase()}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. Link Columns (Platform, Support, Legal) */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16 w-full md:w-3/4">
                        
                        {/* Platform Column */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-white">Platform</h4>
                            <ul className="space-y-3">
                                {platformLinks.map((link) => (
                                    <li key={link}>
                                        <a href={`#${link.toLowerCase().replace(/\s/g, '-')}`} className="text-gray-400 text-sm hover:text-white transition">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support Column */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
                            <ul className="space-y-3">
                                {supportLinks.map((link) => (
                                    <li key={link}>
                                        <a href={`#${link.toLowerCase().replace(/\s/g, '-')}`} className="text-gray-400 text-sm hover:text-white transition">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal Column */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
                            <ul className="space-y-3">
                                {legalLinks.map((link) => (
                                    <li key={link}>
                                        <a href={`#${link.toLowerCase().replace(/\s/g, '-')}`} className="text-gray-400 text-sm hover:text-white transition">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright and Powered By */}
                <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p className="mb-2 md:mb-0">
                        © 2024 Trendit. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <p>
                            Made with <span role="img" aria-label="heart" className="text-red-500">❤️</span> for Africa
                        </p>
                        <p>
                            Powered by <a href="#readdy" className="hover:text-white transition">Readdy</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;