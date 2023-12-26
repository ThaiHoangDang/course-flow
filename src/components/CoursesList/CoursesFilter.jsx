import { getCurrentUserRole } from "../../firebase/authentication";
import CreateCourseForm from "./CreateCourseForm";

export default function CoursesFilter({ filterText, onFilterTextChange, onOpenedOnlyChange, openedOnly, courses }) {

  return (
    <div className="shadow-sm border-1 sticky top-10">
      <div className="form-control px-5 py-5">
        <p className="font-bold">Filter your results</p>
        <input value={filterText} onChange={(e) => onFilterTextChange(e.target.value)} type="text" placeholder="Code & Name" className="input input-bordered w-full my-3" />
        <label className="label cursor-pointer">
          <input checked={openedOnly} onChange={(e) => onOpenedOnlyChange(e.target.checked)} type="checkbox" className="checkbox" />
          <span className="label-text">Opened Only</span>
        </label>
      </div>
      {
        getCurrentUserRole() === "Admin" ?
          <div className="border-t px-5 py-5">
            <button onClick={()=>document.getElementById('my_modal_3').showModal()} class="btn btn-outline w-full">Create a new course</button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box max-h-[600px] no-scrollbar">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <CreateCourseForm courses={courses} />
              </div>
            </dialog>
          </div>
        : null
      }
    </div>
  );
}
