import React from "react";
import Scroll from '../components/Header/Scroll'
import SearchEvent from '../components/Filter/SearchEvent'
import TabCard from "../components/CardEvent/TabCard";

class MainPage extends React.Component {
    state = {
        mas: ["1", "2", "3", "1", "2", "3"]
    };
    render() {
        return (
            <section>
                <div className="MainPage container-fluid">
                    <Scroll/>
                    <SearchEvent/>
                    <div className='row'>
                        {
                            this.state.mas.map((i) => {
                                return <div key={this.state.mas[i]} className='col-md-4 EventCardList'>
                                    <TabCard mainPage={true} user={this.props.user} info={i}/>
                                </div>
                            })
                        }
                    </div>

                </div>
            </section>
        )
    }
}

export default MainPage