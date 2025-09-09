const Header = ({ cartItemsCount, onViewChange, currentView }) => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">🛒 Loja Virtual</h1>
        
        <nav className="nav">
          <button 
            className={currentView === 'products' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => onViewChange('products')}
          >
            Produtos
          </button>
          <button 
            className={currentView === 'cart' ? 'nav-btn active' : 'nav-btn'}
            onClick={() => onViewChange('cart')}
          >
            Carrinho ({cartItemsCount})
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header