import React from "react";
import EventCard from "./Event/EventCard";

class EventssList extends React.Component {

    render() {
        return (
            <div className='row'>
                {
                    this.props.cards.map((i) => {
                        return <div key={this.props.cards[i]} className='col-sm-12 col-md-4 col-lg-3'>
                            <EventCard mainPage={true} user={this.props.user} info={i}/>
                        </div>
                    })
                }
            </div>
        )
    }
}
export default EventssList