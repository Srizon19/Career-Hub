import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import { useEffect, useState } from "react";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

function AppliedJobs() {
  const jobs = useLoaderData(); // Assumes jobs is an array from the loader
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJob, setDisplayJob] = useState([]);

  const handleFilter = (filter) => {
    if (filter === "All") {
      setDisplayJob(appliedJobs);
    } else if (filter === "Remote") {
      setDisplayJob(
        appliedJobs.filter((job) => job.remote_or_onsite === "Remote")
      );
    } else if (filter === "Onsite") {
      setDisplayJob(
        appliedJobs.filter((job) => job.remote_or_onsite === "Onsite")
      );
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplication(); // Retrieves stored job IDs
    console.log(storedJobIds);
    if (storedJobIds?.length > 0) {
      // Ensure storedJobIds is defined and not empty
      const jobApplied = jobs.filter(
        (job) => storedJobIds.includes(String(job.id)) // Match job.id with stored IDs
      );
      setAppliedJobs(jobApplied); // Update the state with the filtered jobs
      setDisplayJob(jobApplied);
    }
  }, [jobs]); // Add jobs as a dependency to avoid stale references

  return (
    <div>
      <div className="text-end">
        <details className="dropdown">
          <summary className="btn m-1">filter</summary>
          <ul className="menu dropdown-content bg-base-100  z-[1] w-52 p-2 shadow">
            <li onClick={() => handleFilter("All")}>
              <a>All</a>
            </li>
            <li onClick={() => handleFilter("Remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleFilter("Onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {displayJob.length > 0 ? ( // Check if there are applied jobs
          displayJob.map((job) => (
            <div
              key={job.id}
              className="card card-side bg-base-100 shadow-xl mb-4"
            >
              <figure>
                <img src={job.logo} alt={job.job_title || "Job Image"} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{job.job_title || "Job Title"}</h2>
                <h4>{job.company_name}</h4>
                <div>
                  <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                    {job.remote_or_onsite}
                  </button>
                  <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">
                    {job.job_type}
                  </button>
                </div>
                <div className="flex space-between">
                  <div className="flex mr-3">
                    <CiLocationOn className="text-2xl"></CiLocationOn>
                    <div className="pl-2">{job.location}</div>
                  </div>
                  <div className="flex">
                    <HiMiniCurrencyDollar className="text-2xl"></HiMiniCurrencyDollar>
                    <div className="pl-2">Salary: {job.salary}</div>
                  </div>
                </div>
                <div className="card-actions justify-end">
                  <Link to={`/job/${job.id}`}>
                    <button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No jobs applied yet.</p> // Fallback if no jobs were applied
        )}
      </div>
    </div>
  );
}

export default AppliedJobs;
