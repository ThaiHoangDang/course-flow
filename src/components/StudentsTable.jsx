
export default function StudentsTable({students, filterStudents}) {
  return (
    

    <div className="overflow-x-auto bg-base-100 border-1">
      <table className="table table-zebra">
        <thead className="shadow-sm font-bold">
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Program</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            if (filterStudents !== "" && (! student["sid"].toLowerCase().includes(filterStudents.toLowerCase())) && (! student["name"].toLowerCase().includes(filterStudents.toLowerCase()))) return null;
            return (
              <tr key={student["sid"]}>
                <td>{student["sid"]}</td>
                <td>{student["name"]}</td>
                <td>{student["programID"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
