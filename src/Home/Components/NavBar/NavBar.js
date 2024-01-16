import React from 'react';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost  hover:bg-transparent text-4xl text-[#072B6B]" href='/'><img className='w-10 h-10 mt-2 -me-1.5' src="https://i.ibb.co/NyGRRnx/logo.png" alt="" /> Hygge<span className='font-bold -ms-2'>X</span></a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-xl">
                    <li><a href='/'>Home</a></li>
                    <li><a href='#flashcard'>Flashcard</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    <li><a href='#faq'>FAQ</a></li>
                    <button class="bg-gradient-to-b from-[#072B6B] to-blue-700 hover:bg-gradient-to-t hover:from-[#072B6B] hover:to-blue-700 text-white px-4 rounded-full text-[18px]">Login
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;