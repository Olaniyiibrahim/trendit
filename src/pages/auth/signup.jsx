import React, { useState } from 'react';
import logo from "../../../public/logo.png"
const Signup= () => {
  const [userType, setUserType] = useState('employee');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    country: '',
    businessName: '',
    businessType: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', { userType, ...formData });
  };

  const countries = ['Nigeria', 'Ghana', 'Kenya', 'South Africa', 'Egypt', 'Other'];
  const businessTypes = ['Retail', 'Service', 'Technology', 'Manufacturing', 'Other'];

    return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
            {/* User type toggle */}
            <div className='flex flex-col items-center justify-center '>
                <img src={logo} alt="" className=''/>
            </div>
            <div className="mb-8">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Create Your Account</h1>
            <p className="text-gray-600 mb-6">Join Africa's leading social media promotion platform</p>
            
            <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                className={`flex-1 py-3 px-4 rounded-md transition-all ${userType === 'employee' ? 'bg-white shadow-md' : 'hover:bg-gray-50'}`}
                onClick={() => setUserType('employee')}
                >
                <span className={`font-medium ${userType === 'employee' ? 'text-blue-600' : 'text-gray-600'}`}>
                    Employee
                </span>
                </button>
                <button
                className={`flex-1 py-3 px-4 rounded-md transition-all ${userType === 'business' ? 'bg-white shadow-md' : 'hover:bg-gray-50'}`}
                onClick={() => setUserType('business')}
                >
                <span className={`font-medium ${userType === 'business' ? 'text-blue-600' : 'text-gray-600'}`}>
                    Business Owner
                </span>
                </button>
            </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
                </label>
                <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
                />
            </div>

            {/* Email */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
                </label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
                />
            </div>

            {/* Phone Number */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
                </label>
                <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
                />
            </div>

            {/* Country */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
                </label>
                <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
                >
                <option value="">Select your country</option>
                {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                ))}
                </select>
            </div>

            {/* Business-specific fields */}
            {userType === 'business' && (
                <>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Name
                    </label>
                    <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="Enter your business name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required={userType === 'business'}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Type
                    </label>
                    <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required={userType === 'business'}
                    >
                    <option value="">Select business type</option>
                    {businessTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                    </select>
                </div>
                </>
            )}

            {/* Password */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
                </label>
                <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
                />
            </div>

            {/* Confirm Password */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
                </label>
                <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                required
                />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center">
                <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                required
                />
                <label htmlFor="agreeToTerms" className="ml-2 text-sm text-gray-600">
                I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                </label>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-md"
            >
                Create Account
            </button>
            </form>

            {/* Sign in link */}
            <div className="mt-6 text-center">
            <p className="text-gray-600">
                Already have an account?{' '}
                <a href="#" className="text-blue-600 font-semibold hover:underline">
                Sign in here
                </a>
            </p>
            </div>

            {/* Mobile view decorative elements */}
            <div className="md:hidden mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <span className="text-sm text-gray-600">Fast Growth</span>
                </div>
                <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-lg mr-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <span className="text-sm text-gray-600">Secure</span>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
};

export default Signup;