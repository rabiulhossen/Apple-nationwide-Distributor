import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageTitle from '../../common/PageTitle/PageTitle';
import './inventory.css';

const Inventory = ({serve}) => {
    const {supplier ,name,price,about,Quantity,img,sold,
    }=serve;

    const navigate =useNavigate();
    const serviceDetails =(_id)=>{
        navigate('/inventory')}
    return (
        <div className='services'>
            <PageTitle title="inventory"></PageTitle>


            <img className='img-fluid'style={{height:"350px"}} src={img} alt=""/>
            <h2 className='px-2'>Name:{name}</h2>
            <h3>Distributor: {supplier }</h3>
            <h4 className='fw-bold pb-2'>Description:{about}</h4>
            <h5> Price:{price}</h5>
            <h5> Quantity:{Quantity}</h5>
            <h5> Sold:{sold}</h5>
            <button onClick={() =>serviceDetails()} className='primary'>manage</button>

            
 <Link to="/maintenance"className='text-decoration-none'><button className="button-manage mt-3" role="button">Manage Inventories</button></Link>


        </div>
    );
};

export default Inventory;


