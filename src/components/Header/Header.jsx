import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <nav>
            <div>
                <p className="title">The Meal DB</p>
            </div>
            <div className="navigation">
                <a href="/home">Home</a>
                <a href="/products">Products</a>
                <a href="/about">About</a>
                <input className="sbox" type="text" placeholder="Search" />
            </div>
        </nav>
    )
}

export default Header
