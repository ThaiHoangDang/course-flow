import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";
import InfoTable from "../../components/Enrolment/InfoTable";
import EnrolmentTable from "../../components/Enrolment/EnrolmentTable";


export default function Enrolment() {
	return (
		<div>
			<Header />
			<SubHeader name="My Enrolment" />
      <div className="px-8 lg:px-32 md:flex gap-5">
        <div className="w-full md:w-72 my-10 min-w-fit pt-10">
          <InfoTable />
        </div>
        <div className="flex-1 my-10 overflow-x-auto">
          <div role="tablist" className="tabs tabs-lifted rounded-none">
            <input defaultChecked type="radio" name="course_tab" role="tab" className="tab h-10 min-w-max" aria-label="Core courses" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 p-6">
              <EnrolmentTable />
            </div>

            <input type="radio" name="course_tab" role="tab" className="tab h-10 min-w-max" aria-label="Program Electives" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 p-6">
              <EnrolmentTable />
            </div>

            <input type="radio" name="course_tab" role="tab" className="tab h-10 min-w-max" aria-label="General Elective" />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 p-6">
              <EnrolmentTable />
            </div>
          </div>
        </div>
      </div>
			<Footer />
		</div>
	);
}
