import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'
import ModalFood from '../ModalFood/ModalFood'
import './FoodDetails.css'

const FoodDetails = ({ quantity, region, foods, clearHandler }) => {
    return (
        <div className="food">
            <h2 className="compo-title">Food Details</h2>
            <div className="orderedFood-info">
                <p>Ordered Food: {quantity}</p>
                <p>{region} Cuisine</p>
                <p>Price: {quantity * 50}</p>
                <p>Tax: {quantity * 50 * 0.15}</p>
                <p>Grand Total: {quantity * 50 + quantity * 50 * 0.1}</p>
            </div>
            <Button variant="danger" className="clear-order" onClick={clearHandler}>
                Clear Order <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>{' '}
            </Button>
            <ModalFood foods={foods}></ModalFood>
        </div>
    )
}

export default FoodDetails
