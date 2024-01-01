export default function CourseStudentTable() {

  return (
    <div className="overflow-x-auto bg-base-100 border-1">
      <table className="table table-zebra">
        <thead className="shadow-sm font-bold">
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* {students.map((student, index) => {
            if (filterStudents !== "" && (! student["sid"].toLowerCase().includes(filterStudents.toLowerCase())) && (! student["name"].toLowerCase().includes(filterStudents.toLowerCase()))) return null;
            return (
              <tr key={student["email"]}>
                <td>{index + 1}</td>
                <td>{student["name"]}</td>
                <td>{student["email"]}</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </div>

  );
}