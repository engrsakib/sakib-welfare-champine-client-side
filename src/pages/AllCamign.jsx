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
      <div className="text-center">
        <h2 className="text-4xl font-bold text-orange-500">All Campagion</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Title and photo</th>
              <th>TK</th>
              <th>Types</th>
              <th></th>
              <th>Deadline</th>
              <th></th>
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
