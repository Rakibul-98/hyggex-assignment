import React from 'react';
import Menu from './Menu/Menu';
import BannerControl from './BannerControl/BannerControl';
import BannerCard from './BannerCard/BannerCard';

const Banner = () => {
    return (
        <div className='w-10/12 lg:w-6/12 mx-auto'>
            <Menu/>
            <BannerCard/>
            <BannerControl/>
        </div>
    );
};

export default Banner;