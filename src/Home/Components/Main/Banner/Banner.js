import React from 'react';
import Menu from './Menu/Menu';
import BannerControl from './BannerControl/BannerControl';
import BannerCard from './BannerCard/BannerCard';

const Banner = () => {
    return (
        <div>
            <Menu/>
            <BannerCard/>
            <BannerControl/>
        </div>
    );
};

export default Banner;