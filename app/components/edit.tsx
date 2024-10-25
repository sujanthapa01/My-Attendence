import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

interface Student {
  student_name: string;
  student_age: string;
  student_id: number;
  student_address: string;
  student_phone: number;
}

interface EditProps {
  initialStudent: Student | null;
  onSave: (updatedStudent: Student) => void;
  onCancel: () => void;
}

const Edit: React.FC<EditProps> = ({ initialStudent, onSave, onCancel }) => {
  const [student, setStudent] = useState<Student | null>(initialStudent);

  useEffect(() => {
    setStudent(initialStudent);
  }, [initialStudent]);

  const handleSave = () => {
    if (student) {
      onSave(student);
    }
  };

  if (!student) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
        className="bg-white rounded shadow-md p-4 mb-4 w-80"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={student.student_name}
            onChange={(e) => setStudent({ ...student, student_name: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={student.student_age}
            onChange={(e) => setStudent({ ...student, student_age: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={student.student_address}
            onChange={(e) => setStudent({ ...student, student_address: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={student.student_phone.toString()}
            onChange={(e) => setStudent({ ...student, student_phone: Number(e.target.value) })}
            required
          />
        </div>
        <div className="flex justify-end">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" className="ml-2">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
