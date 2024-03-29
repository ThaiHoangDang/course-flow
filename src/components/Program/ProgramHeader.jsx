import banner from "../../assets/images/banner3.png";

export default function ProgramHeader({program, code, name, students}) {

  return (
    <div className="bg-base-200 shadow-inner bg-cover bg-no-repeat bg-blend-multiply" style={{ backgroundImage: `url(${banner})` }}>
      <div className="text-center px-8 lg:px-32 p-10 flex flex-wrap justify-center items-center">
        <div>
          <h1 className="w-full text-xl md:text-2xl text-neutral-300 mb-2">{code}</h1>
          <h1 className="text-3xl text-white md:text-4xl">{name}</h1>
        </div>
      </div>
      <div className="px-8 lg:px-32 pb-10 border-b">
        <div className="mx-auto stats flex max-w-2xl shadow text-center">
    
          <div className="stat">
            <div className="stat-title">Students</div>
            <div className="text-3xl font-bold my-3">{students ? students.length : "0"}</div>
          </div>

          <div className="stat">
            <div className="stat-title">Courses</div>
            <div className="text-3xl font-bold my-3">{program["program_map"] ? program["program_map"].length : 0}</div>
          </div>
          
          <div className="stat">
            <div className="stat-title">Semesters</div>
            <div className="text-3xl font-bold my-3">{program["program_map"] ? program["program_map"][program["program_map"].length - 1]["semester"] : "0"}</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
