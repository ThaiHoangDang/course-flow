export default function CoursesFilter(filterText, onFilterTextChange, onOpenedOnlyChange) {

  return (
    <div className="form-control shadow-sm border-1 px-5 py-5 sticky top-10">
      <p className="font-bold">Filter your results</p>
      <input value={filterText} onChange={(e) => onFilterTextChange(e.target.value)} type="text" placeholder="Code & Name" className="input input-bordered w-full my-3" />
      <label className="label cursor-pointer">
        <input type="checkbox" className="checkbox" />
        <span className="label-text">Opened Only</span>
      </label>
    </div>
  );
}
