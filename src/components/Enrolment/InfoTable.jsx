export default function InfoTable() {
  return (
    <div className="border sticky top-10">
      <div className="h-16 bg-base-200 border-b">
        <h2 className="text-xl p-5">Student Information</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr>
              <td>Student</td>
              <td>Dang Thai Hoang</td>
            </tr>
            <tr>
              <td>ID</td>
              <td>s3927234</td>
            </tr>
            <tr>
              <td>Program</td>
              <td>Bachelor of Information Technology</td>
            </tr>
            <tr>
              <td>GPA</td>
              <td>1.0/4.0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}