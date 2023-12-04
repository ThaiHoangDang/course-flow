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
        <div className="w-full md:w-72 my-10 min-w-fit">
          <InfoTable />
        </div>
        <div className="flex-1 my-10">
          <div>
            <div role="tablist" className="tabs tabs-lifted">
              <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
              <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 1</div>

              <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" checked />
              <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

              <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
              <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
            </div>
          </div>
          <div>
            <EnrolmentTable />
          </div>
        </div>
      </div>
			<Footer />
		</div>
	);
}
