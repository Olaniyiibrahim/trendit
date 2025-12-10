import './App.css'
import Signup from "./pages/auth/signup" 
import React from "react"
import TrendingLanding from './pages/home/TrenditLanding'
import BusinessDashboard from "./pages/dashboard/BusinessDashboard"
import EmployeeDashboard from './pages/dashboard/EmployeeDashboard'
import TrendingEarnings from './pages/home/TrenditEarnings'

function App() {

  return (
    <div>
      {/* <Signup/> */}
      {/* <BusinessDashboard/> */}
      {/* <TrendingLanding/> */}
      {/* <EmployeeDashboard />     */}
      <TrendingEarnings/>
      </div>
  )
}

export default App
