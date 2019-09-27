import React from "react";
import {withRouter} from 'react-router';
import {PageHeader, Button, Row, Input} from 'antd';
import BreadCrumb from './BreadCrumb'

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
    render() {
        const {Search} = Input;
        return (
            <header className="Header container-fluid">
                <PageHeader
                    title="Тула Афиша"
                    extra={[
                        <Button onClick={() => {
                            this.props.history.push(`/enter`)
                        }} key="3">Вход</Button>,
                        <Button onClick={() => {
                            this.props.history.push(`/registration`)
                        }} key="2">Регистрация</Button>
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