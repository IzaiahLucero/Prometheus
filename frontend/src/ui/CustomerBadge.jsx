import {Col, Row} from "react-bootstrap";

export function CustomerBadge ({customer}) {
    return (
        <>
            <Row className="px-3 text-center">
                <Col xs={2}>
                    <h5>{customer.customerFirstName}</h5>
                </Col>
                <Col xs={2}>
                    <h5>{customer.customerLastName}</h5>
                </Col>
                <Col xs={4}>
                    <h5>{customer.customerMailingAddress}</h5>
                </Col>
                <Col xs={2}>
                    <h5>{customer.customerPrimaryPhone}</h5>
                </Col>
                <Col xs={2}>
                    <h5>{customer.customerPrimaryEmail}</h5>
                </Col>
            </Row>
        </>
    )
}