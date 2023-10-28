import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Components/AutProvider';
import BookingRow from '../BookingRow/BookingRow';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url]);


    const handleDelete = id => {
        const proccesd = confirm('Are You Sure You Want To Delete');
        if (proccesd) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfuly');
                        const remaing = bookings.filter(booking => booking._id !== id);
                        setBookings(remaing)
                    }
                })
        }
    }
    const handleConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0) {
                // update state
                const remaing = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id)
                updated.status = 'confirm'
                const newBookings = [updated, ...remaing];
                setBookings(newBookings)
            }
        })
    }



    return (
        <div>
            <h1 className='text-4xl text-center mt-10'>Your Bookings : {bookings.length}</h1>



            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className=''>

                            <th>Image</th>
                            <th className=''>Service</th>
                            <th className=''>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <BookingRow key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                            ></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default Bookings;