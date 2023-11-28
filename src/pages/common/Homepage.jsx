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
          <h1 className="text-5xl font-bold">Features</h1>
          <p className="py-6">Everything you need.</p>
          <div className="flex flex-col lg:flex-row gap-10 mb-28">
            <div class="basis-3/12 card lg:w-3/12 bg-base-100 shadow-xl rounded-3xl">
              <figure><img src="https://plus.unsplash.com/premium_photo-1664444320101-d277eac712d2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">Course Search and Information</h2>
                <p>Allows students to easily find and access information about available courses, prerequisites, and descriptions, aiding in informed decision-making.</p>
              </div>
            </div>
            <div class="basis-3/12 card lg:w-3/12 bg-base-100 shadow-xl rounded-3xl">
              <div class="card-body">
                <h2 class="card-title">Feedback Mechanism</h2>
                <p>Enables students to provide valuable feedback on courses, helping administrators make improvements and adjustments based on user input.</p>
              </div>
              <figure><img src="https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
            </div>
            <div class="basis-3/12 card lg:w-3/12 bg-base-100 shadow-xl rounded-3xl">
              <figure><img src="https://images.unsplash.com/photo-1579208570378-8c970854bc23?q=80&w=2444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
              <div class="card-body">
                <h2 class="card-title">Ticket Overview System</h2>
                <p>Quick access to an overview of user support tickets, allowing administrators to prioritize and address student inquiries efficiently.</p>
              </div>
            </div>
            <div class="basis-3/12 card lg:w-3/12 bg-base-100 shadow-xl rounded-3xl">
              <div class="card-body">
                <h2 class="card-title">Course Management Tools</h2>
                <p>Robust tools for adding, editing, or removing courses, providing administrators with control over the course catalog.</p>
              </div>
              <figure><img src="https://images.unsplash.com/photo-1421757295538-9c80958e75b0?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" /></figure>
            </div>
          </div>
        </div>
      </div>
      <div class="overflow-hidden bg-white py-24 sm:py-32 px-8 lg:px-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="lg:pr-8 lg:pt-4">
              <div class="lg:max-w-lg">
                <h2 class="text-base font-semibold leading-7 text-black">Lorem, ipsum dolor.</h2>
                <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Benefits</h1>
                <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div class="relative pl-9">
                    <dt class="inline font-semibold text-gray-900">
                      <svg class="absolute left-1 top-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                      </svg>
                      Push to deploy.
                    </dt>
                    <dd class="inline">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</dd>
                  </div>
                  <div class="relative pl-9">
                    <dt class="inline font-semibold text-gray-900">
                      <svg class="absolute left-1 top-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                      </svg>
                      SSL certificates.
                    </dt>
                    <dd class="inline">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</dd>
                  </div>
                  <div class="relative pl-9">
                    <dt class="inline font-semibold text-gray-900">
                      <svg class="absolute left-1 top-1 h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                        <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                      </svg>
                      Database backups.
                    </dt>
                    <dd class="inline">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</dd>
                  </div>
                </dl>
              </div>
            </div>
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Product screenshot" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442" />
          </div>
        </div>
      </div>
      <div className="px-8 lg:px-32">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">WEEK 1</time>
              <div className="text-lg font-black">Lorem</div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore corporis amet eaque rerum veritatis laborum. Ducimus, eos molestias! Necessitatibus illum quo ex doloremque ducimus non porro mollitia asperiores, et iure amet laudantium natus similique deleniti ullam, placeat quae itaque neque?
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">WEEK 4</time>
              <div className="text-lg font-black">Lorem</div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet fugiat blanditiis perferendis tempora, inventore magni! Natus perspiciatis repellat quia quae doloremque ea ducimus aliquid pariatur eaque temporibus enim neque nesciunt porro quasi, nihil dolor quisquam ab ut repellendus, animi adipisci.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">WEEK 5</time>
              <div className="text-lg font-black">Lorem</div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam provident ea deserunt recusandae corporis tempore temporibus rerum molestias nulla omnis iure consectetur nam cupiditate optio totam, debitis assumenda, tempora mollitia nemo facere amet voluptate. Nam sequi nostrum numquam voluptatum reiciendis.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">WEEK 7</time>
              <div className="text-lg font-black">Lorem </div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur praesentium ipsa aliquam ea est voluptate explicabo amet dignissimos, commodi eaque iste soluta vero mollitia atque distinctio, facilis sint sequi? Veritatis, modi! Ducimus veniam rerum vel suscipit. Eius repudiandae consequatur suscipit.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">WEEK 12</time>
              <div className="text-lg font-black">Lorem</div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur quibusdam delectus natus numquam culpa provident earum eos reiciendis odit, atque sed autem blanditiis facere necessitatibus recusandae nihil fuga assumenda nam impedit? Provident ipsa est architecto consectetur, odio cupiditate beatae!
            </div>
          </li>
        </ul>
      </div>
      <div class="px-8 lg:px-32">
        <div class="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
          <h1 class="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">FAQ</h1>
          <p class="text-center text-gray-600 text-sm mt-2">Here are some of the frequently asked questions</p>
          <div class="space-y-12 px-2 xl:px-16 mt-12">
            <div class="mt-4 flex">
              <div>
                <div class="flex items-center h-16 border-l-4 border-black">
                  <span class="text-4xl text-black px-4">Q.</span>
                </div>
                <div class="flex items-center h-16 border-l-4 border-gray-400">
                  <span class="text-4xl text-gray-400 px-4">A.</span>
                </div>
              </div>
              <div>
                <div class="flex items-center h-16">
                  <span class="text-lg text-black font-bold">Lorem ipsum dolor sit amet?</span>
                </div>
                <div class="flex items-center py-2">
                  <span class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>

                </div>
              </div>
            </div>

            <div class="mt-4 flex">
              <div>
                <div class="flex items-center h-16 border-l-4 border-black">
                  <span class="text-4xl text-black px-4">Q.</span>
                </div>
                <div class="flex items-center h-16 border-l-4 border-gray-400">
                  <span class="text-4xl text-gray-400 px-4">A.</span>
                </div>
              </div>
              <div>
                <div class="flex items-center h-16">
                  <span class="text-lg text-black font-bold">Consectetur adipisicing elit?</span>
                </div>
                <div class="flex items-center py-2">
                  <span class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>

                </div>
              </div>
            </div>

            <div class="mt-4 flex">
              <div>
                <div class="flex items-center h-16 border-l-4 border-black">
                  <span class="text-4xl text-black px-4">Q.</span>
                </div>
                <div class="flex items-center h-16 border-l-4 border-gray-400">
                  <span class="text-4xl text-gray-400 px-4">A.</span>
                </div>
              </div>
              <div>
                <div class="flex items-center h-16">
                  <span class="text-lg text-black font-bold">Neque eos, dignissimos provident reiciendis debitis?</span>
                </div>
                <div class="flex items-center py-2">
                  <span class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>

                </div>
              </div>
            </div>

            <div class="mt-4 flex">
              <div>
                <div class="flex items-center h-16 border-l-4 border-black">
                  <span class="text-4xl text-black px-4">Q.</span>
                </div>
                <div class="flex items-center h-16 border-l-4 border-gray-400">
                  <span class="text-4xl text-gray-400 px-4">A.</span>
                </div>
              </div>
              <div>
                <div class="flex items-center h-16">
                  <span class="text-lg text-black font-bold">Repudiandae commodi perferendis et itaque?</span>
                </div>
                <div class="flex items-center py-2">
                  <span class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>

                </div>
              </div>
            </div>

            <div class="mt-4 flex">
              <div>
                <div class="flex items-center h-16 border-l-4 border-black">
                  <span class="text-4xl text-black px-4">Q.</span>
                </div>
                <div class="flex items-center h-16 border-l-4 border-gray-400">
                  <span class="text-4xl text-gray-400 px-4">A.</span>
                </div>
              </div>
              <div>
                <div class="flex items-center h-16">
                  <span class="text-lg text-black font-bold">Similique fugiat cumque?</span>
                </div>
                <div class="flex items-center py-2">
                  <span class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>

                </div>
              </div>
            </div>

            <div class="mt-4 flex">
              <div>
                <div class="flex items-center h-16 border-l-4 border-black">
                  <span class="text-4xl text-black px-4">Q.</span>
                </div>
                <div class="flex items-center h-16 border-l-4 border-gray-400">
                  <span class="text-4xl text-gray-400 px-4">A.</span>
                </div>
              </div>
              <div>
                <div class="flex items-center h-16">
                  <span class="text-lg text-black font-bold">Impedit iusto vitae dolorum, nostrum fugit?</span>
                </div>
                <div class="flex items-center py-2">
                  <span class="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dignissimos. Neque eos, dignissimos provident reiciendis debitis repudiandae commodi perferendis et itaque, similique fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
