const Cart = ({ cart, removeFromCart, updateQuantity, totalPrice }) => {
  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Seu carrinho está vazio</h2>
        <p>Adicione alguns produtos para continuar comprando.</p>
      </div>
    )
  }

  return (
    <div className="cart">
      <h2>Seu Carrinho</h2>
      
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            
            <div className="item-details">
              <h3>{item.title}</h3>
              <p>R$ {item.price.toFixed(2)}</p>
            </div>
            
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                +
              </button>
            </div>
            
            <button 
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Remover
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-summary">
        <h3>Total: R$ {totalPrice.toFixed(2)}</h3>
        <button className="checkout-btn">Finalizar Compra</button>
      </div>
    </div>
  )
}

export default Cart