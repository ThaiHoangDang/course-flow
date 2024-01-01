import { Link } from "react-router-dom";

export default function Footer() {
	return (
		// <footer className="border-t">
		// 	<div className="footer p-10 bg-base-200 text-base-content">
		// 		<nav>
		// 			<header className="footer-title">About</header>
		// 			<Link className="link link-hover">About us</Link>
		// 			<Link className="link link-hover">Contact</Link>
		// 			<Link className="link link-hover">Donation</Link>
		// 		</nav>
		// 		<nav>
		// 			<header className="footer-title">Student Life</header>
		// 			<Link className="link link-hover">Life on campus</Link>
		// 			<Link className="link link-hover">Sports and social clubs</Link>
		// 			<Link className="link link-hover">Support services</Link>
		// 			<Link className="link link-hover">Life and work oppotunities</Link>
		// 		</nav>
		// 		<nav>
		// 			<header className="footer-title">Legal</header>
		// 			<Link className="link link-hover">Terms of use</Link>
		// 			<Link className="link link-hover">Privacy policy</Link>
		// 			<Link className="link link-hover">Cookie policy</Link>
		// 		</nav>
		// 	</div>
		// 	<div className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
		// 		<aside className="items-center grid-flow-col">
		// 			<p>Copyright © 2023 Team 08 Building IT Systems<br />A course management system for students and staff</p>
		// 		</aside>
		// 		<nav className="md:place-self-center md:justify-self-end">
		// 			<div className="grid grid-flow-col gap-4">
		// 				<Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
		// 				<Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
		// 				<Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
		// 			</div>
		// 		</nav>
		// 	</div>
		// </footer>
		<footer class="bg-base-200 border-t" >
			<div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8 ">
				<nav class="flex flex-wrap justify-center -mx-5 -my-2">
					<div class="px-5 py-2">
						<a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
							About
						</a>
					</div>
					<div class="px-5 py-2">
						<a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
							Team
						</a>
					</div>
					<div class="px-5 py-2">
						<a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
							Contact
						</a>
					</div>
					<div class="px-5 py-2">
						<a href="#" class="text-base leading-6 text-gray-500 hover:text-gray-900">
							Terms
						</a>
					</div>
				</nav>
				<div class="flex justify-center mt-8 space-x-6">
					<a href="#" class="text-gray-400 hover:text-gray-500">
						<span class="sr-only">Facebook</span>
						<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
							<path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
						</svg>
					</a>
					<a href="#" class="text-gray-400 hover:text-gray-500">
						<span class="sr-only">Instagram</span>
						<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
							<path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
						</svg>
					</a>
					<a href="#" class="text-gray-400 hover:text-gray-500">
						<span class="sr-only">GitHub</span>
						<svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
							<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
						</svg>
					</a>
				</div>
				<p class="mt-8 text-base leading-6 text-center text-gray-400">
					© 2023 Team 08 Building IT Systems. All rights reserved.
				</p>
			</div>
		</footer >
	);
}
