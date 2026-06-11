import { useState, useEffect } from 'react'
import Card from './Card.jsx'


export default function Shop({ cart, updateCart }) {
  const [data, setData] = useState([])
  const productCount = 9

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const promises = Array.from({ length: productCount }, (_, i) =>
          fetch(`https://fakestoreapi.com/products/${i + 1}`).then(r => r.json())
        )
        const products = await Promise.all(promises)
        setData(products)
      } catch (err) {
        console.error('fetch failed:', err)
      }
    }

    fetchAllProducts()
  }, [])

  return (
    <div className='grid'>
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          imageUrl={item.image}
          title={item.title}
          price={item.price}
          count={cart[item.id]?.count || 0}
          updateCart={updateCart}
        />
      ))}
    </div>
  )
}