
export default function EnrolmentTable({courses}) {
  return (
    <div className="overflow-x-auto bg-base-100 border-1">
      <table className="table table-zebra">
        <thead className="shadow-sm font-bold">
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Course type</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr>
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
