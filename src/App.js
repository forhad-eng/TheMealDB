import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Foods from './components/Foods/Foods'
import Greetings from './components/Greetings/Greetings'
import Header from './components/Header/Header'

function App() {
    return (
        <div className="">
            <Header></Header>
            <Greetings></Greetings>
            <Foods></Foods>
        </div>
    )
}

export default App
