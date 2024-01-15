import { useState } from "react";

export default function GradeCalculator() {
  const [grades, setGrades] = useState([]);
  const [message, setMessage] = useState("");

  function addGrade() {
    setGrades([...grades, {
      weight: 0,
      max: 0,
      score: 0,
    }]);
  }

  function updateGrade(index, field, value) {
    const temp = [...grades];
    temp[index][field] = parseInt(value, 10);
    setGrades(temp);
  }

  function calculateGrade() {
    let sumWeight = 0;
    let sum = 0;
    
    for (let i = 0; i < grades.length; i++) {
      let grade = grades[i];
      sumWeight += grade["weight"];


      if (grade["max"] !== 0) sum += grade["weight"] * grade["score"] / grade["max"];

      // missing input
      if (isNaN(grade["weight"]) || isNaN(grade["max"]) || isNaN(grade["score"])) {
        setMessage("Missing input field!"); break;
      }
      
      // negative input
      if (grade["weight"] < 0 || grade["max"] < 0 || grade["score"] < 0) {
        setMessage("Invalid input!"); break;
      }
      
      // check max score
      if (grade["max"] < grade["score"]) {
        setMessage("Score should be less or equal to max score!"); break;
      }

      if (i === grades.length - 1 && sumWeight !== 100) {
        setMessage("Sum of weights must equal 100!"); break;
      }

      if (i === grades.length - 1) {
        setMessage("Final grade: " + sum); break;
      }
    }

    document.getElementById('my_modal_3').showModal();
  }

  return (
    <div className="w-full">
      {
        grades.length > 0 ?
        <div>
          <div className="overflow-x-auto bg-base-100 border-1 border-neutral-300">
            <table className="table">
              <thead className="font-bold ">
                <tr className="border-neutral-300">
                  <th>Name</th>
                  <th>Weight (%)</th>
                  <th>Max Score</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
              {
                grades.map((grade, index) => {
                  return (
                    <tr key={index} >
                      <td><input type="text" className="input input-bordered input-xs max-w-xs"/></td>
                      <td><input type="number" value={grades[index] === -1 ? null : grades[index]["weight"]} onChange={(e) => updateGrade(index, "weight", e.target.value)} className="input input-bordered input-xs max-w-xs"/></td>
                      <td><input type="number" value={grades[index] === -1 ? null : grades[index]["max"]} onChange={(e) => updateGrade(index, "max", e.target.value)} className="input input-bordered input-xs max-w-xs"/></td>
                      <td><input type="number" value={grades[index] === -1 ? null : grades[index]["score"]} onChange={(e) => updateGrade(index, "score", e.target.value)} className="input input-bordered input-xs max-w-xs"/></td>
                    </tr>
                  );
              })}
              </tbody>
            </table>
          </div>
          <div onClick={calculateGrade} className="basis-6/12 bg-neutral-100 border-t-0 text-sm text-center p-3 border hover:bg-neutral-200 cursor-pointer focus:bg-neutral-300 border-neutral-300">
            Calculate
          </div>
        </div> : null
      }

      <div onClick={addGrade} className="basis-6/12 bg-neutral-100 mt-4 text-sm text-center p-3 border hover:bg-neutral-200 cursor-pointer focus:bg-neutral-300 border-neutral-300">
        + Add grade
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box max-h-[600px] no-scrollbar">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          {message}
        </div>
      </dialog>
    </div>
  );
}