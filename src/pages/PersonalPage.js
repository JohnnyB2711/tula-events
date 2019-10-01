import React from "react";
import MenuUser from "../components/Menu/MenuUser";
import {Avatar} from 'antd'
import MenuOrg from "../components/Menu/MenuOrg";

class PersonalPage extends React.Component {
    state = {};

    SelectMenu(status) {
        return status == 'user' ? <MenuUser current='plannedEvents'/> : <MenuOrg current='plannedEvents'/>
    }

    render() {
        const status = 'user';
        return (
            <div className='container-fluid'>
                <div className='container'>
                    {/*<div className='row PersonalPage'>
                        <Avatar size={100} icon="user"/>
                        <div className='PersonalInfo'>
                            <h2>Иван Иванов</h2>
                            <span
                                className='PersonalText'
                                disable={status != 'user'}>
                                Название организации
                            </span>
                        </div>
                    </div>*/}
                </div>
                {
                    this.SelectMenu(status)
                }
            </div>

        )
    }

}

export default PersonalPage