import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Shop from './components/Shop'
import SocialFeed from './components/SocialFeed'
import Checkout from './components/Checkout'
import Footer from './components/Footer'
import ProductPage from './components/ProductPage'
import EducationPage from './components/EducationPage'
import PartnersPage from './components/PartnersPage'

const PRODUCTS = {
  yokis:     { id: 'yokis',     name: 'Yokis Steel Backup',    sat: 150000, usd: 89 },
  'plate-1': { id: 'plate-1',  name: 'Yokis Plate (single)',   sat:  90000, usd:  59 },
  'plate-3': { id: 'plate-3',  name: 'Backup Set · 3 Plates', sat: 240000, usd: 149 },
}

function App() {
  const [view, setView] = useState('home')
  const [cart, setCart] = useState([
    { ...PRODUCTS.yokis, qty: 1 },
  ])

  function navigate(page) {
    setView(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function addToCart(productId) {
    setCart(c => {
      const existing = c.find(x => x.id === productId)
      if (existing) return c.map(x => x.id === productId ? { ...x, qty: x.qty + 1 } : x)
      return [...c, { ...PRODUCTS[productId], qty: 1 }]
    })
    navigate('checkout')
  }

  const cartCount = cart.reduce((s, it) => s + it.qty, 0)

  return (
    <>
      <Header
        cartCount={cartCount}
        onCart={() => navigate('checkout')}
        navigate={navigate}
        currentView={view}
      />

      {view === 'home' && (
        <main>
          <Hero onShop={() => navigate('checkout')} />
          <Features />
          <Shop onBuy={addToCart} onViewProduct={() => navigate('product')} />
          <SocialFeed />
        </main>
      )}

      {view === 'product' && (
        <main>
          <ProductPage onBuy={addToCart} navigate={navigate} />
        </main>
      )}

      {view === 'education' && (
        <main>
          <EducationPage navigate={navigate} />
        </main>
      )}

      {view === 'partners' && (
        <main>
          <PartnersPage navigate={navigate} />
        </main>
      )}

      {view === 'checkout' && (
        <main>
          <Checkout items={cart} onClose={() => navigate('home')} />
        </main>
      )}

      <Footer navigate={navigate} />
    </>
  )
}

export default App
