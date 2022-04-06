const orderedFood = foodId => {
    let storedFood = {}
    const savedFood = localStorage.getItem('order-storage')
    if (savedFood) {
        storedFood = JSON.parse(savedFood)
    }
    if (storedFood[foodId]) {
        storedFood[foodId] += 1
    } else {
        storedFood[foodId] = 1
    }
    localStorage.setItem('order-storage', JSON.stringify(storedFood))
}

const getOrderedFood = () => {
    let storedFood = {}
    const savedFood = localStorage.getItem('order-storage')
    if (savedFood) {
        storedFood = JSON.parse(savedFood)
    }
    return storedFood
}

const removeMeal = foodID => {
    let storedFood = {}
    const savedFood = localStorage.getItem('order-storage')
    if (savedFood) {
        storedFood = JSON.parse(savedFood)
        if (foodID in storedFood) {
            delete storedFood[foodID]
            localStorage.setItem('order-storage', JSON.stringify(storedFood))
        }
    }
}

const clearOrder = () => {
    localStorage.removeItem('order-storage')
}

export { orderedFood, getOrderedFood as getOrder, clearOrder, removeMeal }
