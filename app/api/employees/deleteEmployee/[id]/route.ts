import employeeController from "@/app/controllers/employeeController";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, content: any) {
    try{
        const {id} = content?.params?.id;
        await employeeController.deleteEmployee(id);
        return NextResponse.json({status: 200, message: "Employee deleted successfully!"})
    }catch(error: any){
        return NextResponse.json({
            status: 500,
            error: error.message
        })
    }
}