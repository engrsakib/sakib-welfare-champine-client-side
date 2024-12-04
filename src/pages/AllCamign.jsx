import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import AllCmapTable from "../components/AllCmapTable";

const AllCamign = () => {
  const data = useLoaderData();
  const { dark } = useContext(AuthContext);
  console.log(data);
  return (
    <div>
      <h1
        className={` text-2xl font-black ${
          dark ? "text-gray-200" : "text-gray-800"
        }`}
      >
        all campign
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Title and photo</th>
              <th>Author</th>
              <th>Deadline</th>
              <th></th>
            </tr>
          </thead>

          {data.map((d) => (
            <AllCmapTable key={d._id} d={d}></AllCmapTable>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllCamign;
