import React, { useEffect, useState } from 'react';
import { getAllCourses } from '../firebase/courses'; // Import your backend service
import { Link } from "react-router-dom";
import { signOut } from '../firebase/authentication';
import { auth } from '../config/firebase'; // Import the signOut function
import NavBar from "./NavBar";

export default function Header() {
	const [currentUser, setCurrentUser] = useState(null);
	const [searchTerm, setSearchTerm] = useState('');
	const [courses, setCourses] = useState([]);
	const [filteredCourses, setFilteredCourses] = useState([]);
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			setCurrentUser(user);
		});

		const fetchCourses = async () => {
			const allCourses = await getAllCourses();
			setCourses(allCourses);
		};

		fetchCourses();

		// Cleanup subscription on unmount
		return () => unsubscribe();
	}, []);

	const handleSignOut = () => {
		signOut().then(() => {
			setCurrentUser(null);
		});
	};
	const handleSearch = (event) => {
		setSearchTerm(event.target.value);

		// Filter through your courses based on the search term
		const filtered = courses.filter(course =>
			course.name.toLowerCase().includes(searchTerm.toLowerCase())
		);

		setFilteredCourses(filtered); // Update your filteredCourses state with the filtered courses
	};
	return (
		<div>
			<div className="navbar flex gap-2 h-20 border-b">
				<div className="basis-2/12 md:basis-3/12">
					<Link to="/" className="btn btn-ghost text-xl hidden md:flex">Course Flow</Link>
					<Link to="/" className="btn btn-ghost text-xl md:hidden">CF</Link>
				</div>
				<div className="flex-1">
					<div className="w-full flex border rounded-full border-neutral-300 relative">
						<input type="text" placeholder="Search for courses" className="w-full rounded-l-full h-12 px-5 bg-base-100 focus:outline-none" value={searchTerm}
							onChange={handleSearch} />
						{searchTerm && (
							<div className="absolute mt-12 bg-white w-full border rounded-xl shadow-lg z-10">
								<ul>
									{filteredCourses.slice(0, 5).map(course => (
										<li key={course.id} className="px-4 py-2 hover:bg-gray-100 hover:cursor-pointer">
											<Link to={`/course/${course.id}`} onClick={() => setSearchTerm('')}>{course.name}</Link>
										</li>
									))}
								</ul>
								{filteredCourses.length > 5 && (
									<Link to="/courses-list" onClick={() => setSearchTerm('')} className="block bg-gray-200 text-center p-2 rounded-b hover:bg-gray-300 hover:cursor-pointer" >
										More...
									</Link>
								)}
							</div>
						)}
						{/* Rest of your header code */}
						<button className="btn w-16 lg:w-24 rounded-r-full "><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg></button>
					</div>
				</div>
				<div className="dropdown dropdown-end basis-2/12 md:basis-3/12 flex">
					<div className="ml-auto">
						<button tabIndex={0} className="btn btn-square btn-ghost">
							<svg fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
						</button>
						<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40">
							<li><Link to="/enrolment" className="h-10 p-3">My Enrolment</Link></li>
							{currentUser ? (
								<li><button onClick={handleSignOut} className="h-10 p-3">Sign Out</button></li>
							) : <li><Link to="/login" className="h-10 p-3">Login</Link></li>}
						</ul>
					</div>
				</div>
			</div>
			<NavBar />
		</div>
	);
};
