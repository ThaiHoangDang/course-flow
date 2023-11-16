import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="navbar shadow-sm flex gap-2">
			<div className="basis-3/12">
				<Link className="btn btn-ghost text-xl hidden md:flex">Course Flow</Link>
				<Link className="btn btn-ghost text-xl md:hidden">CF</Link>
			</div>
			<div className="form-control flex-1">
				<input type="text" placeholder="Search" className="input input-bordered w-full rounded-full"/>
			</div>
			<div className="dropdown dropdown-end basis-3/12 flex">
				<div className="ml-auto">
					<button tabIndex={0} className="btn btn-square btn-ghost">
						<svg fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
					</button>
					<ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-40">
						<li><Link className="h-10 p-3">Profile</Link></li>
						<li><Link className="h-10 p-3">Settings</Link></li>
						<li><Link className="h-10 p-3">Logout</Link></li>
					</ul>
				</div>
			</div>
		</div>
	);
}
