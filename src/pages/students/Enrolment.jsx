import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";
import InfoTable from "../../components/Enrolment/InfoTable";
import EnrolmentTable from "../../components/Enrolment/EnrolmentTable";
import GoUp from "../../components/GoUp";

import { getUser } from "../../firebase/users";
import { getProgram } from "../../firebase/programs"
import { getCourse } from "../../firebase/courses";


export default function Enrolment() {
  const navigate = useNavigate();
	const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser(id) {
			let userInfo = await getUser(id);
      if (userInfo == null) navigate(`/404`);

      let programInfo = await getProgram(userInfo["program_id"]);

      let my_program_map_info = await Promise.all(userInfo["my_program_map"].map(async (courseMap) => {
        const courseInfo = await getCourse(courseMap["course_id"]);
        return {course: courseInfo, semester: courseMap.semester, status: courseMap.status };
      }));

      my_program_map_info = my_program_map_info.slice().sort((a, b) => a.semester - b.semester);

      delete userInfo["my_program_map"];
      delete userInfo["program_id"];

      userInfo = {...userInfo, my_program_map: my_program_map_info, program: programInfo};

      console.log(userInfo);
      setUser(userInfo);
    }

    fetchUser(id);
  }, []);

	return (
		<div>
			<Header />
			<SubHeader name="Enrolment" />
			<div className="px-8 lg:px-32 md:flex gap-5">
        <div className="w-full md:max-w-min  my-10 mt-20">
          <div className="sticky top-10 overflow-x-auto">
            <div className="w-full">
              <h1 className="text-xl p-4 bg-neutral-100 border ">User Information</h1>
            </div>
            <table className="table border mb-10 ">
              <tbody className="overflow-x-auto">
                <tr>
                  <td>Name</td>
                  <td>{user && user["name"]}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{user && user["email"]}</td>
                </tr>
                <tr>
                  <td>Program</td>
                  <td>{user && user["program"]["name"]}</td>
                </tr>
                <tr>
                  <td>GPA</td>
                  <td>{user && gpaCalculator(user["my_program_map"])}/4.0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex-1">
          <div className="my-10 overflow-x-auto">
            <div role="tablist" className="tabs tabs-lifted rounded-none">
              <input defaultChecked type="radio" name="course_tab" role="tab" className="tab h-10 min-w-max" aria-label="Enrolment" />
              <div role="tabpanel" className="tab-content bg-base-100 border-base-300 p-6">
                <EnrolmentTable user={user} />
              </div>
              <input type="radio" name="course_tab" role="tab" className="tab h-10 min-w-max" aria-label="Academic History" />
              <div role="tabpanel" className="tab-content bg-base-100 border-base-300 p-6">
                <InfoTable user={user} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <GoUp />
			<Footer />
		</div>
	);
}

function gpaCalculator(user_program_map) {
  let credits = 0;
  let courses = 0;
  let total = 0;

  user_program_map.forEach(courseMap => {

    if (courseMap.status >= 0 && courseMap.status <= 100) {
      if (credits === 0) {
        credits = courseMap.course.credits;
        courses += 1;
        total += getGPAFromGrade(courseMap.status);
      } else {
        courses += courseMap.course.credits / credits;
        total += courseMap.course.credits / credits * getGPAFromGrade(courseMap.status);
      }
    }
  });

  if (total === 0) return "?";

  return (total / courses).toFixed(1);
}

function getGPAFromGrade(grade) {

  if (grade >= 80) return 4;
  if (grade >= 70) return 3;
  if (grade >= 60) return 2;
  if (grade >= 50) return 1;
  return 0;
}