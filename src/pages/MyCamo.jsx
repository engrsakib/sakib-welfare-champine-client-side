import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import MyCampCard from "../components/MyCampCard";
import AllCmapTable from "../components/AllCmapTable";

const MyCamo = () => {
  const { user, dark } = useContext(AuthContext); 
  const [donation, setDonations] = useState(null); 
  const [loadding, setLoadding] = useState(true); 

  useEffect(() => {
    if (user?.mail) {
      setLoadding(true); 
      fetch(`http://localhost:5000/myDonations/${user.mail}`)
        .then((res) => res.json())
        .then((data) => {
          setDonations(data); // Update state with fetched data
          setLoadding(false); // End loadding
        })
        .catch((err) => {
          console.error(err);
          setLoadding(false); // End loadding even on error
        });
    }
  }, [user?.mail]); // Use optional chaining to avoid errors if `user` is undefined

  if (loadding) {
    return ;
  }

  return (
    <div>
      <h1
        className={` text-2xl font-black ${
          dark ? "text-gray-200" : "text-gray-800"
        }`}
      >
        My campagion
      </h1>
       <table className="table">
          <thead>
            <tr>
              <th>Title and photo</th>
              <th>Types</th>
              <th></th>
              <th>Deadline</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        {donation ? (
          donation.map((d, index) => (
            <MyCampCard key={index} d={d}>
              
            </MyCampCard>
          ))
        ) : (
          <img
            src="https://i.ibb.co.com/qy2nCsR/empty-donation-box-glass-plastic-ballot-container-free-vector.jpg"
            alt=""
          />
        )}
      </table>
    </div>
  );
};

export default MyCamo;
