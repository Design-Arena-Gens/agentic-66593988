'use client'

import { Download, TrendingUp, DollarSign, ShoppingBag, Users, Calendar } from 'lucide-react'

export default function Reports() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600 mt-2">Business insights and analytics</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 transition-smooth shadow-material-md font-medium">
          <Download size={20} />
          Export All
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-material border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Revenue</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">$124,592</p>
              <p className="text-sm text-green-600 mt-1">+18.2% vs last period</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <DollarSign size={24} className="text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-material border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Sales</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">3,842</p>
              <p className="text-sm text-green-600 mt-1">+12.5% vs last period</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <ShoppingBag size={24} className="text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-material border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">New Customers</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">342</p>
              <p className="text-sm text-green-600 mt-1">+8.1% vs last period</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Users size={24} className="text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-material border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Growth Rate</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">24.8%</p>
              <p className="text-sm text-green-600 mt-1">+3.2% vs last period</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <TrendingUp size={24} className="text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Report Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Reports */}
        <div className="bg-white rounded-lg shadow-material border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Sales Reports</h2>
            <p className="text-sm text-gray-600 mt-1">Revenue and transaction analytics</p>
          </div>
          <div className="p-6 space-y-3">
            {[
              { name: 'Daily Sales Report', description: 'Sales breakdown by day' },
              { name: 'Monthly Revenue', description: 'Monthly revenue trends' },
              { name: 'Product Performance', description: 'Top selling products' },
              { name: 'Sales by Category', description: 'Category-wise sales data' },
            ].map((report) => (
              <div
                key={report.name}
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-smooth group cursor-pointer"
              >
                <div>
                  <p className="font-medium text-gray-900 group-hover:text-primary-700">{report.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                </div>
                <button className="p-2 text-gray-400 group-hover:text-primary-600">
                  <Download size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reports */}
        <div className="bg-white rounded-lg shadow-material border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Customer Reports</h2>
            <p className="text-sm text-gray-600 mt-1">Customer behavior and demographics</p>
          </div>
          <div className="p-6 space-y-3">
            {[
              { name: 'Customer Acquisition', description: 'New customer trends' },
              { name: 'Customer Lifetime Value', description: 'CLV analysis' },
              { name: 'Customer Retention', description: 'Retention rates and churn' },
              { name: 'Demographics Report', description: 'Customer segmentation' },
            ].map((report) => (
              <div
                key={report.name}
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-smooth group cursor-pointer"
              >
                <div>
                  <p className="font-medium text-gray-900 group-hover:text-primary-700">{report.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                </div>
                <button className="p-2 text-gray-400 group-hover:text-primary-600">
                  <Download size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Inventory Reports */}
        <div className="bg-white rounded-lg shadow-material border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Inventory Reports</h2>
            <p className="text-sm text-gray-600 mt-1">Stock levels and product analytics</p>
          </div>
          <div className="p-6 space-y-3">
            {[
              { name: 'Stock Levels', description: 'Current inventory status' },
              { name: 'Low Stock Alert', description: 'Products needing reorder' },
              { name: 'Inventory Turnover', description: 'Product movement rates' },
              { name: 'Dead Stock Report', description: 'Slow-moving inventory' },
            ].map((report) => (
              <div
                key={report.name}
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-smooth group cursor-pointer"
              >
                <div>
                  <p className="font-medium text-gray-900 group-hover:text-primary-700">{report.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                </div>
                <button className="p-2 text-gray-400 group-hover:text-primary-600">
                  <Download size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Reports */}
        <div className="bg-white rounded-lg shadow-material border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Financial Reports</h2>
            <p className="text-sm text-gray-600 mt-1">Financial performance metrics</p>
          </div>
          <div className="p-6 space-y-3">
            {[
              { name: 'Profit & Loss', description: 'P&L statement' },
              { name: 'Cash Flow', description: 'Cash flow analysis' },
              { name: 'Tax Report', description: 'Tax calculation summary' },
              { name: 'Payment Methods', description: 'Payment breakdown' },
            ].map((report) => (
              <div
                key={report.name}
                className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-smooth group cursor-pointer"
              >
                <div>
                  <p className="font-medium text-gray-900 group-hover:text-primary-700">{report.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                </div>
                <button className="p-2 text-gray-400 group-hover:text-primary-600">
                  <Download size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Report Builder */}
      <div className="bg-white rounded-lg shadow-material border border-gray-100 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Calendar size={24} className="text-primary-600" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Custom Report Builder</h2>
            <p className="text-sm text-gray-600 mt-1">Create custom reports with specific date ranges</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-smooth">
              <option>Sales Report</option>
              <option>Customer Report</option>
              <option>Inventory Report</option>
              <option>Financial Report</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-smooth">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 3 Months</option>
              <option>Custom Range</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 transition-smooth shadow-material font-medium">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
