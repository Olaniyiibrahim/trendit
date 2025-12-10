import React from 'react';
import { 
    // Header Icons (Best Guesses for the Stat Icons)
    FaUsers, FaMoneyBillWave, FaClock, FaHeadset,
    // How It Works Icons (Based on image_d2c52f.png)
    FaUserPlus, FaBookmark, FaCheckSquare, FaWallet,
    // Task Icons (Based on image_d2c52f.png)
    FaHeart, FaCommentAlt, FaShareAlt, FaUserTie, FaVideo, FaStar,
    // Features Grid Icons (Based on rad.png and icon stacks)
    FaGlobe, FaCheckCircle, FaChartBar, FaShieldAlt, 
    FaGift, FaMobileAlt,
    // Footer Social Icons (Based on footer.png)
    FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn
} from 'react-icons/fa';
import RatingPart from './Rating';
import Testimony from './Testimony';
import Footer from '../../components/footer';
import logo from '../../../public/logo.png';
import Bg from '../../../public/IMG-86.png';


// --- Data Definitions ---

// Data for the main "Ways to Earn Points" grid
const taskData = [
    { title: "Like Posts", points: "5-15 points", time: "5-10 seconds", icon: FaHeart, color: 'red' },
    { title: "Leave Comments", points: "15-35 points", time: "1-2 minutes", icon: FaCommentAlt, color: 'green' },
    { title: "Share Content", points: "15-40 points", time: "1 minute", icon: FaShareAlt, color: 'blue' },
    { title: "Follow Accounts", points: "9-25 points", time: "10 seconds", icon: FaUserTie, color: 'purple' },
    { title: "Watch Videos", points: "10-25 points", time: "2-3 minutes", icon: FaVideo, color: 'teal' },
    { title: "Rate & Review", points: "25-50 points", time: "2-5 minutes", icon: FaStar, color: 'orange' },
];

// Data for the Features Grid
const featuresData = [
    // Blue Boxes (Business Focus)
    {
        title: "Reach Across Africa", description: "Access thousands of social media users across the continent.",
        Icon: FaGlobe, color: 'blue',
    },
    {
        title: "Cost-Effective Marketing", description: "Pay only for completed tasks with transparent pricing.",
        Icon: FaCheckCircle, color: 'blue',
    },
    {
        title: "Real-Time Analytics", description: "Track engagement metrics and campaign performance instantly.",
        Icon: FaChartBar, color: 'blue',
    },
    {
        title: "Verified Promoters", description: "Work with authenticated users for genuine engagement.",
        Icon: FaShieldAlt, color: 'blue',
    },
    // Purple Boxes (Promoter Focus)
    {
        title: "Earn USDT", description: "Get paid in cryptocurrency for your social media activities",
        Icon: FaWallet, color: 'purple',
    },
    {
        title: "Gift Card Rewards", description: "Redeem points for popular gift cards and vouchers",
        Icon: FaGift, color: 'purple',
    },
    {
        title: "Flexible Schedule", description: "Work anytime, anywhere at your own pace",
        Icon: FaClock, color: 'purple',
    },
    {
        title: "Mobile Friendly", description: "Complete tasks easily from your smartphone",
        Icon: FaMobileAlt, color: 'purple',
    },
];


// Helper for Task Card colors (match the colored icons)
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

// Helper for Features Grid colors
const getFeatureColorClasses = (type) => {
    if (type === 'blue') {
        return {
            bg: 'bg-blue-50', // Light Blue background for the box
            iconBg: 'bg-blue-600', // Solid Blue for the icon circle
        };
    }
    // Purple
    return {
        bg: 'bg-purple-50', // Light Purple background for the box
        iconBg: 'bg-purple-600', // Solid Purple for the icon circle
    };
};

