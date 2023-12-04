import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CoursesTable from "../../components/CoursesTable";
import CoursesFilter from "../../components/CoursesList/CoursesFilter";
import SubHeader from "../../components/SubHeader";
import GoUp from "../../components/GoUp";

import { courses } from "../../assets/tempData/courses";

export default function CourseList() {
  return (
    <div>
      <Header />
      <SubHeader name="List of all courses"/>
      <div className="px-8 lg:px-32 md:flex gap-5">
        <div className="w-full md:w-72 my-10 min-w-fit">
          <CoursesFilter />
        </div>
        <div className="flex-1 my-10">
          <CoursesTable courses={courses} />
        </div>
      </div>
      <GoUp />
      <Footer />
    </div>
  );
}
