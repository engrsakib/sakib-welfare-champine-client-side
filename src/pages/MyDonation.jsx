import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import MyFund from './MyFund';

const MyDonation = () => {
    const { user, dark } = useContext(AuthContext);
    const [donation, setDonations] = useState(null);
    const [loadding, setLoadding] = useState(true);

    useEffect(() => {
      if (user?.mail) {
        setLoadding(true);
        fetch(`http://localhost:5000/myMoney/${user.mail}`)
          .then((res) => res.json())
          .then((data) => {
            setDonations(data); 
            setLoadding(false); 
          })
          .catch((err) => {
            console.error(err);
            setLoadding(false); 
          });
      }
    }, [user?.mail]); 
    // console.log(donation)

    if (loadding) {
      return;
    }
    return (
      <div>
        <h2 className="text-2xl font-bold text-center mb-6">My Donation</h2>

        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {donation.map((fund) => (
            <MyFund key={fund._id} fund={fund}></MyFund>
          ))}
        </section>
      </div>
    );
};

export default MyDonation;