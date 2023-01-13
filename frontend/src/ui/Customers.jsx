import {NavigationMenu} from "./NavigationMenu.jsx";
import {Col, Container, Row} from "react-bootstrap";
import {SignUpFormAdmin} from "./SignUpFormAdmin.jsx";
import {AddCustomerForm} from "./AddCustomerForm.jsx";

export function Customers () {
    return (
        <>
            <NavigationMenu/>
            <Container fluid id="content-background" className="pt-5">
                <Container id="form-background" className="py-3">
                    <Row>
                        <Col>
                            <h1>Add Customer</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AddCustomerForm/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}