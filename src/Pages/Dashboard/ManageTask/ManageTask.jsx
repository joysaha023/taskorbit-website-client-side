import React from "react";
import useTask from "../../../Hooks/useTask";

const ManageTask = () => {
    const [task, refetch] = useTask();
    console.log(task)

  return (
    <div>
      <div>
        <h2 className="text-2xl text-center mb-4 font-bold">Manage Task</h2>
      </div>
      <div>

      </div>
    </div>
  );
};

export default ManageTask;
