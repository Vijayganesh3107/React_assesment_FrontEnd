import React from 'react'
import { Button, Label, Row, Table,Col } from 'reactstrap'
import {useHistory} from "react-dom"
import routes from "../../routes" 

export default function SearchDisplay(props) {
    const {data}=props;
    return (
        <>
        <Table striped>
        <thead>
            <tr>
        <th>
            Invoice ID
        </th>
        <th>
            Client Name
        </th>
        <th>
            Date of Issue
        </th>
        <th>
            Due date
        </th>
        <th>
            Amount
        </th>
        <th>Action</th>
        <th>Action</th>
        <th>Action</th>
        </tr>
        </thead>
        <tbody>
           {data.map((item,index)=>{ 
               if(item.clientname===props.searchedItem){
               return(
                 <tr key={index}>
                 <td>
                     {item._id}
                 </td>
                 <td>{item.clientname}</td>
                 <td>{item.doi}</td>
                 <td>{item.duedate}</td>
                 <td>{item.price1+item.price2+item.price3}</td>
                  <td><Button id={item._id}  color="warning">View</Button></td>
                 <td><Button id={item._id}  color="primary">Edit</Button></td>
                 <td><Button id={item._id}  color="danger">Delete</Button></td> 
                 
             </tr>
               )}
           })}
            
     </tbody>
     </Table>
    <h2> {data._id}</h2>
    </>
    )
}
