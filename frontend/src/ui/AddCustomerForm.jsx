import * as Yup from 'yup'
import {httpConfig} from "../utils/http-config.js";
import {Formik} from "formik";
import Form from "react-bootstrap/Form";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import React from "react";
import {DisplayStatus} from "./DisplayStatus.jsx";
import {DisplayError} from "./DisplayError.jsx";

export const AddCustomerForm = () => {
    const addCustomer = {
        customerFirstName: "",
        customerLastName: "",
        customerMailingAddress: "",
        customerMailingCity: "",
        customerMailingState: "",
        customerMailingZip: "",
        customerPrimaryPhone: "",
        customerSecondaryPhone: "",
        customerPrimaryEmail: "",
        customerSecondaryEmail: "",
    };

    const validator = Yup.object().shape({
        customerFirstName: Yup.string()
            .required("Customer first name is required."),
        customerLastName: Yup.string()
            .required("Customer last name is required."),
        customerMailingAddress: Yup.string()
            .required("Customer mailing address is required."),
        customerMailingCity: Yup.string()
            .required("Customer mailing city is required."),
        customerMailingState: Yup.string()
            .required("Customer mailing state is required."),
        customerMailingZip: Yup.string()
            .required("Customer mailing zip is required."),
        customerPrimaryPhone: Yup.string()
            .required("Customer primary phone is required."),
        customerSecondaryPhone: Yup.string(),
        customerPrimaryEmail: Yup.string()
            .required("Customer primary email is required."),
        customerSecondaryEmail: Yup.string(),
    });

    const submitAddCustomer = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/customer/", values)
            .then(reply => {
                let {message, type} = reply;

                if (reply.status === 200) {
                    resetForm();
                }
                setStatus({message, type});
            }
            );
    };

    return (

        <Formik
            initialValues={addCustomer}
            onSubmit={submitAddCustomer}
            validationSchema={validator}
            >
            {AddCustomerContent}
        </Formik>
    )
};

function AddCustomerContent(props){
    const {
        status,
        values,
        errors,
        touched,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        handleReset
    } = props;
    return (
        <>
        <Form>
            <Form.Group controlId="customerFirstName">
                <Form.Label>Customer First Name</Form.Label>
                <InputGroup>
                    <FormControl
                        className="form-control"
                        name="customerFirstName"
                        type="text"
                        value={values.customerFirstName}
                        placeholder="Enter customers first name."
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                </InputGroup>
                <DisplayError errors={errors} touched={touched} field={"customerFirstName"} />
            </Form.Group>

            <Form.Group controlId="customerLastName">
                <Form.Label>Customer Last Name</Form.Label>
                <InputGroup>
                    <FormControl
                        className="form-control"
                        name="customerLastName"
                        type="text"
                        value={values.customerLastName}
                        placeholder="Enter customers last name."
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </InputGroup>
                <DisplayError errors={errors} touched={touched} field={"customerLastName"} />
            </Form.Group>

            <Form.Group controlId="customerMailingAddress">
                <Form.Label>Customer Mailing Address</Form.Label>
                <InputGroup>
                    <FormControl
                        className="form-control"
                        name="customerMailingAddress"
                        type="text"
                        value={values.customerMailingAddress}
                        placeholder="Enter customers mailing address."
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </InputGroup>
                <DisplayError errors={errors} touched={touched} field={"customerMailingAddress"} />
            </Form.Group>

            <Form.Group controlId="customerMailingCity">
                <Form.Label>Customer Mailing City</Form.Label>
                <InputGroup>
                    <FormControl
                        className="form-control"
                        name="customerMailingCity"
                        type="text"
                        value={values.customerMailingCity}
                        placeholder="Enter customers mailing city."
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </InputGroup>
                <DisplayError errors={errors} touched={touched} field={"customerMailingCity"} />
            </Form.Group>

            <Form.Group controlId="customerMailingState">
                <Form.Label>Customer Mailing State</Form.Label>
                <InputGroup>
                    <FormControl
                        className="form-control"
                        name="customerMailingState"
                        type="text"
                        value={values.customerMailingState}
                        placeholder="Enter customers mailing state."
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </InputGroup>
                <DisplayError errors={errors} touched={touched} field={"customerMailingState"} />
            </Form.Group>

            <Form.Group controlId="customerMailingZip">
                <Form.Label>Customer Mailing Zip</Form.Label>
                <InputGroup>
                    <FormControl
                        className="form-control"
                        name="customerMailingZip"
                        type="text"
                        value={values.customerMailingZip}
                        placeholder="Enter customers mailing zip code."
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </InputGroup>
                <DisplayError errors={errors} touched={touched} field={"customerMailingZip"} />
            </Form.Group>

            <Form.Group controlId="customerPrimaryPhone">
                <Form.Label>Customer Primary Phone</Form.Label>
                <InputGroup>
                    <FormControl
                        className="form-control"
                        name="customerPrimaryPhone"
                        type="text"
                        value={values.customerPrimaryPhone}
                        placeholder="Enter customers primary phone."
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </InputGroup>
                <DisplayError errors={errors} touched={touched} field={"customerPrimaryPhone"} />
            </Form.Group>

            <Form.Group controlId="customerSecondaryPhone">
                <Form.Label>Customer Secondary Phone</Form.Label>
                <InputGroup>
                    <FormControl
                        className="form-control"
                        name="customerSecondaryPhone"
                        type="text"
                        value={values.customerSecondaryPhone}
                        placeholder="Enter customers secondary phone."
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </InputGroup>
                <DisplayError errors={errors} touched={touched} field={"customerSecondaryPhone"} />
            </Form.Group>

            <Form.Group controlId="customerPrimaryEmail">
                <Form.Label>Customer Primary Email</Form.Label>
                <InputGroup>
                    <FormControl
                        className="form-control"
                        name="customerPrimaryEmail"
                        type="text"
                        value={values.customerPrimaryEmail}
                        placeholder="Enter customers primary email."
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </InputGroup>
                <DisplayError errors={errors} touched={touched} field={"customerPrimaryEmail"} />
            </Form.Group>

            <Form.Group controlId="customerSecondaryEmail">
                <Form.Label>Customer Secondary Email</Form.Label>
                <InputGroup>
                    <FormControl
                        className="form-control"
                        name="customerSecondaryEmail"
                        type="text"
                        value={values.customerSecondaryEmail}
                        placeholder="Enter customers secondary email."
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </InputGroup>
                <DisplayError errors={errors} touched={touched} field={"customerSecondaryEmail"} />
            </Form.Group>

            <Form.Group className={"mt-3"}>
                <Button onClick={handleSubmit} className="btn btn-primary">Add Customer</Button>
                {" "}
                <Button
                    className="btn btn-danger"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                >Reset
                </Button>
            </Form.Group>
        </Form>
            <DisplayStatus status={status} />
        </>
    )
}