import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { db } from "../../config/firebase";
import { collection, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { getAllCourses } from "../../firebase/courses";


export default function CreateCourseForm({ inputCourse = null }) {
  const [courses, setCourses] = useState([]);
  const [code, setCode] = useState("");
  const [credit, setCredit] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [prerequisites, setPrerequisites] = useState([]);
  const [status, setStatus] = useState(true);
  const [searchCourse, setSearchCourse] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCourses() {
			const courseInfo = await getAllCourses();
      setCourses(courseInfo);
    }

    fetchCourses();
  }, []);


  useEffect(() => {
    if (inputCourse != null) {
      setCode(inputCourse["code"] || "");
      setCredit(inputCourse["credits"] || "");
      setTitle(inputCourse["name"] || "");
      setDescription(inputCourse["description"] || "");
      setPrerequisites(inputCourse["prerequisites"] || []);
      setStatus(inputCourse["status"]);
    }
  }, [inputCourse]);

  const handleSearch = (value) => {
		setSearchCourse(value);

    const prerequisiteIds = prerequisites.map(prerequisite => prerequisite.id);

		// Filter through your courses based on the search term
		let filtered = courses.filter(course =>
			(course.name.toLowerCase().includes(value.toLowerCase()) 
      || course.code.toLowerCase().includes(value.toLowerCase()))
      && (! prerequisiteIds.includes(course["id"]))
		);

		setFilteredCourses(filtered); // Update your filteredCourses state with the filtered courses
	};

  function addPrerequisite(course) {
    setPrerequisites([...prerequisites, course]);
    setSearchCourse('');
  }

  function removePrerequisite(course) {
    setPrerequisites(prerequisites.filter(prereq => prereq !== course));
  }

  async function submit() {
    if (!code || !credit || !title || !description) {
      alert("Please fill in all required fields.");
      return;
    }

    const prerequisiteIds = prerequisites.map(prerequisite => prerequisite.id);

    const newCourse = {
      code: code,
      credits: credit,
      description: description,
      name: title,
      prerequisites: prerequisiteIds,
      status: status,
    };

    await addDoc(collection(db, "course"), newCourse);
    window.location.reload();
  }

  async function updateCourse() {
    if (!code || !credit || !title || !description) {
      alert("Please fill in all required fields.");
      return;
    }

    const prerequisiteIds = prerequisites.map(prerequisite => prerequisite.id);

    const newCourse = {
      code: code,
      credits: credit,
      description: description,
      name: title,
      prerequisites: prerequisiteIds,
      status: status,
    };

    const courseRef = doc(db, "course", inputCourse["id"]);
    await updateDoc(courseRef, newCourse);
    window.location.reload();
  }

  async function deleteCourse() {
    await deleteDoc(doc(db, "course", inputCourse["id"]));
    navigate('/courses-list');
  }

  return (
    <div className="my-8 mx-2">
      <h2 className="text-2xl text-center">{ inputCourse ? "Edit course" : "Create a new course"}</h2>
      <form className="mt-16">
        <div className="mb-5 flex gap-5">
          <div className="basis-8/12">
            <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course code</label>
            <input value={code} id="code" onChange={(e) => setCode(e.target.value)} type="text" placeholder="CS 246.." className="input input-bordered input-md w-full" required/>
          </div>
          <div className="basis-4/12">
            <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
            <select
              value={status ? "true" : "false"}
              onChange={(e) => setStatus(e.target.value === "true")}
              id="status"
              className="select select-bordered w-full max-w-xs"
              required
            >
              <option value="true">Opened</option>
              <option value="false">Closed</option>
            </select>
          </div>
        </div>
        <div className="mb-5 flex gap-5">
          <div className="basis-9/12">
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course name</label>
            <input value={title} id="title" onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Object Oriented Development.." className="input input-bordered input-md w-full" required/>
          </div>
          <div className="basis-3/12">
            <label htmlFor="credit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Credits</label>
            <input value={credit} id="credit" onChange={(e) => setCredit(e.target.value)} type="number" placeholder="12.." className="input input-bordered input-md w-full" required/>
          </div>
        </div>
        <div className="mb-5">
          <label  htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course description</label>
          <textarea value={description} id="description" rows={3} onChange={(e) => setDescription(e.target.value)} className="textarea textarea-bordered w-full" placeholder="This course introduces.." required></textarea>
        </div>
        <div className="mb-5">
          <label  htmlFor="prerequisites" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course prerequisites</label>
          <div id="prerequisites" className="mb-4 text-sm rounded-lg border-neutral-300 bg-neutral-100 border">
            {
              prerequisites && prerequisites.length === 0
              ?
                <div className="p-3">
                  There are currently no prerequisites for this course
                </div>
              :
              <ul>
                {prerequisites && prerequisites.map(course => (
                  <li key={course.id} onClick={() => removePrerequisite(course)} className=" hover:bg-gray-100 hover:cursor-pointer rounded-lg">
                    <div className="p-3 rounded-lg hover:bg-red-200">
                      {course.code + " | " + course.name}
                    </div>
                  </li>
                ))}
              </ul>
            }
          </div>
          <input value={searchCourse} id="prerequisites" onChange={(e) => handleSearch(e.target.value)} type="text" placeholder="Add a prerequisite.." className="input input-bordered input-md w-full"/>
          {searchCourse && (
							<div className="bg-white w-full border rounded-lg shadow-lg text-sm mt-2">
								<ul>
									{filteredCourses && filteredCourses.map(course => (
										<li key={course.id} onClick={() => addPrerequisite(course)} className="px-4 py-2 hover:bg-gray-100 hover:cursor-pointer">
                      {course.code + " | " + course.name}
										</li>
									))}
								</ul>
							</div>
						)}
        </div>
        {/* {
          inputCourse ?
          <div>
            <div onClick={()=>document.getElementById('my_modal_4').showModal()} className="mt-10 w-full text-red-500 bg-white hover:bg-red-600 border border-red-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800">Delete course</div>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-96 max-w-5xl">
                <h3 className="font-bold text-lg">Warning!</h3>
                <p className="py-4">Do you want to delete this course?</p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="w-full text-neutral-600 border border-neutral-600 hover:text-white bg-white hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800">Cancel</button>
                  </form>
                  <div onClick={deleteCourse} className="text-red-500 bg-white hover:bg-red-600 border border-red-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800">Delete</div>
                </div>
              </div>
            </dialog>
          </div>
          : null
        } */}
        <div onClick={inputCourse ? updateCourse : submit} className="mt-10 w-full text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800">Submit</div>
      </form>
    </div>
  );
}