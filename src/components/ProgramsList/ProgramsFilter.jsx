export default function ProgramsFilter({ filterText, onFilterTextChange, bachelor, onBachelorChange, honours, onHonoursChange, master, onMasterChange }) {
  return (
    <div className="form-control shadow-sm border-1 px-5 py-5 sticky top-10">
      <p className="font-bold">Filter your results</p>
      <input value={filterText} onChange={(e) => onFilterTextChange(e.target.value)} type="text" placeholder="Code & Name" className="input input-bordered w-full my-3" />
      <label className="label cursor-pointer">
        <input checked={bachelor} onChange={(e) => onBachelorChange(e.target.checked)} type="checkbox" className="checkbox" />
        <span className="label-text">Bachelor Degrees</span>
      </label>
      <label className="label cursor-pointer">
        <input checked={honours} onChange={(e) => onHonoursChange(e.target.checked)} type="checkbox" className="checkbox" />
        <span className="label-text">Honours Degrees</span>
      </label>
      <label className="label cursor-pointer">
        <input checked={master} onChange={(e) => onMasterChange(e.target.checked)} type="checkbox" className="checkbox" />
        <span className="label-text">Master Degrees</span>
      </label>
    </div>
  );
}
