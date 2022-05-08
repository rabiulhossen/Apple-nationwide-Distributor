import React from 'react';
import PageTitle from '../common/PageTitle/PageTitle';
import Banner from './Banner';
import BigDeal from './BigDeal/BigDeal';

const Home = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <BigDeal></BigDeal>
        </div>
    );
};

export default Home;