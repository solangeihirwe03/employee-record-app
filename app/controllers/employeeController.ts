import { NextResponse } from "next/server";
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

const getEmployees = async()=>{
    try{
        const employees = await employeeModel.find({});
        if(!employees || (await employees).length === 0){
            throw new Error("No employees exist")
        }
        return employees
    }catch(error: any){
       throw new Error(error.message)
    }
}

const getEmployeeById = async(id:string)=>{
    try{
        const employee = await employeeModel.findById(id)
        if(!employee){
            throw new Error("Employee not found")
        }
        return employee
    }catch(error:any){
        throw new Error(error.message)
    }
}

const updateEmployee = async(id: string, updatedData: any)=>{
    try{
        const employee = await employeeModel.findById(id);
    if (!employee) {
      throw new Error('Employee not found');
    }

    if (updatedData.email) {
      delete updatedData.email;
      return ('Email field removed from update data'); 
    }
    const updatedEmployee = await employeeModel.findByIdAndUpdate(id, {$set: updatedData}, {new: true})
    if(!updatedEmployee){
        return ("Employee not found")
    }
        
    return updatedEmployee;
    }catch(error: any){
        return (error.message)
    }
}

const deleteEmployee = async(id:string)=>{
    try {
        const employee = await employeeModel.findById(id);
        if(!employee) {
            return ("Employee not found")
        }

        await employeeModel.findByIdAndDelete(id)
    }catch(error: any){
        return (error.message)
    }
}

export default {
    createEmployee,
    getEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
}

