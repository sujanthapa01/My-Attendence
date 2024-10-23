"use client";

import React from "react";
import { Input } from "@/app/components/ui/input";
import { useStudentProfile } from "@/app/hooks/profile";
import StudentsList from "./students_list";
 



function Search() {
  const { searchTerm, setSearchTerm, filtered_students } = useStudentProfile();

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
        Student Profiles
      </h1>

      <Input
        type="text"
        placeholder="Search by name or ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 mt-2"
      />


      <StudentsList students={filtered_students} />
    </div>
  );
}

export default Search;
