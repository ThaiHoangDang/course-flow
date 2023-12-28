import { useNavigate } from "react-router-dom";


export default function ProgramCoursesTable({programMap, filterCourses, openedOnly = false}) {
  
  const navigate = useNavigate();
  const handleRowClick = (id) => {
    navigate(`/course/${id}`);
  }  

  return (
    <div className="overflow-x-auto bg-base-100 border-1">
      <table className="table table-zebra">
        <thead className="shadow-sm font-bold">
          <tr>
            <th>Semester</th>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Credits</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {programMap != null && programMap.map((courseMap) => {
            if (filterCourses !== "" && (! courseMap["course"]["code"].toLowerCase().includes(filterCourses.toLowerCase())) && (! courseMap["course"]["name"].toLowerCase().includes(filterCourses.toLowerCase()))) return null;
            if (openedOnly && courseMap["course"]["status"] === false) return null;
            return (
              <tr className="hover:underline hover:cursor-pointer" key={courseMap["course"]["code"]} onClick={()=> handleRowClick(courseMap["course"]["id"])}>
                <td>{courseMap["semester"]}</td>
                <td>{courseMap["course"]["code"]}</td>
                <td>{courseMap["course"]["name"]}</td>
                <td>{courseMap["course"]["credits"]}</td>
                <td>{courseMap["course"]["status"] === true 
                  ? <span className="text-green-600">Opened</span>
                  : <span className="text-red-600">Closed</span>}
                </td>
              </tr>
            ); 
          })}
        </tbody>
      </table>
    </div>
  );
}
