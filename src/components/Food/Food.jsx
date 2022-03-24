import { faMousePointer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Food.css'

const Food = ({ food, orderHandler }) => {
    const { strMeal, strMealThumb, strArea, strInstructions } = food
    return (
        <div className="food-container">
            <img src={strMealThumb} alt="" />
            <div className="food-info">
                <p className="food-name">{strMeal}</p>
                <p className="food-category">Price: 50 BDT</p>
                <p className="food-area">{strArea} Cuisine</p>
                <p className="food-des">{strInstructions.slice(0, 45)}</p>
            </div>
            <button className="order" onClick={() => orderHandler(food)}>
                <p className="order-text">
                    Order Now <FontAwesomeIcon icon={faMousePointer}></FontAwesomeIcon>
                </p>
            </button>
        </div>
    )
}

export default Food
