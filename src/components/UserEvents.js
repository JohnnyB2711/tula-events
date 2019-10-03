import React from "react";
import {Checkbox, Collapse} from "antd";
import TabCard from "./CardEvent/TabCard";
import MenuOrg from "./Menu/MenuOrg";
import MenuUser from "./Menu/MenuUser";

class UserEvents extends React.Component {
    state = {
        plannedEvents: ['1', '2', '3', '4', '1', '2', '3', '4', '1', '2', '3', '4'],
        planned: true
    };
    onChange = (e) => {
        e.preventDefault();
        this.setState({
            planned: !this.state.planned
        })
    };
    render() {
        const {Panel} = Collapse;
        return (
            <div className='container-fluid'>
                <h3>{this.state.planned === true ? 'Запланированные' : 'Прошедшие'}</h3>
                <Collapse>
                    <Panel header="Фильтры">
                        <Checkbox onChange={(e) => {
                            this.onChange(e)
                        }}>Прошедшие</Checkbox>
                    </Panel>
                </Collapse>

                <div className='row'>
                    {
                        this.state.plannedEvents.map((event) => {
                            return <div key={event} className='col-md-4 EventCardList'>
                                <TabCard/>
                            </div>
                        })
                    }
                </div>
            </div>
        )
    }

}

export default UserEvents