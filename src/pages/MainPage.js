import React from "react";
import Scroll from '../components/Header/Scroll'
import FilterEvents from '../components/Filter/FilterEvents'
import EventssList from "../components/EventssList";

class MainPage extends React.Component {
    state = {
        mas: ["1", "2", "3", "1", "2", "3"],
        user:"user"
    };
    render() {
        return (
            <section>
                <div className="container-fluid">
                    <Scroll/>
                    <FilterEvents/>
                    <EventssList cards={this.state.mas} user={this.state.user}/>
                </div>
            </section>
        )
    }
}

export default MainPage