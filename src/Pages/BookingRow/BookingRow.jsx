import React from 'react';

const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
    const {_id, date, service, price, img, status } = booking;

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="rounded w-56 h-36">
                        {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>

            <div>
                <td>
                    {service}
                </td>
                <td>{date}</td>
                <td>{price}</td>
            </div>
            <th>
                {
                    status === 'confirm' ? <span className='text-green-400'>confirmd</span> :
                    <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                    }
            </th>
        </tr>
    );
};

export default BookingRow;