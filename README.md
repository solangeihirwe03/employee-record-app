# Employee record app backend

This is a **full-stack application** built using **Next.js, MongoDB, and Typescript**.
The application allow users to **Create, Read, Update and Delete** employee records.

## Features

- Create a new employee(First Name, Last Name, Email, Phone, Role)
- Read all employees and display them in a list 
- Update employee details (First Name, Last Name, Phone) 
- Delete an employee  
- Server-side validation to prevent duplicate email registrations 
- MongoDB Atlas for database storage  

## Tech Stack
- **Frontend:** Next.js (App Router), React, TypeScript, Tailwind CSS 
- **Backend:** Next.js API Routes, Mongoose (MongoDB ORM)  
- **Database:** MongoDB Atlas (Cloud Database)  

## Project Structure


## Get started
- Clone repository
```bash
git clone https://github.com/solangeihirwe03/employee-record-app.git
```
- Install dependencies
```bash
npm install
```
- Run app - it will run on http://localhost:3000
```bash
npm run dev
```

## Folder Structure

- **`.next`**: This directory contains the build output and cache for Next.js.
- **`app/`**: Contains the main application code.
  - **`api/`**: API routes for handling employee-related operations.
    - **`employees/`**: Endpoints for employee management.
      - **`createEmployee/`**: Route for creating a new employee.
      - **`getEmployees/`**: Route for retrieving employee data.
      - **`testConnection/`**: Route for testing database connection.
    - **`controllers/`**: Contains the business logic for handling requests.
    - **`models/`**: Defines the data models (e.g., `employee.ts`).
    - **`types/`**: Contains TypeScript type definitions.
- **`index.d.ts`**: TypeScript declaration file.
- **`utils/`**: Utility files and configurations.
  - **`dbConnect.ts`**: Handles database connection.
  - **`globals.css`**: Global CSS styles.
  - **`layout.tsx`**: Layout component for the application.
  - **`page.tsx`**: Main page component.
  - **`public/`**: Static assets like images and icons.
  - **`.env`**: Environment variables configuration.
  - **`.gitignore`**: Specifies files to be ignored by Git.
  - **`next-env.d.ts`**: Next.js TypeScript configuration.
