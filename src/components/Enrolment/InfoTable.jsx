export default function InfoTable({ user }) {
  
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <tbody>
          <tr>
            <td>Name</td>
            <td>{user && user["name"]}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{user && user["email"]}</td>
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
  );
}