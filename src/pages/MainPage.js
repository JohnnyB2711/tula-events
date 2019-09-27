import React from "react";
import Scroll from '../components/Scroll'
import SearchEvent from '../components/SearchEvent'
import EventCard from "../components/EventCard";
import MenuOrg from "../components/MenuOrg";
import MenuUser from "../components/MenuUser";

class MainPage extends React.Component {
    render() {
        return (
            <section>
                <div className="MainPage container">
                    <Scroll/>
                    <SearchEvent/>
                    <EventCard/>
                    <MenuOrg/>
                    <MenuUser/>
                </div>
            </section>
        )
    }
}

export default MainPage