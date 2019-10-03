import React from "react";
import {Menu, Icon} from 'antd'
import {withRouter} from "react-router";

class MenuUser extends React.Component {
    state = {
        current: this.props.current,
    };

    handleClick = e => {
        console.log(e.key)
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu className='MenuPA' onClick={this.handleClick} selectedKeys={[this.state.current]} mode={this.props.mode}>
                <Menu.Item key='plannedEvents' onClick={(e)=>{
                    console.log(e.key)
                    this.props.history.push(`/personal_page/events/:current:${e.key}`)}}>
                    <Icon type="clock-circle"/>
                    Мероприятия
                </Menu.Item>
                <Menu.Item key='settings'onClick={(e)=>{
                    console.log(e.key)
                    this.props.history.push(`/personal_page/settings/:${e.key}`)}}>
                    <Icon type="setting"/>
                    Настройки
                </Menu.Item>
            </Menu>
        )
    }
}

export default withRouter(MenuUser)