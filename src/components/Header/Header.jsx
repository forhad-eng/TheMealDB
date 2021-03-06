import React from 'react'
import logo from '../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <nav>
            <a href="/home">
                <img src={logo} alt="" />
            </a>
            <div className="navigation">
                <a href="/home">Home</a>
                <a href="/products">Products</a>
                <a href="/about">About</a>
                <input className="sbox" placeholder="Search" />
            </div>
        </nav>
    )
}

export default Header
