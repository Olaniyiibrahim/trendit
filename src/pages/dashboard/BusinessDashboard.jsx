import React from 'react';
import { BarChart3, DollarSign, Eye, Heart, Plus, Wallet, TrendingUp } from 'lucide-react';
import logo from "../../../public/logo.png"
export default function BusinessDashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            {/* <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div> */}
            {/* <span className="font-semibold text-lg">Trendit</span> */}
            <img src={logo} alt="" />
            
          </div>
        </div>
        
        <nav className="p-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg cursor-pointer">
              <BarChart3 className="w-4 h-4" />
              <span className="text-sm font-medium">Overview</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Campaigns</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <BarChart3 className="w-4 h-4" />
              <span className="text-sm font-medium">Analytics</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-medium">Billing</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-medium">Settings</span>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
          <div>
            <span className="text-gray-700 text-sm ml-1 font-bold">Business Dashboard </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="text-sm font-medium">John's Business</span>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Active Campaigns</p>
                  <p className="text-3xl font-bold">12</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Reach</p>
                  <p className="text-3xl font-bold">45.2K</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Engagement Rate</p>
                  <p className="text-3xl font-bold">8.5%</p>
                </div>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Budget Spent</p>
                  <p className="text-3xl font-bold">$2,450</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-3 gap-4">
              <button className="bg-blue-600 text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                <Plus className="w-5 h-5" />
                Create Campaign
              </button>
              <button className="bg-green-600 text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 hover:bg-green-700 transition-colors">
                <Wallet className="w-5 h-5" />
                Add Funds
              </button>
              <button className="bg-purple-600 text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors">
                <BarChart3 className="w-5 h-5" />
                View Reports
              </button>
            </div>
          </div>

          {/* Recent Campaigns */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Recent Campaigns</h2>
              <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reach</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Summer Sale Promotion</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">Instagram</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">Active</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">12.5K</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-blue-600 hover:text-blue-700">
                        <Eye className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">New Product Launch</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">Facebook</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">Active</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">8.3K</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-blue-600 hover:text-blue-700">
                        <Eye className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Brand Awareness</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">Twitter</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 text-xs font-medium text-yellow-700 bg-yellow-100 rounded-full">Paused</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5.1K</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-blue-600 hover:text-blue-700">
                        <Eye className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}