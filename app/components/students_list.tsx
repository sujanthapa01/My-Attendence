import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/app/components/ui/table"; // Ensure correct imports


interface Student {
  student_name: string;
  student_age: string;
  student_id: number;
  student_address: string;
  student_phone: number;
}

interface StudentsListProps {
    students: Student[];
}

const StudentsList: React.FC<StudentsListProps> = ({ students }) => {
  return (
      <Table>
          <TableCaption>A list of student profiles.</TableCaption>
          <TableHeader>
              <TableRow>
                  <TableHead>Roll No</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Phone</TableHead>
              </TableRow>
          </TableHeader>
          <TableBody>
              {students.length > 0 ? (
                  students.map((student) => (
                      <TableRow key={student.student_id}>
                          <TableCell>{student.student_id}</TableCell>
                          <TableCell>{student.student_name}</TableCell>
                          <TableCell>{student.student_age}</TableCell>
                          <TableCell>{student.student_address}</TableCell>
                          <TableCell>{student.student_phone}</TableCell>
                      </TableRow>
                  ))
              ) : (
                  <TableRow>
                      <TableCell colSpan={5} className="text-center">No students found</TableCell>
                  </TableRow>
              )}
          </TableBody>
      </Table>
  );
};


export default StudentsList;
