import React from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='product-display'>

      <div className='display-left'>
        <div className="display-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="product-display-img">
            <img className='main-img' src={product.image} alt="" />
        </div>
      </div>

      <div className='display-right'>
        <h1>{product.name}</h1>
        <div className="productDisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="right-prices">
            <div className="old-price">₹{product.old_price}</div>
            <div className="new-price">₹{product.new_price}</div>
        </div>
        
        <div className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et deleniti, quod repudiandae nam vero quasi ut quae a, magni animi repellat veniam? Laboriosam provident nisi eum eos non mollitia cum amet unde ducimus aperiam, cupiditate vel necessitatibus!

        </div>
        <div className="sizing">
            <h1>Select Size</h1>
            <div className="sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
            </div>
            <button>ADD TO CART</button>
            <p className="category-display"><span>Category : </span>Women , T-Shirt, CropTop</p>
            <p className="category-display"><span>Tags : </span>Modern, Latest</p>
    
      </div>
      
    </div>
  )
}

export default ProductDisplay
