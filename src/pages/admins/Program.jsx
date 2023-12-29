import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProgramHeader from "../../components/Program/ProgramHeader";
import ProgramCoursesTable from "../../components/Program/ProgramCoursesTable";
import StudentTable from "../../components/StudentsTable";
import ProgramAbout from "../../components/Program/ProgramAbout";

import { getProgram } from "../../firebase/programs";
import { getCourse } from "../../firebase/courses";

import { students } from "../../assets/tempData/students";


export default function Program() {
  const [program, setProgram] = useState(Object);
  const [filterCourses, setFilterCourses] = useState("");
  const [filterStudents, setFilterStudents] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProgram() {
      let programInfo = await getProgram(id);
      if (programInfo == null) {
        navigate(`/404`);
        return; // Make sure to return here to avoid executing the rest of the code
      }
  
      let program_map = await Promise.all(programInfo["program_map"].map(async (courseMap) => {
        const courseInfo = await getCourse(courseMap["course_id"]);
        return {course: courseInfo, semester: courseMap.semester };
      }));

      program_map = program_map.slice().sort((a, b) => a.semester - b.semester);
  
      await delete programInfo["program_map"];
      programInfo = { ...programInfo, program_map };
      console.log(programInfo);

      setProgram(programInfo);
    }
  
    fetchProgram();
  }, [id, navigate]);

  return (
    <div>
      <Header />
      <ProgramHeader
        program={program}
        code={program["code"]}
        name={program["name"]}
      />
      <div className="px-8 lg:px-32 py-20">
        <div className="md:flex gap-5">
          <div className="w-full md:w-72 mb-10">
            <ProgramAbout program={program} filterCourses={filterCourses} filterStudents={filterStudents} onFilterCoursesChange={setFilterCourses} onFilterStudentsChange={setFilterStudents} />
          </div>
          <div className="mb-10 flex-1">
            <div className="border">
              <div className="h-16 bg-base-200 border-b">
                <h2 className="text-xl p-5">Program Description</h2>
              </div>
              <div className="p-5">{program["description"]}</div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 border mt-2 rounded-none">
              <input type="checkbox" className="peer" />
              <h2 className="collapse-title text-xl">Courses list</h2>
              <div className="collapse-content bg-white border-t overflow-x-auto">
                <div className="w-full h-full py-4">
                  <ProgramCoursesTable programMap={program["program_map"]} filterCourses={filterCourses} />
                </div>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 border mt-2 rounded-none">
              <input type="checkbox" className="peer" />
              <h2 className="collapse-title text-xl">Students list</h2>
              <div className="collapse-content bg-white border-t">
                <div className="my-4">
                  <StudentTable students={students} filterStudents={filterStudents} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
