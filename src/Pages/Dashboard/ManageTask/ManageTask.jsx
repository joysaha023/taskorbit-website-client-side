import React from "react";
import useTask from "../../../Hooks/useTask";

const ManageTask = () => {
  const [task, refetch] = useTask();

  return (
    <div>
      <div>
        <h2 className="text-2xl text-center mb-4 font-bold">Manage Task</h2>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Task Title</th>
                <th>Task Quantity</th>
                <th>Coin</th>
                <th>Availability</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {task.map((item, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{item.task_title}</div>
                        <div className="text-sm opacity-50">
                          {item.creator_name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.task_count}</td>
                  <td>{item.payable_amount}</td>
                  <td>
                    <button className="btn  btn-ghost btn-xs">Available</button>
                  </td>
                  <td className="flex">
                    <div>
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("my_modal_1").showModal()
                        }
                      >
                        View
                      </button>
                      <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <img src={item.task_img_url} alt="" />
                          <h3 className="font-bold text-lg">{item.task_title}</h3>
                          <p className="py-4">
                            {item.task_detail}
                          </p>
                          <p>{item.submission_info}</p>
                          <div className="modal-action">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn">Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </div>
                    <button className="btn btn-error">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageTask;
