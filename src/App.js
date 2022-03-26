import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react'
import './App.css'
import Foods from './components/Foods/Foods'
import Greetings from './components/Greetings/Greetings'
import Header from './components/Header/Header'

function App() {
    const [src, setSrc] = useState('')
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])
    return (
        <div className="">
            <Header></Header>
            <Greetings setSrc={setSrc}></Greetings>
            <Foods src={src}></Foods>
        </div>
    )
}

export default App
