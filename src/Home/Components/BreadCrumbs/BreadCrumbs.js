import React from 'react';

const BreadCrumbs = () => {
    return (
        <div className="breadcrumbs my-5">
            <ul className='text-[18px]'>
                <li>
                    <a href='/'>
                        <img className='w-5' src="https://i.ibb.co/9bw39Dd/home-1392-svgrepo-com.png" alt="" />
                    </a>
                </li>
                <li><a href='#card'>Flashcard</a></li>
                <li><a href='#math'>Mathematics</a></li>
                <li className='font-semibold text-[#0A2B65]'>Add Document</li>
            </ul>
        </div>
    );
};

export default BreadCrumbs;