import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTask from "../../../Hooks/useTask";

const CreatorTask = () => {
 const [task, refetch] = useTask()

  const handleDelete = (task) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/delete/${task._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div>
        <h2 className="text-2xl text-center mb-4 font-bold">My All Task</h2>
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
                <th>Payable Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {task.map((item, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{item.task_title} </td>
                  <td>{item.task_count}</td>
                  <td>{item.payable_amount}</td>
                  <td>
                    <div className="flex gap-2">
                      <Link to={`/dashboard/taskUpdate/${item._id}`} className="btn btn-primary">
                        <FiEdit />
                      </Link>
                      <button
                        onClick={() => handleDelete(item)}
                        className="btn btn-error"
                      >
                        <FiTrash />
                      </button>
                    </div>
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

export default CreatorTask;
