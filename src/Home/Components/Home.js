import React from 'react';
import NavBar from './NavBar/NavBar';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';
import Main from './Main/Main';
import FAQ from './FAQ/FAQ';

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className='mx-7'>
                <BreadCrumbs />
                <Main />
                <FAQ/>
            </div>
        </div>
    );
};

export default Home;