import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { getOrder } from '../utilities/fakedb'

const ModalFood = ({ foods, removeOrder, quantity }) => {
    const [orderedFood, setOrderedFood] = useState([])
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    useEffect(() => {
        let order = []
        const getStoredData = getOrder()
        for (const prop in getStoredData) {
            let item = foods.find(food => food.idMeal === prop)
            if (item) {
                item['quantity'] = getStoredData[prop]
                order.push(item)
            }
        }
        setOrderedFood(order)
    }, [foods, quantity])
    return (
        <>
            <Button className="review-order" onClick={handleShow}>
                Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Review Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {orderedFood.length > 0 && (
                        <table className="table text-center">
                            <tr>
                                <th>Food</th>
                                <th>Id</th>
                                <th>Quantity</th>
                                <th>Status</th>
                            </tr>

                            {orderedFood.map(food => (
                                <FoodTr food={food} removeOrder={removeOrder}></FoodTr>
                            ))}
                        </table>
                    )}

                    {orderedFood.length === 0 && <h4 className="text-center">No Data!</h4>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

const FoodTr = ({ food, removeOrder }) => {
    return (
        <tr className="m-5">
            <td>
                <img width={100} src={food.strMealThumb} alt="" />
            </td>
            <td>{food.idMeal}</td>
            <td>{food.quantity}</td>
            <Button onClick={() => removeOrder(food.idMeal)} className="btn btn-danger mt-4">
                Remove
            </Button>
        </tr>
    )
}

export default ModalFood
