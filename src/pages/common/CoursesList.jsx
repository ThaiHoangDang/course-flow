import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Table from "../../components/CoursesList/Table";
import CoursesFilter from "../../components/CoursesList/CoursesFilter";

export default function CourseList() {
  return (
    <div>
      <Header />
      <div className="px-8 lg:px-32 h-32 flex justify-center items-center bg-base-200">
        <h1 className="text-4xl">List of all courses</h1>
      </div>
      <div className="px-8 lg:px-32 md:flex gap-5">
        <div className="basis-3/12 my-10 min-w-fit">
          <CoursesFilter />
        </div>
        <div className="basis-9/12 my-10 shadow-sm">
          <Table />
        </div>
      </div>
      <Footer />
    </div>
  );
}
