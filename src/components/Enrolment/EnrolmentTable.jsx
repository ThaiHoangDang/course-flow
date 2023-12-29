import { useNavigate } from "react-router-dom";

export default function EnrolmentTable({ user }) {
  const navigate = useNavigate();
  const handleRowClick = (id) => {
    navigate(`/course/${id}`);
  }

  function handleEnrolment(id) {

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
          {
            user && user.program && user.my_program_map &&
            user.my_program_map.map((courseMap, index) => (
              <tr key={index} >
                <td>{courseMap.semester}</td>
                <td className="hover:underline hover:cursor-pointer" onClick={()=> handleRowClick(courseMap.course["id"])}>{courseMap.course.code}</td>
                <td className="hover:underline hover:cursor-pointer" onClick={()=> handleRowClick(courseMap.course["id"])}>{courseMap.course.name}</td>
                <td>{courseMap.course.credits}</td>
                {
                  courseMap.status >= 0 && courseMap.status <= 100 &&
                  <>
                    <td><span className="bg-green-200 py-[2px] px-3 rounded-full">Completed</span></td>
                  </>
                }
                {
                  courseMap.status === -2 && courseMap.course.status === true &&
                    <td className="py-2">
                      <button className="bg-blue-200 hover:bg-blue-400 py-[2px] px-3 rounded-full" onClick={()=>document.getElementById('my_modal_3').showModal()}>Enroll Now</button>
                      <dialog id="my_modal_3" className="modal">
                        <div className="modal-box max-h-[600px] no-scrollbar">
                          <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                          </form>
                          {courseMap.course.prerequisites && courseMap.course.prerequisites.length === 0 ? "There are no prerequisites for this course" : null}
                        </div>
                      </dialog>
                    </td>
                }
                {
                  courseMap.status === -2 && courseMap.course.status === false &&
                  <>
                    <td><span className="bg-red-200 py-[2px] px-3 rounded-full">Closed</span></td>
                  </>
                }
                {
                  courseMap.status === -1 &&
                  <>
                    <td><span className="bg-yellow-200 py-[2px] px-3 rounded-full">In Progress</span></td>
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
