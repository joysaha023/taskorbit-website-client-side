import React from "react";
import { FaMoneyCheckAlt, FaTasks } from "react-icons/fa";
import { RiCoinsLine } from "react-icons/ri";

const Features = () => {
  return (
    <div className="max-w-6xl mx-auto px-2">
      <div className="text-center mt-6 md:mt-16">
        <h2 className="text-3xl md:text-4xl font-bold">Our Features</h2>
      </div>
      <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="card card-compact w-full hover:bg-slate-100 bg-base-100 border ">
          <figure className="p-8">
            <RiCoinsLine className="text-7xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title mx-auto">Earn Coin by Completing Task</h2>
            <p className="mx-auto text-center">You can earn money complete project and get payment on international bank account</p>
          </div>
        </div>
        <div className="card card-compact  w-full hover:bg-slate-100 bg-base-100 border ">
          <figure className="p-8">
            <FaTasks className="text-7xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title mx-auto">Create and Manage Tasks</h2>
            <p className="mx-auto text-center">You can create task and manage task. complete task you cna earn money.</p>
          </div>
        </div>
        <div className="card card-compact  w-full hover:bg-slate-100 bg-base-100 border ">
          <figure className="p-8">
            <FaMoneyCheckAlt className="text-7xl" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title mx-auto">Secure Payments</h2>
            <p className="mx-auto text-center">We have country wise payment method you can withdrew you money securely and safely.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
