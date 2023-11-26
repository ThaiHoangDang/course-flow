import { programs } from "../../assets/tempData/programs";

export default function ProgramsTable() {
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
          { programs.map((program) => (
            <tr>
              <td>{program["code"]}</td>
              <td>{program["name"]}</td>
              <td>{program["type"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
