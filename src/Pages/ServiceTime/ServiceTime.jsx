import React from 'react';
import { FcOvertime } from 'react-icons/fc';
import { FiPhoneIncoming } from 'react-icons/fi';
import { SlLocationPin } from 'react-icons/sl';

const ServiceTime = () => {
    return (
        <div className='bg-[#151515] h-[200px] mt-16 rounded-lg flex'>

            <div class="hero-content flex-row-reverse ml-[220px] text-white">
                <div class="text-start space-y-1">
                    <h2 class="card-title text-sm">We are open monday-friday</h2>
                    <div class="flex">
                        <h1 class="text-xl font-bold">7:00 am - 9:00 pm</h1>
                        <img className='h-4 gap-4 mt-1' src="" alt="" />
                    </div>
                </div>
                <FcOvertime className='max-w-sm mr-8 h-14 w-16 shadow-2xl'></FcOvertime>
            </div>

            <div class="hero-content flex-row-reverse text-white">
                <div class="text-start space-y-1">
                    <h2 class="card-title text-sm">Have a question?</h2>
                    <div class="flex">
                        <h1 class="text-xl font-bold">+2546 251 2658</h1>
                        <img className='h-4 gap-4 mt-1' src="" alt="" />
                    </div>
                </div>
                <FiPhoneIncoming className='max-w-sm mr-8 h-14 w-16 shadow-2xl'></FiPhoneIncoming>
            </div>

            <div class="hero-content flex-row-reverse text-white">
                <div class="text-start space-y-1">
                    <h2 class="card-title text-sm">Need a repair? our address</h2>
                    <div class="flex">
                        <h1 class="text-xl font-bold">Liza Street, New York</h1>
                        <img className='h-4 gap-4 mt-1' src="" alt="" />
                    </div>
                </div>
                <SlLocationPin className='max-w-sm mr-8 h-16 w-14 shadow-2xl'></SlLocationPin>
            </div>

        </div>
    );
};

export default ServiceTime;