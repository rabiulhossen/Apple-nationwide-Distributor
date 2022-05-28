import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddNewItem from '../../AddNewItem/AddNewItem';

const Maintenance = () => {
    const [show,setShow] = useState([]);
    useEffect(() => {
      fetch('https://mysterious-sands-37320.herokuapp.com/inventory')
        .then((res) => res.json())
        .then((data) => setShow(data));
    }, []);
const Navigate = useNavigate();
const details = id =>{
    Navigate(`/maintenance/${id}`)
}
const deleted = id =>{
    const proceed= window.confirm('are you want to delete?');
    if(proceed){
        const url = `https://mysterious-sands-37320.herokuapp.com/inventory/${id}`;
fetch(url,{
    method:'DELETE',
})
.then(res => res.json())
.then(data =>console.log(data));
const remain = show.filter(serve => serve._id !==id);
setShow(remain);
    }
}

    return (
        <div className='container'>
            <h1 className='text-info fw-semi-bold my-4'>Maintain your Products</h1>
            
                 <table
                className="table table-striped table-bordered table-dark table-hover ">
                <thead>
                  <tr>
                  
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Dsitributor</th>
                    <th scope="col">Delete</th>
                    
                   
                  </tr>
                </thead>
                </table>
                {
                show.map(serve => <table key={serve._id} 
                serve={serve}
                className="table table-striped table-bordered table-dark table-hover text-center">
            
                <tbody>
                  <tr>
                  <td>{serve.name}</td>
                  <td>{serve.price}</td>
                  <td className='text-center'>{serve.supplier }</td>
                    <td className='center'><button type="button" onClick={()=>deleted(serve._id)} className="btn btn-outline-info">Delete</button> </td>
                   
                  </tr>
                 
                </tbody>
              </table>)
            }
            <AddNewItem></AddNewItem>
        </div>
    );
};

export default Maintenance;


