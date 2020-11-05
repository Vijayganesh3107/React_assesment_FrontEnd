import logo from './logo.svg';
import './App.css';
import CreateInvoice from './Pages/Invoice/CreateInvoice';
import Dashboard from './Pages/Dashboard/Dashboard';
import { Route, Switch } from 'react-router-dom';
import EditInvoice from './Pages/Invoice/EditInvoice';
import DisplayInvoice from './Pages/Invoice/DisplayInvoice';
import DeleteInvoice from './Pages/Invoice/DeleteInvoice';
import HomePage from "./Pages/HomePage/HomePage"
import routes from "./routes"
import "./Styles/HomePageStyle.css"
import LoginPage from './Pages/LoginPage/LoginPage';
import AddNewUser from './Pages/AddNewUser/AddNewUser';
import PasswordUpdate from './Pages/PasswordUpdate/PasswordUpdate';
import ForgetPasswordEmail from './Pages/ForgetPasswordEmail/ForgetPasswordEmail';
import ChangePassword from './Pages/ChangePassword/ChangePassword';

function App() {
  return (
    <>
    
      <Switch>
      <Route path={routes.changepassword}>
          <ChangePassword></ChangePassword>
        </Route>
      <Route path={routes.forgetpasswordemail}>
          <ForgetPasswordEmail></ForgetPasswordEmail>
        </Route>
      <Route path={routes.passwordupdate}>
          <PasswordUpdate></PasswordUpdate>
        </Route>
      <Route path={routes.addnewuser}>
          <AddNewUser></AddNewUser>
        </Route>
      <Route path={routes.login}>
          <LoginPage></LoginPage>
        </Route>
      <Route path={routes.create_invoice}>
          <CreateInvoice></CreateInvoice>
        </Route>
        <Route path={routes.dashboard}>
          <Dashboard></Dashboard>
        </Route>
        <Route path={routes.edit_invoice}>
          <EditInvoice></EditInvoice>
        </Route>
        <Route path={routes.view_invoice}>
          <DisplayInvoice></DisplayInvoice>
        </Route>
        <Route path={routes.delete_invoice}>
          <DeleteInvoice></DeleteInvoice>
        </Route>
        <Route path={routes.home}>
          <HomePage></HomePage>
        </Route>
      </Switch>
    </>
  );
}

export default App;
