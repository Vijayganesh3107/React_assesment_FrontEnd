import React, { useEffect, useState,useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Table,Button} from 'reactstrap';
import logo from "../../Images/Logo.png"
import "../../Styles/DisplayInvoice.css"
import  { Component } from 'react'

export default class ViewInvoice extends Component {
    
    id=localStorage.getItem("ID");
    state={
        data:[],
        
}
    componentDidMount(){
        fetch(`http://localhost:5000/all-invoice-details/${this.id}`
        ).then(res=>res.json()).then(data1=>this.setState({data:data1})).catch(e=>console.log(e))
    }
    render() {
        return (
            <>
            <div className="container"id="main">
                <div className="row">
                    <div className="col-6">
                    <h1>Invoice</h1>
                    </div>
                    <div className="col-6 text-right">
                    <img src={logo}></img>
                    </div>
                </div>
                <div className="row justify-content-around">
                <div className="col-6">
                <h4>From:</h4>
                <h3>{this.state.data.businessName}</h3>
                <p>business.gmail.com</p>
                <p>{this.state.data.businessaddress}</p>
                <p>{this.state.data.bphno}</p>
                </div>
                <div className="col-6">
                <h4>To:</h4>
                <h3>{this.state.data.clientname}</h3>
                <p>{this.state.data.cmail}</p>
                <p>{this.state.data.clientsaddress}</p>
                <p>{this.state.data.cphno}</p>
                </div>
                </div>
                <div className="row mt-5 mb-3">
                    <div className="col-4">
                        <div className="row">
                            <div className="col 6">
                                <h6>Invoice number</h6>
                            </div>
                            <div className="col 6">
                                {this.id}
                            </div>
                        </div>
                        <div className="row">
                        <div className="col 6">
                               <h6> Date Of Issue</h6>
                            </div>
                            <div className="col 6">
                                {this.state.data.doi}
                            </div>
                        </div>
                        <div className="row">
                        <div className="col 6">
                                <h6>Due Date</h6>
                            </div>
                            <div className="col 6">
                                {this.state.data.duedate}
                            </div>
                        </div>
    
                    </div>
                </div>
    
                <table className="mt-5 table-bordered container-fluid">
                    <thead className="thead">
                        <tr>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                            <td>{this.state.data.itemname1!=""?this.state.data.itemname1:"-"}</td>
                            <td>{this.state.data.itemprice1}</td>
                            <td>{this.state.data.itemquantity1}</td>
                            <td>{this.state.data.itemprice1*this.state.data.itemquantity1}</td>
                            </tr>
                            <tr>
                            <td>{this.state.data.itemname2!=""?this.state.data.itemname2:"-"}</td>
                            <td>{this.state.data.itemprice2}</td>
                            <td>{this.state.data.itemquantity2}</td>
                            <td>{this.state.data.itemprice2*this.state.data.itemquantity2}</td>
                            </tr>
                            <tr>
                            <td>{this.state.data.itemname3!=""?this.state.data.itemname3:"-"}</td>
                            <td>{this.state.data.itemprice3}</td>
                            <td>{this.state.data.itemquantity3}</td>
                            <td>{this.state.data.itemprice3*this.state.data.itemquantity3}</td>
                            </tr>
                        
                    </tbody>
                </table>
    
                <div className="row borderTopBottom">
                    <div className="col-4 offset-7">
                        <div className="row">
                            <div className="col-6">
                            <h6>SubTotal</h6>
                            </div>
                            <div className="col-6">
                                {(this.state.data.itemprice1*this.state.data.itemquantity1)+(this.state.data.itemprice2*this.state.data.itemquantity2)+(this.state.data.itemprice3*this.state.data.itemquantity3)} 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                            <h6>Tax(18%)</h6>
                            </div>
                            <div className="col-6">
                                {((this.state.data.itemprice1*this.state.data.itemquantity1)+(this.state.data.itemprice2*this.state.data.itemquantity2)+(this.state.data.itemprice3*this.state.data.itemquantity3))*.18} 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                            <h6>Total</h6>
                            </div>
                            <div className="col-6">
                                {((this.state.data.itemprice1*this.state.data.itemquantity1)+(this.state.data.itemprice2*this.state.data.itemquantity2)+(this.state.data.itemprice3*this.state.data.itemquantity3))+((this.state.data.itemprice1*this.state.data.itemquantity1)+(this.state.data.itemprice2*this.state.data.itemquantity2)+(this.state.data.itemprice3*this.state.data.itemquantity3))*.18} 
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            </>
            
        )
    }
}




    // const id=props.id;
    // const[data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/all-invoice-details/${id}`).then(res=>res.json()).then(data=>setData(data)).catch(e=>console.log(e))
    // },[])
    // return (
    //     <>
    //     <div className="container"id="main">
    //         <div className="row">
    //             <div className="col-6">
    //             <h1>Invoice</h1>
    //             </div>
    //             <div className="col-6 text-right">
    //             <img src={logo}></img>
    //             </div>
    //         </div>
    //         <div className="row justify-content-around">
    //         <div className="col-6">
    //         <h4>From:</h4>
    //         <h3>{data.businessName}</h3>
    //         <p>business.gmail.com</p>
    //         <p>{data.businessaddress}</p>
    //         <p>{data.bphno}</p>
    //         </div>
    //         <div className="col-6">
    //         <h4>To:</h4>
    //         <h3>{data.clientName}</h3>
    //         <p>{data.cmail}</p>
    //         <p>{data.clientsaddress}</p>
    //         <p>{data.cphno}</p>
    //         </div>
    //         </div>
    //         <div className="row mt-5 mb-3">
    //             <div className="col-4">
    //                 <div className="row">
    //                     <div className="col 6">
    //                         <h6>Invoice number</h6>
    //                     </div>
    //                     <div className="col 6">
    //                         {id}
    //                     </div>
    //                 </div>
    //                 <div className="row">
    //                 <div className="col 6">
    //                        <h6> Date Of Issue</h6>
    //                     </div>
    //                     <div className="col 6">
    //                         {data.doi}
    //                     </div>
    //                 </div>
    //                 <div className="row">
    //                 <div className="col 6">
    //                         <h6>Due Date</h6>
    //                     </div>
    //                     <div className="col 6">
    //                         {data.duedate}
    //                     </div>
    //                 </div>

    //             </div>
    //         </div>

    //         <Table striped className="mt-5">
    //             <thead className="THEAD">
    //                 <tr>
    //                     <th>Description</th>
    //                     <th>Price</th>
    //                     <th>Quantity</th>
    //                     <th>Amount</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                     <tr>
    //                     <td>{data.itemname1!=""?data.itemname1:"-"}</td>
    //                     <td>{data.itemprice1}</td>
    //                     <td>{data.itemquantity1}</td>
    //                     <td>{data.itemprice1*data.itemquantity1}</td>
    //                     </tr>
    //                     <tr>
    //                     <td>{data.itemname2!=""?data.itemname2:"-"}</td>
    //                     <td>{data.itemprice2}</td>
    //                     <td>{data.itemquantity2}</td>
    //                     <td>{data.itemprice2*data.itemquantity2}</td>
    //                     </tr>
    //                     <tr>
    //                     <td>{data.itemname3!=""?data.itemname3:"-"}</td>
    //                     <td>{data.itemprice3}</td>
    //                     <td>{data.itemquantity3}</td>
    //                     <td>{data.itemprice3*data.itemquantity3}</td>
    //                     </tr>
                    
    //             </tbody>
    //         </Table>

    //         <div className="row borderTopBottom">
    //             <div className="col-4 offset-7">
    //                 <div className="row">
    //                     <div className="col-6">
    //                     <h6>SubTotal</h6>
    //                     </div>
    //                     <div className="col-6">
    //                         {(data.itemprice1*data.itemquantity1)+(data.itemprice2*data.itemquantity2)+(data.itemprice3*data.itemquantity3)} 
    //                     </div>
    //                 </div>
    //                 <div className="row">
    //                     <div className="col-6">
    //                     <h6>Tax(18%)</h6>
    //                     </div>
    //                     <div className="col-6">
    //                         {((data.itemprice1*data.itemquantity1)+(data.itemprice2*data.itemquantity2)+(data.itemprice3*data.itemquantity3))*.18} 
    //                     </div>
    //                 </div>
    //                 <div className="row">
    //                     <div className="col-6">
    //                     <h6>Total</h6>
    //                     </div>
    //                     <div className="col-6">
    //                         {((data.itemprice1*data.itemquantity1)+(data.itemprice2*data.itemquantity2)+(data.itemprice3*data.itemquantity3))+((data.itemprice1*data.itemquantity1)+(data.itemprice2*data.itemquantity2)+(data.itemprice3*data.itemquantity3))*.18} 
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
            
    //     </div>
    //     </>
        
    // )

