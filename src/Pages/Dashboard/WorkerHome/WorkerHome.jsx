import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const WorkerHome = () => {
  const { user } = useAuth();
  // const [data] = useRole();

  const { data, refetch } = useQuery({
    queryKey: ["approveData"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/approveData/${user.email}`
      );
      return res.data;
    },
  });



  return (
    <div>
      <div className="mx-6 ">
        <h2 className="text-2xl font-semibold">
          Hi, Welcome {user?.displayName}
        </h2>
      </div>

      <div className="text-center mt-6">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Available Coin</div>
            <div className="stat-value text-primary">{data?.coin}</div>
          </div>

          <div className="stat">
            <div className="stat-title">Total Submission</div>
            <div className="stat-value text-secondary">2.6M</div>
          </div>

          <div className="stat">
            <div className="stat-title">Tasks Earning</div>
            <div className="stat-value">86%</div>
          </div>
        </div>
      </div>

      <div className="mx-6">
        <h2 className="text-2xl font-semibold">Approved Submission</h2>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Task Title</th>
                  <th>Amount</th>
                  <th>Creator Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, idx) =>  <tr key={idx}>
                  <th>{idx +1}</th>
                  <td>{item.task_title}</td>
                  <td>{item.payable_amount}</td>
                  <td>{item.creator_name}</td>
                  <td>{item.status}</td>
                </tr>)}
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerHome;
