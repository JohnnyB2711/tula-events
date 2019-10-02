import React from 'react';
import {Menu, Avatar, Dropdown} from 'antd';
import {withRouter} from "react-router";

const menu = (
    <Menu>
        <Menu.Item onClick={() => {
            this.props.history.push('/about_event')
        }}>
            Мероприятия
        </Menu.Item>
        <Menu.Item onClick={() => {
            this.props.history.push('/settings')
        }}>
            Настройка
        </Menu.Item>
        <Menu.Item onClick={() => {
            this.props.history.push('/create_event')
        }}>
            Создать
        </Menu.Item>
    </Menu>
);

class MenuAvatar extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Dropdown overlay={menu}>
                <Avatar size={50} icon="user"/>
            </Dropdown>
        );
    }
}

export default withRouter(MenuAvatar)