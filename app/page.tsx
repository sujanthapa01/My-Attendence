"use client"
import React from "react";
import { ModeToggle } from "@/app/components/ui/Darkmode";
import Search from "@/app/components/search";

import Form from "@/app/components/form";


export default function Home() {
 
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Dark Mode Toggle */}
                <div className="flex justify-end mb-4">
                    <ModeToggle />
                </div>
                <Form />
                {/* Student Profiles */}
              <Search/> 
            </div>
        </div>
    );
}
