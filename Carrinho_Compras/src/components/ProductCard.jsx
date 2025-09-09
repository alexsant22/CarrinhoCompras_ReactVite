const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">R$ {product.price.toFixed(2)}</p>
        <button 
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  )
}

export default ProductCard