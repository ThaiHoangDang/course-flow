import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";
import ProgramsFilter from "../../components/ProgramsList/ProgramsFilter";
import ProgramsTable from "../../components/ProgramsList/ProgramsTable";
import GoUp from "../../components/GoUp";

import { getAllPrograms } from "../../firebase/programs";


export default function ProgramsList() {
  const [programs, setPrograms] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    async function fetchCourses() {
      setPrograms(await getAllPrograms());
    }
    fetchCourses();
  }, []);

	return (
		<div>
			<Header />
			<SubHeader name="List of all programs" />
			<div className="px-8 lg:px-32 md:flex gap-5">
        <div className="w-full md:w-72 my-10 min-w-fit">
          <ProgramsFilter filterText={filterText} onFilterTextChange={setFilterText} />
        </div>
        <div className="flex-1 my-10">
          <ProgramsTable programs={programs} filterText={filterText}/>
        </div>
			</div>
			<GoUp />
			<Footer />
		</div>
	);
}
