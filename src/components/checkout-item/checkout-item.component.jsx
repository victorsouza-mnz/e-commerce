import React from 'react'
import './checkout-item.styles.scss'
import { connect } from 'react-redux'
import { clearItem } from '../../redux/cart/cart.actions'
import { addItem } from '../../redux/cart/cart.actions'
import { removeItem } from '../../redux/cart/cart.actions'

const CheckOutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const {name, imageUrl, price, quantity} = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className='quantity'>
                <div onClick={ () => removeItem(cartItem)} className="arrow">&#10094;</div>
                <span className='value'>{quantity}</span>
                <div onClick={ () => addItem(cartItem) } className="arrow">&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div onClick={() => clearItem(cartItem)} className="remove-button">&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem : item => dispatch(clearItem(item)),
    addItem : item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
}) 


export default connect(null, mapDispatchToProps)(CheckOutItem)