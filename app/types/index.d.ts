export interface Employee {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    role: "Admin" | "staff";
    createdAt: Date;
    updatedAt: Date;
}