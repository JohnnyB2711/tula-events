import React from "react";
import {Breadcrumb} from "antd";
import {Link, withRouter} from 'react-router-dom';

class BreadCrumb extends React.Component {
    state = {
        current: this.props.current,
    };
    handleClick = e => {
        this.setState({
            current: e.key,
        });
    };
    render() {
        return(
            <Breadcrumb onClick={this.handleClick} selectedKeys={[this.state.current]}>
                <Breadcrumb.Item key='mainPage'>
                    <Link to={`/`}>Главная</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item key='onMap'>
                    <Link to={`/map`}>На карте</Link>
                </Breadcrumb.Item>
            </Breadcrumb>
            )
    }
}
export default withRouter(BreadCrumb)