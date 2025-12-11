export default function TrustAllFeatures() {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <div className="md:max-w-[960px] py-4 mx-auto">
        {/* Header Banner */}
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 rounded-3xl mx-auto p-6 text-center md:w-[800px] text-white mb-12">
          <h2 className="text-xl font-bold mb-2">Ready to Start Earning?</h2>
          <p className="text-white/90 text-xs mb-5">
            Join our community and start converting leads today. New opportunities added daily!
          </p>
          <button className="bg-white text-purple-600 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-purple-50">
            Create Free Account
          </button>
        </div>

        {/* Why Choose Section */}
        <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">
                Why Choose<span className="text-purple-600">TrustAll</span>
            </h2>
            <p className="text-gray-500 text-xs px-4">
                We're committed to providing the best earning experience with transparency, security, and support.
            </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 mb-9">
            {/* Safe & Secure */}
            <div className="text-center w-[150px] shadow-md p-5 rounded-2xl">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                </div>
                <h3 className="font-bold text-md mb-1 ">Safe & Secure</h3>
                <p className="text-gray-400 text-[12px] leading-tight">Your data is protected with encryption.</p>
            </div>

            {/* Instant Payouts */}
            <div className="text-center w-[150px] shadow-md p-5 rounded-2xl">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </div>
                <h3 className="font-bold text-md mb-1 ">Instant Payouts</h3>
                <p className="text-gray-400 text-[12px] leading-tight">Withdraw earnings instantly with no delays.</p>
            </div>

            {/* Global Reach */}
            <div className="text-center w-[150px] shadow-md p-5 rounded-2xl">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </div>
                <h3 className="font-bold text-md mb-1 ">Global Reach</h3>
                <p className="text-gray-400 text-[12px] leading-tight">Work with brands. No limits on reach.</p>
            </div>

            {/* Top Rewards */}
            <div className="text-center w-[150px] shadow-md p-5 rounded-2xl">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                </div>
                <h3 className="font-bold text-md mb-1 ">Top Rewards</h3>
                <p className="text-gray-400 text-[12px] leading-tight">Exclusive higher conversion rates.</p>
            </div>
            {/* </div> */}

            {/* Features Grid - Second Row */}
            {/* 24/7 Support */}
            <div className="text-center w-[150px] shadow-md p-5 rounded-2xl">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                </div>
                <h3 className="font-bold text-md mb-1 ">24/7 Support</h3>
                <p className="text-gray-400 text-[12px] leading-tight">Our team is always available to help you succeed.</p>
            </div>

            {/* No Fees */}
            <div className="text-center w-[150px] shadow-md p-5 rounded-2xl">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </div>
                <h3 className="font-bold text-md mb-1 ">No Fees</h3>
                <p className="text-gray-400 text-[12px] leading-tight">Keep 100% of your earnings, no hidden charges.</p>
            </div>

            {/* Active Community */}
            <div className="text-center w-[150px] shadow-md p-5 rounded-2xl">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                </div>
                <h3 className="font-bold text-md mb-1 ">Active Community</h3>
                <p className="text-gray-400 text-[12px] leading-tight">Join thousands of active earners today.</p>
            </div>

            {/* Growth Opportunity */}
            <div className="text-center w-[150px] shadow-md p-5 rounded-2xl">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                </div>
                <h3 className="font-bold text-xs mb-1">Growth Opportunity</h3>
                <p className="text-gray-400 text-[10px] leading-tight">Scale earnings as you level up.</p>
            </div>
        </div>

        {/* Flexible Withdrawals Badge */}
        <div className="text-center mt-32 mb-6">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-3 py-1.5 rounded-full text-xs font-semibold">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Flexible Withdrawals
          </div>
        </div>

        {/* Withdraw Your Earnings Section */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold mb-1">
            Withdraw<span className="text-purple-600">Your Earnings</span>
          </h2>
          <p className="text-gray-500 text-xs px-2">
            Choose how you want to get paid. Multiple instant withdrawal options available.
          </p>
        </div>

        {/* Withdrawal Options */}
        <div className="flex  flex-col md:flex-row space-x-3 space-y-4 mb-6">
          {/* Bank Transfer */}
          <div className=" bg-white rounded-2xl p-4 shadow-sm border border-gray-200 relative">
            <div className="absolute top-3 left-3">
              <span className="bg-green-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                BANK TRANSFER
              </span>
            </div>
            <div className="flex items-start gap-3 mt-8">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-gray-600 text-xs mb-3">
                  Get paid points directly to USDT cryptocurrency.
                </p>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Min. Withdrawal</span>
                    <span className="font-semibold text-gray-700">$10</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Processing Time</span>
                    <span className="font-semibold text-gray-700">1-2 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PayPal */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 relative">
            <div className="absolute top-3 left-3">
              <span className="bg-pink-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                PAYPAL
              </span>
            </div>
            <div className="flex items-start gap-3 mt-8">
              <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-gray-600 text-xs mb-3">
                  Receive for instantly. PayPal. Simple & fast withdrawals.
                </p>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Min. Withdrawal</span>
                    <span className="font-semibold text-gray-700">$5</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Processing Time</span>
                    <span className="font-semibold text-gray-700">24 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gift Cards */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 relative">
            <div className="absolute top-3 left-3">
              <span className="bg-blue-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                GIFT CARDS
              </span>
            </div>
            <div className="flex items-start gap-3 mt-8">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-gray-600 text-xs mb-3">
                  Redeem points to your local bank account.
                </p>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Min. Withdrawal</span>
                    <span className="font-semibold text-gray-700">$25</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Processing Time</span>
                    <span className="font-semibold text-gray-700">2-5 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="w-full px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 rounded-3xl px-8 py-6 shadow-lg">
                <div className="grid grid-cols-4 gap-4">
                    {/* Users Paid */}
                    <div className="text-center text-white">
                    <div className="text-2xl font-bold mb-1">50,000+</div>
                    <div className="text-white/90 text-sm">Users Paid</div>
                    </div>

                    {/* Total Payouts */}
                    <div className="text-center text-white">
                    <div className="text-2xl font-bold mb-1">$2.5M+</div>
                    <div className="text-white/90 text-sm">Total Payouts</div>
                    </div>

                    {/* Daily Withdrawals */}
                    <div className="text-center text-white">
                    <div className="text-2xl font-bold mb-1">15,000+</div>
                    <div className="text-white/90 text-sm">Daily Withdrawals</div>
                    </div>

                    {/* User Rating */}
                    <div className="text-center text-white">
                    <div className="text-2xl font-bold mb-1">4.8/5</div>
                    <div className="text-white/90 text-sm">User Rating</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
      </div>
    </div>
  );
}