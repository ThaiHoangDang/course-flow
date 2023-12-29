import { useNavigate } from "react-router-dom";

export default function InfoTable({ user }) {
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
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {
            user && user.program && user.my_program_map &&
            user.my_program_map.map((courseMap, index) => (
              courseMap.status >= 0 && courseMap.status <= 100 ?
              <tr key={index} >
                <td>{courseMap.semester}</td>
                <td className="hover:underline hover:cursor-pointer" onClick={()=> handleRowClick(courseMap.course["id"])}>{courseMap.course.code}</td>
                <td className="hover:underline hover:cursor-pointer" onClick={()=> handleRowClick(courseMap.course["id"])}>{courseMap.course.name}</td>
                <td>{courseMap.course.credits}</td>
                <td><span className="bg-green-200 py-[2px] px-3 rounded-full">Completed</span></td>
                <td>{courseMap.status}</td>
              </tr> : null
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
