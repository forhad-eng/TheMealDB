import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
import './App.css'
import Foods from './components/Foods/Foods'
import Greetings from './components/Greetings/Greetings'
import Header from './components/Header/Header'

function App() {
    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])
    return (
        <div className="">
            <Header></Header>
            <Greetings></Greetings>
            <Foods></Foods>
        </div>
    )
}

export default App
