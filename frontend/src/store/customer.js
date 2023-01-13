import { createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/http-config.js";

const customerSlice = createSlice( {
    name: "customer",
    initialState: [],
    reducers: {
        setAllCustomer: (customer, action ) => action.payload
    }
})

export const {setAllCustomer} = customerSlice.actions

export default customerSlice.reducer

export function fetchAllCustomer () {
    return async function (dispatch) {
        const {data} = await httpConfig('/apis/customer')
        dispatch(setAllCustomer(data))
    }
}