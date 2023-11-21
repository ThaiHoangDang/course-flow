import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CoursesTable from "../../components/CoursesList/CoursesTable";
import CoursesFilter from "../../components/CoursesList/CoursesFilter";
import SubHeader from "../../components/SubHeader";

export default function CourseList() {
  return (
    <div>
      <Header />
      <SubHeader name="List of all courses"/>
      <div className="px-8 lg:px-32 md:flex gap-5">
        <div className="basis-3/12 my-10 min-w-fit">
          <CoursesFilter />
        </div>
        <div className="basis-9/12 my-10 shadow-sm">
          <CoursesTable />
        </div>
      </div>
      <Footer />
    </div>
  );
}
