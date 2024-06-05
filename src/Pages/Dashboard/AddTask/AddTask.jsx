import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import { imageUpload } from "../../../api/utils";



const AddTask = () => {
  const {user} = useAuth();
  
 


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target
    const task_title = form.title.value;
    const submission_info = form.submission.value;
    const task_detail = form.taskdetails.value;
    const task_img = form.image.files[0]
    const task_count = form.quantity.value;
    const payable_amount = form.amount.value;
    const completion_date = form.date.value;
    const creator_email = user?.email;
    const creator_name = user?.displayName;
    const current_time = new Date().toTimeString()
    const task_img_url = await imageUpload(task_img)
    const addTaskData = {task_title, submission_info, task_detail, task_count, task_img_url, current_time, payable_amount, completion_date, creator_email, creator_name}
    
   
    fetch('http://localhost:5000/addtask', {
      method: "POST",
      headers: {
        "content-type" : "application/json",
      },
      body: JSON.stringify(addTaskData)
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
    
  }

  return (
    <div>
      <div>
        <h2 className="text-2xl text-center mb-4 font-bold">Add Task</h2>
      </div>
      <div>
        <div className="card shrink-0 w-full mx-6 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Task Title</span>
              </label>
              <input
                type="text"
                placeholder="title"
                name="title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Task Quantity</span>
              </label>
              <input
                type="number"
                placeholder="quantity"
                name="quantity"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Payable Amount(Per Task)</span>
              </label>
              <input
                type="number"
                name="amount"
                placeholder="10"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Completion Date</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="quantity"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Task Details</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                name="taskdetails"
                placeholder="Task Details"
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Submission Info</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                name="submission"
                placeholder="Submission Info"
              ></textarea>
            </div>
            <div className="mt-2">
              <input
                type="file"
                name="image"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add Task</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
