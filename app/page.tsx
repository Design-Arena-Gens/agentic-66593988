'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Dashboard from '@/components/Dashboard'
import Inventory from '@/components/Inventory'
import Sales from '@/components/Sales'
import Customers from '@/components/Customers'
import Reports from '@/components/Reports'
import POS from '@/components/POS'

export default function Home() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [activeView, setActiveView] = useState('dashboard')
  const [isPOSMode, setIsPOSMode] = useState(false)

  const renderView = () => {
    if (isPOSMode) {
      return <POS onClose={() => setIsPOSMode(false)} />
    }

    switch (activeView) {
      case 'dashboard':
        return <Dashboard />
      case 'inventory':
        return <Inventory />
      case 'sales':
        return <Sales />
      case 'customers':
        return <Customers />
      case 'reports':
        return <Reports />
      default:
        return <Dashboard />
    }
  }

  if (isPOSMode) {
    return renderView()
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        activeView={activeView}
        onViewChange={setActiveView}
        onPOSActivate={() => setIsPOSMode(true)}
      />
      <main
        className={`flex-1 overflow-y-auto transition-smooth ${
          sidebarCollapsed ? 'ml-20' : 'ml-[280px]'
        }`}
      >
        {renderView()}
      </main>
    </div>
  )
}
