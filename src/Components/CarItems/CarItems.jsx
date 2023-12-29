import React, { useContext } from 'react'
import './CarItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CarItems = () => {
    const {getTotalAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartItems'>
      <div className="cart-item-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return <div>
            <div className="classItem-Fromat cart-item-format-main">
                <img className='cartItem-ProdItem' src= {e.image}alt="" />
                <p>{e.name}</p>
                <p>₹{e.new_price}</p>
                <button className='cartItems-quantity'>{cartItems[e.id]}</button>
                <p>₹{e.new_price*cartItems[e.id]}</p>
                <img className='remove' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
          </div>
        }
        return null
      })}
      <div className="cartItemsDown">
        <div className="total">
            <h1>Cart Total</h1>
            <div>
                <div className="total-items">
                    <p>Subtotal</p>
                    <p>₹{getTotalAmount()}</p>
                </div>
                <hr />
                <div className="total-items">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="total-items">
                    <h3>Total</h3>
                    <h3>₹{getTotalAmount()}</h3>
                </div>
            </div>
            <button>Checkout</button>
        </div>
        <div className="promo">
            <p>If you have a Promocode, Enter Here</p>
            <div className="promoBox">
                <input type="text" placeholder='PromoCode'/>
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CarItems
