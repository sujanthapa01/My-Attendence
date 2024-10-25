// Uncomment and import user data from your JSON file if needed
// import user from "@/app/user.json";

// Define the Student interface
export interface Student {
    student_name: string;
    student_age: string;
    student_id: number;
    student_address: string;
    student_phone: number;
}

// Initialize students with an empty array of type Student
export const students: Student[] = []; // Type assertion to ensure the correct type

// Function to register a new student
export const register = (
    student_name: string,
    student_age: string,
    student_id: number,
    student_phone: number,
    student_address: string
) => {
    const newStudent: Student = { // Renamed 'new' to 'newStudent' to avoid confusion with the 'new' keyword
        student_name,
        student_age,
        student_id,
        student_phone,
        student_address,
    };

    students.push(newStudent);
    // Optionally log the students array to verify registration
    // console.log(students);
};

// You could also consider a function to load initial data from the JSON file
// This function could be called when initializing your application
// export const loadStudents = (data: Student[]) => {
//     students.push(...data);
// };
