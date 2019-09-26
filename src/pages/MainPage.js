import React from "react";
import Scroll from '../components/Scroll'
import SearchEvent from '../components/SearchEvent'

class MainPage extends React.Component {
    render() {
        return (
            <div className='MainPage container-fluid'>
                <Scroll/>
                <SearchEvent/>
            </div>
        )
    }

}

export default MainPage