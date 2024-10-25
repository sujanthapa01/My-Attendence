// import user from "@/app/user.json";

export interface Student {
    student_name: string;
    student_age: string;
    student_id: number;
    student_address: string;
    student_phone: number;
}

// Initialize students with data from the JSON file
export const students= []; // Use type assertion to ensure the correct type

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
    // console.log(students);
};
