import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [view, setView] = useState('products')
  const [cart, setCart] = useLocalStorage('cart', [])

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id)
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id)
      return
    }
    
    setCart(cart.map(item => 
      item.id === id 
        ? { ...item, quantity: newQuantity } 
        : item
    ))
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  return (
    <div className="app">
      <Header 
        cartItemsCount={getTotalItems()} 
        onViewChange={setView} 
        currentView={view}
      />
      
      <main className="main-content">
        {view === 'products' ? (
          <ProductList addToCart={addToCart} />
        ) : (
          <Cart 
            cart={cart} 
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            totalPrice={getTotalPrice()}
          />
        )}
      </main>
    </div>
  )
}

export default App