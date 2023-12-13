export default function ProgramAbout({ program, filterStudents, onFilterStudentsChange, filterCourses, onFilterCoursesChange }) {

  return (
    <div className="border sticky top-10">
      <div>
        <div className="h-16 bg-base-200 border-b">
          <h2 className="text-xl p-5">About</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              <tr>
                <td>Code</td>
                <td>{program["code"]}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{program["name"]}</td>
              </tr>
              <tr>
                <td>Courses</td>
                <td>
                  {program["program_map"] &&
                    program["program_map"].length}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-base-200">
        <div className="p-4 pb-0 border-t">
          <input
            value={filterCourses}
            onChange={(e) => onFilterCoursesChange(e.target.value)}
            type="text"
            placeholder="Search courses"
            className="input input-bordered w-full"
          />
        </div>
        <div className="p-4">
          <input
            value={filterStudents}
            onChange={(e) => onFilterStudentsChange(e.target.value)}
            type="text"
            placeholder="Search students"
            className="input input-bordered w-full"
          />
        </div>
      </div>
    </div>
  );
}