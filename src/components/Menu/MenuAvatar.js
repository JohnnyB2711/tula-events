import React from 'react';
import {Menu, Avatar, Dropdown, Icon} from 'antd';

const {SubMenu} = Menu;
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                Запланированные
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                Прошедшие
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                Настройка
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                Создать
            </a>
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
export default MenuAvatar