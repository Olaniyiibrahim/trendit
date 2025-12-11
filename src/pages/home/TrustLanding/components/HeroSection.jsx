import React from 'react';
import { ArrowRight, CheckCircle, Star, TrendingUp } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                {/* Main Headline */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Earn by Helping<br />
                        Brands Grow<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            Online
                        </span>
                    </h1>
                    
                    {/* Description */}
                    <div className="max-w-2xl mx-auto mb-12">
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Complete and/or select methods like the best, commercially and highly popular. 
                            Examples are designed from the 1987 or beyond by all clients.
                        </p>
                    </div>
                    
                    {/* Stats */}
                    <div className="inline-flex items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700">
                        <div className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-green-400" />
                            <span className="text-2xl font-bold">47.9.5 × 479.5</span>
                        </div>
                    </div>
                </div>

                {/* Visual Elements Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
                    {/* Left Side - Features/Bullet Points */}
                    <div className="space-y-8">
                        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <CheckCircle className="h-6 w-6 text-green-400" />
                                Why Choose Us
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Proven methods since 1987",
                                    "Commercial success guaranteed",
                                    "Highly popular among brands",
                                    "Client-focused design approach"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-300">
                                        <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA Button */}
                        <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 mx-auto lg:mx-0">
                            Start Earning Today
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>

                    {/* Right Side - Visual/Graphic */}
                    <div className="relative">
                        {/* Main Circle Graphic */}
                        <div className="relative mx-auto w-96 h-96">
                            {/* Outer Circle */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>
                            
                            {/* Middle Circle */}
                            <div className="absolute inset-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 flex items-center justify-center">
                                {/* Inner Circle with Pattern */}
                                <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-blue-500/30 to-purple-500/30 border border-gray-600/50 relative">
                                    {/* Pattern Dots */}
                                    <div className="absolute -top-2 -left-2 h-4 w-4 rounded-full bg-blue-400"></div>
                                    <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-purple-400"></div>
                                    <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-blue-400"></div>
                                    <div className="absolute -bottom-2 -right-2 h-4 w-4 rounded-full bg-purple-400"></div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 left-1/4 bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 border border-gray-700">
                                <div className="flex items-center gap-2">
                                    <Star className="h-4 w-4 text-yellow-400" />
                                    <span className="text-sm font-medium">Best Methods</span>
                                </div>
                            </div>
                            
                            <div className="absolute -bottom-4 right-1/4 bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 border border-gray-700">
                                <div className="text-sm font-medium">Since 1987</div>
                            </div>
                        </div>

                        {/* Stats Badge */}
                        <div className="absolute -bottom-6 right-10 bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-600/50">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="font-bold text-lg">47.9.5 × 479.5</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats/Trust Indicators */}
                <div className="mt-24 pt-8 border-t border-gray-800">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "Brands Helped", value: "500+" },
                            { label: "Success Rate", value: "98%" },
                            { label: "Since", value: "1987" },
                            { label: "Satisfaction", value: "100%" }
                        ].map((stat, index) => (
                            <div key={index} className="space-y-2">
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;