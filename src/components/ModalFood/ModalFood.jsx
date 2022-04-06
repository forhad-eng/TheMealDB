import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const ModalFood = ({ foodCart, removeOrder }) => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

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
                    {foodCart.length > 0 && (
                        <table className="table text-center">
                            <tr>
                                <th>Food</th>
                                <th>Id</th>
                                <th>Quantity</th>
                                <th>Status</th>
                            </tr>

                            {foodCart.map(food => (
                                <FoodTr food={food} removeOrder={removeOrder}></FoodTr>
                            ))}
                        </table>
                    )}
                    {foodCart.length === 0 && <h4 className="text-center">No Data!</h4>}
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
            <Button onClick={() => removeOrder(food)} className="btn btn-danger mt-4">
                Remove
            </Button>
        </tr>
    )
}

export default ModalFood
