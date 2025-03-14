import { NextResponse } from "next/server";
import employeeController from "@/app/controllers/employeeController";
import dbConnect from "@/app/utils/dbConnect";

export async function GET(){
    try{
        await dbConnect()
        const employees = await employeeController.getEmployees();
        return NextResponse.json({
            status: 200,
            data: {employees}
        })
    }catch(error: any){
        return NextResponse.json({
            status: 500,
            error: error.message
        })
    }
}