// --- Main Component ---
const TrenditEarnings = () => {

    const darkNavy = "bg-[#181a20]"; // Custom color for the footer
       const stats = ['50K+ Active Users', '$2M+ Paid Out', '24/7 Support'];
    // Data for the footer links (from footer.png)
    const platformLinks = ["How It Works", "Pricing", "Features", "Security"];
    const supportLinks = ["Help Center", "Contact Us", "FAQ", "Community"];
    const legalLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"];

    return (
        <div className="min-h-screen font-sans">
            <header className="relative  h-screen overflow-hidden text-white">
                
                <div className="relative max-w-7xl mx-auto px-4">
                    {/* Top Navigation */}
                    <nav className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            {/* <span className="text-xl font-bold">Trendit</span> */}
                        <img src={logo} alt="" />
                        </div>
                        <div className="hidden md:flex space-x-6 text-sm">
                            {['Home', 'How It Works', 'Earn Points', 'Withdraw', 'For Businesses', 'Log In'].map(item => (
                                <a key={item} href="#" className="hover:text-purple-400 transition">{item}</a>
                            ))}
                        </div>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition">Sign Up</button>
                    </nav>

                    {/* Hero Content */}
                    <div className="inset-0">
                <div 
                    className="inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${Bg})` }}
                ></div>
                <div className="absolute inset-0 bg-black/50"></div> 
            </div>
            {/* 3. Content Layer: Relative to the header, ensures content is above the background */}
            <div className="relative max-w-7xl mx-auto px-4 pt-20">
                <div className="max-w-xl">
                    {/* Hero Title */}
                    <h1 className="text-5xl font-extrabold leading-tight">
                        Earn by Helping <span className="text-purple-400">Brands Grow Online</span>
                    </h1>
                    {/* Subtext */}
                    <p className="mt-4 text-lg text-gray-200">
                        Complete simple social media tasks like liking, commenting, and sharing posts.
                    </p>
                    <p className="mt-2 text-lg text-gray-200">
                        Easy payouts and convert them to USDT or redeem for gift cards.
                    </p>
                    {/* CTA Buttons */}
                    <div className="flex space-x-4 mt-8">
                        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center shadow-lg">
                            <FaWallet className="mr-2" /> Start Earning Today
                        </button>
                        <button className="bg-gray-800 border border-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center shadow-md hover:bg-gray-700">
                            <FaBookmark className="mr-2" /> How It Works
                        </button>
                    </div>
                    {/* Stats Section */}
                    <div className="flex space-x-8 mt-12">
                        {stats.map(stat => (
                            <div key={stat} className="text-center">
                                <p className="text-2xl font-bold">{stat.split(' ')[0]}</p>
                                <p className="text-sm text-gray-400">{stat.split(' ').slice(1).join(' ')}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          </div>
            </header>

            {/* 2. How Trendit Works Section (image_d2c52f.png) */}
            <div className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-3 text-gray-800">How <span className='text-blue-500'>Trendit</span> Works</h2>
                    <p className="text-gray-600 mb-12">
                        Start earning in 4 simple steps. Join thousands of users across Africa already making money online.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Step 1 */}
                        {[{num: 1, title: "Sign Up Free", desc: "Create your account in seconds, no credit card, no hidden costs.", Icon: FaUserPlus},
                          {num: 2, title: "Connect Social Media", desc: "Link your Facebook, Instagram, Twitter, and TikTok profiles safely online.", Icon: FaBookmark},
                          {num: 3, title: "Complete Tasks", desc: "Like posts, leave comments, or share content. Most tasks can be completed in under 2 minutes.", Icon: FaCheckSquare},
                          {num: 4, title: "Earn & Withdraw", desc: "Collect points and convert to cash (USDT), Amazon gift cards, Google Play cards.", Icon: FaWallet}
                        ].map((step) => (
                            <div key={step.num} className="py-4 px-2 bg-white border border-gray-200 rounded-lg shadow-sm">
                                <div className={`w-14 h-14 rounded-full bg-purple-600 text-white text-2xl flex items-center justify-center mx-auto mb-4 relative`}>
                                    <step.Icon className="w-6 h-6" />
                                    <span className="absolute top-0 right-0 w-5 h-5 bg-white text-gray-800 rounded-full text-xs font-bold flex items-center justify-center border-2 border-purple-600">{step.num}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                                <p className="text-sm text-gray-600">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-center mx-auto justify-center mt-12 shadow-md p-6 bg-white border border-gray-200 rounded-md w-[700px]">
                        <span className=" py-3 px-8 text-center font-bold text-2xl text-gray-800"> 
                            Ready to Start Earning?
                        </span>
                        <p className="text-sm text-gray-500 mt-2">Join over 50,000 users earning money with simple social media tasks</p>
                    </div>
                </div>
            </div>

            {/* 3. Ways to Earn Points Section (image_d2c52f.png - bottom part) */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-2 text-gray-800">Ways to <span className="text-purple-600">Earn Points</span></h2>
                    <p className="text-gray-600 mb-12">
                        Choose from various social media tasks. The more you engage, the more you earn!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {taskData.map((task, index) => {
                            const { iconBg,  text } = getTaskColorClasses(task.color);
                            const TaskIcon = task.icon;

                            return (
                                <div key={index} className={`p-6 bg-[#F9FAFB] md:w-[350px] rounded-xl text-left border border-gray-200 hover:shadow-lg transition duration-300`}>
                                    <div className="flex flex-col  justify-between mb-4">
                                            <div className={`w-10 h-10 rounded-full ${iconBg} text-white text-lg flex items-center justify-center mr-3`}>
                                                <TaskIcon />
                                            </div>
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
                                            <p className="text-sm text-gray-500">{task.time}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2">
                                        {task.title === 'Like Posts' && 'Like posts on Facebook, Instagram, and Twitter.'}
                                        {task.title === 'Leave Comments' && 'Write short, simple comments on posts and videos.'}
                                        {task.title === 'Share Content' && 'Share posts to your timeline or trusted groups.'}
                                        {task.title === 'Follow Accounts' && 'Follow business accounts and influencers.'}
                                        {task.title === 'Watch Videos' && 'Watch promotional videos and tutorials.'}
                                        {task.title === 'Rate & Review' && 'Leave short reviews for apps and services.'}
                                    </p>
                                    <p className={`font-bold text-[#166534] bg-[#DCFCE7] w-[120px] rounded-md px-3 py-1`}>{task.points}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <RatingPart/>
            <Testimony/>
            <Footer/>
        </div>
    );
};

export default TrenditEarnings;