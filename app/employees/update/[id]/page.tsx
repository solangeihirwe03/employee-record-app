"use client";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';

const UpdateProfile = () => {
    const router = useRouter();
    const {id} = useParams();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: ""
    })

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const response = await axios.get(`/api/employees/getEmployee/${id}`)
                console.log(response.data.data.employee)
                setFormData(response.data.data.employee)
            } catch (error: any) {
                console.error("Failed to fetch employee")
            }
        }
        fetchEmployee()
    }, [id])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.put(`/api/employees/updateEmployee/${id}`, formData)
            alert("Employee updated successfully")
            router.push("/employees")
        } catch (error: any) {
            console.error("Failed to update employee:", error)
        }
    }
    return (
        <div className='text-gray-700'>
            <h1 className="text-2xl font-bold mb-4">Update profile</h1>
            <form onSubmit={handleUpdate} className='space-y-4'>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                        className='"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name='lastName'
                        value={formData.lastName}
                        onChange={handleChange}
                        className='"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name='firstName'
                        value={formData.email}
                        disabled
                        className='"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none cursor-not-allowed'
                    />
                </div>
                <div>
                    <label htmlFor="role">Role</label>
                    <input
                        type="text"
                        name='role'
                        value={formData.role}
                        disabled
                        className='"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none cursor-not-allowed'
                    />
                </div>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name='firstName'
                        value={formData.firstName}
                        onChange={handleChange}
                        className='"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                    />
                </div>
                <div>
                    <button
                        type='submit'
                        className='bg-[#2BDA53] text-white px-4 py-2 rounded-md hover:bg-blue-600'>
                        Update employee
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProfile
