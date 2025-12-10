import React from 'react';
import { LayoutGrid, CheckSquare, Clock, Wallet, User, Check, Play, CreditCard, UserPlus } from 'lucide-react';
import logo from "../../../public/logo.png"
export default function EmployeeDashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            {/* {/* <div className="w-8 h-8 bg-indigo-600 rounded-lg"></div> */}
            {/* <span className="font-semibold text-lg">Trendit</span> */}
            <img src={logo} alt="" />
          </div>

        </div>
        
        <nav className="p-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg cursor-pointer">
              <LayoutGrid className="w-4 h-4" />
              <span className="text-sm font-medium">Overview</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <CheckSquare className="w-4 h-4" />
              <span className="text-sm font-medium">Available Tasks</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Task History</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <Wallet className="w-4 h-4" />
              <span className="text-sm font-medium">Earnings</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">Profile</span>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
          <div>
            <span className="text-gray-700 text-md ml-1 font-bold ">Employee Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-medium">SJ</span>
              </div>
              <span className="text-sm font-medium">Sarah Johnson</span>
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
                  <p className="text-sm text-gray-600 mb-1">Tasks Completed</p>
                  <p className="text-3xl font-bold">47</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Earnings</p>
                  <p className="text-3xl font-bold">$285</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Success Rate</p>
                  <p className="text-3xl font-bold">94%</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Available Tasks</p>
                  <p className="text-3xl font-bold">23</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <CheckSquare className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-3 gap-4">
              <button className="bg-green-600 text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 hover:bg-green-700 transition-colors">
                <Play className="w-5 h-5" />
                Start New Task
              </button>
              <button className="bg-blue-600 text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
                <CreditCard className="w-5 h-5" />
                Withdraw Earnings
              </button>
              <button className="bg-purple-600 text-white rounded-lg px-6 py-3 flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors">
                <UserPlus className="w-5 h-5" />
                Update Profile
              </button>
            </div>
          </div>

          {/* Recent Tasks */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Recent Tasks</h2>
              <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View All</button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">Instagram Story View</h3>
                  <p className="text-sm text-gray-500">Instagram • 2 hours ago</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">$1.50</p>
                  <p className="text-xs text-gray-500">Approved</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">Facebook Page Like</h3>
                  <p className="text-sm text-gray-500">Facebook • 5 hours ago</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">$2.00</p>
                  <p className="text-xs text-gray-500">Approved</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">YouTube Video Comment</h3>
                  <p className="text-sm text-gray-500">YouTube • 1 day ago</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">$3.50</p>
                  <p className="text-xs text-orange-500">Pending</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}