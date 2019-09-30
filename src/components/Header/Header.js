import React from "react";
import {withRouter} from 'react-router';
import {PageHeader, Button, Row, Input, Avatar} from 'antd';
import BreadCrumb from './BreadCrumb'
import MenuAvatar from "../Menu/MenuAvatar";

const routes = <BreadCrumb/>;
const Content = ({children, extraContent}) => {
    return (
        <Row className="content" type="flex">
            <div className="main" style={{flex: 1}}>
                {children}
            </div>
            <div
                className="extra"
                style={{
                    marginLeft: 80,
                }}
            >
                {extraContent}
            </div>
        </Row>
    );
};

class Header extends React.Component {
    state={
        isHovered:true
    }
    showMenu=(e)=>{
        e.preventDefault();
        return(
            <MenuAvatar/>
        )
    }
    render() {
        const {Search} = Input;
        const authorized = true;
        return (
            <header className="Header container-fluid">
                <PageHeader
                    className='col-12'
                    title="Тула Афиша"
                    extra={[
                        authorized == true ? (
                            <div>
                                <MenuAvatar/>
                            </div>
                            ) :
                            (<div className='ButtonHeader'>
                                <Button onClick={() => {
                                    this.props.history.push(`/enter`)
                                }} key="5">Вход</Button>
                                <Button onClick={() => {
                                    this.props.history.push(`/registration`)
                                }} key="6">Регистрация</Button>
                            </div>)
                    ]}
                    avatar={{src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4'}}
                    breadcrumb={{routes}}
                >
                    <Content>
                        <BreadCrumb/>
                        <Search
                            placeholder="Поиск мероприятий"
                            size="large"
                            onSearch={value => console.log(value)}
                        />
                    </Content>
                </PageHeader>
            </header>
        )
    }
}

export default withRouter(Header);