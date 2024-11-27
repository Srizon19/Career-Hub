import { useEffect, useState } from "react";
import FeturedJob from "../FeaturedJob/FeturedJob";

export default function FeaturedJobs() {
  const [jobs, setJobs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const isViewAllVisible = visibleCount < jobs.length;
  const isHideButtonVisible = visibleCount === jobs.length;

  return (
    <>
      <h2 className="text-5xl text-center">Featured Jobs: {jobs.length}</h2>

      <div className="p-4 mt-5 grid grid-cols-2 gap-6 items-center">
        {jobs.slice(0, visibleCount).map((job) => (
          <FeturedJob key={job.id} job={job} />
        ))}
      </div>

      <div className="text-center mt-5">
        {isViewAllVisible && (
          <button
            onClick={() => setVisibleCount(jobs.length)}
            className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-8 py-3"
          >
            View All
          </button>
        )}
        {isHideButtonVisible && (
          <button
            onClick={() => setVisibleCount(4)}
            className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-8 py-3"
          >
            Hide the Cards
          </button>
        )}
      </div>
    </>
  );
}
