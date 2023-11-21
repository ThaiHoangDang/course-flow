import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";
import ProgramsFilter from "../../components/ProgramsList/ProgramsFilter";
import ProgramsTable from "../../components/ProgramsList/ProgramsTable";

export default function ProgramsList() {
	return (
		<div>
			<Header />
			<SubHeader name="List of all programs" />
			<div className="px-8 lg:px-32 md:flex gap-5">
        <div className="basis-3/12 my-10 min-w-fit">
          <ProgramsFilter />
        </div>
        <div className="basis-9/12 my-10 shadow-sm">
          <ProgramsTable />
        </div>
			</div>
			<Footer />
		</div>
	);
}
