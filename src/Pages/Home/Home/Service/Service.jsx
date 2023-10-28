import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Service = ({ services }) => {
    const {_id, price, img, title } = services;
    return (
        <div>
            <div className="card bg-gradient-to-r bg-gray-300">
                <img className="h-[250px]  object-cover rounded-lg" src={img} alt="Shoes" />
                <div className="p-6">
                    <h2 className="card-title text-2xl font-bold h-5 mt-2">{title}</h2>
                    <h1 className="text-2xl mt-4  text-[#FF3811] justify-between">{price}</h1>
                    <div className="card-actions justify-center">
                        <Link to={`/checkout/${_id}`}>
                            <button className=" rounded-lg lg:text-xl text-white bg-sky-500 h-12 lg:w-[400px] w-[300px] mt-3">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;