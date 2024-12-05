import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin3Fill } from "react-icons/ri";
import Swal from "sweetalert2";

const MyCampCard = ({ d, setDonations }) => {
  const { dark } = useContext(AuthContext);
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
  } = d;

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          // delete data
          fetch(`http://localhost:5000/myDonations/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                 setDonations((prevDonations) =>
                   prevDonations.filter((donation) => donation._id !== id)
                 );
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your campagion has been deleted.",
                  icon: "success",
                });
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your CAMPAGION is safe",
            icon: "error",
          });
        }
      });
  };
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
        <td className="text-justify">{minimumMoney}</td>
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
          <Link to={`/donation/update/${_id}`} className="btn btn-ghost btn-xs">
            <MdModeEditOutline />
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-ghost btn-xs"
          >
            <RiDeleteBin3Fill />
          </button>
        </th>
      </tr>
    </>
  );
};

export default MyCampCard;
