import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const JobDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["taskDetails"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/jobdetails/${id}`);
      return res.data;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const submission_details = form.submit_details.value;
    const task_id = data?._id;
    const task_title = data?.task_title;
    const task_details = data?.task_detail;
    const task_img_url = data?.task_img_url;
    const payable_amount = data?.payable_amount;
    const worker_email = user?.email;
    const worker_name = user?.displayName;
    const creator_email = data?.creator_email;
    const creator_name = data?.creator_name;
    const current_date = new Date();
    const status = "Pending";
    const Submission_Info = {
      submission_details,
      task_id,
      task_title,
      task_details,
      task_img_url,
      payable_amount,
      worker_email,
      worker_name,
      creator_email,
      creator_name,
      current_date,
      status
    };
    

    fetch('http://localhost:5000/submitDetails', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json',
        },
        body: JSON.stringify(Submission_Info)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  };

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
            <p><span className="font-bold">Task Detail :</span> {data?.task_detail}</p>
            <p><span className="font-bold">Submission Info : </span>{data?.submission_info}</p>
            <p className="font-bold">Submission Details:</p>
            <form onSubmit={handleSubmit}>
              <div>
                {" "}
                <textarea
                  className="textarea w-full textarea-bordered"
                  name="submit_details"
                  placeholder="Submit your work Details..."
                ></textarea>
              </div>
              <button className="btn btn-block text-white btn-primary mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
