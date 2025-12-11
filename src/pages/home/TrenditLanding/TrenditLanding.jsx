import React from 'react';
import { DollarSign, Briefcase, Shield, Building2, Package, FileText, BarChart3, TrendingUp, Check, Smartphone, Wallet, ClipboardList, Award, Clock, Smile } from 'lucide-react';
import logo from "../../../../public/logo.png"
import bg from "../../../../public/alhamdulillah.jpg"
import { NavLink } from 'react-router-dom';
import TrustSection from './components/Trusted';
import { FaUsers, FaCheckCircle, FaStar, FaTasks, FaBriefcase, FaMoneyBill, FaClock, FaHeadset, FaShieldAlt } from 'react-icons/fa';
import Footer from '../../../components/footer';
import { FaGlobe, FaChartBar,  FaWallet, FaGift, FaMobileAlt } from 'react-icons/fa';
import { FaUserPlus, FaCloudUploadAlt, FaCheckSquare, FaChartLine } from 'react-icons/fa';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

export default function TrenditLanding() {
  return (
    <div className=" relative min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center justify-between gap-[600px]">
              <div className="flex items-end justify-end gap-2">
                <img src={logo} alt="" />
              </div>
              <div className='flex items-center justify-space-between gap-2 '>
                <div className="hidden md:flex gap-6">
                  <NavLink to className="text-gray-600 hover:text-gray-900 text-sm">How It Works</NavLink>
                  <NavLink to className="text-gray-600 hover:text-gray-900 text-sm">Benefits</NavLink>
                  <NavLink to className="text-gray-600 hover:text-gray-900 text-sm">About</NavLink>
                  <NavLink to className="text-gray-600 hover:text-gray-900 text-sm">Learn</NavLink>
                </div>
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="inset-0 bg-cover bg-center"
                  style={{
                      backgroundImage: `url(${bg})`
                  }}
        >
        <div className="absolute ">
          <div className="absolute top-20 left-10 w-32 h-32  rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40  rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Connect. <span className="text-orange-500">Promote.</span> Earn.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join African leading social media marketing platform where businesses grow their reach with over <span className="font-bold text-white">LIGHT</span> worth millions in simple engagement tasks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100">
                Register as Business Owner
              </button>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600">
                Create an Employee
              </button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm border w-[250px]  border-white/20 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-white " />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">Earn Real Money</h3>
                <p className="text-gray-300 text-sm">
                  Get paid for completing simple social media tasks
                </p>
              </div>

              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm border w-[250px] text-center border-white/20 rounded-xl p-6">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-white text-center" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">Boost Your Business</h3>
                <p className="text-gray-300 text-sm">
                  Reach thousands of potential customers across Africa
                </p>
              </div>

              <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm border w-[250px] text-center border-white/20 rounded-xl p-6">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">Safe & Secure</h3>
                <p className="text-gray-300 text-sm">
                  Your data and earnings are protected with top-tier security
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/30"></div>

      {/* How It Works Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              How <span className="text-indigo-600">Trendit</span> Works
            </h2>
            <p className="text-gray-600">
              Simple steps to start promoting or earning on our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* For Business Owners */}
            <div className="flex flex-col items-center shadow-md py-5 w-[490px] rounded-lg bg-white">
              <div className="flex flex-col items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="flex flex-col items-center text-2xl font-bold">For Business Owners</h3>
              </div>
              <p className="text-gray-600 mb-8">Grow your brand with targeted social media marketing</p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    <FaUserPlus/>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Create Account</h4>
                    <p className="text-sm text-gray-600">Sign up for free and verify email and your account</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    <FaCloudUploadAlt/>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Upload Products</h4>
                    <p className="text-sm text-gray-600">Add your products, services, descriptions, and pricing</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    <FaCheckSquare/>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Create Tasks</h4>
                    <p className="text-sm text-gray-600">Set up promotion tasks with specific engagement requirements</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    <FaChartLine/>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Track Results</h4>
                    <p className="text-sm text-gray-600">View real-time performance and engagement analytics</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Employees */}
            <div className="flex flex-col items-center shadow-md py-5 w-[490px] rounded-lg bg-white">
              <div className="flex flex-col items-center mb-5">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Smile className="w-6 h-6 text-purple-600" /><br />
                </div>
                <h3 className="text-2xl font-bold">For Employees</h3>
              </div>
              <p className="text-gray-600 mb-8">Start earning money with simple social media engagements</p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1 
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Join Platform</h4>
                    <p className="text-sm text-gray-600">Sign up and connect your social media accounts</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Browse Tasks</h4>
                    <p className="text-sm text-gray-600">Choose from available tasks that match your interests</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Complete Tasks</h4>
                    <p className="text-sm text-gray-600">Engage with content, share, post or like to complete tasks</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Earn Rewards</h4>
                    <p className="text-sm text-gray-600">Get paid in LIGHT crypto tokens direct to your wallet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="text-indigo-600">Trendit</span>?
            </h2>
            <p className="text-gray-600">
              Discover the benefits that make our platform the best choice for businesses and promoters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
            {/* Business Owners Benefits */}
            <div className="flex flex-col items-center  py-5 w-[490px] rounded-lg">
              <div className="flex flex-col items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold">Business Owners</h3>
              </div>
              <p className="text-gray-600 mb-8">Create your brand with strategic engagement</p>

              <div className="space-y-6">
                <div className="flex gap-4 bg-[rgb(239,246,255)] shadow-sm p-3 rounded-md">
                  <div className="w-10 h-10 mt-3  bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaGlobe className="w-5 h-5 text-white " />
                  </div>
                  <div >
                    <h4 className="font-semibold mb-1">Reach Across Africa</h4>
                    <p className="text-sm text-gray-600">Connect with millions of real users across the continent</p>
                  </div>
                </div>

                <div className="flex gap-4 bg-[rgb(239,246,255)] shadow-sm p-3 rounded-md">
                  <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Cost-Effective Marketing</h4>
                    <p className="text-sm text-gray-600">Pay only for completed tasks with transparent pricing</p>
                  </div>
                </div>

                <div className="flex gap-4 bg-[rgb(239,246,255)] shadow-sm p-3 rounded-md">
                  <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center mt-3 justify-center flex-shrink-0">
                    <FaChartBar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Real-Time Analytics</h4>
                    <p className="text-sm text-gray-600">Track your progress and analyze campaign performance in real-time</p>
                  </div>
                </div>

                <div className="flex gap-4 bg-[rgb(239,246,255)] shadow-sm p-3 rounded-md">
                  <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center mt-3 justify-center flex-shrink-0">
                    <FaShieldAlt className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Verified Promoters</h4>
                    <p className="text-sm text-gray-600">Work only with vetted users for genuine engagement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Employees Benefits */}
            <div className="flex flex-col items-center  py-5 w-[490px] rounded-lg">
              <div className="flex flex-col items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mt-2">
                  <Smile className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold">Employees</h3>
              </div>
              <p className="text-gray-600 mb-8">Start earning money with the social networks</p>

              <div className="space-y-6">
                <div className="flex gap-4 bg-[#FAF5FF] shadow-sm p-3 rounded-md">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-2">
                    <FaWallet className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Earn LIGHT</h4>
                    <p className="text-sm text-gray-600">Get paid cryptocurrency for your social media activities</p>
                  </div>
                </div>

                <div className="flex gap-4 bg-[#FAF5FF] shadow-sm p-3 rounded-md">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-2">
                    <FaGift className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Gift Card Rewards</h4>
                    <p className="text-sm text-gray-600">Redeem points for popular gift cards and vouchers</p>
                  </div>
                </div>

                <div className="flex gap-4 bg-[#FAF5FF] shadow-sm p-3 rounded-md">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-2">
                    <FaClock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Flexible Schedule</h4>
                    <p className="text-sm text-gray-600">Work at a pace, whenever or set your own hours</p>
                  </div>
                </div>

                <div className="flex gap-4 bg-[#FAF5FF] shadow-sm p-3 rounded-md">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMobileAlt className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Mobile Friendly</h4>
                    <p className="text-sm text-gray-600">Complete tasks from a smartphone or tablet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="min-h-screen font-sans">

    {/* 1. Trusted by Thousands Section (Header) */}

    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Trusted by Thousands</h2>
        <p className="text-lg mb-12 opacity-80">
          Join a growing community of successful businesses and earners across Africa
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Stat 1: Active Users */}
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-3 p-3 rounded-full border-2 border-white/30"><FaUsers /></div>
            <p className="text-5xl font-extrabold">50,000+</p>
            <p className="text-base opacity-70">Active Users</p>
          </div>
          {/* Stat 2: Paid Out */}
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-3 p-3 rounded-full border-2 border-white/30"><FaMoneyBill /></div>
            <p className="text-5xl font-extrabold">₦2.5M+</p>
            <p className="text-base opacity-70">Paid Out</p>
          </div>
          {/* Stat 3: Tasks Completed */}
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-3 p-3 rounded-full border-2 border-white/30"><FaTasks /></div>
            <p className="text-5xl font-extrabold">15,000+</p>
            <p className="text-base opacity-70">Tasks Completed</p>
          </div>
          {/* Stat 4: Success Rate */}
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-3 p-3 rounded-full border-2 border-white/30"><FaStar /></div>
            <p className="text-5xl font-extrabold">98%</p>
            <p className="text-base opacity-70">Success Rate</p>
          </div>
        </div>
      </div>
    </div>

    {/* 2. What Our Users Say Section (Testimonials) */}
    <div className="py-16 bg-white">
      <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">What Our Users Say</h2>
      <p className="text-gray-600 mb-10 text-center">
        Real stories from businesses and promoters who are succeeding with Trendit
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {/* Testimonial Card 1: Adewale */}
        <div className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
          <div className="flex items-center mb-4">
            {/* Adewale's Image */}
            <img src="path/to/adewale-image.png" alt="Adewale" className="w-12 h-12 rounded-full mr-4 object-cover" />
            <div>
              <p className="font-semibold text-gray-800">Adewale Okafor</p>
              <p className="text-xs text-gray-500">Business Owner, Lagos, Nigeria</p>
            </div>
          </div>
          <div className="text-yellow-500 text-lg mb-2">★★★★★</div>
          <p className="text-gray-700 text-sm leading-relaxed">
            "Trendit helped us reach over 10,000 potential customers in just one month. The engagement quality is amazing and our sales have increased by 40%."
          </p>
        </div>

        {/* Testimonial Card 2: Kwana Asante */}
        <div className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
          <div className="flex items-center mb-4">
            {/* Kwana's Image */}
            <img src="path/to/kwana-image.png" alt="Kwana" className="w-12 h-12 rounded-full mr-4 object-cover" />
            <div>
              <p className="font-semibold text-gray-800">Kwana Asante</p>
              <p className="text-xs text-gray-500">Social Media Promoter, Accra, Ghana</p>
            </div>
          </div>
          <div className="text-yellow-500 text-lg mb-2">★★★★★</div>
          <p className="text-gray-700 text-sm leading-relaxed">
            "I earn an extra $250 monthly just by doing what I already love - engaging on social media. The payment system is reliable and fast."
          </p>
        </div>
        {/* Testimonial Card 3: Fatima Hassan */}
        <div className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
          <div className="flex items-center mb-4">
            {/* Fatima's Image */}
            <img src="path/to/fatima-image.png" alt="Fatima" className="w-12 h-12 rounded-full mr-4 object-cover" />
            <div>
              <p className="font-semibold text-gray-800">Fatima Hassan</p>
              <p className="text-xs text-gray-500">Campaign Manager, Cairo, Egypt</p>
            </div>
          </div>
          <div className="text-yellow-500 text-lg mb-2">★★★★★</div>
          <p className="text-gray-700 text-sm leading-relaxed">
            "The analytics dashboard gives us incredible insights into our campaigns. We can track every engagement and optimize our strategy in real time."
          </p>
        </div>
      </div>
    </div>


    {/* 3. Ready to Get Started? Section  */}
    <div className="bg-gradient-to-r from-[#FB923C] to-[#F97316] text-white pt-16 pb-10">
      <h2 className="text-4xl font-extrabold mb-4 text-center">Ready to Get Started?</h2>
      <p className="text-lg mb-10 text-center opacity-90 px-4">
        Join thousands of businesses and promoters already earning and growing with Trendit
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 px-4">
        <button className="bg-white text-orange-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center w-full sm:w-auto">
          <FaBriefcase className="mr-2" /> Start Promoting Your Business
        </button>
        <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center w-full sm:w-auto">
          <FaMoneyBill className="mr-2" /> Start Earning Today
        </button>
      </div>
     
      {/* 4. Support/Platform Info (Bottom of Orange Footer) */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto px-4 mt-8 pt-8 border-t border-orange-500 gap-8">
          {/* Item 1: Quick Setup */}
          <div className="flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-2"><FaClock /></div>
              <p className="font-bold text-lg">Quick Setup</p>
              <p className="text-sm opacity-80">Get started in under 5 minutes</p>
          </div>
          {/* Item 2: 24/7 Support */}
          <div className="flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-2"><FaHeadset /></div>
              <p className="font-bold text-lg">24/7 Support</p>
              <p className="text-sm opacity-80">We're here to help you succeed</p>
          </div>
          {/* Item 3: Secure Platform */}
          <div className="flex flex-col items-center justify-center text-center">
              <div className="text-4xl mb-2"><FaShieldAlt /></div>
              <p className="font-bold text-lg">Secure Platform</p>
              <p className="text-sm opacity-80">Your data and payments are protected</p>
          </div>
      </div>
    </div>
  </section>
  <Footer/>
</div>
  );
}