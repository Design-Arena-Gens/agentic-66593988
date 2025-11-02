'use client'

import { Search, Calendar, Download, Eye } from 'lucide-react'

const sales = [
  { id: 'ORD-001', date: '2024-01-15', customer: 'John Doe', items: 3, amount: 249.99, status: 'Completed', paymentMethod: 'Credit Card' },
  { id: 'ORD-002', date: '2024-01-15', customer: 'Jane Smith', items: 1, amount: 89.99, status: 'Completed', paymentMethod: 'Cash' },
  { id: 'ORD-003', date: '2024-01-14', customer: 'Mike Johnson', items: 5, amount: 499.99, status: 'Pending', paymentMethod: 'Debit Card' },
  { id: 'ORD-004', date: '2024-01-14', customer: 'Sarah Williams', items: 2, amount: 159.99, status: 'Completed', paymentMethod: 'Credit Card' },
  { id: 'ORD-005', date: '2024-01-13', customer: 'Tom Brown', items: 4, amount: 349.99, status: 'Refunded', paymentMethod: 'Cash' },
  { id: 'ORD-006', date: '2024-01-13', customer: 'Emily Davis', items: 1, amount: 79.99, status: 'Completed', paymentMethod: 'Credit Card' },
]

export default function Sales() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Sales</h1>
        <p className="text-gray-600 mt-2">View and manage all sales transactions</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-material border border-gray-100">
          <p className="text-sm font-medium text-gray-600">Today's Sales</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">$1,249.95</p>
          <p className="text-sm text-green-600 mt-2">+12.5% from yesterday</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-material border border-gray-100">
          <p className="text-sm font-medium text-gray-600">Total Orders</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">156</p>
          <p className="text-sm text-gray-600 mt-2">This month</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-material border border-gray-100">
          <p className="text-sm font-medium text-gray-600">Average Order</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">$89.99</p>
          <p className="text-sm text-gray-600 mt-2">Per transaction</p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow-material border border-gray-100 p-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-smooth"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-smooth font-medium text-gray-700">
            <Calendar size={20} />
            Date Range
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-smooth font-medium text-gray-700">
            <Download size={20} />
            Export
          </button>
        </div>
      </div>

      {/* Sales Table */}
      <div className="bg-white rounded-lg shadow-material border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Order ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Customer</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Items</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Payment</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sales.map((sale) => (
                <tr key={sale.id} className="hover:bg-gray-50 transition-smooth">
                  <td className="px-6 py-4">
                    <div className="font-medium text-primary-600">{sale.id}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{sale.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{sale.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{sale.items}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold">${sale.amount}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{sale.paymentMethod}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        sale.status === 'Completed'
                          ? 'bg-green-100 text-green-700'
                          : sale.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {sale.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-smooth">
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
