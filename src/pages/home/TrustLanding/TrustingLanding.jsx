import { NavLink } from "react-router-dom";
import TrustAllFeatures from "./components/TrustAllFeatures";
import TrustTestimonials from "./components/TrustTestimonial";
import logo from "../../../../public/logo.png";
import Footer from "../../../components/footer"
import HeroSection from "./components/HeroSection";

export default function TrustLanding() {
return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
    <header className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
        <img src={logo} alt="" />
        </div>
        <nav className="hidden md:flex items-center gap-8">
            <NavLink className="text-gray-700 hover:text-gray-900">Home</NavLink>
            <NavLink className="text-gray-700 hover:text-gray-900">How It Works</NavLink>
            <NavLink className="text-gray-700 hover:text-gray-900">Earn Points</NavLink>
            <NavLink className="text-gray-700 hover:text-gray-900">Withdraw</NavLink>
            <NavLink className="text-gray-700 hover:text-gray-900">For Businesses</NavLink>
        </nav>
        <div className="flex items-center gap-3">
            <button className="text-gray-700 hover:text-gray-900">Log In</button>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:opacity-90">Sign Up</button>
        </div>
    </header>

      {/* Hero Section */}
      {/* <HeroSection/> */}
    <section className="px-6 py-16 md:py-24   bg-cover bg-center"
    >
        <div className="max-w-7xl mx-auto">
            <div className="text-left mb-4">
            <span className="inline-block  bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                🎉 Join 500,000+ Active Users
            </span>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-gray-900">Earn by Helping</span>
                <br />
                <span className="text-purple-600">Brands Grow</span>
                <br />
                <span className="text-purple-600">Online</span>
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                    Complete simple social media tasks like liking, commenting, and sharing posts. <span className="font-semibold">Earn points and convert them to USDT</span> or redeem for gift cards.
                </p>
            <div className="flex items-center gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                    Start Earning FREE
                </button>
                <button className="border-2 border-gray-300 bg-white px-6 py-3 rounded-full font-semibold hover:bg-gray-50 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                    </svg>
                    How It Works
                </button>
            </div>
        </div>

            <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    
                <div className="absolute top-6 right-6 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    📊 +25% Growth
                </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-green-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">$2,450</div>
                    <div className="text-sm">Earned This Week</div>
                </div>
                <div className="absolute bottom-8 -left-6 bg-blue-600 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-sm mb-1">Points Available</div>
                    <div className="text-2xl font-bold">15,000 pts</div>
                </div>
            </div>
        </div>
        </div>
    </section>

      {/* How TrustAll Works Section */}
    <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                How <span className="text-purple-600">TrustAll</span> Works
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                Start earning in 3 simple steps. Join millions of users helping brands grow while making money online.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {/* Sign Up Account */}
                <div className="text-center w-[190px] shadow-md p-4 rounded-xl">
                    <div className="flex ">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br text-white from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            1
                        </div>
                    </div>

                <h3 className="font-bold text-lg mb-2">Sign Up Free</h3>
                <p className="text-gray-600 text-sm">Create your account in seconds with just your email or mobile number.</p>
                </div>

                {/* Browse Tasks */}
                <div className="text-center w-[190px] shadow-md p-4 rounded-xl">
                    <div className="flex ">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br text-white from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            2
                        </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Complete Tasks</h3>
                    <p className="text-gray-600 text-sm">Choose from hundreds of social media tasks from brands worldwide.</p>
            </div>

            {/* Earn & Withdraw */}
            <div className="text-center w-[190px] shadow-md p-4 rounded-xl">
                
                    <div className="flex ">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br text-white from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            3
                        </div>
                    </div>
                <h3 className="font-bold text-lg mb-2">Earn Point</h3>
                <p className="text-gray-600 text-sm">Get points for every completed task. Convert to USDT or gift cards.</p>
            </div>
            {/* Withdraw */}
            <div className="text-center w-[190px] shadow-md p-4 rounded-xl">
                
                <div className="flex ">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                        <div className="w-16 h-16 bg-gradient-to-br text-white from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            4
                        </div>
                    </div>
                <h3 className="font-bold text-lg mb-2">Withdraw</h3>
                <p className="text-gray-600 text-sm">Fast, secure withdrawals. Get your money instantly.</p>
                </div>
            </div>

            <div className="text-center mt-12">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90">
                Get Started Now
                </button>
            </div>
        </div>
    </section>

      {/* Ways to Earn Points Section */}
    <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                Ways to <span className="text-purple-600">Earn Points</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                Multiple ways to earn points and maximize your earnings. Choose tasks that fit your style.
                </p>
            </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Like Posts */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                    </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Like Posts</h3>
                <p className="text-gray-600 text-sm mb-4">
                    Engage with content by liking brand social media posts.
                </p>
                <button className=" flex w-[170px] space-x-2 bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
                    <path d="M7.01819 0.863344C7.04741 0.804318 7.09254 0.754632 7.14849 0.719894C7.20445 0.685156 7.269 0.666748 7.33486 0.666748C7.40072 0.666748 7.46527 0.685156 7.52122 0.719894C7.57718 0.754632 7.62231 0.804318 7.65153 0.863344L9.19152 3.98268C9.29298 4.18799 9.44273 4.36562 9.62794 4.50031C9.81315 4.63501 10.0283 4.72275 10.2549 4.75601L13.6989 5.26001C13.7641 5.26947 13.8254 5.29699 13.8759 5.33948C13.9263 5.38196 13.9638 5.43771 13.9842 5.50041C14.0046 5.56312 14.007 5.63028 13.9912 5.6943C13.9755 5.75832 13.9421 5.81665 13.8949 5.86268L11.4042 8.28801C11.2399 8.44808 11.117 8.64567 11.0461 8.86376C10.9751 9.08186 10.9582 9.31394 10.9969 9.54001L11.5849 12.9667C11.5964 13.0319 11.5893 13.0991 11.5645 13.1605C11.5397 13.2219 11.4981 13.2751 11.4446 13.314C11.391 13.3529 11.3275 13.376 11.2614 13.3806C11.1954 13.3852 11.1293 13.3711 11.0709 13.34L7.99219 11.7213C7.78934 11.6148 7.56364 11.5592 7.33453 11.5592C7.10541 11.5592 6.87971 11.6148 6.67686 11.7213L3.59886 13.34C3.54041 13.371 3.47446 13.3849 3.40849 13.3802C3.34253 13.3755 3.2792 13.3524 3.22572 13.3135C3.17224 13.2746 3.13075 13.2215 3.10596 13.1602C3.08118 13.0988 3.0741 13.0318 3.08553 12.9667L3.67286 9.54068C3.71166 9.3145 3.69485 9.08228 3.62388 8.86404C3.55292 8.64581 3.42993 8.44811 3.26553 8.28801L0.774859 5.86334C0.727255 5.81737 0.693521 5.75894 0.6775 5.69473C0.66148 5.63051 0.663817 5.56309 0.684245 5.50014C0.704672 5.43719 0.74237 5.38124 0.793043 5.33867C0.843716 5.29609 0.905328 5.26861 0.970859 5.25934L4.41419 4.75601C4.64103 4.72301 4.85645 4.63538 5.04191 4.50067C5.22738 4.36596 5.37733 4.18819 5.47886 3.98268L7.01819 0.863344Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>5-10 points</p>
                </button>
                </div>

                {/* Comments */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Comments</h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Share your thoughts and earn points for quality comments.
                    </p>
                    <button className="flex w-[170px]  bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
                        <path d="M7.01819 0.863344C7.04741 0.804318 7.09254 0.754632 7.14849 0.719894C7.20445 0.685156 7.269 0.666748 7.33486 0.666748C7.40072 0.666748 7.46527 0.685156 7.52122 0.719894C7.57718 0.754632 7.62231 0.804318 7.65153 0.863344L9.19152 3.98268C9.29298 4.18799 9.44273 4.36562 9.62794 4.50031C9.81315 4.63501 10.0283 4.72275 10.2549 4.75601L13.6989 5.26001C13.7641 5.26947 13.8254 5.29699 13.8759 5.33948C13.9263 5.38196 13.9638 5.43771 13.9842 5.50041C14.0046 5.56312 14.007 5.63028 13.9912 5.6943C13.9755 5.75832 13.9421 5.81665 13.8949 5.86268L11.4042 8.28801C11.2399 8.44808 11.117 8.64567 11.0461 8.86376C10.9751 9.08186 10.9582 9.31394 10.9969 9.54001L11.5849 12.9667C11.5964 13.0319 11.5893 13.0991 11.5645 13.1605C11.5397 13.2219 11.4981 13.2751 11.4446 13.314C11.391 13.3529 11.3275 13.376 11.2614 13.3806C11.1954 13.3852 11.1293 13.3711 11.0709 13.34L7.99219 11.7213C7.78934 11.6148 7.56364 11.5592 7.33453 11.5592C7.10541 11.5592 6.87971 11.6148 6.67686 11.7213L3.59886 13.34C3.54041 13.371 3.47446 13.3849 3.40849 13.3802C3.34253 13.3755 3.2792 13.3524 3.22572 13.3135C3.17224 13.2746 3.13075 13.2215 3.10596 13.1602C3.08118 13.0988 3.0741 13.0318 3.08553 12.9667L3.67286 9.54068C3.71166 9.3145 3.69485 9.08228 3.62388 8.86404C3.55292 8.64581 3.42993 8.44811 3.26553 8.28801L0.774859 5.86334C0.727255 5.81737 0.693521 5.75894 0.6775 5.69473C0.66148 5.63051 0.663817 5.56309 0.684245 5.50014C0.704672 5.43719 0.74237 5.38124 0.793043 5.33867C0.843716 5.29609 0.905328 5.26861 0.970859 5.25934L4.41419 4.75601C4.64103 4.72301 4.85645 4.63538 5.04191 4.50067C5.22738 4.36596 5.37733 4.18819 5.47886 3.98268L7.01819 0.863344Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p> 10-20 points</p>
                    </button>
            </div>

            {/* Share Content */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Share Content</h3>
                <p className="text-gray-600 text-sm mb-4">
                    Spread the word by sharing brand content on your feed.
                </p>
                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 w-[170px]">
                    DO THIS NOW
                </button>
                </div>

                {/* Follow Accounts */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Follow Accounts</h3>
                <p className="text-gray-600 text-sm mb-4">
                    Connect with brands by following their social profiles.
                </p>
                <button className="flex w-[170px] space-x-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90">
                    {/* Get Started<button className="flex w-[170px]  bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90"> */}
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
                        <path d="M7.01819 0.863344C7.04741 0.804318 7.09254 0.754632 7.14849 0.719894C7.20445 0.685156 7.269 0.666748 7.33486 0.666748C7.40072 0.666748 7.46527 0.685156 7.52122 0.719894C7.57718 0.754632 7.62231 0.804318 7.65153 0.863344L9.19152 3.98268C9.29298 4.18799 9.44273 4.36562 9.62794 4.50031C9.81315 4.63501 10.0283 4.72275 10.2549 4.75601L13.6989 5.26001C13.7641 5.26947 13.8254 5.29699 13.8759 5.33948C13.9263 5.38196 13.9638 5.43771 13.9842 5.50041C14.0046 5.56312 14.007 5.63028 13.9912 5.6943C13.9755 5.75832 13.9421 5.81665 13.8949 5.86268L11.4042 8.28801C11.2399 8.44808 11.117 8.64567 11.0461 8.86376C10.9751 9.08186 10.9582 9.31394 10.9969 9.54001L11.5849 12.9667C11.5964 13.0319 11.5893 13.0991 11.5645 13.1605C11.5397 13.2219 11.4981 13.2751 11.4446 13.314C11.391 13.3529 11.3275 13.376 11.2614 13.3806C11.1954 13.3852 11.1293 13.3711 11.0709 13.34L7.99219 11.7213C7.78934 11.6148 7.56364 11.5592 7.33453 11.5592C7.10541 11.5592 6.87971 11.6148 6.67686 11.7213L3.59886 13.34C3.54041 13.371 3.47446 13.3849 3.40849 13.3802C3.34253 13.3755 3.2792 13.3524 3.22572 13.3135C3.17224 13.2746 3.13075 13.2215 3.10596 13.1602C3.08118 13.0988 3.0741 13.0318 3.08553 12.9667L3.67286 9.54068C3.71166 9.3145 3.69485 9.08228 3.62388 8.86404C3.55292 8.64581 3.42993 8.44811 3.26553 8.28801L0.774859 5.86334C0.727255 5.81737 0.693521 5.75894 0.6775 5.69473C0.66148 5.63051 0.663817 5.56309 0.684245 5.50014C0.704672 5.43719 0.74237 5.38124 0.793043 5.33867C0.843716 5.29609 0.905328 5.26861 0.970859 5.25934L4.41419 4.75601C4.64103 4.72301 4.85645 4.63538 5.04191 4.50067C5.22738 4.36596 5.37733 4.18819 5.47886 3.98268L7.01819 0.863344Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p> 8-15 points</p>
                    {/* </button> */}
                </button>
                </div>

                {/* Watch Videos */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                    </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Watch Videos</h3>
                <p className="text-gray-600 text-sm mb-4">
                    View videos and interact with video content.
                </p>
                <button className="flex space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 w-[170px]">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                    </svg>
                    <p className="mt-1">5-12 points</p>
                </button>
                </div>

                {/* Write Review */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Write Review</h3>
                    <p className="text-gray-600 text-sm mb-4">
                        Provide valuable feedback. Help brands improve.
                    </p>
                    <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 flex  w-[170px] space-x-2">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <p>
                            20-30 points
                        </p>
                    </button>
                </div>
            </div>
        </div>
    </section>
    <section>
        <TrustAllFeatures/>
        <TrustTestimonials/>
        <Footer />
    </section>
</div>
);
}