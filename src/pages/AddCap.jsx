import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AddCap = () => {
    const {user} = useContext(AuthContext)
  const [formData, setFormData] = useState({
    name: user.name, // Static data for demonstration
    mail: user.mail,
    title: "",
    photoURL: "",
    type: "",
    description: "",
    minimumMoney: "",
    deadline: "",
  });

  // Handle form field updates
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/addcap", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        alert("Data submitted successfully!");
        console.log("Server Response:", result);
        setFormData({
          name: "Md. Nazmus Sakib",
          mail: "eng@gmail.com",
          title: "",
          photoURL: "",
          type: "",
          description: "",
          minimumMoney: "",
          deadline: "",
        });
      } else {
        console.error("Failed to submit data.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Add Cap</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            readOnly
            className="input input-bordered w-full"
          />
        </div>

        {/* Email */}
        <div>
          <label className="label">Email</label>
          <input
            type="text"
            name="mail"
            value={formData.mail}
            readOnly
            className="input input-bordered w-full"
          />
        </div>

        {/* Title */}
        <div>
          <label className="label">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter a title"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Photo URL */}
        <div>
          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            value={formData.photoURL}
            onChange={handleChange}
            placeholder="Enter photo URL"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Type */}
        <div>
          <label className="label">Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option disabled value="">
              Select a type
            </option>
            <option value="personal">Personal</option>
            <option value="business">Business</option>
            <option value="startup">Startup</option>
            <option value="creative">Creative</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="label">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter a description"
            className="textarea textarea-bordered w-full"
            required
          />
        </div>

        {/* Minimum Money */}
        <div>
          <label className="label">Minimum Money</label>
          <input
            type="number"
            name="minimumMoney"
            value={formData.minimumMoney}
            onChange={handleChange}
            placeholder="Enter the minimum money required"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Deadline */}
        <div>
          <label className="label">Deadline</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCap;
