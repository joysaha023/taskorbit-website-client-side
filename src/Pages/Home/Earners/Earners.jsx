import React, { useEffect, useState } from "react";

const Earners = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://taskorbit-website-server-side.vercel.app/topEarners")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-2">
      <div className="text-center mt-6 md:mt-16">
        <h2 className="text-3xl md:text-4xl font-bold">Top Earners</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <div key={item._id} className="card pt-6 w-full bg-base-100 border">
            <figure>
              <img
                className="w-[100px] h-[100px] rounded-full"
                src={item.profile_picture_url}
                alt="iamge"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.full_name}
             
              </h2>
              <p>Task Completed: {item.task_completion}</p>
              <p>Total Earning Coin: {item.earned_coins}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Earners;
