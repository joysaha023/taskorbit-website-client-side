import React from "react";
import { Link } from "react-router-dom";

const PurchaseCoin = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl text-center mb-4 font-bold">Purchase Coin</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <div className="card w-full bg-base-100 border">
          <div className="card-body">
            <h2 className="card-title mb-6">10 coins = $1</h2>
            <div className="card-actions ">
              <Link
                to="/dashboard/payment"
                className="btn  btn-block btn-primary"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 border">
          <div className="card-body">
            <h2 className="card-title mb-6">100 coins = $9</h2>
            <div className="card-actions ">
              <Link
                to="/dashboard/payment"
                className="btn  btn-block btn-primary"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 border">
          <div className="card-body">
            <h2 className="card-title mb-6">500 coins = $19</h2>
            <div className="card-actions ">
              <Link
                to="/dashboard/payment"
                className="btn  btn-block btn-primary"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 border">
          <div className="card-body">
            <h2 className="card-title mb-6">1000 coins = $39</h2>
            <div className="card-actions ">
              <Link
                to="/dashboard/payment"
                className="btn  btn-block btn-primary"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCoin;
