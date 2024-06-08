import React from "react";
import useTask from "../../../Hooks/useTask";
import { Link } from "react-router-dom";

const TaskList = () => {
  const [task, refetch] = useTask();
  return (
    <div>
      <div>
        <h2 className="text-2xl text-center mb-4 font-bold">All Task</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
        {task.map((item, idx) => (
          <div key={idx} className="card w-full bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full md:w-[300px] h-full md:h-[200px]"
                src={item.task_img_url}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.task_title}</h2>
              <p>Creator: {item.creator_name}</p>
              <span>Payable Coin: {item.payable_amount}</span>
              <span>Task quantity: {item.task_count}</span>
              <span>Submission Date: {item.completion_date}</span>
              <div className="card-actions justify-end">
                <Link to={`/jobdetails`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
