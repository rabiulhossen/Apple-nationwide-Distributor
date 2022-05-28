import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../common/PageTitle/PageTitle';
import AllProduct from './AllProduct/AllProduct';
import Banner from './Banner';
import BigDeal from './BigDeal/BigDeal';
import './Home.css';
import HomeInventory from './HomeInventory/HomeInventory';

const Home = () => {
    return (
        <div className='homeDiv'>
            <h1 className='fw-bold text-dark my-4'>Apple Nationwide Distributor</h1>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
           <HomeInventory></HomeInventory>
           <Link to="/maintenance"className='text-decoration-none mx-auto'><button className="button-manage mt-5" role="button">Manage Inventories</button></Link>
            <BigDeal></BigDeal>
            <AllProduct></AllProduct>
        
        </div>
    );
};

export default Home;