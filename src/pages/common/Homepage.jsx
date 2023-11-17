import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Homepage() {
  return (
    <div>
      <Header />
      <div className="px-8 lg:px-32 bg-base-200">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse mb-28">
            <img src="https://images.unsplash.com/photo-1602734666440-b57ff6b304bd?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="max-w-2xl rounded-md ml-14 shadow-2xl" />
            <div>
              <h1 className="text-6xl font-bold">Discover, Learn, Achieve: Your Course Awaits!</h1>
              <p className="py-6 ">Explore courses and instructors with confidence. Our Course Registration System offers insightful reviews for smarter academic choices. Register now to curate your path to success!</p>
              <button className="btn">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
