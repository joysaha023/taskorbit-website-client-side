import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["taskDetails"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/jobdetails/${id}`);
      return res.data;
    },
  });

  return (
    <div>
      <div>
        <h2 className="text-2xl text-center mb-4 font-bold">Job Details</h2>
      </div>
      <div>
        <div className="card card-compact w-full bg-base-100 shadow-xl px-4">
          <figure>
            <img
              className=" h-full md:h-[300px] rounded-lg"
              src={data?.task_img_url}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data?.task_title}</h2>
            <p>{data?.task_detail}</p>
            <p className="font-bold">Submission Details:</p>
            <form action="">
             <div> <textarea
                className="textarea w-full textarea-bordered"
                placeholder="Submit your work Details..."
              ></textarea></div>
              <button className="btn btn-block text-white btn-primary mt-4">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
