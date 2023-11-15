import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function NotFound() {
	return (
		<div>
			<Header />
			<div className="mx-8 lg:mx-32">
				<h1 className="text-9xl text-center">This is Not Found page</h1>
				{/* code in here */}
			</div>
			<Footer />
		</div>
	);
}
