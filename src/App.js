import React from 'react';
import './App.scss';
import './Adaptive.scss'
import 'bootstrap/dist/css/bootstrap.css'
import Registration from "./pages/Registration";
import './components/Components.scss'
import 'antd/dist/antd.css'
import {Route, Switch} from 'react-router-dom'
import NewPassword from "./pages/NewPassword";
import PasswordRecovery from "./pages/PasswordRecovery";
import Enter from "./pages/Enter";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import EventsOnMap from "./pages/EventsOnMap";
import PersonalPage from "./pages/PersonalPage";
import UserEvents from "./components/UserEvents";
import SettingsUserInfo from "./pages/SettingsUserInfo";
import CreateEvent from "./components/CreateEvent";
import MoreAboutEvent from "./components/MoreAboutEvent";

function App() {
    return (
        <div className="Body container-fluid">
            <Header user={'user'}/>
            <Route path='/personal_page' component={PersonalPage}/>
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route path='/map' component={EventsOnMap}/>


                <Route path='/events/:current' component={UserEvents}/>
                <Route path='/settings' component={SettingsUserInfo}/>
                <Route path='/create_event' component={CreateEvent}/>

                <Route path='/about_event' component={MoreAboutEvent}/>
                <Route path='/registration' component={Registration}/>
                <Route path='/enter' component={Enter}/>
                <Route path='/newpassword' component={NewPassword}/>
                <Route path='/passwordrecovery' component={PasswordRecovery}/>


            </Switch>
        </div>
    );
}

export default App;
