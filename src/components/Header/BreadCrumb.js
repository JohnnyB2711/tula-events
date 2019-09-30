import React from "react";
import {Breadcrumb} from "antd";
import {withRouter} from 'react-router-dom';

class BreadCrumb extends React.Component {
    render() {
        return(
            <Breadcrumb>
                <Breadcrumb.Item>
                    <a onClick={() => {
                        this.props.history.push(`/`)
                    }}>Главная</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a onClick={() => {
                        this.props.history.push(`/map`)
                    }}>На карте</a>
                </Breadcrumb.Item>
            </Breadcrumb>
            )
    }
}
export default withRouter(BreadCrumb)