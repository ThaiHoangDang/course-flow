import { useState } from "react";

export default function GradeCalculator() {
  const [grades, setGrades] = useState([]);

  function addGrade() {
    setGrades([...grades, {
      name: "",
      weight: 0,
      max: 0,
      score: 0,
    }]);
  }

  function updateGrade(index, value) {

  }

  return (
    <div className="w-full">
      {
        grades.length > 0 ?
        <div className="overflow-x-auto bg-base-100 border-1">
          <table className="table">
            <thead className="font-bold">
              <tr>
                <th>Name</th>
                <th>Weight</th>
                <th>Max Score</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
            {
              grades.map((grade, index) => {
                return (
                  <tr key={index}>
                    <td><input type="text" value={grades[index] === -1 ? null : grades[index]["name"]} onChange={(e) => updateGrade(index, e.target.value)} className="input input-bordered input-xs max-w-xs"/></td>
                    <td><input type="number" value={grades[index] === -1 ? null : grades[index]["weight"]} onChange={(e) => updateGrade(index, e.target.value)} className="input input-bordered input-xs max-w-xs"/></td>
                    <td><input type="number" value={grades[index] === -1 ? null : grades[index]["max"]} onChange={(e) => updateGrade(index, e.target.value)} className="input input-bordered input-xs max-w-xs"/></td>
                    <td><input type="number" value={grades[index] === -1 ? null : grades[index]["score"]} onChange={(e) => updateGrade(index, e.target.value)} className="input input-bordered input-xs max-w-xs"/></td>
                  </tr>
                );
            })}
            </tbody>
          </table>
        </div> : null
      }
      <div onClick={addGrade} className="mt-4 text-sm text-center p-3 border hover:bg-neutral-100 cursor-pointer focus:bg-neutral-200">
        + Add grade
      </div>
    </div>
  );
}