'use client'

import { TrendingUp, TrendingDown, DollarSign, ShoppingBag, Users, Package } from 'lucide-react'

const stats = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    trend: 'up',
    icon: DollarSign,
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Sales',
    value: '2,350',
    change: '+15.3%',
    trend: 'up',
    icon: ShoppingBag,
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Customers',
    value: '1,234',
    change: '+12.5%',
    trend: 'up',
    icon: Users,
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Inventory Items',
    value: '567',
    change: '-2.4%',
    trend: 'down',
    icon: Package,
    color: 'from-orange-500 to-orange-600'
  },
]

const recentSales = [
  { id: 1, customer: 'Olivia Martin', email: 'olivia@example.com', amount: '$1,999.00' },
  { id: 2, customer: 'Jackson Lee', email: 'jackson@example.com', amount: '$789.00' },
  { id: 3, customer: 'Isabella Nguyen', email: 'isabella@example.com', amount: '$499.00' },
  { id: 4, customer: 'William Kim', email: 'william@example.com', amount: '$299.00' },
  { id: 5, customer: 'Sofia Davis', email: 'sofia@example.com', amount: '$199.00' },
]

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your business.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.title}
              className="bg-white rounded-lg p-6 shadow-material hover:shadow-material-md transition-smooth border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <div className="flex items-center mt-2 gap-1">
                    {stat.trend === 'up' ? (
                      <TrendingUp size={16} className="text-green-600" />
                    ) : (
                      <TrendingDown size={16} className="text-red-600" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-sm text-gray-500">from last month</span>
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10`}>
                  <Icon size={24} className="text-white" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Sales and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Sales */}
        <div className="bg-white rounded-lg shadow-material border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Sales</h2>
            <p className="text-sm text-gray-600 mt-1">You made 265 sales this month.</p>
          </div>
          <div className="p-6 space-y-4">
            {recentSales.map((sale) => (
              <div key={sale.id} className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-smooth">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-semibold">
                    {sale.customer.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{sale.customer}</p>
                    <p className="text-sm text-gray-600">{sale.email}</p>
                  </div>
                </div>
                <p className="font-semibold text-gray-900">{sale.amount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-material border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
            <p className="text-sm text-gray-600 mt-1">Frequently used actions</p>
          </div>
          <div className="p-6 grid grid-cols-2 gap-4">
            {[
              { label: 'New Sale', color: 'primary' },
              { label: 'Add Product', color: 'green' },
              { label: 'New Customer', color: 'purple' },
              { label: 'Generate Report', color: 'orange' },
            ].map((action) => (
              <button
                key={action.label}
                className={`p-6 rounded-lg border-2 border-gray-200 hover:border-${action.color}-500 hover:bg-${action.color}-50 transition-smooth text-center group`}
              >
                <p className="font-semibold text-gray-900 group-hover:text-${action.color}-600">
                  {action.label}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white rounded-lg shadow-material border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Sales Overview</h2>
        <div className="h-64 bg-gradient-to-br from-primary-50 to-purple-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 font-medium">Chart visualization area</p>
        </div>
      </div>
    </div>
  )
}
