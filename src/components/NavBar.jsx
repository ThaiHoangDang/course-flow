import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="h-14 flex border-b border-neutral-200 shadow sticky top-0">
      <div className="m-auto h-full flex gap-8 md:gap-24 lg:gap-48">
        <Link to="/" className="flex p-3">
          <div className="text-md md:text-lg my-auto">
          <span className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-200 after:origin-center">
            Home
          </span>
          </div>
        </Link>
        <Link to="/courses-list" className="flex p-3">
          <div className="text-md md:text-lg my-auto ">
            <span className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-200 after:origin-center">
              Courses
            </span>
          </div>
        </Link>
        <Link to="/programs-list" className="flex p-3">
          <div className="text-md md:text-lg my-auto">
            <span className="relative w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-200 after:origin-center">
              Programs
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
