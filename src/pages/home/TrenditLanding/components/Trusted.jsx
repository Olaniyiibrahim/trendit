import React from 'react';

const TrustSection = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Trusted by Thousands Section */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Trusted by Thousands
                    </h2>
                    <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-6">
                        50,000+
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        What Our Users Say
                    </p>
                </div>

                {/* User Testimonials/Quotes Section */}
                <div className="mb-16">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        What Our Users Say
                    </h3>
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100">
                        <p className="text-lg text-gray-700 leading-relaxed text-center">
                            Real access from businesses and promoters who are successfully with Trendit
                        </p>
                    </div>
                </div>

                {/* Recent Access Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-800">
                            Recent Access
                        </h3>
                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                                <h4 className="text-xl font-bold text-gray-800 mb-2">
                                    Trendit failed a total over 1000
                                </h4>
                                <p className="text-gray-600">
                                    Treats more 1000 monthly and offers repayment results to existing content
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                        <div className="relative">
                            <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                                <div className="w-48 h-48 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full flex items-center justify-center">
                                    <div className="w-32 h-32 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Get Started?
                    </h2>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Both thousands of businesses and promoters already coming and growing with Trendit
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
                            Get Started Free
                        </button>
                        <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition duration-300">
                            Schedule a Demo
                        </button>
                    </div>
                </div>

                {/* Trust Badges/Logos */}
                <div className="mt-16 pt-8 border-t border-gray-200">
                    <p className="text-center text-gray-500 text-sm mb-6">
                        Trusted by companies worldwide
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {['Company A', 'Company B', 'Company C', 'Company D', 'Company E'].map((company) => (
                            <div 
                                key={company}
                                className="text-gray-400 font-medium text-lg"
                            >
                                {company}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustSection;