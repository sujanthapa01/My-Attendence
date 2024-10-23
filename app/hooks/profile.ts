import { useState, useEffect } from "react";
import { students } from "./register"; 


export const useStudentProfile = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filtered_students, setFilteredStudents] = useState(students); 

    useEffect(() => {
        const lowerCasedSearchTerm = searchTerm.toLowerCase();

        if (searchTerm === '') {
            setFilteredStudents(students);
        } else {
            const filtered = students.filter(student => 
                student.student_name.toLowerCase().includes(lowerCasedSearchTerm) || 
                student.student_id.toString().includes(lowerCasedSearchTerm)
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
