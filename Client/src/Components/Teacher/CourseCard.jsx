import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
      <p>{course.description}</p>
      <Link to={`/course/${course.id}`} className="text-blue-500 mt-2 block">View</Link>
    </div>
  );
  
}

export default CourseCard;