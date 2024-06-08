import React from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
const id = useParams();

  return (
    <div>
      <div>
        <h2 className="text-2xl text-center mb-4 font-bold">Job Details</h2>
      </div>
      <div>

      </div>
    </div>
  );
};

export default JobDetails;
