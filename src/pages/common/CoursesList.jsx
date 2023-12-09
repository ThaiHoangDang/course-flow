import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CoursesTable from "../../components/CoursesTable";
import CoursesFilter from "../../components/CoursesList/CoursesFilter";
import SubHeader from "../../components/SubHeader";
import GoUp from "../../components/GoUp";

import { getAllCourses } from "../../firebase/courses";

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [openedOnly, setOpenedOnly] = useState(false);

  useEffect(() => {
    async function fetchCourses() {
      setCourses(await getAllCourses());
    }
    fetchCourses();
  }, []);

  return (
    <div>
      <Header />
      <SubHeader name="List of all courses"/>
      <div className="px-8 lg:px-32 md:flex gap-5">
        <div className="w-full md:w-72 my-10 min-w-fit">
          <CoursesFilter filterText={filterText} onFilterTextChange={setFilterText} onOpenedOnlyChange={setOpenedOnly} openedOnly={openedOnly}/>
        </div>
        <div className="flex-1 my-10">
          <CoursesTable courses={courses} filterText={filterText} openedOnly={openedOnly}/>
        </div>
      </div>
      <GoUp />
      <Footer />
    </div>
  );
}
