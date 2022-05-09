import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Maintenance = () => {
    const [show,setShow] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/inventory")
        .then((res) => res.json())
        .then((data) => setShow(data));
    }, []);
const Navigate = useNavigate();
const details = id =>{
    Navigate(`/maintenance/${id}`)
}
const deleted = _id =>{
    const proceed= window.confirm('are you want to delete?');
    if(proceed){
        const url = `http://localhost:5000/inventory${_id}`;
fetch(url,{
    method:'DELETE',


})
.then(res => res.json())
.then(data =>console.log(data));
const remain = show.filter(serve => serve._id == !_id);
setShow(remain);
    }
}

    return (
        <div>
            <h1>Maintain your Products</h1>
            
                 <table
                className="table table-striped table-bordered table-dark table-hover ">
                <thead>
                  <tr>
                  
                    <th scope="col">Name</th>
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
                  <td>{serve.supplier }</td>
                    <td><button>Delete</button> </td>
                   
                  </tr>
                 
                </tbody>
              </table>)
            };
        </div>
    );
};

export default Maintenance;


