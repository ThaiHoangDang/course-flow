import { useState, useEffect } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SubHeader from "../../components/SubHeader";
import ProgramsFilter from "../../components/ProgramsList/ProgramsFilter";
import ProgramsTable from "../../components/ProgramsList/ProgramsTable";
import GoUp from "../../components/GoUp";
import PreLoader from "../../components/PreLoader";

import { getAllPrograms } from "../../firebase/programs";


export default function ProgramsList() {
  const [programs, setPrograms] = useState([]);
  const [bachelor, setBachelor] = useState(true);
  const [honours, setHonours] = useState(true);
  const [master, setMaster] = useState(true);
  const [loading, setLoading] = useState(true);

  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    async function fetchCourses() {
      setPrograms(await getAllPrograms());
      setLoading(false);
    }
    fetchCourses();
  }, []);

  return (
    loading ? <PreLoader loading={loading} /> : (
      <div className={`homepage-content ${loading ? 'fade-out' : 'fade-in'}`}>
        <Header />
        <SubHeader name="List of all programs" />
        <div className="px-8 lg:px-32 md:flex gap-5">
          <div className="w-full md:w-72 my-10 min-w-fit">
            <ProgramsFilter filterText={filterText} onFilterTextChange={setFilterText} bachelor={bachelor} onBachelorChange={setBachelor} honours={honours} onHonoursChange={setHonours} master={master} onMasterChange={setMaster} />
          </div>
          <div className="flex-1 my-10">
            <ProgramsTable programs={programs} filterText={filterText} bachelor={bachelor} honours={honours} master={master} />
          </div>
        </div>
        <GoUp />
        <Footer />
      </div>
    )
  );
}
