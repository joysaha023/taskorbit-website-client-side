import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

const stripePromise = loadStripe("");
const Payment = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl text-center mb-4 font-bold">Add Task</h2>
      </div>
      <div>
        <Elements stripe={stripePromise}> 

        </Elements>
      </div>
    </div>
  );
};

export default Payment;
