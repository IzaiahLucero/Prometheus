import { Schema } from 'express-validator'

export const customerValidator: Schema = {
    customerFirstName: {
        escape:true,
        trim: true,
        isLength: {
            errorMessage: 'Customer First Name must be between 3 and 16 characters.',
            options: {min: 3, max: 16}
        },
    },

    customerLastName: {
        escape:true,
        trim: true,
        isLength: {
            errorMessage: 'Customer Last Name must be between 3 and 16 characters.',
            options: {min: 3, max: 16}
        },
    },

    customerMailingAddress: {
        escape:true,
        trim: true,
        isLength: {
            errorMessage: 'Customer Mailing Address must be between 3 and 64 characters.',
            options: {min: 3, max: 64}
        },
    },

    customerMailingCity: {
        escape:true,
        trim: true,
        isLength: {
            errorMessage: 'Customer Mailing City must be between 3 and 16 characters.',
            options: {min: 3, max: 16}
        },
    },

    customerMailingState: {
        escape:true,
        trim: true,
        isLength: {
            errorMessage: 'Customer Mailing State must be between 3 and 16 characters.',
            options: {min: 2, max: 2}
        },
    },

    customerMailingZip: {
        escape:true,
        trim: true,
        isLength: {
            errorMessage: 'Customer Mailing Zip must be between 3 and 16 characters.',
            options: {min: 5, max: 5}
        },
    },

    customerPrimaryPhone: {
        escape:true,
        trim: true,
        isLength: {
            errorMessage: 'Customer Primary Phone must be 10 digits.',
            options: {min: 10, max: 10}
        },
    },

    customerSecondaryPhone: {
        escape:true,
        trim: true,
    },

    customerPrimaryEmail: {
        escape:true,
        trim: true,
        isLength: {
            errorMessage: 'Customer Primary Email must be at least 7 characters.',
            options: {min: 7, max: 64}
        },
    },

    customerSecondaryEmail: {
        escape:true,
        trim: true,
    },
}
