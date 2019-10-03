import React from 'react';
import {Avatar, Dropdown} from 'antd';
import {withRouter} from "react-router";
import MenuOrg from "../Menu/MenuOrg";

const menu = (
    <MenuOrg mode='vertical'/>
);

class MenuAvatar extends React.Component {
    render() {
        return (
            <Dropdown overlay={menu}>
                <Avatar size={50} icon="user"/>
            </Dropdown>
        );
    }
}

export default withRouter(MenuAvatar)