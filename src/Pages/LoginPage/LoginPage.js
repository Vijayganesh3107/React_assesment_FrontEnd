import React,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import {Row,Label,Input,Button, Alert} from "reactstrap"
import NavBarwithLogin from '../../Components/NavBars/NavBarwithLogin';
import routes from "../../routes"
import "../../Styles/LoginPageStyle.css"

export default function LoginPage() {
    const history=useHistory();
    const[isAlert,setAlert]=useState(false)
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }

    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }
    
    const handleLoginClicked=async()=>{
        var bodydata={
            email,
            password
        }
        let res=await fetch("https://invoice-management-app-react.herokuapp.com/login",{
            method:"POST",
            body:JSON.stringify(bodydata),
            headers:{
                "Content-Type":"application/json"
            }
        })
        let data=await res.json();
        if(data.message=="Login Successful"){
            localStorage.setItem("Loggedinuser",data.email);
            localStorage.setItem("userrole",data.role);
            localStorage.setItem("JWT",data.token)
            history.push(routes.dashboard)
        }else{
            setAlert(true)
        }

    }
    return (
        <>
        <NavBarwithLogin></NavBarwithLogin>
        <div className="conatiner App bgColor">
            <div className="card cards">
            <h3 className="App">Login</h3>
                <div className="card-body text-center mt-5">
                    <Alert isOpen={isAlert} color="danger">
                        Login is unsuccesful
                    </Alert>
                    <Row>
                    <Label for="email">Email</Label>
                    <Input type="email" id="email" onChange={handleEmailChange} value={email}/>
                    </Row>
                    <Row>
                    <Label for="password">Password</Label>
                    <Input type="password" id="password" onChange={handlePasswordChange} value={password}/>
                    </Row>
                    <Row>
                        <Link to={routes.forgetpasswordemail}>Forget Password?</Link>
                    </Row>
                    <Button color="success" onClick={handleLoginClicked} className="mt-3 mb-5">Login</Button>
                    
                </div>
            </div>

            
        </div>
        </>
    )
}
