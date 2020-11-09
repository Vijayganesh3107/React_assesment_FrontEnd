import React,{useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Label, Row, Table,Col,Collapse,Card,CardBody } from 'reactstrap'
import SearchDisplay from '../../Components/Dashboard/SearchDisplay';
import NavBarwithLogout from '../../Components/NavBars/NavBarwithLogout';
import routes from "../../routes"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import {faFacebookSquare,faInstagramSquare,faTwitterSquare} from "@fortawesome/free-brands-svg-icons"

export default function Dashboard() {
    const JWT=localStorage.getItem("JWT")
    const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
    let role=localStorage.getItem("userrole");
    let email=localStorage.getItem("Loggedinuser");
    const [data,setData] = useState([]);
    const[seachclicked,SetSearchClicked]=useState(false)
    const[searchedItem,setSearchedItem]=useState('');
    const history=useHistory();

    const handleViewClick=(e)=>{
        history.push(routes.view_invoice.replace(":id",e.target.id))
    }
    const handleEditClick=(e)=>{
        history.push(routes.edit_invoice.replace(":id",e.target.id))
        
    }
    const handleDeleteClick=(e)=>{
        history.push(routes.delete_invoice.replace(":id",e.target.id))
    }
    const handleSearchedItemChange=(e)=>{
        setSearchedItem(e.target.value)
    }

    const handleSearchButtonClick=()=>{
              
        if(searchedItem.length==0){
            SetSearchClicked(false)
        }else
        {   
     SetSearchClicked(true)  
        }

    }
    const handleCreateInvoice=()=>{
        history.push(routes.create_invoice);
    }

    const handleAddUser=()=>{
        history.push(routes.addnewuser)
    }
    
    

    useEffect(() => {
        fetch("https://invoice-management-app-react.herokuapp.com/all-invoice-details").then(req=>req.json()).then(data=>setData(data))
        
    }, [])
    return (
        <>
        <NavBarwithLogout></NavBarwithLogout>
        <div>
            <Row className="justify-content-end">
                
                <Col xl={6} sm={6} xs={12}>
            <input type="text" placeholder="Search by Client" id="searchedtext" value={searchedItem} onChange={handleSearchedItemChange}/>
            <Button color="success" className="ml-4" onClick={handleSearchButtonClick}>Search</Button>
            <Button color="primary" className="ml-4" onClick={handleCreateInvoice}>Create an Invoice</Button>
            {role==="Admin"? <Button color="success" className="ml-4" onClick={handleAddUser}>Add User</Button>:null }
            <Button className="ml-2" onClick={toggle} style={{ marginRadius: '50%' }}><FontAwesomeIcon icon={faUser}/></Button>
            <Collapse isOpen={isOpen}>
            <Card>
             <CardBody>
                <p>Logged in User:{email}</p>
                <p>Role:{role}</p>
          </CardBody>
        </Card>
      </Collapse>
            </Col>
            </Row>
            {!seachclicked ? 
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
                    Date of Issue(MM/DD/YYYY)
                </th>
                <th>
                    Due date(MM/DD/YYYY)
                </th>
                <th>
                    Amount
                </th>
                <th>Action</th>
                <th>Action</th>
               {role==="Admin"||role==="Manager"? <th>Action</th>:null}
                </tr>
                </thead>
                <tbody>
                {data.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>
                                {item._id}
                            </td>
                            <td>{item.clientname}</td>
                            <td>{item.doi.toLocaleString()}</td>
                            <td>{item.duedate.toLocaleString()}</td>
                            <td>{(item.price1+item.price2+item.price3)+(item.price1+item.price2+item.price3)*.18}</td>
                            <td><Button id={item._id} onClick={handleViewClick} color="warning">View</Button></td>
                            <td><Button id={item._id} onClick={handleEditClick} color="primary">Edit</Button></td>
                            {role==="Admin"||role==="Manager" ? <td><Button id={item._id} onClick={handleDeleteClick} color="danger">Delete</Button></td>:null}
                            
                        </tr>
                        
                    )
                })}
                </tbody>
            </Table>
             :
               <SearchDisplay data={data} searchedItem={searchedItem}></SearchDisplay>
            }
        </div>
        </>
    )
}
