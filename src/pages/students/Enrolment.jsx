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
			<SubHeader name="My Enrolment" />
      <div className="px-8 lg:px-32">
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
      <GoUp />
			<Footer />
		</div>
	);
}
