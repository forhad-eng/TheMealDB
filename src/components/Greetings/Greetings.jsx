import React from 'react'
import { Button } from 'react-bootstrap'
import mealIcon from '../images/meal-icon.png'
import paypalSvg from '../images/paypal.svg'
import './Greetings.css'

const Greetings = ({ setSrc }) => {
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
                    <Button variant="warning" className="btn">
                        <img src={paypalSvg} alt="" />
                        <span>Subscribe</span>
                    </Button>
                    <p>Click to Support: Currently 650 supporters</p>
                </div>
                <img src={mealIcon} alt="" />
            </div>
            <div className="search-box">
                <hr />
                <input type="text" placeholder="Search for a meal 🔍" onChange={e => setSrc(e.target.value)} />
                <p>
                    <b>🥯Total Meals:</b> 283<b> 🧄Total Ingredients:</b> 574 <b> 🍱 Images:</b> 283
                </p>
                <hr />
            </div>
        </div>
    )
}

export default Greetings
