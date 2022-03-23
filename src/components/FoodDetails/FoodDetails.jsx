import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './FoodDetails.css'

const FoodDetails = () => {
    return (
        <div className="food">
            <h2 className="compo-title">Food Details</h2>
            <div className="orderedFood-info">
                <p>Ordered Food: {}</p>
                <p>Region: {}</p>
                <p>Price: {}</p>
                <p>Tax: {}</p>
                <p>Grand Total: {}</p>
            </div>
            <button className="clear-order">
                Clear Order <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>{' '}
            </button>
            <button className="review-order">
                Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>{' '}
            </button>
        </div>
    )
}

export default FoodDetails
