import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css'
import Registration from "./pages/Registration";
import './components/Components.scss'
import 'antd/dist/antd.css'
import {Route, Switch} from 'react-router-dom'
import NewPassword from "./pages/NewPassword";
import PasswordRecovery from "./pages/PasswordRecovery";
import Enter from "./pages/Enter";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";

function App() {
    return (
        <div className="Body container-fluid">
            <Header/>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route path='/registration' component={Registration}/>
                <Route path='/enter' component={Enter}/>
                <Route path='/place' component={Enter}/>
                <Route path='/newpassword' component={NewPassword}/>
                <Route path='/passwordrecovery' component={PasswordRecovery}/>
            </Switch>
        </div>
    );
}

export default App;
