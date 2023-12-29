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
            <td>{user && user["program"]["name"]}</td>
          </tr>
          <tr>
            <td>GPA</td>
            <td>{user && gpaCalculator(user["my_program_map"])}/4.0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function gpaCalculator(user_program_map) {
  let credits = 0;
  let courses = 0;
  let total = 0;

  user_program_map.forEach(courseMap => {

    if (courseMap.status >= 0 && courseMap.status <= 100) {
      if (credits === 0) {
        credits = courseMap.course.credits;
        courses += 1;
        total += getGPAFromGrade(courseMap.status);
      } else {
        courses += courseMap.course.credits / credits;
        total += courseMap.course.credits / credits * getGPAFromGrade(courseMap.status);
      }
    }
  });

  if (total === 0) return "N/A";

  return (total / courses).toFixed(1);
}

function getGPAFromGrade(grade) {

  if (grade >= 80) return 4;
  if (grade >= 70) return 3;
  if (grade >= 60) return 2;
  if (grade >= 50) return 1;
  return 0;
}