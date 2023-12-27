import { Link } from "react-router-dom";
import { getCurrentUserRole } from "../../firebase/authentication";
import CreateCourseForm from "../CoursesList/CreateCourseForm";

export default function CourseAbout({ course }) {

  return (
    <div className="border sticky top-10">
      <div className="h-16 bg-base-200 border-b">
        <h2 className="text-xl p-5">About</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr>
              <td>Code</td>
              <td>{course["code"]}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{course["name"]}</td>
            </tr>
            <tr>
              <td>Credits</td>
              <td>{course["credits"]}</td>
            </tr>
            <tr>
              <td>Prerequites</td>
              <td>
                {
                  course["prerequisites"] && course["prerequisites"].length > 0
                    ? course["prerequisites"].map((item, index) => (
                        <div className="hover:underline" key={index}>
                          <Link to={`/course/${item.id}`}>
                            {item.code}
                          </Link>
                        </div>
                      ))
                    : "None"
                }
              </td>
            </tr>
              <td>Status</td>
              <td>{course["status"] === true 
                ? <span className="text-green-600">Opened</span>
                : <span className="text-red-600">Closed</span>}
              </td>
          </tbody>
        </table>
        {
          getCurrentUserRole() === "Admin" ?
            <div className="border-t px-5 py-5">
              <button onClick={()=>document.getElementById('my_modal_3').showModal()} class="btn btn-outline w-full">Edit course</button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box max-h-[600px] no-scrollbar">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <CreateCourseForm inputCourse={course} />
                </div>
              </dialog>
            </div>
          : null
        }
        </div>
    </div>
  );
}