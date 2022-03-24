import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { getOrder, removeOrder } from '../utilities/fakedb'

const ModalFood = ({ foods }) => {
    const [orderedFood, setOrderedFood] = useState([])
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    useEffect(() => {
        let order = []
        const getStoredData = getOrder()
        for (const prop in getStoredData) {
            const item = foods.find(food => food.idMeal === prop)
            if (item) {
                order.push(item)
            }
        }
        setOrderedFood(order)
    }, [foods, orderedFood])
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
                                <FoodTr food={food}></FoodTr>
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

const FoodTr = ({ food }) => {
    return (
        <tr className="m-5">
            <td>
                <img width={100} src={food.strMealThumb} alt="" />
            </td>
            <td>{food.idMeal}</td>
            <td>1</td>
            <button onClick={() => removeOrder(food.idMeal)} className="btn btn-danger mt-4">
                Remove
            </button>
        </tr>
    )
}

export default ModalFood
