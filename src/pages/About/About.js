import React from 'react';
import about from '../../img/about.png';
import PageTitle from '../common/PageTitle/PageTitle';

const About = () => {
    return (
        <div>
            <PageTitle title="about"></PageTitle>
           <h1>
               This is about us</h1> 
<img src={about}></img>

               <h3>Thank you for your visiting</h3>

        </div>
    );
};

export default About;