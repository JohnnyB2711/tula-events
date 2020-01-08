import React from "react";
import {withRouter} from 'react-router';
import {PageHeader, Row, Input} from 'antd';
import BreadCrumb from './BreadCrumb'
import Log from './Log'
import {Link} from "react-router-dom";

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
    state = {
        isHovered: true,
        authorized: false
    }
    render() {
        const {Search} = Input;
        return (
            <header className="Header container-fluid">
                <PageHeader
                    className='col-12'
                    title={<Link to={`/`}>Тула Афиша</Link>}
                    extra={[
                        <div className='HeaderSearch'>
                            <Search
                                className='SearchInput'
                                placeholder="Поиск мероприятия"
                                size="large"
                                onSearch={value => console.log(value)}
                            />
                            <Log user={this.props.user}/>
                        </div>
                    ]}

                avatar={
                    <Link to={`/`}>
                        {{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
                    </Link>}
                    breadcrumb={{routes}}
                >
                    <Content>
                        <BreadCrumb/>

                    </Content>
                </PageHeader>
            </header>
        )
    }
}

export default withRouter(Header);