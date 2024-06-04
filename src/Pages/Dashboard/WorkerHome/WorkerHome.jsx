import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";

const WorkerHome = () => {
  const { user } = useAuth();
  const [data] = useRole();
    
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
      </div>
    </div>
  );
};

export default WorkerHome;
