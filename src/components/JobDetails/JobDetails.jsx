import { useLoaderData, useParams } from "react-router-dom";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { GoBriefcase } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localStorage";

function JobDetails() {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id == id);
  console.log("in job: ", job);
  const notify = () => {
    saveJobApplication(id);
    toast("You have applied successfully");
  };

  return (
    <div>
      <div className="mb-4">
        {/* This is the big banner */}
        <div className="relative isolate flex items-center justify-center h-64 bg-gradient-to-r from-violet-300 to-fuchsia-200 text-white">
          {/* Background Gradient Effect */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-2xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
              className="aspect-[577/310] w-[60rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-40"
            />
          </div>

          {/* Banner Content */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight">
              Job Details: {job.job_title}
            </h1>
          </div>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <div className=" md:col-span-3 ">
          <div className="mb-3">
            <span className="font-bold">Job Description: </span>
            {job.job_description}
          </div>
          <div className="mb-3">
            <span className="font-bold">Job Responsibility: </span>
            {job.job_responsibility}
          </div>
          <div className="mb-3">
            <span className="font-bold">Educational Requirements: </span>
            {job.educational_requirements}
          </div>
          <div className="mb-3">
            <span className="font-bold">Experiences: </span>
            {job.experiences}
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-r from-violet-400 to-fuchsia-400 text-white rounded p-4">
            <h2 className="text-2xl font-bold">Job Details</h2>
            <hr />
            <div className="flex items-center mt-2">
              <HiOutlineCurrencyDollar className="text-xl mr-1" />
              <span>
                <span className="font-bold">Salary: </span>
                {job.salary}
              </span>
            </div>
            <div className="flex  mt-2">
              <GoBriefcase className="text-xl mr-1" />
              <span>
                <span className="font-bold">Job Title: </span>
                {job.job_title}
              </span>
            </div>

            <h2 className="mt-3 text-xl font-bold">Contact Information</h2>
            <hr />
            <div>
              <div className="flex item-top mt-2">
                <FaLocationDot className="text-2xl mr-1" />
                <span>
                  <span className="font-bold">Address: </span>
                  {job.contact_information.address}
                </span>
              </div>
              <div className="flex items-center mt-2">
                <MdOutlineMail className="text-xl mr-1" />
                <span>
                  <span className="font-bold">Email: </span>
                  {job.contact_information.email}
                </span>
              </div>
              <div className="flex items-center mt-2">
                <FaPhoneAlt className="text-xl mr-1" />
                <span>
                  <span className="font-bold">Phone: </span>
                  {job.contact_information.phone}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={notify}
            className="mt-3 btn bg-purple-300 text-white w-full"
          >
            Apply Now
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
