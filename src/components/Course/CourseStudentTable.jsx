export default function CourseStudentTable({ students, filterStudents, grades, onGradesChange }) {

  function updateGrade(index, value) {
    const newGrades = [...grades];  // Create a shallow copy of the grades array
    newGrades[index] = parseInt(value, 10);  // Parse value to ensure it's a number
    onGradesChange(newGrades);
  }

  return (
    <div className="bg-base-100 border-1">
      <table className="overflow-x-auto table table-zebra">
        <thead className="shadow-sm font-bold">
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Email</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
        {students && students.map((student, index) => {
            if (filterStudents !== "" && (! student["email"].toLowerCase().includes(filterStudents.toLowerCase())) && (! student["name"].toLowerCase().includes(filterStudents.toLowerCase()))) return null;
            return (
              <tr key={student["email"]}>
                <td>{index + 1}</td>
                <td>{student["name"]}</td>
                <td>{student["email"]}</td>
                <td><input type="number" value={grades[index] === -1 ? null : grades[index]} onChange={(e) => updateGrade(index, e.target.value)} className="input input-bordered input-xs max-w-xs" /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>

  );
}