import { sql } from '../database.utils'

export interface Customer{
    customerId: string|null,
    customerFirstName: string,
    customerLastName: string,
    customerMailingAddress: string,
    customerMailingCity: string,
    customerMailingState: string,
    customerMailingZip: string,
    customerPrimaryPhone: string,
    customerSecondaryPhone: string,
    customerPrimaryEmail: string,
    customerSecondaryEmail: string
}

export async function insertCustomer (customer: Customer): Promise<string> {
    const {customerFirstName, customerLastName, customerMailingAddress, customerMailingCity, customerMailingState, customerMailingZip, customerPrimaryPhone, customerSecondaryPhone, customerPrimaryEmail, customerSecondaryEmail} = customer
    await sql `INSERT INTO customer (customer_id, customer_first_name, customer_last_name, customer_mailing_address, customer_mailing_city, customer_mailing_state, customer_mailing_zip, customer_primary_phone, customer_secondary_phone, customer_primary_email, customer_secondary_email) VALUES(gen_random_uuid(), ${customerFirstName}, ${customerLastName}, ${customerMailingAddress}, ${customerMailingCity}, ${customerMailingState}, ${customerMailingZip}, ${customerPrimaryPhone}, ${customerSecondaryPhone}, ${customerPrimaryEmail}, ${customerSecondaryEmail})`
    return 'Customer created successfully'
}

export async function selectAllCustomers (): Promise<Customer[]> {
    return sql <Customer[]>  `SELECT customer_id, customer_first_name, customer_last_name, customer_mailing_address, customer_mailing_city, customer_mailing_state, customer_mailing_zip, customer_primary_phone, customer_secondary_phone, customer_primary_email, customer_secondary_email FROM customer ORDER BY customer_first_name DESC`
}