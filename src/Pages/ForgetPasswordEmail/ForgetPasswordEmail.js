import React, { useState } from 'react'
import { Label,Button,Input,Alert } from 'reactstrap';
import {useHistory} from "react-router-dom"
import routes from '../../routes';
export default function ForgetPasswordEmail() {
    const history=useHistory();
    const[email,setEmail]=useState('');
    const[alertopen,setAlertOpen]=useState(false);
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }
    const handleBackClicked=()=>{
        history.push(routes.login)
    }
    const handleSubmitClick=async()=>{
        localStorage.setItem("EmailForPasswordChange",email);
        var bodydata={
            email
        }
        var res=await fetch("http://localhost:5000/forgetpassword",{
            method:"POST",
            body:JSON.stringify(bodydata),
            headers:{
                "Content-Type": "application/json"
            }
        });
        var data=await res.json();
        if(data.message=="Email Sent"){
            setAlertOpen(true);
        }else{
            alert(data.message)
        }
    }

    return (
        <>
         <Alert color="success" isOpen={alertopen}>Reset Password link Has been sent to Registered mail ID</Alert>
        <h1 className="App">Forget Password</h1>
        <div className="card mt-5 ">
            <div className="card-body displaycard">
            <Label for="email">Email:</Label>
            <Input id="email" value={email} onChange={handleEmailChange}/>
                <div className="text-center mt-5">
                    <Button color="success" onClick={handleSubmitClick}>Submit</Button>
                    <Button color="danger" onClick={handleBackClicked} className="ml-3">Back</Button>
                </div>
            </div>
        </div>
       
        </>
    )
}
