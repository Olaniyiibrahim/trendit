import React from "react";
// Assuming you use react-icons for visual elements (e.g., FaUsers, FaTasks, etc.)
import {
  FaUsers,
  FaCheckCircle,
  FaStar,
  FaBriefcase,
  FaMoneyBill,
  FaTasks,
} from "react-icons/fa";
import ReadyToEarnSection from "./ReadyToEarn";

const Testimony = () => (
  <div>
    {/* 1. Trusted by Thousands Section (Header) */}
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Trusted by Thousands</h2>
        <p className="text-lg mb-12 opacity-80">
          Join a growing community of successful businesses and earners across
          Africa
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Stat 1: Active Users */}
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-3 p-3 rounded-full border-2 border-white/30">
              <FaUsers />
            </div>
            <p className="text-5xl font-extrabold">50,000+</p>
            <p className="text-base opacity-70">Active Users</p>
          </div>
          {/* Stat 2: Paid Out */}
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-3 p-3 rounded-full border-2 border-white/30">
              <FaMoneyBill />
            </div>
            <p className="text-5xl font-extrabold">₦2.5M+</p>
            <p className="text-base opacity-70">Paid Out</p>
          </div>
          {/* Stat 3: Tasks Completed */}
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-3 p-3 rounded-full border-2 border-white/30">
              <FaTasks />
            </div>
            <p className="text-5xl font-extrabold">15,000+</p>
            <p className="text-base opacity-70">Tasks Completed</p>
          </div>
          {/* Stat 4: Success Rate */}
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-3 p-3 rounded-full border-2 border-white/30">
              <FaStar />
            </div>
            <p className="text-5xl font-extrabold">98%</p>
            <p className="text-base opacity-70">Success Rate</p>
          </div>
        </div>
      </div>
    </div>

    {/* 2. What Our Users Say Section (Testimonials) */}
    <div className="py-16 bg-white">
      <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
        What Our Users Say
      </h2>
      <p className="text-gray-600 mb-10 text-center">
        Real stories from businesses and promoters who are succeeding with
        Trendit
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {/* Testimonial Card 1: Adewale */}
        <div className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
          <div className="flex items-center mb-4">
            {/* Adewale's Image */}
            <img
              src="path/to/adewale-image.png"
              alt="Adewale"
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <p className="font-semibold text-gray-800">Adewale Okafor</p>
              <p className="text-xs text-gray-500">
                Business Owner, Lagos, Nigeria
              </p>
            </div>
          </div>
          <div className="text-yellow-500 text-lg mb-2">★★★★★</div>
          <p className="text-gray-700 text-sm leading-relaxed">
            "Trendit helped us reach over 10,000 potential customers in just one
            month. The engagement quality is amazing and our sales have
            increased by 40%."
          </p>
        </div>
        {/* Testimonial Card 2: Kwana Asante */}
        <div className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
          <div className="flex items-center mb-4">
            {/* Kwana's Image */}
            <img
              src="path/to/kwana-image.png"
              alt="Kwana"
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <p className="font-semibold text-gray-800">Kwana Asante</p>
              <p className="text-xs text-gray-500">
                Social Media Promoter, Accra, Ghana
              </p>
            </div>
          </div>
          <div className="text-yellow-500 text-lg mb-2">★★★★★</div>
          <p className="text-gray-700 text-sm leading-relaxed">
            "I earn an extra $250 monthly just by doing what I already love -
            engaging on social media. The payment system is reliable and fast."
          </p>
        </div>
        {/* Testimonial Card 3: Fatima Hassan */}
        <div className="p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition">
          <div className="flex items-center mb-4">
            {/* Fatima's Image */}
            <img
              src="path/to/fatima-image.png"
              alt="Fatima"
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <p className="font-semibold text-gray-800">Fatima Hassan</p>
              <p className="text-xs text-gray-500">
                Campaign Manager, Cairo, Egypt
              </p>
            </div>
          </div>
          <div className="text-yellow-500 text-lg mb-2">★★★★★</div>
          <p className="text-gray-700 text-sm leading-relaxed">
            "The analytics dashboard gives us incredible insights into our
            campaigns. We can track every engagement and optimize our strategy
            in real time."
          </p>
        </div>
      </div>
    </div>
    <ReadyToEarnSection />
  </div>
);

export default Testimony;
