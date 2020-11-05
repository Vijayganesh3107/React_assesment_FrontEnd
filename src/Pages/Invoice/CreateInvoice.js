import React, { useState } from 'react'
import {useHistory} from "react-router-dom"
import {Input, Label,Button,Alert, Form, Row, Col,UncontrolledCollapse,Card,CardBody} from 'reactstrap'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import routes from '../../routes';
import NavbarWithback from '../../Components/NavBars/NavbarWithback';



export default function CreateInvoice() {
    const history=useHistory();
    const JWT=localStorage.getItem("JWT");
    const[businessName,setBusinessname]=useState('');
    const[clientname,setClientname]=useState('');
    const[mail,setMail]=useState('business@gmail.com');
    const[businessaddress,setBusinessAddress]=useState('');
    const[bphno,setBphno]=useState('');
    const[cmail,setCMail]=useState('');
    const[clientaddress,setClientAddress]=useState('');
    const[cphno,setCphno]=useState('');
    const[itemname1,setItemName1]=useState('');
    const[itemname2,setItemName2]=useState('');
    const[itemname3,setItemName3]=useState('');
    const[itemdes1,setItemDes1]=useState('');
    const[itemdes2,setItemDes2]=useState('');
    const[itemdes3,setItemDes3]=useState('');
    const[itemprice1,setItemPrice1]=useState(0);
    const[itemprice2,setItemPrice2]=useState(0);
    const[itemprice3,setItemPrice3]=useState(0);
    const[itemquantity1,setItemQuantity1]=useState(0);
    const[itemquantity2,setItemQuantity2]=useState(0);
    const[itemquantity3,setItemQuantity3]=useState(0);
    let price1=itemprice1*itemquantity1
    let price2=itemprice2*itemquantity2
    let price3=itemprice3*itemquantity3
    
    const[doi,setDOI]=useState(new Date());
    const[duedate,setDueDate]=useState(new Date());
    const[isopen,setIsOpen]=useState(false)

    const handleBusinessNameChnage=(e)=>{
        setBusinessname(e.target.value);
    }
    const handleClientNameChnage=(e)=>{
        setClientname(e.target.value);
    }
    const handleBusinessAdressChnage=(e)=>{
        setBusinessAddress(e.target.value)
    }
    const handleBPhoneNoChnage=(e)=>{
        setBphno(e.target.value)
    }
    const handleClientAdressChnage=(e)=>{
        setClientAddress(e.target.value)
    }
    const handleCPhoneNoChnage=(e)=>{
        setCphno(e.target.value)
    }

    const handleClientMailChange=e=>{
        setCMail(e.target.value)
    }
    const handleItemName1=e=>{
        setItemName1(e.target.value)
    }
    const handleItemName2=e=>{
        setItemName2(e.target.value)
    }
    const handleItemName3=e=>{
        setItemName3(e.target.value)
    }
    const handleItemDes1=e=>{
        setItemDes1(e.target.value)
    }
    const handleItemDes2=e=>{
        setItemDes2(e.target.value)
    }
    const handleItemDes3=e=>{
        setItemDes3(e.target.value)
    }
    const handleItemPrice1=e=>{
        setItemPrice1(e.target.value)
    }
    const handleItemPrice2=e=>{
        setItemPrice2(e.target.value)
    }
    const handleItemPrice3=e=>{
        setItemPrice3(e.target.value)
    }
    const handleItemQuantity1=e=>{
        setItemQuantity1(e.target.value)
        
    }
    const handleItemQuantity2=e=>{
        setItemQuantity2(e.target.value)
        
    }
    const handleItemQuantity3=e=>{
        setItemQuantity3(e.target.value)
        
    }


    const handleSubmitClicked=async()=>{
        let bodydata={
            businessName,
            clientname,
            mail,
            cmail,
            businessaddress,
            clientaddress,
            bphno,
            cphno,
            itemname1,
            itemname2,
            itemname3,
            itemdes1,
            itemdes2,
            itemdes3,
            itemprice1,
            itemprice2,
            itemprice3,
            itemquantity1,
            itemquantity2,
            itemquantity3,
            price1,
            price2,
            price3,
            doi:doi.toLocaleDateString(),
            duedate:duedate.toLocaleDateString()
        }
        const req=await fetch("http://localhost:5000/create-invoice",{
            method:"POST",
            body:JSON.stringify(bodydata),
            headers:{
                "Content-Type": "application/json",
            }
        })
        const data= await req.json();
        if(data.message=="Data Inserted"){
            setIsOpen(true);
            history.push(routes.dashboard)
        }
        
    }

    return (
        <>
        <NavbarWithback></NavbarWithback>
        <div className="card container App">
        <Alert color="info" isOpen={isopen}>
                Data Inserted Succesfully
                </Alert>
            <h1 className="mt-5">Create Invoice</h1>
            <div className="card-body">
                <Form>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label  for="businessName">BusinessName</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={businessName} id="businessName" onChange={handleBusinessNameChnage}></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="clientname">ClientName</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={clientname} id="clientname" onChange={handleClientNameChnage}></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="mail">Our Mail</Label>
                        </Col>
                        <Col xl={5}>
                        <Input type="email" value={mail} id="mail" readOnly></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="businessaddress">Business Address</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={businessaddress} id="businessaddress" onChange={handleBusinessAdressChnage}></Input> 
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="bphno">Business Phone Number</Label>
                        </Col>
                        <Col xl={5}>
                        <Input type="tel" value={bphno} id="bphno" onChange={handleBPhoneNoChnage}></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="clientaddress">Client Address</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={clientaddress} id="clientaddress" onChange={handleClientAdressChnage}></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="cmail">Client Mail</Label>
                        </Col>
                        <Col xl={5}>
                        <Input type="email" value={cmail} id="cmail" onChange={handleClientMailChange}></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="cphno">Client Phone number</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={cphno} id="cphno" onChange={handleCPhoneNoChnage}></Input>
                        </Col>
                    </Row>
                     <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="doi">Date of Issue</Label>
                        </Col>
                        <Col xl={5}>
                        <DatePicker selected={doi} onChange={date => setDOI(date)} />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="duedate">Due Date:</Label>
                        </Col>
                        <Col xl={5}>
                        <DatePicker selected={duedate} onChange={date => {setDueDate(date)}} />
                        </Col>
                    </Row> 
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemdescription1">Item Name</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={itemname1} onChange={handleItemName1}></Input>
                        </Col>
                    </Row>

                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemdescription1">Item Description</Label>
                        </Col>
                        <Col xl={5}>
                        <textarea rows={7} className="form-control" value={itemdes1} onChange={handleItemDes1}></textarea>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemprice1">Item Price</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={itemprice1} id="itemprice1" onChange={handleItemPrice1}></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemquantity1">Item Quantity</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={itemquantity1} id="itemquantity1" onChange={handleItemQuantity1}></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="price1">Amount 1</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={itemprice1*itemquantity1} id="itemquantity1" readOnly></Input>
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
                        <Input value={itemname2} onChange={handleItemName2}></Input>
                        </Col>
                    </Row>
        <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemdescription2">Item Description</Label>
                        </Col>
                        <Col xl={5}>
                        <textarea rows={7} className="form-control" value={itemdes2} onChange={handleItemDes2}></textarea>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemprice2">Item Price</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={itemprice2} id="itemprice2" onChange={handleItemPrice2}></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemquantity2">Item Quantity</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={itemquantity2} id="itemquantity2" onChange={handleItemQuantity2}></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="price1">Amount 2</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={itemquantity2*itemprice2} id="itemquantity1" readOnly></Input>
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
                        <Input value={itemname3} onChange={handleItemName3}></Input>
                        </Col>
                    </Row>
        <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemdescription3">Item Description</Label>
                        </Col>
                        <Col xl={5}>
                        <textarea rows={7} className="form-control" value={itemdes3} onChange={handleItemDes3}></textarea>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemprice3">Item Price</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={itemprice3} id="itemprice3" onChange={handleItemPrice3}></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="itemquantity3">Item Quantity</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={itemquantity3} id="itemquantity3" onChange={handleItemQuantity3}></Input>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xl={6} className="text-xl-right">
                        <Label for="price3">Amount 2</Label>
                        </Col>
                        <Col xl={5}>
                        <Input value={itemquantity3*itemprice3} id="price3" readOnly></Input>
                        </Col>
                    </Row>
            </CardBody>
        </Card>
    </UncontrolledCollapse>
             <Button className="mt-5" color="success" onClick={handleSubmitClicked}>Submit</Button>
            </div>        
  </div>
        </>
    )
}
