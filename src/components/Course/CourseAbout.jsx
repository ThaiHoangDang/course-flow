export default function CourseAbout() {
  return (
    <div className="border sticky top-10">
      <div className="h-16 bg-base-200 border-b">
        <h2 className="text-xl p-5">About</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr>
              <td>Code</td>
              <td>CS 246</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Foundations of Public Relations</td>
            </tr>
            <tr>
              <td>Credits</td>
              <td>12</td>
            </tr>
            <tr>
              <td>Prerequites</td>
              <td>CS 136</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}