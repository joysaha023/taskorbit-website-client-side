import React from "react";
import { CgGift } from "react-icons/cg";
import { MdOutlineAddTask } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

const Works = () => {
  return (
    <div className="max-w-6xl mx-auto px-2">
      <div className="text-center mt-6 md:mt-16">
        <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
      </div>
      <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="card card-compact w-full hover:bg-slate-100 bg-base-100 border ">
          <figure className="p-8">
            <VscAccount className="text-7xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title mx-auto">Register</h2>
            <p className="mx-auto text-center">
              Create a valid account as a your choice role worker or task creator and you can complete task
            </p>
          </div>
        </div>
        <div className="card card-compact hover:bg-slate-100  w-full bg-base-100 border ">
          <figure className="p-8">
            <MdOutlineAddTask className="text-7xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title mx-auto">Complete Tasks</h2>
            <p className="mx-auto text-center">
              You can work on our task and complete these task on time You get more coin. 
            </p>
          </div>
        </div>
        <div className="card card-compact hover:bg-slate-100  w-full bg-base-100 border ">
          <figure className="p-8">
            <CgGift className="text-7xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title mx-auto">Earn Rewards</h2>
            <p className="mx-auto text-center">
              You can work on our weakly and daily task thats and complete get money with extra reward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
