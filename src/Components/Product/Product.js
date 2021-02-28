import './Product.css'
const Product = props => {
  return (  
    <div className="product">
      {props.product.map(pd =>
        <div className="single-product">
          <div> <img src={pd.img} alt=""/></div>
          <div className ="product-text"> 
            <h5>{pd.name}</h5>
            <button onClick={props.carthandeler}>Add to Cart</button>
          </div>
        </div>
        
      )}
    </div>
  )
}

export default Product
