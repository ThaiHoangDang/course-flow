import { useNavigate } from "react-router-dom";


export default function CoursesTable({courses, filterText, openedOnly = false}) {
  
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
            <th>Credits</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {courses != null && courses.map((course) => {
            if (filterText !== "" && (! course["code"].toLowerCase().includes(filterText.toLowerCase())) && (! course["name"].toLowerCase().includes(filterText.toLowerCase()))) return null;
            if (openedOnly && course["status"] === false) return null;
            return (
              <tr className="hover:underline hover:cursor-pointer" key={course["code"]} onClick={()=> handleRowClick(course["id"])}>
                <td>{course["code"]}</td>
                <td>{course["name"]}</td>
                <td>{course["credits"]}</td>
                <td>{course["status"] === true ? "Opened" : "Closed"}</td>
              </tr>
            ); 
          })}
        </tbody>
      </table>
    </div>
  );
}
