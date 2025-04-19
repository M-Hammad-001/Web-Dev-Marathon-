import { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";
import { Link } from "react-router-dom";

export default function Dashboard() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // axios.get("/api/courses/mine").then(res => setCourses(res.data));
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">My Courses</h1>
        <Link to="/create-course" className="bg-green-500 text-white px-4 py-2 rounded">Create New</Link>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {courses.map(course => <CourseCard key={course.id} course={course} />)}
      </div>
    </div>
  );
}