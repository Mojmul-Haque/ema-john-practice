import React, { useState } from 'react'
import Product from '../Product/Product'
import './Shop.css'
import fakeData from '../../fakeData/index'
import Cart from '../Product/cart/Cart'
// console.log(fakeData)

const Shop = () => {
  let products = fakeData.slice(0, 10)
  const [product, setProduct] = useState(products)

  function carthandeler () {
    console.log('clikd me')
    const cartData = product
    setProduct(cartData)
  }
  return (
    <div className='shop-container'>
      <div className='product-container'>
        <Product product={product} carthandeler={carthandeler}></Product>
      </div>
      <div className='cart-container'>
        <h2>this is cart </h2>
        <Cart></Cart>
      </div>
    </div>
  )
}

export default Shop
