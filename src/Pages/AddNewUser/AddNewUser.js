import React, { useState } from 'react'
import {Alert, Input, Label, Row,Button} from "reactstrap"
import NavbarWithback from '../../Components/NavBars/NavbarWithback';
export default function AddNewUser() {
    const[email,setEmail]=useState('');
    const JWT=localStorage.getItem("JWT")
    const[role,setRole]=useState('');
    const[isAlert,setAlert]=useState(false)
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }
    const handleRoleChange=(e)=>{
        setRole(e.target.value)
    }
        const handleSubmitClicked=async()=>{
            localStorage.setItem("EmailtobeActivated",email)
            var bodydata={
                email,
                role,
                password:"",
                activated:false
            }
            const res=await fetch("https://invoice-management-app-react.herokuapp.com/adduser",{
                method:"POST",
                body:JSON.stringify(bodydata),
                headers:{
                    "Content-Type":"application/json",
                    
                }

            })
            var data=await res.json();
            if(data.message=="Data Inserted"){
                setAlert(true)
            }else{
                alert(data.message)
            }
    }
    
    return (
        <>
        <NavbarWithback></NavbarWithback>
        <div className="card">
            <div className="card-body text-center">
                <Row>
                    <Label for="email">Email</Label>
                    <Input type="email" onChange={handleEmailChange} id="email" value={email}/>
                </Row>
                <Row>
                    <Label for="Role">Role</Label>
                    <Input type="select" onChange={handleRoleChange}>
                    <option value="">Select a Role</option>
                    <option value="Admin">Admin</option>
                    <option value="Manager">Manager</option>
                    <option value="Employee">Employee</option>
                    </Input>
                </Row>
                <Button color="success" onClick={handleSubmitClicked}>Submit</Button>
                <Alert isOpen={isAlert} color="success">
                    Email has been sent to the mail ID to set the password
                </Alert>
            </div>
        </div>
        </>
    )
}


// const[password,setPassword]=useState();
//     const[repassword,setRepassword]=useState();
//     const handlePasswordCHange=(e)=>{
//         setPassword(e.target.value)
//     }
//     const handleRePasswordCHange=(e)=>{
//         setRepassword(e.target.value)
//     }

//     const handleSubmitClicked=async()=>{
        
//     }
    
//     return (
//         <>
//         <div className="card">
//             <div className="card-body text-center">
//                 <Row>
//                     <Label for="password">Password</Label>
//                     <Input type="password" onChange={handlePasswordCHange} value={password}/>
//                 </Row>
//                 <Row>
//                     <Label for="password">Password</Label>
//                     <Input type="password" onChange={handleRePasswordCHange} value={password}/>
//                 </Row>
//                 <Button color="success" onClick={handleSubmitClicked}>Submit</Button>
//             </div>
//         </div>
//         </>
//     )
// }
