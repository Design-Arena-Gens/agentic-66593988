'use client'

import { Search, Plus, Mail, Phone, Edit, Trash2 } from 'lucide-react'

const customers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+1 234-567-8901', totalOrders: 24, totalSpent: 3499.99, status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+1 234-567-8902', totalOrders: 18, totalSpent: 2199.99, status: 'Active' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', phone: '+1 234-567-8903', totalOrders: 32, totalSpent: 5899.99, status: 'VIP' },
  { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', phone: '+1 234-567-8904', totalOrders: 9, totalSpent: 1299.99, status: 'Active' },
  { id: 5, name: 'Tom Brown', email: 'tom@example.com', phone: '+1 234-567-8905', totalOrders: 3, totalSpent: 499.99, status: 'Inactive' },
  { id: 6, name: 'Emily Davis', email: 'emily@example.com', phone: '+1 234-567-8906', totalOrders: 41, totalSpent: 8999.99, status: 'VIP' },
]

export default function Customers() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
          <p className="text-gray-600 mt-2">Manage customer relationships</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 transition-smooth shadow-material-md font-medium">
          <Plus size={20} />
          Add Customer
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-material border border-gray-100">
          <p className="text-sm font-medium text-gray-600">Total Customers</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">1,234</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-material border border-gray-100">
          <p className="text-sm font-medium text-gray-600">Active</p>
          <p className="text-3xl font-bold text-green-600 mt-2">987</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-material border border-gray-100">
          <p className="text-sm font-medium text-gray-600">VIP</p>
          <p className="text-3xl font-bold text-purple-600 mt-2">156</p>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-material border border-gray-100">
          <p className="text-sm font-medium text-gray-600">New This Month</p>
          <p className="text-3xl font-bold text-primary-600 mt-2">91</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow-material border border-gray-100 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search customers..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-smooth"
          />
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-lg shadow-material border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Customer</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Contact</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Total Orders</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Total Spent</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50 transition-smooth">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold">
                        {customer.name.charAt(0)}
                      </div>
                      <div className="font-medium text-gray-900">{customer.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail size={14} />
                        {customer.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone size={14} />
                        {customer.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">{customer.totalOrders}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-semibold">${customer.totalSpent.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        customer.status === 'VIP'
                          ? 'bg-purple-100 text-purple-700'
                          : customer.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-smooth">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-smooth">
                        <Trash2 size={18} />
                      </button>
                    </div>
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
