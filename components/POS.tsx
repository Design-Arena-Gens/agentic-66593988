'use client'

import { useState } from 'react'
import { X, Search, Plus, Minus, Trash2, CreditCard, DollarSign, Smartphone } from 'lucide-react'

const categories = ['All', 'Electronics', 'Accessories', 'Furniture', 'Clothing']

const products = [
  { id: 1, name: 'Wireless Mouse', price: 29.99, category: 'Electronics', image: '🖱️' },
  { id: 2, name: 'USB Cable', price: 9.99, category: 'Accessories', image: '🔌' },
  { id: 3, name: 'Laptop Stand', price: 49.99, category: 'Accessories', image: '💻' },
  { id: 4, name: 'Keyboard', price: 79.99, category: 'Electronics', image: '⌨️' },
  { id: 5, name: 'Monitor', price: 299.99, category: 'Electronics', image: '🖥️' },
  { id: 6, name: 'Webcam', price: 89.99, category: 'Electronics', image: '📷' },
  { id: 7, name: 'Desk Lamp', price: 39.99, category: 'Furniture', image: '💡' },
  { id: 8, name: 'Office Chair', price: 199.99, category: 'Furniture', image: '🪑' },
]

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface POSProps {
  onClose: () => void
}

export default function POS({ onClose }: POSProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [cart, setCart] = useState<CartItem[]>([])
  const [showPayment, setShowPayment] = useState(false)

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const addToCart = (product: typeof products[0]) => {
    const existingItem = cart.find((item) => item.id === product.id)
    if (existingItem) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const updateQuantity = (id: number, delta: number) => {
    setCart(cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
    ).filter((item) => item.quantity > 0))
  }

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <div className="fixed inset-0 bg-gray-50 z-50 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-material-md border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Point of Sale</h1>
            <p className="text-sm text-gray-600 mt-1">Process customer transactions</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-smooth text-gray-600 hover:text-gray-900"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Products Section */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-smooth"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-smooth whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-material'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => addToCart(product)}
                className="bg-white rounded-lg p-4 shadow-material hover:shadow-material-md transition-smooth border border-gray-100 text-left group"
              >
                <div className="text-5xl mb-3 text-center">{product.image}</div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                <p className="text-lg font-bold text-primary-600">${product.price.toFixed(2)}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div className="w-96 bg-white border-l border-gray-200 flex flex-col shadow-material-lg">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Current Order</h2>
            <p className="text-sm text-gray-600 mt-1">{cart.length} items</p>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-3">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">Cart is empty</p>
                <p className="text-sm text-gray-400 mt-1">Add products to start</p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1 text-gray-400 hover:text-red-600 transition-smooth"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 rounded bg-white border border-gray-300 hover:bg-gray-100 transition-smooth"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 rounded bg-white border border-gray-300 hover:bg-gray-100 transition-smooth"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <p className="font-semibold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Summary */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Tax (10%)</span>
                  <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
                  <span className="text-gray-900">Total</span>
                  <span className="text-primary-600">${total.toFixed(2)}</span>
                </div>
              </div>

              {!showPayment ? (
                <button
                  onClick={() => setShowPayment(true)}
                  className="w-full py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 transition-smooth shadow-material-md font-semibold text-lg"
                >
                  Proceed to Payment
                </button>
              ) : (
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-700">Select Payment Method</p>
                  <div className="grid grid-cols-1 gap-2">
                    <button className="flex items-center justify-center gap-2 py-3 bg-white border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-smooth font-medium">
                      <CreditCard size={20} />
                      Card
                    </button>
                    <button className="flex items-center justify-center gap-2 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-smooth font-medium">
                      <DollarSign size={20} />
                      Cash
                    </button>
                    <button className="flex items-center justify-center gap-2 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-smooth font-medium">
                      <Smartphone size={20} />
                      Digital
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      setCart([])
                      setShowPayment(false)
                    }}
                    className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-smooth shadow-material-md font-semibold"
                  >
                    Complete Transaction
                  </button>
                  <button
                    onClick={() => setShowPayment(false)}
                    className="w-full py-2 text-gray-600 hover:text-gray-900 transition-smooth font-medium"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
