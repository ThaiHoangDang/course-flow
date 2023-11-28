import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";

import { courses } from "../../assets/tempData/courses";
let course = courses[0];

export default function Course() {
	return (
		<div>
			<Header />
			<SubHeader name={course["name"]}/>
			<div className="px-8 lg:px-32">

				<div className="h-96"></div>
			</div>
			<Footer />
		</div>
	);
}
