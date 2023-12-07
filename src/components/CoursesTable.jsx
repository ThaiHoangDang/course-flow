import { useNavigate } from "react-router-dom";


export default function CoursesTable({courses}) {
  const navigate = useNavigate();
  const handleRowClick = (id) => {
    navigate(`/course/${id}`);
  }  

  return (
    <div className="overflow-x-auto bg-base-100 border-1">
      <table className="table table-zebra">
        <thead className="shadow-sm font-bold">
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Course Type</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr className="hover:underline hover:cursor-pointer" key={course["code"]} onClick={()=> handleRowClick(course["id"])}>
                <td>{course["code"]}</td>
                <td>{course["name"]}</td>
                <td>{course["type"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
