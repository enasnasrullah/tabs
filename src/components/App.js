import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const fetchData = async () => {
    const newJob = await axios.get("https://course-api.com/react-tabs-project");
    console.log(newJob.data);
    setJobs(newJob.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h1>Loading.......</h1>
      </div>
    );
  }
  const { company, dates, duties, title } = jobs[value];

  return (
    <div className="container  mt-5">
      <div className="header">
        <h2>experience</h2>
        <div className="line"></div>
      </div>
      <div className="container-tabs d-flex ">
        <div className="button">
          {jobs.map((job, index) => {
            return (
              <button onClick={() => setValue(index)} key={job.id}>
                {job.company}
              </button>
            );
          })}
        </div>
        <div className="info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p>{dates}</p>
          {duties.map((duti, index) => {
            return (
              <div key={index}>
                <p>*{duti}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
