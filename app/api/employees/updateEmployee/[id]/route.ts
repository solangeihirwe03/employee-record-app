import { NextResponse } from "next/server";
import employeeController from "@/app/controllers/employeeController";

export async function PUT(request: Request, {params}:{params: {id:string}}) {
    try{
        const {id} = params
        const body = await request.json();

        const updatedEmployee = await employeeController.updateEmployee(id, body);
        return NextResponse.json({
            status: 200,
            data: {updatedEmployee}
        })
    }catch(error:any){
        return NextResponse.json({
            status: 500,
            error: error.message
        })
    }
}