import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const WorkerSubmission = () => {
  const { user } = useAuth();

  const { data } = useQuery({
    queryKey: ["taskDetails"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/submitData/${user.email}`
      );
      return res.data;
    },
  });

  return (
    <div>
      <div>
        <h2 className="text-2xl text-center mb-4 font-bold">
          My All Submission
        </h2>
      </div>
      <div>
        <div className="overflow-x-auto px-4">
          <table className="table border">
            {/* head */}
            <thead className="bg-slate-300">
              <tr>
                <th>Task Id</th>
                <th>Task Title</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) =>  <tr key={item._id}>
                <th>{item.task_id.slice(0,7)}</th>
                <td>{item.task_title}</td>
                <td>{item.payable_amount}</td>
                <td>{item.status}</td>
                <td>{item.current_date.slice(0,10)}</td>
              </tr>)}
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkerSubmission;
