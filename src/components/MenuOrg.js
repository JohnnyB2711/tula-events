import React from "react";
import {Menu, Icon} from 'antd'

class MenuOrg extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <Menu className='MenuPA' onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="1">
                    <Icon type="home"/>
                    Главная
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="file-add"/>
                    Создать
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="appstore"/>
                    Прошедшие
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="clock-circle"/>
                    Запланированные
                </Menu.Item>
                <Menu.Item key="5">
                    <Icon type="setting"/>
                    Настройки
                </Menu.Item>
            </Menu>
        )
    }
}

export default MenuOrg