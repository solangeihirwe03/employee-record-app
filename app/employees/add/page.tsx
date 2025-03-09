"use client";
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import axios from 'axios';

const AddEmployee = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: 'Staff'
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/employees/createEmployee", formData)
            console.log(">>>>>>>>>>>>>>>>", response)
            if (response.status === 201) {
                alert("Employee added successfully!")
                router.push("/employees")
            }
        } catch (error: any) {
            console.error("Failed to add employee", error.message)
        }
    }
    return (
        <div className='p-6 text-gray-700'>
            <h1 className='text-2xl font-bold mb-4'>Add New Employee</h1>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label
                        htmlFor="firstName"
                        className='block text-sm font-medium text-gray-700'
                    >
                        First Name
                    </label>
                    <input
                        type="text"
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                        className='mt-1 block w-full px-3 py-2 norder border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    />
                </div>
                <div>
                    <label
                        htmlFor="lastName"
                        className='block text-sm font-medium text-gray-700'
                    >
                        Last Name
                    </label>
                    <input
                        type="text"
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                        className='mt-1 block w-full px-3 py-2 norder border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className='block text-sm font-medium text-gray-700'
                    >
                        email
                    </label>
                    <input
                        type="email"
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className='mt-1 block w-full px-3 py-2 norder border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    />
                </div>
                <div>
                    <label
                        htmlFor="phone"
                        className='block text-sm font-medium text-gray-700'
                    >
                        Phone
                    </label>
                    <input
                        type="number"
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        className='mt-1 block w-full px-3 py-2 norder border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Role</label>
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="Staff">Staff</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
                <div>
                    <button
                        type='submit'
                        className='bg-[#2BDA53] text-white px-4 py-2 rounded-md hover:bg-blue-600'>
                        Add employee
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddEmployee
