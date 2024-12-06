import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Donated = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const [donationAmount, setDonationAmount] = useState("");
  const {
    _id,
    name,
    mail,
    title,
    photoURL,
    type,
    description,
    moneyNedd,
    minimumMoney,
    deadline,
  } = data[0];
//   console.log(data[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check if donation amount meets the minimum amount
    if (donationAmount < minimumMoney) {
      Swal.fire({
        icon: "error",
        title: "Donation Faild",
        text: `Minimum donation amount is ${minimumMoney}`,
      });
      return;
    }

    // Prepare data to send to backend
    const donationData = {
      name: user?.name,
      email: user?.mail,
      amount: donationAmount,
      id: _id,
      title: title,
      photoURL: photoURL,
    };

    // Send data to backend
    try {
      const response = await fetch("http://localhost:5000/myMoney", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {

        Swal.fire({
          title: "Your Donation is Successfully added",
          showClass: {
            popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
          },
          hideClass: {
            popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
          },
        });
        setDonationAmount(""); // Reset the form
      } else {
        alert("Failed to process donation. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting donation:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-base-100 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Make a Donation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name (Read-only) */}
          <div>
            <label className="block text-left text-sm font-medium">Name</label>
            <input
              type="text"
              value={user?.name || "Anonymous"}
              readOnly
              className="input input-bordered w-full"
            />
          </div>

          {/* Email (Read-only) */}
          <div>
            <label className="block text-left text-sm font-medium">Email</label>
            <input
              type="email"
              value={mail || ""}
              readOnly
              className="input input-bordered w-full"
            />
          </div>

          {/* Donation Amount */}
          <div>
            <label className="block text-left text-sm font-medium">
              Donation Amount (৳)
            </label>
            <input
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              className="input input-bordered w-full"
              required
              placeholder={`Minimum ৳${minimumMoney}`}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-full">
            Donate
          </button>
        </form>
      </div>
    </>
  );
};

export default Donated;
