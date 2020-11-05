import React, { useState } from 'react'
import {Alert, Input, Label, Row,Button} from "reactstrap"
import NavBarwithLogin from '../../Components/NavBars/NavBarwithLogin';

export default function PasswordUpdate() {
    const[isAlert,setAlert]=useState(false)
    let email=localStorage.getItem("EmailtobeActivated");
    const[password,setPassword]=useState('');
    const[repassword,setRepassword]=useState('');
    const handlePasswordCHange=(e)=>{
        setPassword(e.target.value)
    }
    const handleRePasswordCHange=(e)=>{
        setRepassword(e.target.value)
    }

    const handleSubmitClicked=async()=>{
        if(password===repassword){
            if(password=="" || repassword==""){
                alert("Password cannot be empty")
            }else{
                console.log(password)
                var bodydata={
                    password:password
                }
                var res=await fetch(`http://localhost:5000/setpassword/${email}`,{
                    method:"PUT",
                    body:JSON.stringify(bodydata),
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                var data=await res.json()
                if(data.message=="Data Updated"){
                    setAlert(true)
                }else{
                    alert(data.message)
                }
            }
        }else{
            alert("Passwwords doesnot match");
        }
        
    }
    
    return (
        <>
        <NavBarwithLogin></NavBarwithLogin>
        <div className="card">
            <div className="card-body text-center">
                <Row>
                    <Label for="password">Password</Label>
                    <Input type="password" value={password} onChange={handlePasswordCHange} />
                </Row>
                <Row>
                    <Label for="password">Re Type :Password</Label>
                    <Input type="password" value={repassword} onChange={handleRePasswordCHange} />
                </Row>
                <Button color="success" onClick={handleSubmitClicked}>Submit</Button>
                <Alert isOpen={isAlert} color="success">
                    Data Updated
                </Alert>
            </div>
        </div>
        </>
    )
}

