import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GoUp from "../../components/GoUp";
import PreLoader from "../../components/PreLoader";

export default function Homepage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);



  return (
    <div>
      {
        loading ?
          <PreLoader loading={loading} />
          : (
            <div className={`homepage-content ${loading ? 'fade-out' : 'fade-in'}`}>
              <Header />
              <div className="px-8 lg:px-32 bg-base-100">
                <div className="md:min-h-screen flex">
                  <div className="lg:flex gap-20 max-w-7xl mx-auto">
                    <div className="basis-5/12 my-20 lg:my-36">
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        Discover, Learn, Achieve: Your Course Awaits!
                      </h1>
                      <p className="text-sm md:text-md py-6 ">
                        Explore courses and instructors with confidence. Our Course
                        Registration System offers insightful reviews for smarter
                        academic choices. Register now to curate your path to success!
                      </p>
                      <button className="btn btn-lg btn-outline rounded-full">
                        <Link to="/courses-list">Explore Courses</Link>
                      </button>
                    </div>
                    <div className="basis-7/12 my-20">
                      <img
                        src="https://images.unsplash.com/photo-1602734666440-b57ff6b304bd?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="object-cover rounded-md  shadow-2xl "
                        alt="hero"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-8 lg:px-32 bg-base-100" id="featuresSection">
                <div className="title text-center">
                  <h1 className="text-4xl lg:text-6xl font-bold">Features</h1>
                  <p className="py-6">Everything you need.</p>
                  <div className="flex flex-col items-center justify-center lg:flex-row gap-10 mb-28">
                    <div className="card w-8/12 lg:w-3/12 bg-base-100 shadow-xl rounded-3xl">
                      <figure>
                        <img
                          src="https://plus.unsplash.com/premium_photo-1664444320101-d277eac712d2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Shoes"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Course Search and Information</h2>
                        <p>
                          Allows students to easily find and access information about
                          available courses, prerequisites, and descriptions, aiding in
                          informed decision-making.
                        </p>
                      </div>
                    </div>
                    <div className="card w-8/12 lg:w-3/12 bg-base-100 shadow-xl rounded-3xl">
                      <div className="card-body">
                        <h2 className="card-title">Feedback Mechanism</h2>
                        <p>
                          Enables students to provide valuable feedback on courses,
                          helping administrators make improvements and adjustments based
                          on user input.
                        </p>
                      </div>
                      <figure>
                        <img
                          src="https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Shoes"
                        />
                      </figure>
                    </div>
                    <div className="card w-8/12 lg:w-3/12 bg-base-100 shadow-xl rounded-3xl">
                      <figure>
                        <img
                          src="https://images.unsplash.com/photo-1579208570378-8c970854bc23?q=80&w=2444&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Shoes"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">Ticket Overview System</h2>
                        <p>
                          Quick access to an overview of user support tickets, allowing
                          administrators to prioritize and address student inquiries
                          efficiently.
                        </p>
                      </div>
                    </div>
                    <div className="card w-8/12 lg:w-3/12 bg-base-100 shadow-xl rounded-3xl">
                      <div className="card-body">
                        <h2 className="card-title">Course Management Tools</h2>
                        <p>
                          Robust tools for adding, editing, or removing courses,
                          providing administrators with control over the course catalog.
                        </p>
                      </div>
                      <figure>
                        <img
                          src="https://images.unsplash.com/photo-1421757295538-9c80958e75b0?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Shoes"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden bg-white py-24 sm:py-32 px-8 lg:px-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                      <div className="lg:max-w-lg">
                        <h2 className="text-base leading-7 text-black">
                          Unlocking Advantages.
                        </h2>
                        <h1 className="mt-2 text-4xl lg:text-6xl font-bold text-gray-900 sm:text-4xl">
                          Benefits
                        </h1>
                        <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                          <div className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                              <svg
                                className="absolute left-1 top-1 h-5 w-5 text-black"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" />
                              </svg>
                              Efficiency and Streamlined Processes.
                            </dt>
                            <dd className="inline">
                              {" "}
                              Drastically reduces manual tasks, paperwork, and
                              administrative efforts in the course registration process,
                              leading to streamlined operations for both students and
                              administrators
                            </dd>
                          </div>
                          <div className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                              <svg
                                className="absolute left-1 top-1 h-5 w-5 text-black"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" />
                              </svg>
                              Improved User Experience and Engagement.
                            </dt>
                            <dd className="inline">
                              {" "}
                              Ensures a positive and user-friendly interface, making it
                              easy for students to navigate and engage with the system.
                              Administrators also benefit from a smoother workflow,
                              improving overall user satisfaction
                            </dd>
                          </div>
                          <div className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                              <svg
                                className="absolute left-1 top-1 h-5 w-5 text-black"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                                <path d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" />
                              </svg>
                              Data-Driven Decision-Making and Planning.
                            </dt>
                            <dd className="inline">
                              {" "}
                              Empowers administrators with insightful analytics, aiding
                              in strategic decision-making. The system's data-driven
                              approach allows for better planning, adapting to changing
                              academic needs, and maintaining competitiveness in the
                              educational landscape.
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                    <img
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Product screenshot"
                      className="w-[48rem] max-w-none rounded-l-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                      width="2432"
                      height="1442"
                    />
                  </div>
                </div>
              </div>
              <div className="px-8 lg:px-32">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                  <li>
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        />
                      </svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                      <time className="font-mono italic">WEEK 0 & WEEK 1</time>
                      <div className="text-lg font-black">
                        Introduction and Orientation
                      </div>
                      In Week 1, you'll register on our Course Management System and set
                      up your user profile. Engage in the welcome discussion forum,
                      share an introduction, and submit the Week 1 icebreaker
                      assignment.
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end mb-10">
                      <time className="font-mono italic">WEEK 4</time>
                      <div className="text-lg font-black">
                        Midterm Review and Assessments
                      </div>
                      Reflect on what you've learned. Review materials, complete midterm
                      assignments, and join review sessions for crucial feedback on your
                      progress.
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        />
                      </svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                      <time className="font-mono italic">WEEK 5</time>
                      <div className="text-lg font-black">Group Project Kickoff</div>
                      Form groups, plan project details, and start collaborative work.
                      Maintain open communication with your group members throughout
                      this week.
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        />
                      </svg>
                    </div>
                    <div className="timeline-end mb-10">
                      <time className="font-mono italic">WEEK 7</time>
                      <div className="text-lg font-black">
                        Assessments and Progress Check
                      </div>
                      Check the assessment schedule, review and complete assignments,
                      and engage in Q&A sessions. Reflect on your learning journey and
                      refine study strategies. You may have to take some tests during
                      this week.
                    </div>
                    <hr />
                  </li>
                  <li>
                    <hr />
                    <div className="timeline-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        />
                      </svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10">
                      <time className="font-mono italic">WEEK 12</time>
                      <div className="text-lg font-black">
                        Final Week and Course Wrap-up
                      </div>
                      Review final assignments, confirm submission guidelines, and
                      participate in any final Q&A sessions. Reflect on the course,
                      provide feedback, and receive final grades and feedback. Access
                      your certificate of completion if applicable, marking the end of
                      your course journey.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="px-8 lg:px-32 my-20">
                <div className="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
                  <h1 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">
                    FAQ
                  </h1>
                  <p className="text-center text-gray-600 text-sm mt-2">
                    Here are some of the frequently asked questions
                  </p>
                  <div className="space-y-12 px-2 xl:px-16 mt-12">
                    <div className="mt-4 flex">
                      <div>
                        <div className="flex items-center h-16 border-l-4 border-black">
                          <span className="text-4xl text-black px-4">Q.</span>
                        </div>
                        <div className="flex items-center h-16 border-l-4 border-gray-400">
                          <span className="text-4xl text-gray-400 px-4">A.</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center h-16">
                          <span className="text-lg text-black font-bold">
                            Can I drop a course that I enrolled earlier?
                          </span>
                        </div>
                        <div className="flex items-center py-2">
                          <span className="text-gray-500">
                            Yes, you can, but penalties will be applied, depending on
                            the week that you drop the course. To be more specific, if
                            you drop a course during the first 4 weeks, no penalty will
                            be applied; if you drop between Week 5 and Week 6, you will
                            be fined 2.000.000 VND; and if you drop after Week 6, you
                            will have to fully pay for the course that you dropped.
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex">
                      <div>
                        <div className="flex items-center h-16 border-l-4 border-black">
                          <span className="text-4xl text-black px-4">Q.</span>
                        </div>
                        <div className="flex items-center h-16 border-l-4 border-gray-400">
                          <span className="text-4xl text-gray-400 px-4">A.</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center h-16">
                          <span className="text-lg text-black font-bold">
                            Can I enroll in multiple courses at the same time?
                          </span>
                        </div>
                        <div className="flex items-center py-2">
                          <span className="text-gray-500">
                            Yes, you can enroll in multiple courses simultaneousely. The
                            system allows for easy navigation between different courses,
                            and your dashboard provides a consolidated view of your
                            progress across all enrolled courses.
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex">
                      <div>
                        <div className="flex items-center h-16 border-l-4 border-black">
                          <span className="text-4xl text-black px-4">Q.</span>
                        </div>
                        <div className="flex items-center h-16 border-l-4 border-gray-400">
                          <span className="text-4xl text-gray-400 px-4">A.</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center h-16">
                          <span className="text-lg text-black font-bold">
                            What types of assessments are used in the courses?
                          </span>
                        </div>
                        <div className="flex items-center py-2">
                          <span className="text-gray-500">
                            Courses may include a variety of assignments, such as
                            quizzes, exams, reports, and projects. Moreover, specific
                            assessments methods are all provided and well-designed to
                            evaluate your understanding of the course material.
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex">
                      <div>
                        <div className="flex items-center h-16 border-l-4 border-black">
                          <span className="text-4xl text-black px-4">Q.</span>
                        </div>
                        <div className="flex items-center h-16 border-l-4 border-gray-400">
                          <span className="text-4xl text-gray-400 px-4">A.</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center h-16">
                          <span className="text-lg text-black font-bold">
                            How do I sign up for courses on this platform?
                          </span>
                        </div>
                        <div className="flex items-center py-2">
                          <span className="text-gray-500">
                            To sign up for courses, please login using your school
                            account and carefully review available courses. Click on the
                            course you are interested in and follow the enrollment
                            intrusctions to secure your spot.
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex">
                      <div>
                        <div className="flex items-center h-16 border-l-4 border-black">
                          <span className="text-4xl text-black px-4">Q.</span>
                        </div>
                        <div className="flex items-center h-16 border-l-4 border-gray-400">
                          <span className="text-4xl text-gray-400 px-4">A.</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center h-16">
                          <span className="text-lg text-black font-bold">
                            Are there any prerequisites for enrolling in certain
                            courses?
                          </span>
                        </div>
                        <div className="flex items-center py-2">
                          <span className="text-gray-500">
                            Prerequisites, if any, are listed in the course description.
                            Make sure to review the prerequisites before enrolling to
                            ensure you have the necessary background knowledge or skills
                            for the course.
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex">
                      <div>
                        <div className="flex items-center h-16 border-l-4 border-black">
                          <span className="text-4xl text-black px-4">Q.</span>
                        </div>
                        <div className="flex items-center h-16 border-l-4 border-gray-400">
                          <span className="text-4xl text-gray-400 px-4">A.</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center h-16">
                          <span className="text-lg text-black font-bold">
                            Is there a deadline for completing a course?
                          </span>
                        </div>
                        <div className="flex items-center py-2">
                          <span className="text-gray-500">
                            Yes, courses generally have set timelines for completion.
                            Check the course schedule and deadlines provided by your
                            instructor. If you require an extension or have exceptional
                            circumstances, communicate with your instructor as early as
                            possible.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <GoUp />
              <Footer />
            </div>
          )}
    </div>

  );
}
