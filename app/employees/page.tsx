"use client";
import React, { useEffect, useState } from 'react'
import { Employee } from '../types';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RiDeleteBin5Line } from "react-icons/ri";

const EmployeesPage = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('/api/employees/getEmployees')
                setEmployees(response.data.data.employees)
            } catch (error: any) {
                console.error("Failed to fetch employees")
            }
        }
        fetchEmployees()
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`/api/employees/deleteEmployee/${id}`)
            setEmployees(employees.filter(employee => employee._id !== id))
        } catch (error) {
            console.error('Failed to delete employee:', error);
        }
    }

    const toggleSelect = (id: string) => {
        setSelectedEmployees((prev: any) => prev.includes(id) ? prev.filter((empId: any) => empId !== id) : [...prev, id]
        );
    };

    const handleChange = () => {
        if (selectedEmployees) {
            router.push(`employees/update/${selectedEmployees}`);
        } else {
            alert("Please select an employee!");
        }
    };
    return (
        <div className='text-gray-600 px-10'>
            <div className='min-w-full flex justify-between px-3 py-3'>
                <h1>Employees</h1>
                <Link
                    href="/employees/add"
                    className='bg-[#2BDA53] text-white py-2 px-4'
                >
                    Add employee
                </Link>
            </div>
            <div className='bg-white min-w-full h-16 p-4'>
                <h2>Josh Bakery Ventures</h2>
                <p>62, Bode Thomas, Surulere, Lagos</p>
            </div>
            <div className="p-4">
                <button
                    onClick={handleChange}
                    className="bg-[#2BDA53] text-white px-4 py-2 rounded mb-4"
                >
                    Change
                </button>
            </div>
                <table className='min-w-full bg-white'>
                    <thead className='bg-gray-100'>
                        <tr>
                            <th className='px-6 py-3 text-left text-md font-semibold text-gray-700 tracking-wider'></th>
                            <th className='px-6 py-3 text-left text-md font-semibold text-gray-700 tracking-wider'>First Name</th>
                            <th className='px-6 py-3 text-left text-md font-semibold text-gray-700 tracking-wider'>Last Name</th>
                            <th className='px-6 py-3 text-left text-md font-semibold text-gray-700 tracking-wider'>Email</th>
                            <th className='px-6 py-3 text-left text-md font-semibold text-gray-700 tracking-wider'>Phone</th>
                            <th className='px-6 py-3 text-left text-md font-semibold text-gray-700 tracking-wider'>Role</th>
                            <th className='px-6 py-3 text-left text-md font-semibold text-gray-700 tracking-wider'></th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                        {employees.map((employee, index) => (
                            <tr
                                key={employee._id} >
                                <td className="p-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedEmployees.includes(employee._id)}
                                        onChange={() => toggleSelect(employee._id)}
                                        className="cursor-pointer accent-green-500"
                                    />
                                </td>
                                <td className='px-6 py-4 whitespace-nowrap text-md text-gray-900'>{employee.firstName}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-md text-gray-900'>{employee.lastName}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-md text-gray-900'>{employee.email}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-md text-gray-900'>{employee.phone}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-md text-gray-900'>{employee.role}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    <button
                                        onClick={() => handleDelete(employee._id)}
                                        className='text-gray-600'>
                                        <RiDeleteBin5Line />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            )
}

export default EmployeesPage
