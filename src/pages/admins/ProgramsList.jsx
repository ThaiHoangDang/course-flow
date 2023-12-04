import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";
import ProgramsFilter from "../../components/ProgramsList/ProgramsFilter";
import ProgramsTable from "../../components/ProgramsList/ProgramsTable";
import GoUp from "../../components/GoUp";

export default function ProgramsList() {
	return (
		<div>
			<Header />
			<SubHeader name="List of all programs" />
			<div className="px-8 lg:px-32 md:flex gap-5">
        <div className="w-full md:w-72 my-10 min-w-fit">
          <ProgramsFilter />
        </div>
        <div className="flex-1 my-10">
          <ProgramsTable />
        </div>
			</div>
			<GoUp />
			<Footer />
		</div>
	);
}
