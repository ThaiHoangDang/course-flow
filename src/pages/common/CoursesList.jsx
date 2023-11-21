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
				<div className="basis-3/12 my-5 min-w-fit">
					<div className="form-control font-bold shadow-sm border-1 px-10 py-5">
						<p className="font-bold">Filter your results</p>
						<input type="text" placeholder="Code & Name" className="input input-bordered w-full my-3" />
						<label className="label cursor-pointer">
							<input type="checkbox" className="checkbox" />
							<span className="label-text text-lg">Core courses</span>
						</label>
						<label className="label cursor-pointer">
							<input type="checkbox" className="checkbox" />
							<span className="label-text text-lg">PE courses</span>
						</label>
						<label className="label cursor-pointer">
							<input type="checkbox" className="checkbox" />
							<span className="label-text text-lg">GE courses</span>
						</label>
					</div>
				</div>
				<div className="basis-9/12 my-5 shadow-sm">
					<div className="overflow-x-auto bg-base-100 border-1">
						<table className="table table-zebra">
							<thead className="shadow-sm font-bold">
								<tr>
									<th>Course Code</th>
									<th>Course Name</th>
									<th>Favorite Color</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Cy Ganderton</td>
									<td>Quality Control Specialist</td>
									<td>Blue</td>
								</tr>
								<tr>
									<td>Hart Hagerty</td>
									<td>Desktop Support Technician</td>
									<td>Purple</td>
								</tr>
								<tr>
									<td>Brice Swyre</td>
									<td>Tax Accountant</td>
									<td>Red</td>
								</tr>
								<tr>
									<td>Brice Swyre</td>
									<td>Tax Accountant</td>
									<td>Red</td>
								</tr>
								<tr>
									<td>Brice Swyre</td>
									<td>Tax Accountant</td>
									<td>Red</td>
								</tr>
								<tr>
									<td>Brice Swyre</td>
									<td>Tax Accountant</td>
									<td>Red</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
