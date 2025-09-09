import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true // Flag para evitar estado atualizado se componente desmontado

    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch('https://fakestoreapi.com/products')
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        
        if (isMounted) {
          setProducts(data)
          setLoading(false)
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message)
          setLoading(false)
          console.error('Erro ao carregar produtos:', err)
        }
      }
    }

    fetchProducts()

    return () => {
      isMounted = false // Cleanup function
    }
  }, [])

  if (loading) {
    return <div className="loading">Carregando produtos...</div>
  }

  if (error) {
    return (
      <div className="error">
        <h2>Erro ao carregar produtos</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Tentar novamente</button>
      </div>
    )
  }

  return (
    <div className="product-list">
      <h2>Nossos Produtos</h2>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList