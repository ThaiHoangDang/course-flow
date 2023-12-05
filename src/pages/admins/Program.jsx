import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProgramHeader from "../../components/Program/ProgramHeader";
import CoursesTable from "../../components/CoursesTable";
import StudentTable from "../../components/StudentsTable";

import { programs } from "../../assets/tempData/programs";
import { courses } from "../../assets/tempData/courses";
import { students } from "../../assets/tempData/students";
let program = programs[0];

export default function Program() {
  return (
    <div>
      <Header />
      <ProgramHeader
        code={program["code"]}
        name={program["name"]}
        current="135"
        past="1285"
        total="1420"
      />
      <div className="px-8 lg:px-32 py-20">
        <div className="md:flex gap-5">
          <div className="w-full md:w-72 mb-10">
            <div className="border sticky top-10">
							<div>
								<div className="h-16 bg-base-200 border-b">
									<h2 className="text-xl p-5">About</h2>
								</div>
								<div className="overflow-x-auto">
									<table className="table">
										<tbody>
											<tr>
												<td>Code</td>
												<td>{program["code"]}</td>
											</tr>
											<tr>
												<td>Name</td>
												<td>{program["name"]}</td>
											</tr>
											<tr>
												<td>Duration</td>
												<td>3 years</td>
											</tr>
											<tr>
												<td>Courses</td>
												<td>24 courses</td>
											</tr>
											<tr>
												<td>PEs</td>
												<td>6 courses</td>
											</tr>
											<tr>
												<td>GEs</td>
												<td>3 courses</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div className="bg-base-200">
								<div className="p-4 pb-0 border-t">
									<input type="text" placeholder="Search courses" className="input input-bordered w-full" />
								</div>
								<div className="p-4">
									<input type="text" placeholder="Search students" className="input input-bordered w-full" />
								</div>
							</div>
            </div>
          </div>
          <div className="mb-10 flex-1">
            <div className="border">
              <div className="h-16 bg-base-200 border-b">
                <h2 className="text-xl p-5">Program Description</h2>
              </div>
              <div className="p-5">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                  voluptatibus, natus tempora rem quis laboriosam inventore aut
                  nihil doloribus sed ullam numquam, voluptatem voluptas minus
                  delectus non aliquid debitis blanditiis?
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                  voluptatibus, natus tempora rem quis laboriosam inventore aut
                  nihil doloribus sed ullam numquam, voluptatem voluptas minus
                  delectus non aliquid debitis blanditiis?
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, nihil. Cumque autem quas ipsum quasi, doloribus
                  accusamus hic, corrupti deserunt soluta sunt, ex ad ipsam.
                  Distinctio, earum nobis! Ut, explicabo. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Sapiente, earum
                  reprehenderit quis eum molestiae animi corrupti beatae dicta!
                  Labore porro ipsa tempore iure nulla nostrum provident cum
                  dignissimos reprehenderit minima!
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 border mt-2 rounded-none">
              <input type="checkbox" className="peer" />
              <h2 className="collapse-title text-xl">Courses list</h2>
              <div className="collapse-content bg-white border-t overflow-x-auto">
								<div className="w-full h-full py-4">
                	<CoursesTable courses={courses} />
								</div>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 border mt-2 rounded-none">
              <input type="checkbox" className="peer" />
              <h2 className="collapse-title text-xl">Students list</h2>
              <div className="collapse-content bg-white border-t">
                <div className="my-4">
									<StudentTable students={students} />
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
