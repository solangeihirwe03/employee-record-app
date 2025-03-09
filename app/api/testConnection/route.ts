import dbConnect from "@/app/utils/dbConnect";

export async function GET(){
    try{
        await dbConnect();
        return new Response("Datbase connection successfully", {status: 200})
    }catch(error: any){
        console.error("data connection  error", error.message || error)
        return new Response("Database connection failed", {status: 500})
    }
}