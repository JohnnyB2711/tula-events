import React from "react";
import {Menu, Icon} from 'antd'
import {withRouter} from "react-router";

class MenuOrg extends React.Component {
    state = {
        current: this.props.current,
    };
    componentDidMount() {
        this.setState({
            current: this.props.current,
        });
    }

    handleClick = e => {
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <Menu className='MenuPA' onClick={this.handleClick} selectedKeys={[this.state.current]} mode={this.props.mode}>

                <Menu.Item key="userEvents" onClick={(e)=>{
                    console.log(e.key)
                    this.props.history.push(`/personal_page/events/:${e.key}`)}}>
                    <Icon type="clock-circle"/>
                    Мероприятия
                </Menu.Item>
                <Menu.Item key="newEvent" onClick={(e)=>{
                    console.log(e.key)
                    this.props.history.push(`/personal_page/create_event/:${e.key}`)}}>
                    <Icon type="file-add"/>
                    Создать
                </Menu.Item>
                <Menu.Item key="settings" onClick={(e)=>{
                    console.log(e.key)
                    this.props.history.push(`/personal_page/settings/:${e.key}`)}}>
                    <Icon type="setting"/>
                    Настройки
                </Menu.Item>
            </Menu>
        )
    }
}

export default withRouter(MenuOrg)