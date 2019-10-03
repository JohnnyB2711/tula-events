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
import DetailCard from "./components/CardEvent/DetailCard";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="Body container-fluid">
            <Header user={'user'}/>
            <Route path='/personal_page' render={(props)=><PersonalPage user='org' {...props}/>}/>
            <Route exact path='/' render={(props)=><MainPage user='org' {...props}/>}/>
            <Switch>

                <Route path='/map' component={EventsOnMap}/>
                <Route path='/event/:info' render={(props)=><DetailCard user='org' mainPage={false} {...props}/>}/>

                <Route path='/personal_page/events/:current' component={UserEvents}/>
                <Route path='/personal_page/settings/:current' component={SettingsUserInfo}/>
                <Route path='/personal_page/create_event/:current' component={CreateEvent}/>

                <Route path='/about_event' component={DetailCard}/>
                <Route path='/registration' component={Registration}/>
                <Route path='/enter' component={Enter}/>
                <Route path='/newpassword' component={NewPassword}/>
                <Route path='/passwordrecovery' component={PasswordRecovery}/>


            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
