import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function NotFound() {
	return (
		<div>
			<Header />
			<main className="grid min-h-full place-items-center text-neutral-700 py-24 sm:py-32 px-8 lg:px-32">
			  <div className="text-center">
          <p className="text-base font-semibold">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/" className="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm border border-neutral-500 hover:bg-neutral-100 focus:bg-neutral-200"> 
			        <span aria-hidden="true">&larr;</span> Go back home
            </Link>
          </div>
        </div>
		  </main>
			<Footer />
		</div>
	);
}
