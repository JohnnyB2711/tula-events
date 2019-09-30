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
            <Menu className='MenuPA' onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key='plannedEvents' onClick={()=>{this.props.history.push('/personal_page/planned_events')}}>
                    <Icon type="clock-circle"/>
                    Запланированные
                </Menu.Item>
                <Menu.Item key='pastEvents' onClick={()=>{this.props.history.push('/personal_page/past_events')}}>
                    <Icon type="appstore"/>
                    Прошедшие
                </Menu.Item>
                <Menu.Item key='settings' onClick={()=>{this.props.history.push('/personal_page/settings')}} >
                    <Icon type="setting"/>
                    Настройки
                </Menu.Item>
            </Menu>
        )
    }
}

export default withRouter(MenuUser)