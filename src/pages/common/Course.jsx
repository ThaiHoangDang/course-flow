import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CourseHeader from "../../components/Course/CourseHeader";
import CourseAbout from "../../components/Course/CourseAbout";
import CourseStudentTable from "../../components/Course/CourseStudentTable";
import { getCourse } from "../../firebase/courses";
import { getUser } from "../../firebase/users";

import { getCurrentUserRole } from "../../firebase/authentication";

export default function Course() {
	const [course, setCourse] = useState(Object);
	const [filterStudents, setFilterStudents] = useState("");
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
    async function fetchCourse() {
			const courseInfo = await getCourse(id);
			if (courseInfo == null) navigate(`/404`);

			if (courseInfo["prerequisites"] != null && courseInfo["prerequisites"].length > 0) {
				const prerequisitesData = await Promise.all(
					courseInfo["prerequisites"].map(async (id) => {
						const prerequisite = await getCourse(id);
            if (prerequisite !== null) {
              return prerequisite;
            } else {
              return null;
            }
					})
				);
				courseInfo["prerequisites"] = prerequisitesData;
			}

			if (courseInfo["students"] != null && courseInfo["students"].length > 0) {
				const learnersData = await Promise.all(
					courseInfo["students"].map(async (studentId) => {
						const learner = await getUser(studentId);
						if (learner !== null) {
							return learner;
						} else {
							return null;
						}
					})
				);
				courseInfo["students"] = learnersData.filter((student) => student !== null);
			}

      setCourse(courseInfo);
    }

    fetchCourse();
  }, [id, navigate]);

	return (
		<div>
			<Header />
			<CourseHeader course={course} />
			<div className="px-8 lg:px-32 py-20">
				<div className="md:flex gap-5">
					<div className="w-full md:w-72 mb-10">
						<CourseAbout course={course} filterStudents={filterStudents} onFilterStudentsChange={setFilterStudents}/>
					</div>
					<div className="mb-10 flex-1">
						<div className="border">
							<div className="h-16 bg-base-200 border-b">
								<h2 className="text-xl p-5">Course Description</h2>
							</div>
							<div className="p-5">
								{course["description"]}
							</div>
						</div>
						<div className="collapse collapse-arrow bg-base-200 border mt-2 rounded-none">
							<input type="checkbox" className="peer" /> 
							<h2 className="collapse-title text-xl">
								Course Learning Outcomes
							</h2>
							<div className="collapse-content bg-white border-t"> 
								<div className="my-4">
									<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum rem ea ipsum, accusamus molestiae tempora libero expedita saepe dolorem aliquid quisquam doloremque ab reiciendis? Vitae minus nam natus. Blanditiis, provident.</p><br />
									<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum rem ea ipsum, accusamus molestiae tempora libero expedita saepe dolorem aliquid quisquam doloremque ab reiciendis? Vitae minus nam natus. Blanditiis, provident.</p>
								</div>
							</div>
						</div>
						<div className="collapse collapse-arrow bg-base-200 border mt-2 rounded-none">
							<input type="checkbox" className="peer" /> 
							<h2 className="collapse-title text-xl">
								Assessment Information
							</h2>
							<div className="collapse-content bg-white border-t"> 
								<div className="my-4">
									<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum rem ea ipsum, accusamus molestiae tempora libero expedita saepe dolorem aliquid quisquam doloremque ab reiciendis? Vitae minus nam natus. Blanditiis, provident.</p><br />
									<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum rem ea ipsum, accusamus molestiae tempora libero expedita saepe dolorem aliquid quisquam doloremque ab reiciendis? Vitae minus nam natus. Blanditiis, provident.</p>
								</div>
							</div>
						</div>
						{
							getCurrentUserRole() === "Admin" ?
								<div className="collapse collapse-arrow bg-base-200 border mt-2 rounded-none">
									<input type="checkbox" className="peer" /> 
									<h2 className="collapse-title text-xl">
										Students list
									</h2>
									<div className="collapse-content bg-white border-t"> 
										<div className="my-4">
											<CourseStudentTable students={course["students"]} filterStudents={filterStudents} />
										</div>
									</div>
								</div>
							: null
						}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
