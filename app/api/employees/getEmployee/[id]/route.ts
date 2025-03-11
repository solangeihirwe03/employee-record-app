import employeeController from "@/app/controllers/employeeController";
import { NextResponse } from "next/server";

export async function GET(request:Request, content: any) {
    try{
        const {id} = content?.params?.id;
        const employee = await employeeController.getEmployeeById(id);

        return NextResponse.json({
            status:200,
            data: {employee}
        })
    }catch(error: any){
        return NextResponse.json({
            status: 500,
            error: error.message
        })
    }
}