
export default function EnrolmentTable({ user }) {
  return (
    <div className="overflow-x-auto bg-base-100 border-1">
      <table className="table table-zebra">
        <thead className="shadow-sm font-bold">
          <tr>
            <th>Semester</th>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Availability</th>
            <th>Status</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {
            user && user.program && user.my_program_map &&
            user.my_program_map.map((courseMap, index) => (
              <tr key={index}>
                <td>{courseMap.semester}</td>
                <td>{courseMap.course.code}</td>
                <td>{courseMap.course.name}</td>
                <td>{courseMap.course["status"] === true 
                ? <span className="text-green-600">Opened</span>
                : <span className="text-red-600">Closed</span>}
                </td>
                {
                  courseMap.status >= 0 && courseMap.status <= 100 &&
                  <>
                    <td><span className="bg-green-200 py-[2px] px-3 rounded-full">Completed</span></td>
                    <td>{courseMap.status}</td>
                  </>
                }
                {
                  courseMap.status === -2 &&
                  <>
                    <td><span className="bg-red-200 py-[2px] px-3 rounded-full">Pending</span></td>
                    <td>_</td>
                  </>
                }
                {
                  courseMap.status === -1 &&
                  <>
                    <td><span className="bg-yellow-200 py-[2px] px-3 rounded-full">In Progress</span></td>
                    <td>_</td>
                  </>
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
