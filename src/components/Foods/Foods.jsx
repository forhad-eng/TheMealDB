import React, { useEffect, useState } from 'react'
import Food from '../Food/Food'
import FoodDetails from '../FoodDetails/FoodDetails'
import { clearOrder, getOrder, orderedFood, removeMeal } from '../utilities/fakedb'
import './Foods.css'

const Foods = ({ src }) => {
    const [foods, setFoods] = useState([])
    const [foodCart, setFoodCart] = useState([])
    console.log(foodCart)

    useEffect(() => {
        fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${src}`)
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [src])

    useEffect(() => {
        const storedFood = getOrder()
        const newFood = []

        for (const id in storedFood) {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then(res => res.json())
                .then(data => {
                    let food = data.meals[0]
                    food.quantity = storedFood[id]
                    newFood.push(food)
                })
        }
        setFoodCart(newFood)
    }, [])

    const orderHandler = food => {
        let newFoods = []
        const fd = foodCart.find(item => item.idMeal === food.idMeal)
        if (fd) {
            fd.quantity += 1
            const rest = foodCart.filter(item => item.idMeal !== food.idMeal)
            newFoods = [...rest, fd]
        } else {
            food.quantity = 1
            const rest = foodCart.filter(item => item.idMeal !== food.idMeal)
            newFoods = [...rest, food]
        }
        setFoodCart(newFoods)
        orderedFood(food.idMeal)
    }

    const removeOrder = product => {
        const rest = foodCart.filter(item => item.idMeal !== product.idMeal)
        setFoodCart(rest)
        removeMeal(product.idMeal)
    }

    const clearHandler = () => {
        setFoodCart([])
        clearOrder()
    }

    return (
        <div className="main-container">
            <div className="foods-container">
                {foods && foods.map(food => <Food food={food} key={food.idMeal} orderHandler={orderHandler}></Food>)}
            </div>

            <div className="food-details">
                <FoodDetails foodCart={foodCart} removeOrder={removeOrder} clearHandler={clearHandler}></FoodDetails>
            </div>
        </div>
    )
}

export default Foods
