import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);
const Payment = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl text-center mb-4 font-bold">Make Payment</h2>
      </div>
      <div>
        <Elements stripe={stripePromise}> 
            <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
