
export default function EnrolmentTable({ user }) {
  return (
    <div className="overflow-x-auto bg-base-100 border-1">
      <table className="table table-zebra">
        <thead className="shadow-sm font-bold">
          <tr>
            <th>Semester</th>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Status</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {
            user && user.program && user.program.program_map &&
            user.program.program_map.map((courseMap) => (
              <tr key={courseMap}>
                <td>{courseMap.semester}</td>
                <td>{courseMap.course.code}</td>
                <td>{courseMap.course.name}</td>
                <td><span className="bg-green-300 py-1 px-3 rounded-full">Completed</span></td>
                <td>90</td>
              </tr>
            ))
          }
          <tr>
            <td>CS 246</td>
            <td>Object Oriented Software Development</td>
            <td><span className="bg-green-300 py-1 px-3 rounded-full">Completed</span></td>
            <td>HD</td>
          </tr>
          <tr>
            <td>CS 234</td>
            <td>Data Structure and Algorithms</td>
            <td><span className="bg-yellow-300 py-1 px-3 rounded-full">In Progress</span></td>
            <td>_</td>
          </tr>
          <tr>
            <td>CS 136</td>
            <td>Final Project</td>
            <td><span className="bg-blue-300 py-1 px-3 rounded-full">Opened</span></td>
            <td>_</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
