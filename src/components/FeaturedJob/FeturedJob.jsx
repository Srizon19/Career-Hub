import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

function FeturedJob({ job }) {
  let {
    logo,
    company_name,
    job_title,
    remote_or_onsite,
    job_type,
    location,
    salary,
    id,
  } = job;
  return (
    <div className="card bg-base-100 w-96 shadow-xl border-[#7E90FE]">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex space-between">
          <div className="flex">
            <CiLocationOn className="text-2xl"></CiLocationOn>
            <div className="pl-2">{location}</div>
          </div>
          <div className="flex">
            <HiMiniCurrencyDollar className="text-2xl"></HiMiniCurrencyDollar>
            <div className="pl-2">Salary: {salary}</div>
          </div>
        </div>
        <div className="card-actions">
          <Link to={`/jobs/${id}`}>
            <button className="btn bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

FeturedJob.propTypes = {
  job: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    job_title: PropTypes.string.isRequired,
    remote_or_onsite: PropTypes.string.isRequired,
    job_type: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeturedJob;
