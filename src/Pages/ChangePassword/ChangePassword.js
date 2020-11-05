import React, { useState } from 'react'
import { Button, Input, Label,Alert } from 'reactstrap'
import NavBarwithLogin from '../../Components/NavBars/NavBarwithLogin';
export default function ChangePassword() {

    const[pass,setPass]=useState('');
    const[repass,setRePass]=useState('');
    const[alertOpen,setAlertOpen]=useState(false);
    const email=localStorage.getItem("EmailForPasswordChange");

    const handleRePasswordChange=(e)=>{
        setRePass(e.target.value);
    }
    
    const handlePasswordChange=(e)=>{
        setPass(e.target.value);
    }

    const handleSubmitClick=async()=>{
        if(pass!=repass){
            alert("Both Passwords does not match")
        }else{
          
            if(pass!="" || repass!=""){
                var bodydata={
                    password:pass,
                }
                var res=await fetch(`https://invoice-management-app-react.herokuapp.com/changepassword/${email}`,{
                    method:"PUT",
                    body:JSON.stringify(bodydata),
                    headers:{
                        "Content-Type": "application/json"
                    }
                })
                var data=await res.json();
                if(data.message=="Password Updated"){
                    setAlertOpen(true);
                }else{
                    alert(data.message)
                }

            }else{
                alert("Password cannot be empty")
            }
        }

    }



    return (
        <>
        <NavBarwithLogin></NavBarwithLogin>
        <div className="card">
            <div className="card-body">
                <Label for="password">Password:</Label>
                <Input type="password" id="password" value={pass} onChange={handlePasswordChange}/>
                <Label for="repassword">Retype-Password:</Label>
                <Input type="password" id="repassword" value={repass} onChange={handleRePasswordChange}/>
            </div>
            <div className="text-center">
                <Button color="success" onClick={handleSubmitClick}>Submit</Button>
            </div>
            <Alert color="success" isOpen={alertOpen}>Password has been changed</Alert>
        </div>
        </>
    )
}