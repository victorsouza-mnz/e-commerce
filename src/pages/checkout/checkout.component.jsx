import React from 'react'
import './checkout.styles.scss'
import {connect} from 'react-redux'
import { selectCartItems, selectCartTotalValue } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import CheckOutItem from '../../components/checkout-item/checkout-item.component'

const Checkout = ({cartItems, totalValue}) => 
    <div className='checkout-page'>
        <div className="checkout-header">
            <div className="header-block">
                <span>Products</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckOutItem key={cartItem.id} cartItem={cartItem} />)
        }
        <div className="total">
            <span>TOTAL: ${totalValue}</span>
        </div>
    </div>

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalValue : selectCartTotalValue
})

export default connect(mapStateToProps)(Checkout)