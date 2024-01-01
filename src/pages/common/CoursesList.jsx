import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CoursesTable from "../../components/CoursesList/CoursesTable";
import CoursesFilter from "../../components/CoursesList/CoursesFilter";
import SubHeader from "../../components/SubHeader";
import GoUp from "../../components/GoUp";
import PreLoader from "../../components/PreLoader";
import { getAllCourses } from "../../firebase/courses";

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [openedOnly, setOpenedOnly] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchCourses() {
      setCourses(await getAllCourses());
      setLoading(false);
    }
    fetchCourses();
  }, []);

  return (
    loading ? <PreLoader loading={loading} /> : (
      <div className={`homepage-content ${loading ? 'fade-out' : 'fade-in'}`}>
        <Header />
        <SubHeader name="List of all courses" />
        <div className="px-8 lg:px-32 md:flex gap-5">
          <div className="w-full md:w-72 my-10 min-w-fit">
            <CoursesFilter
              filterText={filterText}
              onFilterTextChange={setFilterText}
              onOpenedOnlyChange={setOpenedOnly}
              openedOnly={openedOnly}
              courses={courses}
            />
          </div>
          <div className="flex-1 my-10">
            <CoursesTable
              courses={courses}
              filterText={filterText}
              openedOnly={openedOnly}
            />
          </div>
        </div>
        <GoUp />
        <Footer />
      </div>
    )
  );
}
