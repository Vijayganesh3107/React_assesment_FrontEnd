import React, { useEffect, useState } from 'react'
import {Input, Label,Button,Alert, Form, Row, Col,UncontrolledCollapse,Card,CardBody} from 'reactstrap'
import DatePicker from "react-datepicker";
import { useHistory, useParams } from 'react-router-dom'
import routes from "../../routes"
import NavbarWithback from '../../Components/NavBars/NavbarWithback';

export default function DeleteInvoice() {
    const JWT=localStorage.getItem("JWT");
    const {id}=useParams();
    const history=useHistory();
    const[data,setData]=useState([])
    const[mail,setMail]=useState('business@gmail.com');
    const[isopen,setIsOpen]=useState(false)
   

    const handleDeleteCLick=async()=>{
        var res=await fetch("https://invoice-management-app-react.herokuapp.com/delete-invoice/"+id,{
            method:"DELETE",
            headers:
            {
                "Content-Type": "application/json",
            }
        })
        var data=await res.json();
        if(data.message=="Data Deleted"){
            setIsOpen(true)
            history.push(routes.dashboard)
        }

    }

    useEffect(()=>{
        fetch(`https://invoice-management-app-react.herokuapp.com/all-invoice-details/${id}`).then(res=>res.json()).then(data=>setData(data)).catch(e=>console.log(e))
    },[])
    return (
        
        <>
        <NavbarWithback></NavbarWithback>
         <div className="card container App">
        <Alert color="danger" isOpen={isopen}>
                Data Deleted Succesfully
                </Alert>
            <h1 className="mt-5">Edit Invoice</h1>
            <div className="card-body">
                <Form>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label  for="businessName">BusinessName</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={data.businessName} id="businessName" readOnly></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="clientname">ClientName</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={data.clientname} id="clientname" readOnly></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="mail">Our Mail</Label>
                        </Col>
                        <Col xl={5}>
                        <Input type="email" value={data.mail} id="mail" readOnly></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="businessaddress">Business Address</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={data.businessaddress} id="businessaddress"readonly></Input> 
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="bphno">Business Phone Number</Label>
                        </Col>
                        <Col xl={5}>
                        <Input type="tel" value={data.bphno} id="bphno"readonly></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="clientaddress">Client Address</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={data.clientaddress} id="clientaddress" readonly></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="cmail">Client Mail</Label>
                        </Col>
                        <Col xl={5}>
                        <Input type="email" value={data.cmail} id="cmail" readonly></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="cphno">Client Phone number</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={data.cphno} id="cphno" readonly></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemdescription1">Item Name</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={data.itemname1} readonly></Input>
                        </Col>
                    </Row>

                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemdescription1">Item Description</Label>
                        </Col>
                        <Col xl={5}>
                        <textarea rows={7} className="form-control" value={data.itemdes1}></textarea>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemprice1">Item Price</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={data.itemprice1} id="itemprice1" readonly></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemquantity1">Item Quantity</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={data.itemquantity1} id="itemquantity1" readonly></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="price1">Amount (INC 18% GST) </Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={(data.itemprice1*data.itemquantity1)+(data.itemprice1*data.itemquantity1)*.18} readonly id="price1" readOnly></Input>
                        </Col>
                    </Row>
                    <Button color="primary" id="toggler1" name="items2"> Add More Items</Button>


             </Form>
              <UncontrolledCollapse toggler="#toggler1">
      <Card>
        <CardBody>
        <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemname2">Item Name</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={data.itemname2} readonly></Input>
                        </Col>
                    </Row>
        <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemdescription2">Item Description</Label>
                        </Col>
                        <Col xl={5}>
                        <textarea rows={7} className="form-control" value={data.itemdes2}></textarea>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemprice2">Item Price</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={data.itemprice2} id="itemprice2" readonly></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemquantity2">Item Quantity</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={data.itemquantity2} id="itemquantity2" readonly></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="price1">Amount (INC 18% GST) </Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={(data.itemquantity2*data.itemprice2)+(data.itemquantity2*data.itemprice2)*.18} readonly id="itemquantity1" readOnly></Input>
                        </Col>
                    </Row>
                    <Button color="primary" id="toggler2" name="items2"> Add More Items</Button>
        </CardBody>
      </Card>
    </UncontrolledCollapse> 
    <UncontrolledCollapse toggler="#toggler2">
        <Card>
            <CardBody>
            <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemname3">Item Name</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={data.itemname3}  readonly></Input>
                        </Col>
                    </Row>
        <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemdescription3">Item Description</Label>
                        </Col>
                        <Col xl={5}>
                        <textarea rows={7} className="form-control" value={data.itemdes3} ></textarea>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemprice3">Item Price</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={data.itemprice3} id="itemprice3" readonly></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemquantity3">Item Quantity</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={data.itemquantity3} id="itemquantity3" readonly></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="price3">Amount (INC 18% GST)</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={(data.itemquantity3*data.itemprice3)+(data.itemquantity3*data.itemprice3)*.18} readonly id="price3" readOnly></Input>
                        </Col>
                    </Row>
            </CardBody>
        </Card>
    </UncontrolledCollapse>
             <Button className="mt-5" color="danger" onClick={handleDeleteCLick}>Delete</Button>
            </div>        
  </div>
        </>
    )

    
}
