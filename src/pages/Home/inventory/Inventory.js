import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageTitle from '../../common/PageTitle/PageTitle';
import './inventory.css';

const Inventory = ({serve}) => {
    const {supplier ,_id,name,price,about,Quantity,img,sold,
    }=serve;

  
    const navigate =useNavigate();
    const serviceDetails =(id)=>{
        navigate(`/detailinventory/${id}`)}
        console.log(_id)
     
    return (
        <div className='services'>
            <PageTitle title="inventory"></PageTitle>


            <img className='img-fluid img-thumbnail px-2 py-2 rounded'style={{height:"330px"}} src={img} alt=""/>
            <h3 className='pt-2'>Name:{name}</h3>
            <h4>Distributor: {supplier }</h4>
            <h4 className='text-warning'>Description:{about}</h4>
            <h5> Price:{price}</h5>
            <h5> Quantity:{Quantity}</h5>
            
            <button onClick={() =>serviceDetails(serve._id)} className='primary py-3 px-5 mt-4'>manage</button>

            
 


        </div>
    );
};

export default Inventory;


