import { useState, useEffect } from "react";

// Define the Student interface
export interface Student {
    student_name: string;
    student_age: string;
    student_id: number;
    student_address: string;
    student_phone: number;
}

// Initialize students with an empty array of type Student
export const students: Student[] = [];

// Registration function to add a student
export const register = (
    student_name: string,
    student_age: string,
    student_id: number,
    student_phone: number,
    student_address: string
) => {
    const obj: Student = {
        student_name,
        student_age,
        student_id,
        student_phone,
        student_address,
    };

    students.push(obj);
};

// Custom hook for managing student profiles
export const useStudentProfile = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filtered_students, setFilteredStudents] = useState<Student[]>(students);

    useEffect(() => {
        const lowerCasedSearchTerm = searchTerm.toLowerCase();

        if (searchTerm === '') {
            setFilteredStudents(students);
        } else {
            const filtered = students.filter(student =>
                student.student_name.toLowerCase().includes(lowerCasedSearchTerm) ||
                student.student_id.toString().includes(lowerCasedSearchTerm) ||
                student.student_address.toLowerCase().includes(lowerCasedSearchTerm) || // Optional: Include address
                student.student_age.includes(lowerCasedSearchTerm) // Optional: Include age if it's a string
            );
            setFilteredStudents(filtered);
        }
    }, [searchTerm]);

    return {
        searchTerm,
        setSearchTerm,
        filtered_students,
    };
};

// Import user data from JSON if necessary
// import user from "@/app/user.json";
// You can then initialize your students array with this data if needed.
