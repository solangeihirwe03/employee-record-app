import employeeModel from "../models/employee";
import { Employee } from "../types";

const createEmployee = async (body: any) => {
    try{
        if (!body.firstName || !body.lastName || !body.email || !body.phone || !body.role) {
            throw new Error('Missing required fields');
          }
          const employee = await employeeModel.create({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            phone: body.phone,
            role: body.role,
          });
        
        return employee;
    }catch (error: any) {
        throw new Error(error.message);
      }
}

export default {
    createEmployee
}

