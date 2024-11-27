export const getStoredJobApplication = () => {
  const storedJobApplication = localStorage.getItem("job-applications");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

export const saveJobApplication = (id) => {
  const storedJobApplications = getStoredJobApplication();
  const exists = storedJobApplications.find((jobId) => jobId == id);
  if (!exists) {
    storedJobApplications.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplications)
    );
  }
};

export default saveJobApplication;
