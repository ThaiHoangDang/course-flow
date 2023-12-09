import { Link } from "react-router-dom";

export default function CourseAbout({code, name, credits, prerequites}) {

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
              <td>{code}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{name}</td>
            </tr>
            <tr>
              <td>Credits</td>
              <td>{credits}</td>
            </tr>
            <tr>
              <td>Prerequites</td>
              <td>
                {prerequites && prerequites.length > 0 && prerequites.map((item, index) => (
                  <div className="hover:underline">
                    <Link to={`/course/${item["id"]}`} key={index}>
                      {item["code"]}
                    </Link>
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}