import React, { useEffect, useState } from 'react'
import Food from '../Food/Food'
import FoodDetails from '../FoodDetails/FoodDetails'
import { clearOrder, getOrder, orderedFood } from '../utilities/fakedb'
import './Foods.css'

const Foods = () => {
    const [foods, setFoods] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [region, setRegion] = useState('')

    useEffect(() => {
        fetch('https://themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])

    useEffect(() => {
        let totalOrder = 0
        const orderedFood = getOrder()
        for (const prop in orderedFood) {
            totalOrder += orderedFood[prop]
        }
        setQuantity(totalOrder)
    }, [])

    const orderHandler = food => {
        // setQuantity(quantity + 1)
        setRegion(food.strArea)
        orderedFood(food.idMeal)
        let totalOrder = 0
        const order = getOrder()
        for (const prop in order) {
            totalOrder += order[prop]
        }
        setQuantity(totalOrder)
    }

    const clearHandler = () => {
        setQuantity(0)
        clearOrder()
    }

    const removeOrder = foodID => {
        let storedFood = {}
        const savedFood = localStorage.getItem('order-storage')
        if (savedFood) {
            storedFood = JSON.parse(savedFood)
            if (foodID in storedFood) {
                delete storedFood[foodID]
                localStorage.setItem('order-storage', JSON.stringify(storedFood))
            }
        }
        setQuantity(quantity - 1)
    }
    return (
        <div className="main-container">
            <div className="foods-container">
                {foods.map(food => (
                    <Food food={food} key={food.idMeal} orderHandler={orderHandler}></Food>
                ))}
            </div>

            <div className="food-details">
                <FoodDetails
                    quantity={quantity}
                    region={region}
                    foods={foods}
                    clearHandler={clearHandler}
                    removeOrder={removeOrder}
                ></FoodDetails>
            </div>
        </div>
    )
}

export default Foods
