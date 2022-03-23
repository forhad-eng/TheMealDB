import React, { useEffect, useState } from 'react'
import Food from '../Food/Food'
import FoodDetails from '../FoodDetails/FoodDetails'
import './Foods.css'

const Foods = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('https://themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])
    return (
        <div className="container">
            <div className="foods-container">
                {foods.map(food => (
                    <Food food={food} key={food.idMeal}></Food>
                ))}
            </div>
            <div className="food-details">
                <FoodDetails></FoodDetails>
            </div>
        </div>
    )
}

export default Foods
