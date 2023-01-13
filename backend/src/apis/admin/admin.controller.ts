import { Request, Response } from 'express'
import { Admin, selectPartialAdminByAdminId, updateAdmin} from '../../utils/models/Admin'
import { Status } from '../../utils/interfaces/Status'

export async function putAdminController (request: Request, response: Response): Promise<Response> {
    try {
        const { adminId } = request.params
        const admin = request.session.admin as Admin
        const adminIdFromSession = admin.adminId as string

        if (adminId !== adminIdFromSession) {
            return response.json({ status: 400, data: null, message: 'You are not allowed to perform this task' })
        }

        const { adminPhone, adminEmail, adminName } = request.body
        const updatedValues = { adminPhone, adminEmail, adminName }
        const previousAdmin: Admin = await selectPartialAdminByAdminId(adminId) as Admin

        const newAdmin: Admin = { ...previousAdmin, ...updatedValues }
        await updateAdmin(newAdmin)
        return response.json({ status: 200, data: null, message: 'Admin successfully updated' })
    } catch (error: any) {
        return response.json({ status: 400, data: null, message: error.message })
    }
}

export async function getAdminByAdminIdController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const { adminId } = request.params
        const mySqlResult = await selectPartialAdminByAdminId(adminId)
        const data = mySqlResult ?? null
        const status: Status = { status: 200, data, message: null }
        return response.json(status)
    } catch (error: any) {
        return (response.json({ status: 400, data: null, message: error.message }))
    }
}
