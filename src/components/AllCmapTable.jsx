import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const AllCmapTable = ({ d }) => {
  const {dark, active} = useContext(AuthContext);
    const { _id, name, deadline, title, photoURL, moneyNedd, type } = d;
   
  return (
    <>
      <tr
        className={`${dark ? "border-gray-500" : "border-gray-200"} border-b `}
      >
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div className="max-sm:w-[250px]">
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-50">Author: {name}</div>
            </div>
          </div>
        </td>
        <td className="text-justify">{moneyNedd}</td>
        <td className="text-justify">{type}</td>
        <td></td>
        <div className="max-sm:w-[120px]">
          <td>{deadline}</td>
        </div>
        <th>
          <Link
            to={`/donation/all-campagion/details/${_id}`}
            className="btn btn-ghost btn-xs"
          >
            details
          </Link>
        </th>
      </tr>
    </>
  );
};

export default AllCmapTable;
