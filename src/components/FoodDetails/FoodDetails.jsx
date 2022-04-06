import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'
import ModalFood from '../ModalFood/ModalFood'
import './FoodDetails.css'

const FoodDetails = ({ foodCart, removeOrder, clearHandler }) => {
    const cartReducer = (pre, cur) => pre + cur.quantity
    const total = foodCart.reduce(cartReducer, 0)

    return (
        <div className="food">
            <h2 className="compo-title">Food Details</h2>
            <div className="orderedFood-info">
                <p>Ordered Food: {total}</p>
                <p>Price: {total * 50}</p>
                <p>Tax: {total * 50 * 0.15}</p>
                <p>Grand Total: {total * 50 + total * 50 * 0.15}</p>
            </div>
            <Button variant="danger" className="clear-order" onClick={clearHandler}>
                Clear Order <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>{' '}
            </Button>
            <ModalFood foodCart={foodCart} removeOrder={removeOrder}></ModalFood>
        </div>
    )
}

export default FoodDetails
