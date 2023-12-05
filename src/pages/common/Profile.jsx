import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { students } from "../../assets/tempData/students";

export default function Profile() {
	return (
		<div>
			<Header />
			<div className="px-8 lg:px-32">
				<main className="py-16 lg:py-20">
					<div>
			<div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Profile</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">This information will be displayed publicly so be careful what you share.</p>
      </div>
			<div className="mt-6 border-t border-gray-100 flex gap-x-8 items-center col-span-1 pt-6">
			<img
          className="inline-block h-24 w-24 rounded-lg ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
			<div>
			<button type="button" className="leading-5 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">Change avatar</button>
			<p className="text-xs leading-5 text-gray-500 mt-2">JPG, GIF or PNG. 1MB max.</p>
			</div>
			</div>

			<div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="flex mt-1 text-sm leading-6 text-gray-700 sm:mt-0 gap-x-6 justify-between sm:col-span-2">
				<div className="flex flex-shrink-0">Nguyen Minh Chau</div>
			<div className="flex justify-end sm:pl-4 sm:pr-5 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Update
                    </a>
                  </div>
				  </dd>
          </div>
		  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Date of Birth</dt>
            <dd className="flex mt-1 text-sm leading-6 text-gray-700 sm:mt-0 gap-x-6 justify-between sm:col-span-2">
				<div className="flex flex-shrink-0">20/02/2003</div>
			<div className="flex justify-end sm:pl-4 sm:pr-5 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Update
                    </a>
                  </div>
				  </dd>
          </div>
		  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">sID</dt>
            <dd className="flex mt-1 text-sm leading-6 text-gray-700 sm:mt-0 gap-x-6 justify-between sm:col-span-2">
				<div className="flex flex-shrink-0">s3976473</div>
				  </dd>
          </div>
		  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Program</dt>
            <dd className="flex mt-1 text-sm leading-6 text-gray-700 sm:mt-0 gap-x-6 justify-between sm:col-span-2">
				<div className="flex flex-shrink-0">Bachelor of Information Technology</div>
			<div className="flex justify-end sm:pl-4 sm:pr-5 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Update
                    </a>
                  </div>
				  </dd>
          </div>
        </dl>
      </div>
	  </div>

	<div className="sm:mt-20">
	  <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Student's Courses</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">This information will be displayed publicly so be careful what you share.</p>
		</div>
		<div className="mt-6">
		<div className="overflow-x-auto bg-base-100 border-1">
      <table className="table table-zebra">
        <thead className="shadow-sm font-bold">
          <tr>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>COSC2130</td>
              <td>Professional Computing Practice</td>
              <td>
				<span className="rounded-md px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Completed</span>
				</td>
            </tr>

			<tr>
              <td>COSC2652</td>
              <td>User-centred Design</td>
			  <td>
				<span className="rounded-md px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Completed</span>
				</td>
            </tr>

			<tr>
              <td>ISYS3416</td>
              <td>Software Engineering Fundamentals for IT</td>
			  <td>
				<span className="rounded-md px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">In progress</span>
				</td>
            </tr>
        </tbody>
      </table>
    </div>
		</div>
		</div>
      </main>


			</div>
			<Footer />
		</div>
	
	);
}
