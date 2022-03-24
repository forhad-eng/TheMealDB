import React from 'react'
import mealIcon from '../images/meal-icon.png'
import paypalSvg from '../images/paypal.svg'
import './Greetings.css'

const Greetings = () => {
    return (
        <div className="greet-container">
            <div className="greet">
                <img src={mealIcon} alt="" />
                <div>
                    <h1 className="fw-bold">Welcome to TheMealDB</h1>
                    <p>
                        Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world. We also
                        offer a <a href="https://www.themealdb.com/api.php">free JSON API</a> for anyone wanting to use
                        it, with additional features for subscribers.
                    </p>
                    <button>
                        <img src={paypalSvg} alt="" />
                        <span>Subscribe</span>
                    </button>
                    <p>Click to Support: Currently 650 supporters</p>
                </div>
                <img src={mealIcon} alt="" />
            </div>
            <div className="search-box">
                <hr />
                <input type="text" placeholder="Search for a meal 🔍" />
                <p>
                    <b>🥯Total Meals:</b> 283<b> 🧄Total Ingredients:</b> 574 <b> 🍱 Images:</b> 283
                </p>
                <hr />
            </div>
        </div>
    )
}

export default Greetings
