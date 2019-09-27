import React from "react";
import {withRouter} from 'react-router';
import {Input, Button} from 'antd';

class Header extends React.Component {
    render() {
        const {Search} = Input;
        return (
            <header className="Header">
                <div className="Header container">
                    <div className='HeaderLink'>
                        <a onClick={() => {
                            this.props.history.push(`/`)
                        }}>Главная</a>
                        <a onClick={() => {
                            this.props.history.push(`/`)
                        }}>Мероприятия на карте</a>
                    </div>
                    <div className='HeaderTitle'>
                        <h1>TулаАфиша</h1>
                        <Search
                            placeholder="input search text"
                            size="small"
                            onSearch={value => console.log(value)}
                            style={{width: 200 , height:30}}
                        />
                        <div className='HeaderButton'>
                            <Button type="primary" onClick={() => {
                                this.props.history.push(`/enter`)
                            }}>Войти</Button>
                            <Button type="primary" onClick={() => {
                                this.props.history.push(`/registration`)
                            }}>Регистрация</Button>
                        </div>
                    </div>

                </div>
            </header>
        )
    }
}

export default withRouter(Header);