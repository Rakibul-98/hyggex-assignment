import React from 'react';
import Banner from './Banner/Banner';

const Main = () => {
    return (
        <div>
            <div className="header mt-8 mb-5">
                <h3 className='font-bold text-[#072B6B] text-xl lg:text-3xl'>Relations and Functions ( Mathematics )</h3>
            </div>
            <Banner />
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <img className='h-14 w-14 lg:h-[80px] lg:w-[80px] p-3 rounded-full border shadow-xl me-2' src="https://i.ibb.co/NyGRRnx/logo.png" alt="" />
                    <div>
                        <p>Published by</p>
                        <p className='text-xl lg:text-4xl text-[#072B6B]'>Hygge<span className='font-bold'>X</span></p>
                    </div>
                </div>
                <div className='flex items-center py-16'>
                    <svg className='w-8 lg:w-12 me-1 hover:scale-110 hover:cursor-pointer' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H11V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H13V9ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="#072B6B"></path> </g></svg>
                    <p className='text-xl lg:text-[34px]'>Create Flashcard</p>
                </div>
            </div>
        </div>
    );
};

export default Main;