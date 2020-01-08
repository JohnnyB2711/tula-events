import React from 'react';
import {Avatar, Dropdown} from 'antd';
import {withRouter} from "react-router";
import MenuUser from "../Menu/MenuUser";
import MenuOrg from "../Menu/MenuOrg";


class MenuAvatar extends React.Component {
    render() {
        return (
            <Dropdown onClick={ this.props.user === 'org' ? <MenuUser mode='vertical'/> : <MenuOrg mode='vertical'/>}>
                <Avatar size={50} icon="user"/>
            </Dropdown>
        );
    }
}

export default withRouter(MenuAvatar)