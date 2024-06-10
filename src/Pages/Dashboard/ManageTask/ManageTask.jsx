import React from "react";
import useTask from "../../../Hooks/useTask";
import Swal from "sweetalert2";
import axios from "axios";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

const ManageTask = () => {
  const [task, refetch] = useTask();
  const [isOpen, setIsOpen] = useState(false);

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
        axios.delete(`https://taskorbit-website-server-side.vercel.app/delete/${task._id}`).then((res) => {
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
                      <button className="btn" onClick={() => setIsOpen(true)}>
                        View
                      </button>
                      <Dialog
                        open={isOpen}
                        onClose={() => setIsOpen(false)}
                        className="relative z-50"
                      >
                        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                            <DialogTitle className="font-bold">
                              {item.task_title}
                            </DialogTitle>
                            <Description>
                              This will permanently deactivate your account
                            </Description>
                            <p>
                              {item.task_details}
                            </p>
                            <div className="flex gap-4">
                              <button className="btn" onClick={() => setIsOpen(false)}>
                                Cancel
                              </button>
                             
                            </div>
                          </DialogPanel>
                        </div>
                      </Dialog>
                    </div>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-error"
                    >
                      Delete
                    </button>
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
