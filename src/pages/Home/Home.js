import React from 'react';
import PageTitle from '../common/PageTitle/PageTitle';
import AllProduct from './AllProduct/AllProduct';
import Banner from './Banner';
import BigDeal from './BigDeal/BigDeal';
import Inventories from './Inventories/Inventories';
import './Home.css';

const Home = () => {
    return (
        <div className='homeDiv'>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Inventories></Inventories>
            <BigDeal></BigDeal>
            <AllProduct></AllProduct>
        </div>
    );
};

export default Home;