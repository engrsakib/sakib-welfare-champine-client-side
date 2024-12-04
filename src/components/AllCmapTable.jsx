import React from "react";
import { Link } from "react-router-dom";

const AllCmapTable = ({ d }) => {
    const { _id, name, deadline, title, photoURL, description } = d;
    const handleDetails = (id)=>{
        console.log(id)
    }
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-50">Author: {name}</div>
            </div>
          </div>
        </td>
        <td className="w-[50%] text-justify">{description}</td>
        <td>{deadline}</td>
        <th>
          <Link to={`/donation/all-campagion/details/${_id}`} className="btn btn-ghost btn-xs">
            details
          </Link>
        </th>
      </tr>
    </>
  );
};

export default AllCmapTable;
