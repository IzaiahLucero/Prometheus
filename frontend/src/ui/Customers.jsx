import React, {useEffect} from "react";
import {NavigationMenu} from "./NavigationMenu.jsx";
import {Col, Container, Row} from "react-bootstrap";
import {CustomerBadge} from "./CustomerBadge.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllCustomer} from "../store/customer.js";

export function Customers () {
    const customers = useSelector(state => state.customer)

    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllCustomer())
    }
    useEffect(initialEffects, [dispatch])
    return (
        <>
            <NavigationMenu/>
            <Container fluid id="content-background" className="pt-5">
                <Container id="form-background" className="py-3">
                    <Row className="p-3">
                        <Col>
                            <h3>Customers</h3>
                        </Col>
                    </Row>
                    <Row className="px-3 text-center">
                        <Col xs={2}>
                            Customer First Name
                        </Col>
                        <Col xs={2}>
                            Customer Last Name
                        </Col>
                        <Col xs={4}>
                            Mailing Address
                        </Col>
                        <Col xs={2}>
                            Phone
                        </Col>
                        <Col xs={2}>
                            Email
                        </Col>
                    </Row>
                    {customers.map((customer, index) => <CustomerBadge customer={customer} key={index}/>
                    )}
                </Container>
            </Container>
        </>
    )
}
