import React from 'react'
import './cart-icon.styles.scss'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import {ReactComponent as CartLogo} from '../../assets/shopping-bag.svg'

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <CartLogo className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)



const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => (dispatch(toggleCartHidden()))
})

const mapStateToProps = ({cart: {cartItems}}) => ({
    
    itemCount: cartItems.reduce(
        (acc, cartItem) => acc + cartItem.quantity, 0
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)