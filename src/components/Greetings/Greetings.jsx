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
                        Search food, Order Food and Get Delivery within <span>30 minutes</span>. We are now almost every
                        city in the country. And want you to know with joy that we have a good reputation in short-time
                        delivery service comparison to others currently available. So, why are you waiting for? Order
                        fast!!!
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
