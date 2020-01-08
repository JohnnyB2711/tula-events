import React from "react";
import Scroll from '../components/Header/Scroll'
import FilterEvents from '../components/Filter/FilterEvents'
import CardsList from "../components/CardsList";

class MainPage extends React.Component {
    state = {
        mas: ["1", "2", "3", "1", "2", "3"]
    };
    render() {
        return (
            <section>
                <div className="container-fluid">
                    <Scroll/>
                    <FilterEvents/>
                    <CardsList cards={this.state.mas}/>
                </div>
            </section>
        )
    }
}

export default MainPage