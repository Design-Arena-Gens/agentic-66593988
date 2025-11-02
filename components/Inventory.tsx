'use client'

import { Search, Plus, Edit, Trash2, Filter } from 'lucide-react'

const products = [
  { id: 1, name: 'Wireless Mouse', sku: 'WM-001', category: 'Electronics', stock: 150, price: 29.99, status: 'In Stock' },
  { id: 2, name: 'USB Cable', sku: 'UC-002', category: 'Accessories', stock: 8, price: 9.99, status: 'Low Stock' },
  { id: 3, name: 'Laptop Stand', sku: 'LS-003', category: 'Accessories', stock: 45, price: 49.99, status: 'In Stock' },
  { id: 4, name: 'Keyboard', sku: 'KB-004', category: 'Electronics', stock: 0, price: 79.99, status: 'Out of Stock' },
  { id: 5, name: 'Monitor', sku: 'MN-005', category: 'Electronics', stock: 23, price: 299.99, status: 'In Stock' },
  { id: 6, name: 'Webcam', sku: 'WC-006', category: 'Electronics', stock: 67, price: 89.99, status: 'In Stock' },
]

export default function Inventory() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory</h1>
          <p className="text-gray-600 mt-2">Manage your product inventory</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 transition-smooth shadow-material-md font-medium">
          <Plus size={20} />
          Add Product
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow-material border border-gray-100 p-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-smooth"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-smooth font-medium text-gray-700">
            <Filter size={20} />
            Filters
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-material border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Product</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">SKU</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Stock</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-smooth">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{product.name}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.sku}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">{product.stock}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">${product.price}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        product.status === 'In Stock'
                          ? 'bg-green-100 text-green-700'
                          : product.status === 'Low Stock'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {product.status}
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
