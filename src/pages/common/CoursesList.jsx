import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Table from "../../components/CoursesList/Table";
import CoursesFilter from "../../components/CoursesList/CoursesFilter";

export default function CourseList() {
	return (
		<div>
			<Header />
			<div className="px-8 lg:px-32 h-32 flex justify-center items-center">
				<h1 className="text-4xl">List of all courses</h1>
			</div>
			<div className="px-8 lg:px-32 bg-red-300 md:flex gap-5">
				<div className="basis-4/12 bg-green-300">
					<CoursesFilter />
				</div>
				<div className="basis-8/12 bg-blue-300">
					<Table />
				</div>
			</div>
			<Footer />
		</div>
	);
}
