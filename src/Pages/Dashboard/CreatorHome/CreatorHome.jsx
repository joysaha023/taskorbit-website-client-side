import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { IoCheckmarkSharp } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CreatorHome = () => {
  const { user } = useAuth();

  const { data, refetch } = useQuery({
    queryKey: ["taskDetails"],
    queryFn: async () => {
      const res = await axios.get(
        `https://taskorbit-website-server-side.vercel.app/reviewData/${user.email}`
      );
      return res.data;
    },
  });

  const handleStatus = async (id, previous, status) => {
    
    const { data } = await axios.patch(
      `https://taskorbit-website-server-side.vercel.app/updateStatus/${id}`,
      { status }
    );
    console.log(data)
    refetch();
  };

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
            <div className="stat-value text-primary">33</div>
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
        <h2 className="text-2xl font-semibold">Task To Review</h2>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>No</th>
                  <th>Worker Name</th>
                  <th>Task Title</th>
                  <th>Amount</th>
                  <th>View Submission</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, idx) => (
                  <tr key={item._id}>
                    <th>{idx + 1}</th>
                    <th className="font-normal">
                      {item.worker_name} <br />{" "}
                      <span> {item.worker_email}</span>
                    </th>
                    <td>{item.task_title}</td>
                    <td>{item.payable_amount}</td>
                    <td>
                      {/* Open the modal using document.getElementById('ID').showModal() method */}
                      <button
                        className="btn"
                        onClick={() =>
                          document.getElementById("my_modal_5").showModal()
                        }
                      >
                        View
                      </button>
                      <dialog
                        id="my_modal_5"
                        className="modal modal-bottom sm:modal-middle"
                      >
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">
                            {item.submission_details}
                          </h3>
                          <p className="py-4">
                            Press ESC key or click the button below to close
                          </p>
                          <div className="modal-action">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn">Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </td>
                    <td>{item.status}</td>
                    <td>
                      <button
                        onClick={() =>
                          handleStatus(item._id, item.status, "Approved")
                        }
                        className="text-xl mr-4"
                      >
                        <IoCheckmarkSharp />
                      </button>
                      <button
                        onClick={() =>
                          handleStatus(item._id, item.status, "Rejected")
                        }
                        className="text-xl"
                      >
                        <TiDeleteOutline />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorHome;
