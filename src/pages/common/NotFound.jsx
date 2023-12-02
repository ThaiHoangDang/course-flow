import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function NotFound() {
	return (
		<div>
			<Header />
				<main className="grid min-h-full place-items-center bg-secondary py-24 sm:py-32 px-8 lg:px-32">
			<div className="text-center">
          <p className="text-base font-semibold text-white">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl text-white">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-white">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            > 
			<span aria-hidden="true">&larr;</span> Go back home
            </a>
          </div>
        </div>
		</main>
			
			<Footer />
		</div>
	);
}
