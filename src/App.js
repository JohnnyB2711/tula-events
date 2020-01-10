import React from 'react';
import './App.scss';
import './Adaptive.scss'
import './Ant.scss'
import 'bootstrap/dist/css/bootstrap.css'
import Registration from "./pages/auth/Registration";
import './components/Components.scss'
import 'antd/dist/antd.css'
import {Route, Switch} from 'react-router-dom'
import NewPassword from "./pages/NewPassword";
import PasswordRecovery from "./pages/PasswordRecovery";
import Authorization from "./pages/auth/Authorization";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import EventsOnMap from "./pages/EventsOnMap";
import PersonalPage from "./pages/PersonalPage";
import UserEvents from "./components/UserEvents";
import SettingsUserInfo from "./pages/SettingsUserInfo";
import EventCreate from "./components/Event/EventCreate";
import DetailCard from "./components/Event/EventCardDetailed";
import Footer from "./components/Footer/Footer";
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
function App() {
    return (
        <div className="Body container-fluid">
            <Header user={'user'}/>
            <Route path='/user/:id' render={(props) => <PersonalPage user='org' {...props}/>}/>
            <Route exact path='/' render={(props) => <MainPage user='org' {...props}/>}/>
            <Switch>

                <Route path='/map' component={EventsOnMap}/>
                <Route path='/event/:id' render={(props) => <DetailCard user='org' pastPage={true} {...props}/>}/>

                <Route path='/user/:id/events' component={UserEvents}/>
                <Route path='/user/:id/settings' component={SettingsUserInfo}/>
                <Route path='/user/:id/event-create' component={EventCreate}/>
                <Route path='/test' component={EventCreate}/>

{/*                <Route path='/event/:id' component={DetailCard}/>*/}
                <Route path='/registration' component={Registration}/>
                <Route path='/authorization' component={Authorization}/>
                <Route path='/user/:id/new-password' component={NewPassword}/>
                <Route path='/recovery-password' component={PasswordRecovery}/>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
