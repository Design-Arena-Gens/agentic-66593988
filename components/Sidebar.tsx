'use client'

import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  Settings
} from 'lucide-react'

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
  activeView: string
  onViewChange: (view: string) => void
  onPOSActivate: () => void
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'inventory', label: 'Inventory', icon: Package },
  { id: 'sales', label: 'Sales', icon: ShoppingCart },
  { id: 'customers', label: 'Customers', icon: Users },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
]

export default function Sidebar({ collapsed, onToggle, activeView, onViewChange, onPOSActivate }: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-white shadow-material-lg transition-all duration-300 z-50 ${
        collapsed ? 'w-20' : 'w-[280px]'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
          {!collapsed && (
            <h1 className="text-xl font-semibold text-gray-900 transition-opacity duration-300">
              ERP System
            </h1>
          )}
          <button
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-gray-100 transition-smooth text-gray-600 hover:text-gray-900 ml-auto"
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeView === item.id
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth ${
                  isActive
                    ? 'bg-primary-50 text-primary-600 shadow-sm'
                    : 'text-gray-700 hover:bg-gray-100'
                } ${collapsed ? 'justify-center' : ''}`}
                title={collapsed ? item.label : ''}
              >
                <Icon size={20} className="flex-shrink-0" />
                {!collapsed && (
                  <span className="font-medium transition-opacity duration-300">
                    {item.label}
                  </span>
                )}
              </button>
            )
          })}

          {/* POS Button */}
          <button
            onClick={onPOSActivate}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-smooth bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-material-md mt-4 ${
              collapsed ? 'justify-center' : ''
            }`}
            title={collapsed ? 'Point of Sale' : ''}
          >
            <CreditCard size={20} className="flex-shrink-0" />
            {!collapsed && (
              <span className="font-semibold transition-opacity duration-300">
                Point of Sale
              </span>
            )}
          </button>
        </nav>

        {/* Footer */}
        <div className="p-3 border-t border-gray-200">
          <button
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-smooth ${
              collapsed ? 'justify-center' : ''
            }`}
            title={collapsed ? 'Settings' : ''}
          >
            <Settings size={20} className="flex-shrink-0" />
            {!collapsed && (
              <span className="font-medium transition-opacity duration-300">
                Settings
              </span>
            )}
          </button>
        </div>
      </div>
    </aside>
  )
}
