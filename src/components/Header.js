import React from "react";
import {withRouter} from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <div className='Header container'>
                <h1>TулаАфиша</h1>
                <div className='col-10 HeaderLink'>
                    <a onClick={() => {
                        this.props.history.push(`/`)
                    }}>Главная</a>
                    <a onClick={() => {
                        this.props.history.push(`/`)
                    }}>Мероприятия на карте</a>
                    <a onClick={() => {
                        this.props.history.push(`/enter`)
                    }}>Вход</a>
                    <a onClick={() => {
                        this.props.history.push(`/registration`)
                    }}>Регистрация</a>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);