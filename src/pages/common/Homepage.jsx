import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Homepage() {
  return (
    <div>
      <Header />
      <div className="px-8 lg:px-32 bg-base-100" id="heroSection">
        <div className="hero min-h-screen items-center">
          <div className="hero-content flex flex-col lg:flex-row gap-10 mb-28">
            <div className="basis-5/12">
              <h1 className="text-6xl font-bold">Discover, Learn, Achieve: Your Course Awaits!</h1>
              <p className="py-6 ">Explore courses and instructors with confidence. Our Course Registration System offers insightful reviews for smarter academic choices. Register now to curate your path to success!</p>
              <button className="btn btn-lg btn-outline rounded-full">Get Started</button>
            </div>
            <div className="basis-7/12" >
              <img src="https://images.unsplash.com/photo-1602734666440-b57ff6b304bd?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-cover rounded-md  shadow-2xl " alt="hero" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-8 lg:px-32 bg-base-100" id="featuresSection">
        <div className="title text-center">
          <h1 className="text-5xl font-bold">Features & Benefits</h1>
          <p className="py-6">Everything you need.</p>
          <div className="flex flex-col lg:flex-row gap-10 mb-28">
            <div class="basis-3/12 card lg:w-3/12 bg-base-100 shadow-xl">
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
            <div class="basis-3/12 card lg:w-3/12 bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            </div>
            <div class="basis-3/12 card lg:w-3/12 bg-base-100 shadow-xl">
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
            <div class="basis-3/12 card lg:w-3/12 bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
              <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
