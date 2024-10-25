import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { Button } from './ui/button';
import Edit from './edit';

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
  const [studentList, setStudentList] = useState<Student[]>(students);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const handleEditClick = (student: Student) => {
    setSelectedStudent(student);
  };

  const handleSave = (updatedStudent: Student) => {
    setStudentList((prevStudents) =>
      prevStudents.map((student) =>
        student.student_id === updatedStudent.student_id ? updatedStudent : student
      )
    );
    setSelectedStudent(null); 
  };

  const handleCancel = () => {
    setSelectedStudent(null); 
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of student profiles.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Roll No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {studentList.length > 0 ? (
            studentList.map((student) => (
              <React.Fragment key={student.student_id}>
                <TableRow>
                  <TableCell>{student.student_id}</TableCell>
                  <TableCell>{student.student_name}</TableCell>
                  <TableCell>{student.student_age}</TableCell>
                  <TableCell>{student.student_address}</TableCell>
                  <TableCell>{student.student_phone}</TableCell>
                  <TableCell>
                    <Button variant="outline" onClick={() => handleEditClick(student)}>
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
    
              </React.Fragment>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                No students found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Dialog for editing */}
      {selectedStudent && (
        <Edit
          initialStudent={selectedStudent}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default StudentsList;
