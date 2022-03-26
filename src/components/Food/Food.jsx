import { faMousePointer } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'
import './Food.css'

const Food = ({ food, orderHandler }) => {
    const { strMeal, strMealThumb, strArea, strInstructions } = food
    return (
        <div data-aos="fade-down-right" className="food-container">
            <img src={strMealThumb} alt="" />
            <div className="food-info">
                <p className="food-name">{strMeal.slice(0, 30)}</p>
                <p className="food-category">Price: 50 BDT</p>
                <p className="food-area">{strArea} Cuisine</p>
                <p className="food-des">{strInstructions.slice(0, 45)}</p>
            </div>
            <Button className="order" variant="dark" onClick={() => orderHandler(food)}>
                <p className="order-text">
                    Order Now <FontAwesomeIcon icon={faMousePointer}></FontAwesomeIcon>
                </p>
            </Button>
        </div>
    )
}

export default Food
