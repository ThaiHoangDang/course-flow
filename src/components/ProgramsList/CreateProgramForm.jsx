import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { db } from "../../config/firebase";
import { collection, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { getAllCourses } from "../../firebase/courses";


export default function CreateProgramForm({ inputProgram = null }) {
  const [courses, setCourses] = useState([]);

  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [degree, setDegree] = useState("Bachelor");
  const [programMap, setProgramMap] = useState([]);

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
    if (inputProgram != null) {
      setCode(inputProgram["code"] || "");
      setName(inputProgram["name"] || "");
      setDescription(inputProgram["description"] || "");
      setDegree(inputProgram["type"]);
      setProgramMap(inputProgram["program_map"]);
    }
  }, [inputProgram]);


  const handleSearch = (value) => {
		setSearchCourse(value);

    const programMapCoursesId = programMap.map(courseMap => courseMap.course.id);

		// Filter through your courses based on the search term
		let filtered = courses.filter(course =>
			(course.name.toLowerCase().includes(value.toLowerCase()) 
      || course.code.toLowerCase().includes(value.toLowerCase()))
      && (! programMapCoursesId.includes(course["id"]))
		);

		setFilteredCourses(filtered); // Update your filteredCourses state with the filtered courses
	};

  function addCourse(course) {
    setProgramMap([...programMap, {course: course, semester: 0}]);
    setSearchCourse('');
  }

  function removeCourse(courseMap) {
    setProgramMap(programMap.filter(myCourseMap => myCourseMap !== courseMap));
  }

  function updateSemester(index, semester) {
    const updatedProgramMap = [...programMap];
    updatedProgramMap[index].semester = semester;
    setProgramMap(updatedProgramMap);
  }

  async function submit() {
    if (!code || !name || !description) {
      alert("Please fill in all required fields.");
      return;
    }

    const programMapIds = programMap.map(courseMap => ({ course_id: courseMap.course.id, semester: courseMap.semester }));

    const newProgram = {
      code: code,
      name: name,
      description: description,
      type: degree,
      program_map: programMapIds
    };

    await addDoc(collection(db, "Program"), newProgram);
    window.location.reload();
  }

  async function updateProgram() {
    if (!code || !name || !description) {
      alert("Please fill in all required fields.");
      return;
    }

    const programMapIds = programMap.map(courseMap => ({ course_id: courseMap.course.id, semester: courseMap.semester }));

    const newProgram = {
      code: code,
      name: name,
      description: description,
      type: degree,
      program_map: programMapIds
    };

    const programRef = doc(db, "Program", inputProgram["id"]);
    await updateDoc(programRef, newProgram);
    window.location.reload();
  }

  async function deleteProgram() {
    // await deleteDoc(doc(db, "course", inputProgram["id"]));
    // navigate('/courses-list');
  }

  return (
    <div className="my-8 mx-2">
      <h2 className="text-2xl text-center">{ inputProgram ? "Edit program" : "Create a new program"}</h2>
      <form className="mt-16">
        <div className="mb-5 flex gap-5">
          <div className="basis-8/12">
            <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Program code</label>
            <input value={code} id="code" onChange={(e) => setCode(e.target.value)} type="text" placeholder="BP162.." className="input input-bordered input-md w-full" required/>
          </div>
          <div className="basis-4/12">
            <label htmlFor="degree" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Degree</label>
            <select
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              id="degree"
              className="select select-bordered w-full max-w-xs"
              required
            >
              <option value="Bachelor">Bachelor</option>
              <option value="Honours">Honours</option>
              <option value="Master">Master</option>
            </select>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Program name</label>
          <input value={name} id="title" onChange={(e) => setName(e.target.value)} type="text" placeholder="Information Technology.." className="input input-bordered input-md w-full" required/>
        </div>
        <div className="mb-5">
          <label  htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Program description</label>
          <textarea value={description} id="description" rows={3} onChange={(e) => setDescription(e.target.value)} className="textarea textarea-bordered w-full" placeholder="This course introduces.." required></textarea>
        </div>
        <div className="mb-5">
          <label  htmlFor="programMap" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Program Map</label>
          <div id="programMap" className="mb-4 text-sm  ">
            {
              programMap && programMap.length === 0
              ?
                <div className="p-3 rounded-lg border-neutral-300 bg-neutral-100 border">
                  There are currently no courses for this program
                </div>
              :
              <ul>
                {programMap &&
                  programMap.length > 0 &&
                  programMap.map((courseMap, index) => (
                    <li key={courseMap.course.id} className="mb-2 bg-neutral-100 border border-neutral-300 hover:cursor-pointer rounded-lg flex">
                      <div className="basis-2/12 border-r border-neutral-300">
                        <input
                          value={courseMap.semester}
                          type="number"
                          onChange={(e) => updateSemester(index, e.target.value)}
                          className="text-center h-full input rounded-r-none input-md w-full"
                          required min="0"
                        />
                      </div>
                      <div onClick={() => removeCourse(courseMap)} className="flex-1 px-3 rounded-r-lg hover:bg-red-200 flex">
                        <p className="line-clamp-1 my-auto">
                          {courseMap.course.code + " | " + courseMap.course.name}
                        </p>
                      </div>
                    </li>
                ))}
              </ul>
            }
          </div>
          <input value={searchCourse} onChange={(e) => handleSearch(e.target.value)} type="text" placeholder="Add a course.." className="input input-bordered input-md w-full"/>
          {searchCourse && (
							<div className="bg-white w-full border rounded-lg shadow-lg text-sm mt-2">
								<ul>
									{filteredCourses && filteredCourses.map(course => (
										<li key={course.id} onClick={() => addCourse(course)} className="px-4 py-2 hover:bg-gray-100 hover:cursor-pointer">
                      {course.code + " | " + course.name}
										</li>
									))}
								</ul>
							</div>
						)}
        </div>
        {/* {
          inputProgram ?
          <div>
            <div onClick={()=>document.getElementById('my_modal_4').showModal()} className="mt-10 w-full text-red-500 bg-white hover:bg-red-600 border border-red-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800">Delete program</div>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-96 max-w-5xl">
                <h3 className="font-bold text-lg">Warning!</h3>
                <p className="py-4">Do you want to delete this course?</p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="w-full text-neutral-600 border border-neutral-600 hover:text-white bg-white hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800">Cancel</button>
                  </form>
                  <div onClick={deleteProgram} className="text-red-500 bg-white hover:bg-red-600 border border-red-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800">Delete</div>
                </div>
              </div>
            </dialog>
          </div>
          : null
        } */}
        <div onClick={inputProgram ? updateProgram : submit} className="mt-10 w-full text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800">Submit</div>
      </form>
    </div>
  );
}