import {Request, Response} from "express";
import {Customer, insertCustomer, selectAllCustomers} from "../../utils/models/Customer";
import {Status} from "../../utils/interfaces/Status";


export async function getAllCustomers (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const data = await selectAllCustomers()
        const status: Status = { status: 200, message: null, data }
        return response.json(status)
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function postCustomer (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const { customerFirstName, customerLastName, customerMailingAddress, customerMailingCity, customerMailingState, customerMailingZip, customerPrimaryPhone, customerSecondaryPhone, customerPrimaryEmail, customerSecondaryEmail } = request.body

        const customer: Customer = { customerId: null, customerFirstName, customerLastName, customerMailingAddress, customerMailingCity, customerMailingState, customerMailingZip, customerPrimaryPhone, customerSecondaryPhone, customerPrimaryEmail, customerSecondaryEmail}

        const result = await insertCustomer(customer)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        }
        return response.json(status)
    } catch (error) {
        console.log(error)
        return response.json({
            status: 500,
            message: 'Error adding customer, try again later.',
            data: null,
        })
    }
}