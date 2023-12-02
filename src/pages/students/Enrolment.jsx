import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";
import InfoTable from "../../components/Enrolment/InfoTable";
import EnrolmentTable from "../../components/Enrolment/EnrolmentTable";


import { courses } from "../../assets/tempData/courses";

export default function Enrolment() {
	return (
		<div>
			<Header />
			<SubHeader name="My Enrolment" />
      <div className="px-8 lg:px-32 md:flex gap-5">
        <div className="w-full md:w-72 my-10 min-w-fit">
          <InfoTable />
        </div>
        <div className="flex-1 my-10">
          <EnrolmentTable courses={courses} />
        </div>
      </div>
			<Footer />
		</div>
	);
}
