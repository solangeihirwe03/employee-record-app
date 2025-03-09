import { NextResponse } from "next/server";
import employeeController from "@/app/controllers/employeeController";
import employeeModel from "@/app/models/employee";

export async function POST(request: Request){
    try {
        const {firstName, lastName, email, phone, role} = await request.json();

        if (!firstName || !lastName || !email || !phone || !role) {
            return NextResponse.json(
              { message: "All fields (firstName, lastName, email, phone, role) are required.",
               status: 400 
            });
        }
        const user = await employeeModel.findOne({email})
        if(user){
            return NextResponse.json({
                status: 400,
                error: "email already exist"
            })
        }
        const employee = await employeeController.createEmployee({ firstName, lastName, email, phone, role })

        return NextResponse.json(employee, {status: 201})
    }catch(error: any){
        return NextResponse.json({
            status: 500,
            error: error.message
        })
    }
}
