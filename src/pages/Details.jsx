import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Details = () => {
  const { dark } = useContext(AuthContext);
  const data = useLoaderData();
  const [active, setActive] = useState(true);
  // console.log(data[0])
  const {
    _id,
    name,
    mail,
    title,
    photoURL,
    type,
    description,
    minimumMoney,
    deadline,
  } = data[0];

  // count down
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(`${deadline}T00:00:00`);

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setActive(true);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setActive(false);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 px-6 lg:px-16 py-8">
        {/* Left Section */}
        <div className="flex-1">
          <img
            src={photoURL}
            alt="Fundraiser"
            className="rounded-lg shadow-md"
          />
          <h1 className="text-3xl font-bold mt-4">{title}</h1>
          <p className="text-gray-600 mt-2">
            <span className="font-semibold badge ">Types: {type} </span>
          </p>
          <div
            className={`${
              active ? "bg-green-400" : "bg-red-400"
            } mt-4 p-4 rounded-md`}
          >
            <p className="text-sm font-medium">
              <i className="fas fa-shield-alt mr-2 text-white">
                {active ? "Active" : "Closed"}
              </i>
            </p>
          </div>
          <p className={`${dark ? "text-gray-200" : "text-gray-800"} mt-4`}>
            {description}
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold">{minimumMoney} TK needed</h2>
          <p className="text-gray-600">
            Name: {name} <br /> Mail: {mail}
          </p>
          <div className="my-4">
            <div className="relative h-4 w-full bg-gray-200 rounded-full">
              <div
                className="absolute top-0 left-0 h-4 bg-yellow-500 rounded-full"
                style={{ width: "74%" }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-1">74%</p>
          </div>
          <button className="btn btn-outline btn-accent w-full">
            <p>
              {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes}{" "}
              minutes, and {timeLeft.seconds} seconds
            </p>
          </button>
          <button className="btn btn-primary w-full my-2">Donate Now</button>

          <h3 className="mt-6 text-lg font-semibold">Recent Donations</h3>
          <ul className="mt-4 space-y-2">
            <li className="flex justify-between">
              <p className="font-medium">Om Verma</p>
              <p className="text-gray-500">$100</p>
            </li>
            <li className="flex justify-between">
              <p className="font-medium">Davinder Sapra</p>
              <p className="text-gray-500">$5,000</p>
            </li>
            <li className="flex justify-between">
              <p className="font-medium">Anonymous</p>
              <p className="text-gray-500">$500</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Details;
