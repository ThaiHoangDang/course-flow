import { useNavigate } from "react-router-dom";

export default function ProgramsTable({programs, filterText}) {
  const navigate = useNavigate();
  const handleRowClick = (id) => {
    navigate(`/program/${id}`);
  }  

  return (
    <div className="overflow-x-auto bg-base-100 border-1">
      <table className="table table-zebra">
        <thead className="shadow-sm font-bold">
          <tr>
            <th>Program Code</th>
            <th>Program Name</th>
            <th>Degree</th>
          </tr>
        </thead>
        <tbody>
          { programs != null && programs.map((program) => {
            if (filterText !== "" && (! program["code"].toLowerCase().includes(filterText.toLowerCase())) && (! program["name"].toLowerCase().includes(filterText.toLowerCase()))) return null;

            return (
              <tr className="hover:underline hover:cursor-pointer" key={program["code"]} onClick={()=> handleRowClick(program["id"])}>
                <td>{program["code"]}</td>
                <td>{program["name"]}</td>
                <td>{program["type"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
