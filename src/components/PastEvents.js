import React from "react";
import EventCard from "./EventCard";

class PastEvents extends React.Component {
    state = {
        pastEvents: ['1', '2', '3', '4', '1', '2', '3', '4', '1', '2', '3', '4']
    };

    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    {
                        this.state.pastEvents.map((event) => {
                            return <div key={event} className='col-md-4 EventCardList'>
                                <EventCard/>
                            </div>
                        })
                    }
                </div>

            </div>
        )
    }

}

export default PastEvents