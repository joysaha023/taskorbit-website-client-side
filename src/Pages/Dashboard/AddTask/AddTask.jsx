import React from "react";

const AddTask = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl text-center mb-4 font-bold">Add Task</h2>
      </div>
      <div>
        <div className="card shrink-0 w-full mx-6 shadow-2xl bg-base-100">
          <form className="card-body">
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
                placeholder="$10"
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
