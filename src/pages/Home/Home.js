import React from 'react';
import PageTitle from '../common/PageTitle/PageTitle';
import AllProduct from './AllProduct/AllProduct';
import Banner from './Banner';
import BigDeal from './BigDeal/BigDeal';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <BigDeal></BigDeal>
            <AllProduct></AllProduct>
        </div>
    );
};

export default Home;