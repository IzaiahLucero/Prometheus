import { Schema } from 'express-validator'

export const adminValidator: Schema = {
    adminPhone: {
        escape: true,
        trim: true,
        optional: {
            options: {
                nullable: true
            }
        },
        isLength: {
            errorMessage: 'Admin phone must be between one and thirty two characters',
            options: { min: 1, max: 32 }
        }
    },
    adminEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        // Uncomment the next line to sanitize email, but it removes +1 from testing email addresses.
        normalizeEmail: true,
        trim: true
    },
    adminName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Admin name must be between one and thirty two characters',
            options: { min: 1, max: 64 }
        }
    }
}
