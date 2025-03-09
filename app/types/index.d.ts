export interface Employee {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    role: "Admin" | "staff";
    createdAt: Date;
    updatedAt: Date;
}