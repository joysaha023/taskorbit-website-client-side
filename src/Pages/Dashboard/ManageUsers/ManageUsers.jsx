import React from "react";
import useUser from "../../../Hooks/useUser";
import { FiTrash } from "react-icons/fi";
import { FaUser, FaUsers } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [data, isPending, refetch] = useUser();

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
        axios.delete(`http://localhost:5000/userDelete/${task._id}`).then((res) => {
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

  const handleUser = async (id, role) =>  {
    console.log(id, role)
    const { data } = await axios.patch(
      `http://localhost:5000/userRole/${id}`,
      { role }
    );
    console.log(data)
    refetch();
  }

  return (
    <div>
      <div>
        <h2 className="text-2xl text-center mb-4 font-bold">My All User</h2>
      </div>
      <div>
        <div className="">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Role</th>
                <th>Coin</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-50">{item.email}</div>
                    </div>
                  </td>
                  <td>{item.role}</td>
                  <td>{item.coin}</td>
                  <th className="flex gap-2 items-center">
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className="btn m-1">
                        <FaUsers></FaUsers>
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <a onClick={()=> {handleUser(item._id, 'admin')}}>Admin</a>
                        </li>
                        <li>
                          <a onClick={()=> {handleUser(item._id, 'TaskCreator')}}>Task-Creator</a>
                        </li>
                        <li>
                          <a onClick={()=> {handleUser(item._id, 'worker')}}>Worker</a>
                        </li>
                      </ul>
                    </div>
                    <button onClick={() => handleDelete(item)} className="btn btn-error">
                      <FiTrash />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
