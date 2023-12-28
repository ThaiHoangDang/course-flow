import { getCurrentUserRole } from "../../firebase/authentication";
import CreateProgramForm from "../ProgramsList/CreateProgramForm";

export default function ProgramAbout({ program, filterStudents, onFilterStudentsChange, filterCourses, onFilterCoursesChange }) {
  console.log(program);

  return (
    <div className="border sticky top-10">
      <div className="h-16 bg-base-200 border-b">
        <h2 className="text-xl p-5">Search</h2>
      </div>
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
      <div className="overflow-x-auto">
        {
          getCurrentUserRole() === "Admin" ?
            <div className="border-t px-5 py-5">
              <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn btn-outline w-full">Edit program</button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box max-h-[600px] no-scrollbar">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  {/* <CreateProgramForm inputProgram={program} /> */}
                </div>
              </dialog>
            </div>
          : null
        }
      </div>
    </div>
  );
}