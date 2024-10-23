"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { register } from "@/app/hooks/register";

import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import { Button } from "@/app/components/ui/button";

interface FormValues {
  student_name: string;
  student_dob: string; 
  student_id: string;
  student_address: string;
  student_phone: string;
}

function Form() { // Capitalized name for component

  const [formValues, setFormValues] = useState<FormValues>({
    student_name: "sujan thapa",
    student_dob: "20-08-2005",
    student_id: "4658",
    student_address: "sidhbari",
    student_phone: "7876832136",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { student_name, student_dob, student_id, student_address, student_phone } = formValues;
    
  
    register(
      student_name,
      student_dob,
      Number(student_id),
      Number(student_phone),
      student_address
    );

    setFormValues({
      student_name: "",
      student_dob: "",
      student_id: "",
      student_address: "",
      student_phone: "",
    });
  };

  return (
    <form
      onSubmit={handleRegister}
      className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">Register</h2>

      <div className="space-y-4">
        <div>
          <Label htmlFor="student_name" className="font-semibold">Student Name</Label>
          <Input
            type="text"
            id="student_name"
            name="student_name"
            value={formValues.student_name}
            onChange={handleInputChange}
            placeholder="Enter student name"
            className="mt-2"
            required
          />
        </div>

        <div>
          <Label htmlFor="student_dob" className="font-semibold">Date of Birth</Label>
          <Input
            type="date"
            id="student_dob"
            name="student_dob"
            value={formValues.student_dob}
            onChange={handleInputChange}
            className="mt-2"
            required
          />
        </div>

        <div>
          <Label htmlFor="student_id" className="font-semibold">ID</Label>
          <Input
            type="number"
            id="student_id"
            name="student_id"
            value={formValues.student_id}
            onChange={handleInputChange}
            placeholder="Enter student ID"
            className="mt-2"
            required
          />
        </div>

        <div>
          <Label htmlFor="student_address" className="font-semibold">Address</Label>
          <Textarea
            id="student_address"
            name="student_address"
            value={formValues.student_address}
            onChange={handleInputChange}
            placeholder="Enter student address"
            rows={4}
            className="mt-2"
            required
          />
        </div>

        <div>
          <Label htmlFor="student_phone" className="font-semibold">Phone</Label>
          <Input
            type="tel"
            id="student_phone"
            name="student_phone"
            value={formValues.student_phone}
            onChange={handleInputChange}
            placeholder="Enter student phone"
            className="mt-2"
            required
          />
        </div>
      </div>

      <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md mt-4">
        Register
      </Button>
    </form>
  );
}

export default Form;
