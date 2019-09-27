import React from "react";
import {Breadcrumb} from "antd";
import {Link} from 'react-router-dom';

class BreadCrumb extends React.Component {
    routes = [{
        path: '',
        breadcrumbName: 'Главная'
    }, {
        path: '/place',
        breadcrumbName: 'Мероприятия на карте'
    }];

    itemRender(route, params, routes, paths) {
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
    }

    render() {
        return <Breadcrumb itemRender={this.itemRender} routes={this.routes}/>;
    }
}
export default BreadCrumb
